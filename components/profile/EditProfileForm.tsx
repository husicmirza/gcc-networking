"use client";
import { authFormSchema } from "@/lib/validation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import CustomFormField, { FormFieldType } from "../forms/CustomFormField";
import { Separator } from "../ui/separator";
const EditProfileForm = () => {
  const formSchema = authFormSchema("signup");
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
  return (
    <Form {...form}>
      {/* onSubmit={form.handleSubmit(onSubmit)} */}
      <form className="space-y-8 max-w-[500px]">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight">Edit Profile</h2>
          <p className="text-muted-foreground">
            Here you can update your personal information.
          </p>
          <Separator />
        </section>
        <section className="max-w-[500px]">
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

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            placeholder="john@example.com"
            label="Email"
            iconSrc="/assets/icons/email.svg"
          />
        </section>
      </form>
    </Form>
  );
};

export default EditProfileForm;
