"use client";
import { authFormSchema } from "@/lib/validation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Button } from "../ui/button";
import Link from "next/link";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { logIn, signUp } from "@/lib/actions/user.actions";
import { useToast } from "@/hooks/use-toast";
import { IconLoader } from "@tabler/icons-react";
const AuthForm = ({ type }: { type: string }) => {
  const typeLable = type === "login" ? "Login" : "Sign up";
  const formSchema = authFormSchema(type);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // TODO: format date
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    let user;
    try {
      if (type === "signup") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          country: data.country!,
          zipCode: data.zipCode!,
          dateOfBirth: data.dateOfBirth!,
          phone: data.phone!,
          email: data.email,
          password: data.password,
        };

        user = await signUp(userData);
      }

      if (type === "login") {
        user = await logIn({
          email: data.email,
          password: data.password,
        });
      }

      if (user) {
        router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: "Please try again.",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">{typeLable}</h1>
              <p className="text-balance text-muted-foreground">
                {type === "login"
                  ? "Enter your email below to login to your account"
                  : "Enter your information to create an account"}
              </p>
            </div>

            <div className="grid gap-2">
              {type === "signup" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="firstName"
                      placeholder="John"
                      label="First Name"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="lastName"
                      placeholder="Doe"
                      label="Last Name"
                    />
                  </div>
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.DATE_PICKER}
                    name="dateOfBirth"
                    label="Date of Birth"
                  />
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="address1"
                    label="Address"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="city"
                      label="City"
                    />
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="zipCode"
                      label="Zip Code"
                    />
                  </div>
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="country"
                    label="Country"
                  />
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.PHONE_INPUT}
                    name="phone"
                    label="Phone"
                  />
                </>
              )}
              <CustomFormField
                control={form.control}
                fieldType={FormFieldType.INPUT}
                name="email"
                placeholder="john@example.com"
                label="Email"
                iconSrc="/assets/icons/email.svg"
              />

              <CustomFormField
                control={form.control}
                fieldType={FormFieldType.INPUT}
                name="password"
                label="Password"
                type="password"
              />
              <Link
                href="/forgot-password"
                className="inline-block text-sm underline"
              >
                Forgot your password?
              </Link>

              <Button
                type="submit"
                className="w-full mt-2"
                disabled={isLoading}
              >
                {" "}
                {isLoading ? (
                  <>
                    <IconLoader size={20} className="animate-spin" />
                    Loading...
                  </>
                ) : type === "login" ? (
                  "Login"
                ) : (
                  "Create an account"
                )}
              </Button>
            </div>
            <div className="mt-2 text-center text-sm">
              {type === "login"
                ? "Don't have an account? "
                : "Already have an account? "}

              <Link
                href={type === "login" ? "/signup" : "/login"}
                className="underline"
              >
                {type === "login" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
