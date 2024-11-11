"use client";
import { EditProfileDataFormType, editProfileSchema } from "@/lib/validation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import CustomFormField, { FormFieldType } from "../forms/CustomFormField";
import { Separator } from "../ui/separator";
import { updateUserInfo } from "@/lib/actions/user.actions";
import { Button } from "../ui/button";
import { IconLoader } from "@tabler/icons-react";
import { User } from "@/types/appwrite.types";
const EditProfileForm = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  const { toast } = useToast();
  const form = useForm<EditProfileDataFormType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      ...user,
      status: "pending",
    },
  });

  const onSubmit = async (data: EditProfileDataFormType) => {
    setIsLoading(true);
    try {
      const updatedUser = await updateUserInfo({
        userId: user.$id,
        userData: data,
      });

      if (updatedUser) {
        toast({
          variant: "success",
          title: "Updated!",
          description: "Successfully updated your profile.",
        });
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
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <section className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your personal information.
          </p>
          <Separator />
        </section>
        <section className="max-w-xl">
          <div className="mb-8">
            <h3 className="text-lg font-bold tracking-tight">Profile</h3>
            <p className="text-muted-foreground">
              This is how others will see you on the site.
            </p>
            <Separator />
          </div>
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
          <Button type="submit" className="w-full mt-8" disabled={isLoading}>
            {isLoading ? (
              <>
                <IconLoader size={20} className="animate-spin" />
                Loading...
              </>
            ) : (
              "Update Profile"
            )}
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default EditProfileForm;
