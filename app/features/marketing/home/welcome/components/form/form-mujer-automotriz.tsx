// UTILS
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next"; 
import { useState } from "react";

// VALIDATION
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// COMPONENTS
import { Form, useNavigation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";


// 1. Define un esquema base sin traducciones (para inferir el tipo ContactFormValues globalmente)
export const baseContactFormSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(500),
});

// 2. Define ContactFormValues GLOBALMENTE a partir del esquema base
export type ContactFormValues = z.infer<typeof baseContactFormSchema>;

// 3. Definiciones de tipos para la respuesta de la API (ahora ContactFormValues ya existe)
interface SuccessResponse {
  success: true;
  message: string;
}

interface ErrorResponse {
  success: false;
  message?: string;
  errors?: {
    [key in keyof ContactFormValues | 'global']?: string;
  };
}

type ApiResponse = SuccessResponse | ErrorResponse;

// 4. Función auxiliar para obtener el esquema Zod con traducciones
// Ahora usamos el tipo TFunction para 't'
const getTranslatedContactFormSchema = (t: TFunction) => { // <-- CAMBIO AQUÍ: 't' es de tipo TFunction
  return z.object({
    fullName: z.string()
      .min(2, { message: t("The name must be at least 2 characters.") })
      .max(50, { message: t("The name cannot exceed 50 characters.") }),
    email: z.string()
      .email({ message: t("Please enter a valid email.") }),
    subject: z.string()
      .min(5, { message: t("The subject must be at least 5 characters.") })
      .max(100, { message: t("The subject cannot exceed 100 characters.") }),
    message: z.string()
      .min(10, { message: t("The message must be at least 10 characters.") })
      .max(500, { message: t("The message cannot exceed 500 characters.") }),
  });
};


export default function ContactForm() {
  const { t } = useTranslation();

  // Obtenemos el esquema con los mensajes traducidos para useForm
  const contactFormSchemaTranslated = getTranslatedContactFormSchema(t);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formHook = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchemaTranslated),
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
    mode: "onBlur",
  });

  const handleClientSubmit = async (values: ContactFormValues) => {
    setFeedbackMessage("");
    formHook.clearErrors("root.serverError");

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch("/r/send-email", {
      method: "POST",
      body: formData,
    }).catch(fetchError => {
        console.error("Network or fetch error:", fetchError);
        let errorMessageForUser: string;
        if (fetchError instanceof Error) {
            errorMessageForUser = fetchError.message;
        } else if (typeof fetchError === 'string') {
            errorMessageForUser = fetchError;
        } else {
            errorMessageForUser = "An unexpected network error occurred.";
        }
        setFeedbackMessage("There was a problem connecting to the server. Please try again later.");
        formHook.setError("root.serverError", {
            type: "server",
            message: errorMessageForUser,
        });
        return null;
    });

    if (response === null) {
        return;
    }

    const result = await response.json() as ApiResponse;

    if (response.ok) {
      setFeedbackMessage(t("Your message has been sent successfully!"));
      setIsDrawerOpen(true);
      formHook.reset();
    } else {
      const errorResult = result as ErrorResponse;

      const errorMsg = errorResult.message || "There was an error sending your message.";
      setFeedbackMessage(errorMsg);

      if (errorResult.errors) {
        for (const key of Object.keys(errorResult.errors)) {
          const fieldName = key as keyof ContactFormValues | 'global';
          const errorMessage = errorResult.errors[fieldName];

          if (errorMessage) {
            if (fieldName === 'global') {
              formHook.setError("root.serverError", {
                type: "server",
                message: errorMessage,
              });
            } else {
              formHook.setError(fieldName, {
                type: "server",
                message: errorMessage,
              });
            }
          }
        }
      } else {
        formHook.setError("root.serverError", {
          type: "server",
          message: errorMsg,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-6 md:p-8">
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl xl:max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-24 bg-cover bg-center min-h-[200px] md:min-h-[full]"
          style={{ backgroundImage: "url('/images/backgrounds-abstract/background-hands.png')" }}>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-SF-Pro)" }}>
            {t("Let's collaborate")}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontFamily: "var(--font-SF-Pro)" }}>
            {t("Let's talk about your leaders, goals and how we can highlight them")}
          </h2>

          <Form method="post" onSubmit={formHook.handleSubmit(handleClientSubmit)} className="space-y-5 md:space-y-7">
            <div>
              <label htmlFor="fullName" className="sr-only">{t("Full name")}</label>
              <Input
                id="fullName"
                placeholder={t("Full name")}
                {...formHook.register("fullName")}
                className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "var(--font-SF-Pro)" }}
              />
              {formHook.formState.errors.fullName && (
                <p className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1">
                  {formHook.formState.errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">{t("Email")}</label>
              <Input
                id="email"
                placeholder={t("Email")}
                type="email"
                {...formHook.register("email")}
                className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "var(--font-SF-Pro)" }}
              />
              {formHook.formState.errors.email && (
                <p className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1">
                  {formHook.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">{t("Subject")}</label>
              <Input
                id="subject"
                placeholder={t("Subject")}
                {...formHook.register("subject")}
                className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "var(--font-SF-Pro)" }}
              />
              {formHook.formState.errors.subject && (
                <p className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1">
                  {formHook.formState.errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">{t("Message")}</label>
              <Textarea
                id="message"
                placeholder={t("Write your message here...")}
                className="min-h-[120px] md:min-h-[180px] bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: "var(--font-SF-Pro)" }}
                {...formHook.register("message")}
              />
              {formHook.formState.errors.message && (
                <p className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1">
                  {formHook.formState.errors.message.message}
                </p>
              )}
            </div>

            {formHook.formState.errors.root?.serverError && (
              <p className="text-red-600 text-center font-bold">{formHook.formState.errors.root.serverError.message}</p>
            )}

            <Button
              type="submit"
              variant="blackTransparent"
              disabled={isSubmitting}
              className="w-full py-4 md:py-6 text-lg md:text-xl font-bold text-black rounded-full transition-colors duration-200"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"
                    />
                  </svg>
                  {t("Sending...")}
                </span>
              ) : (
                t("Send message")
              )}
            </Button>
          </Form>
        </div>
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="flex flex-col dark:bg-[#08090a] items-center justify-center text-center py-14 px-8">
          <DrawerHeader>
            <DrawerTitle className="text-4xl text-center font-semibold text-black-500 dark:text-white" style={{ fontFamily: "var(--font-SF-Pro)" }}>
              {t("Message Sent Successfully!")}
            </DrawerTitle>
            <DrawerDescription className="text-xl text-center text-gray-500 dark:text-gray-400 mt-2" style={{ fontFamily: "var(--font-SF-Pro)" }}>
              {t("Thank you for reaching out!")}
            </DrawerDescription>
          </DrawerHeader>
           <p className="text-2xl text-gray-600 dark:text-gray-300 mt-6 max-w-lg" style={{ fontFamily: "var(--font-SF-Pro)" }}>
            {feedbackMessage}
          </p>
          <DrawerClose asChild>
            <Button variant="blackTransparent" className="mt-8 text-xl text-black px-6 py-3 dark:hover:bg-gray-800">
              {t("Close")}
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}