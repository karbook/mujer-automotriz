"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }).max(50, { message: "El nombre no puede exceder los 50 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }).max(100, { message: "El asunto no puede exceder los 100 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    console.log("Datos enviados:", values);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Mensaje procesado.");
    form.reset();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-6 md:p-8">
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl xl:max-w-screen-xl bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">

        {/* Lado Izquierdo - Imagen con superposición */}
        {/* En pantallas pequeñas, puedes ocultar la imagen o reducir su padding si lo deseas. */}
        {/* Aquí la mantengo visible, pero el md:grid-cols-2 hará que se muestre en una columna separada en pantallas grandes. */}
        <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-24 bg-cover bg-center min-h-[200px] md:min-h-full"
             style={{ backgroundImage: "url('/images/backgrounds-abstract/background-hands.png')" }}>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        {/* Lado Derecho - Formulario */}
        {/* Reducimos el padding general del formulario en móvil */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Tamaños de texto responsivos para títulos */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ fontFamily: ('var(--font-SF-Pro)') }}>Colaboremos</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontFamily: ('var(--font-SF-Pro)') }}>Hablemos de tus líderes, objetivos y cómo los podemos resaltar</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-7">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Nombre completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nombre completo"
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 text-lg md:text-xl py-3 md:py-4 // Texto más pequeño en móvil, más grande en md
                                 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl // Placeholder responsivo
                                 focus:ring-2 focus:ring-blue-500"
                                 style={{ fontFamily: ('var(--font-SF-Pro)') }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Correo electrónico"
                      type="email"
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 text-lg md:text-xl py-3 md:py-4 // Texto más pequeño en móvil, más grande en md
                                 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl // Placeholder responsivo
                                 focus:ring-2 focus:ring-blue-500"
                                 style={{ fontFamily: ('var(--font-SF-Pro)') }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Asunto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asunto"
                      {...field}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 text-lg md:text-xl py-3 md:py-4 // Texto más pequeño en móvil, más grande en md
                                 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl // Placeholder responsivo
                                 focus:ring-2 focus:ring-blue-500"
                                 style={{ fontFamily: ('var(--font-SF-Pro)') }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe tu mensaje aquí..."
                      className="min-h-[120px] md:min-h-[180px] bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 // Altura responsiva
                                 text-gray-900 dark:text-white
                                 text-lg md:text-xl py-3 md:py-4 // Texto más pequeño en móvil, más grande en md
                                 placeholder:text-gray-500 dark:placeholder-gray-400 placeholder:text-lg md:placeholder:text-xl // Placeholder responsivo
                                 focus:ring-2 focus:ring-blue-500"
                                 style={{ fontFamily: ('var(--font-SF-Pro)') }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button
                type="submit"
                variant={"blackTransparent"}
                disabled={form.formState.isSubmitting}
                className="w-full py-4 md:py-6 text-lg md:text-xl font-bold text-black rounded-full transition-colors duration-200"
              >
                {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}