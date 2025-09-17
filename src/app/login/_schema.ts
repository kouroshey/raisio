import z from "zod";

export const iranMobileRe = /^(?:(?:\+98|0098)9\d{9}|09\d{9})$/;

export const formSchema = z.object({
  phone: z.string().regex(iranMobileRe, {
    message: "شماره تلفن باید یکی از فرمت‌های 09xxxxxxxxx، +989xxxxxxxxx یا 00989xxxxxxxxx باشد.",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
