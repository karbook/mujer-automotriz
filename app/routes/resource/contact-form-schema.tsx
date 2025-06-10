import { z } from "zod";
import { t } from '@/localization/utils'; 

export const ContactFormSchema = z.object({
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

