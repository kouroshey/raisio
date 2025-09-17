"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { localStorageTemplate, pathTemplate } from "@/constants";
import { useAuth } from "@/context/auth-context";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { isFieldRequired } from "@/lib/utils";

import type { FormValues } from "../_schema";

import { useGetUserInfo } from "../_api/_hooks";
import { formSchema } from "../_schema";

export const LoginForm = () => {
  const { mutateAsync: getUserInfo, isPending } = useGetUserInfo();
  const { login } = useAuth();
  const { set: setToLocal } = useLocalStorage();
  const router = useRouter();

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
    if (res) {
      setToLocal(localStorageTemplate.userData, JSON.stringify(res));
      toast("ورود موفقیت آمیز");
      login(res);
      router.push(pathTemplate.dashboard);
    }
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
