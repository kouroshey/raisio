"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { localStorageTemplate } from "@/constants";
import { useLocalStorage } from "@/lib/localstorage";
import { isFieldRequired } from "@/lib/utils";

import { useGetUserInfo } from "../_api/_hooks";

const iranMobileRe = /^(?:(?:\+98|0098)9\d{9}|09\d{9})$/;

const formSchema = z.object({
  phone: z.string().regex(iranMobileRe, {
    message: "شماره تلفن باید یکی از فرمت‌های 09xxxxxxxxx، +989xxxxxxxxx یا 00989xxxxxxxxx باشد.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { mutateAsync: getUserInfo, isPending } = useGetUserInfo();
  const { set: setToLocal } = useLocalStorage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmit = async (values: FormValues) => {
    const res = await getUserInfo();
    // if (res.) {
    //   setToLocal(localStorageTemplate.userData, res)
    // }
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                شماره موبایل
                {isFieldRequired(formSchema, field.name) && <span className="ml-1 text-red-500">*</span>}
              </FormLabel>

              <FormControl>
                <Input dir="ltr" placeholder="0992 *** ****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormDescription>لطفا تمامی فرم‌های ستاره دار را تکمیل کنید</FormDescription>
        <Button className="flex items-center gap-2" disabled={!isValid || isPending} type="submit">
          {isPending && <Spinner />}
          <span>تایید</span>
        </Button>
      </form>
    </Form>
  );
};
