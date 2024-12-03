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
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconLoader,
  IconMail,
} from "@tabler/icons-react";
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
          <h2 className="text-2xl font-bold tracking-tight">
            Settings - Edit Profile
          </h2>
          <Separator />
        </section>
        <section className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h3 className="text-lg font-bold tracking-tight">Profile</h3>
            <p className="text-muted-foreground">
              Manage your personal information.
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
            iconSrc={<IconMail />}
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="occupation"
            label="Occupation"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="company"
            label="Company"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="industry"
            label="Industry"
          />
          <div className="grid grid-cols-2 gap-4">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="City of Origin"
              name="cityOfOrigin"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              label="Country of Origin"
              name="countryOfOrigin"
            />
          </div>
          <div className="my-8">
            <h3 className="text-lg font-bold tracking-tight">Social Media</h3>
            <p className="text-muted-foreground">
              Add your social media profiles
            </p>
            <Separator className="mb-8" />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="linkedin"
              label="Linkedin"
              iconSrc={<IconBrandLinkedin />}
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="instagram"
              label="Instagram"
              iconSrc={<IconBrandInstagram />}
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="facebook"
              label="Facebook"
              iconSrc={<IconBrandFacebook />}
            />
          </div>
          <div className="my-8">
            <h3 className="text-lg font-bold tracking-tight">Profil Image</h3>
            <p className="text-muted-foreground">Upload your profile picture</p>
            <Separator />
          </div>

          <div className="my-8">
            <h3 className="text-lg font-bold tracking-tight">About Me</h3>
            <p className="text-muted-foreground">Add your biography</p>
            <Separator />
          </div>
          <Button type="submit" className="w-full mt-8" disabled={isLoading}>
            {isLoading ? (
              <>
                <IconLoader size={20} className="animate-spin" />
                Loading...
              </>
            ) : (
              "Submit for approval"
            )}
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default EditProfileForm;
