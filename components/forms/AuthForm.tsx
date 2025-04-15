"use client";
import {
  authFormSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  registerSchema,
} from "@/lib/validation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Button } from "../ui/button";
import Link from "next/link";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { useForm, Control } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import {
  forgotPassword,
  logIn,
  signUp,
  resetPassword,
} from "@/lib/actions/user.actions";
import { useToast } from "@/hooks/use-toast";
import { IconArrowNarrowLeft, IconLoader, IconMail } from "@tabler/icons-react";

type AuthFormType = "login" | "signup" | "forgot-password" | "reset-password";

interface AuthFormProps {
  type: AuthFormType;
}

type FormData = z.infer<ReturnType<typeof authFormSchema>>;

const FORM_TITLES: Record<AuthFormType, string> = {
  login: "Login",
  signup: "Sign up",
  "forgot-password": "Reset Password",
  "reset-password": "Set New Password",
};

const FORM_DESCRIPTIONS: Record<AuthFormType, string> = {
  login: "Enter your email below to login to your account",
  signup: "Enter your information to create an account",
  "forgot-password": "Enter your email to reset your password",
  "reset-password": "Enter your new password below",
};

const BackButton = ({ type }: { type: AuthFormType }): JSX.Element => (
  <Link
    href={
      type === "forgot-password" || type === "reset-password" ? "/login" : "/"
    }
    className="flex items-center gap-2 w-fit pr-2 py-1"
  >
    <IconArrowNarrowLeft />
    Back
  </Link>
);

const FormHeader = ({ type }: { type: AuthFormType }): JSX.Element => (
  <div className="grid gap-2 text-center">
    <h1 className="text-3xl font-bold">{FORM_TITLES[type]}</h1>
    <p className="text-balance text-muted-foreground">
      {FORM_DESCRIPTIONS[type]}
    </p>
  </div>
);

const SignUpFields = ({
  control,
}: {
  control: Control<FormData>;
}): JSX.Element => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <CustomFormField
        control={control}
        fieldType={FormFieldType.INPUT}
        name="firstName"
        placeholder="John"
        label="First Name"
      />
      <CustomFormField
        control={control}
        fieldType={FormFieldType.INPUT}
        name="lastName"
        placeholder="Doe"
        label="Last Name"
      />
    </div>
    <CustomFormField
      control={control}
      fieldType={FormFieldType.DATE_PICKER}
      name="dateOfBirth"
      label="Date of Birth"
    />
    <CustomFormField
      control={control}
      fieldType={FormFieldType.INPUT}
      name="address1"
      label="Address"
    />
    <div className="grid grid-cols-2 gap-4">
      <CustomFormField
        control={control}
        fieldType={FormFieldType.INPUT}
        name="city"
        label="City"
      />
      <CustomFormField
        control={control}
        fieldType={FormFieldType.INPUT}
        name="zipCode"
        label="Zip Code"
      />
    </div>
    <CustomFormField
      control={control}
      fieldType={FormFieldType.INPUT}
      name="country"
      label="Country"
    />
    <CustomFormField
      control={control}
      fieldType={FormFieldType.PHONE_INPUT}
      name="phone"
      label="Phone"
    />
  </>
);

const PasswordFields = ({
  control,
  type,
}: {
  control: Control<FormData>;
  type: AuthFormType;
}): JSX.Element => (
  <>
    <CustomFormField
      control={control}
      fieldType={FormFieldType.INPUT}
      name="password"
      label={type === "reset-password" ? "New Password" : "Password"}
      type="password"
    />
    {type === "reset-password" && (
      <CustomFormField
        control={control}
        fieldType={FormFieldType.INPUT}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />
    )}
  </>
);

const FormFooter = ({ type }: { type: AuthFormType }): JSX.Element | null => {
  if (type === "forgot-password" || type === "reset-password") return null;

  return (
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
  );
};

const AuthForm = ({ type }: AuthFormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const url = window.location.origin + "/reset-password";
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");

  const formSchema = authFormSchema(type);
  const defaultValues =
    type === "signup"
      ? {
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          address1: "",
          city: "",
          country: "",
          zipCode: "",
          dateOfBirth: "",
          phone: "",
        }
      : type === "reset-password"
      ? {
          password: "",
          confirmPassword: "",
        }
      : {
          email: "",
          password: "",
        };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleAuthAction = async (data: FormData) => {
    setIsLoading(true);
    try {
      let user;

      switch (type) {
        case "signup": {
          const signupData = data as z.infer<typeof registerSchema>;
          user = await signUp({
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            address1: signupData.address1,
            city: signupData.city,
            country: signupData.country,
            zipCode: signupData.zipCode,
            dateOfBirth: signupData.dateOfBirth,
            phone: signupData.phone,
            email: signupData.email,
            password: signupData.password,
            status: "created",
          });
          break;
        }

        case "login": {
          const loginData = data as z.infer<typeof loginSchema>;
          user = await logIn({
            email: loginData.email,
            password: loginData.password,
          });
          break;
        }

        case "forgot-password": {
          const forgotData = data as z.infer<typeof forgotPasswordSchema>;
          const forgotResult = await forgotPassword({
            email: forgotData.email,
            url,
          });
          if (forgotResult) {
            toast({
              variant: "success",
              title: "Reset link sent!",
              description: "We've sent a password reset link to your email.",
            });
          } else {
            throw new Error("Failed to send reset link");
          }
          return;
        }

        case "reset-password": {
          if (!secret || !userId) throw new Error("Missing reset parameters");
          const resetData = data as z.infer<typeof resetPasswordSchema>;
          const resetResult = await resetPassword({
            secret,
            userId,
            password: resetData.password,
          });
          if (resetResult) {
            toast({
              variant: "success",
              title: "Password updated!",
              description: "Your password has been successfully updated.",
            });
            router.push("/login");
          } else {
            throw new Error("Failed to reset password");
          }
          return;
        }
      }

      if (user) {
        router.push("/");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Please try again.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleAuthAction)}>
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <BackButton type={type} />
            <FormHeader type={type} />

            <div className="grid gap-2">
              {type === "signup" && <SignUpFields control={form.control} />}

              {type !== "reset-password" && (
                <CustomFormField
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  name="email"
                  placeholder="john@example.com"
                  label="Email"
                  iconSrc={<IconMail />}
                />
              )}

              {type !== "forgot-password" && (
                <PasswordFields control={form.control} type={type} />
              )}

              {type === "login" && (
                <Link
                  href="/forgot-password"
                  className="inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              )}

              <Button
                type="submit"
                className="w-full mt-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <IconLoader size={20} className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  FORM_TITLES[type]
                )}
              </Button>
            </div>

            <FormFooter type={type} />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
