// UTILS
import { useTranslation } from "react-i18next";
import { useState } from "react";

// VALIDATION
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription,DrawerClose } from "@/components/ui/drawer";


export default function ContactForm() {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const contactFormSchema = z.object({
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

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
    mode: "onBlur",

  });

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const onSubmit = async (values: ContactFormValues) => {
    setSubmissionStatus("idle");
    setFeedbackMessage("");
    try {
      const response = await fetch("/r/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        setFeedbackMessage(t("Your message has been sent successfully!"));
        setIsDrawerOpen(true);
        form.reset();
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error submitting form:", error);
      setFeedbackMessage(t("There was a problem connecting to the server. Please try again later."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-6 md:p-8">
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl xl:max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-24 bg-cover bg-center min-h-[200px] md:min-h[full]"
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-7">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("Full name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Full name")}
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: "var(--font-SF-Pro)" }}
                    />
                  </FormControl>
                  <FormMessage className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1" />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("Email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Email")}
                      type="email"
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: "var(--font-SF-Pro)" }}
                    />
                  </FormControl>
                  <FormMessage className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1" />
                </FormItem>
              )} />

              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("Subject")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Subject")}
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: "var(--font-SF-Pro)" }}
                    />
                  </FormControl>
                  <FormMessage className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1" />
                </FormItem>
              )} />

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t("Message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("Write your message here...")}
                      className="min-h-[120px] md:min-h-[180px] bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-lg md:text-xl py-3 md:py-4 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl focus:ring-2 focus:ring-blue-500"
                      style={{ fontFamily: "var(--font-SF-Pro)" }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="border border-red-500 bg-red-50 dark:bg-red-950 p-2 rounded-md text-red-700 dark:text-red-300 text-sm mt-1" />
                </FormItem>
              )} />
              {submissionStatus === "error" && (
                <p className="text-red-600 text-center font-bold">{feedbackMessage}</p>
              )}

              <Button
                type="submit"
                variant="blackTransparent"
                disabled={form.formState.isSubmitting}
                className="w-full py-4 md:py-6 text-lg md:text-xl font-bold text-black rounded-full transition-colors duration-200"
              >
                {form.formState.isSubmitting ? (
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
            </form>
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