/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { User } from "@/types/appwrite.types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileApprovalActionFormSchema } from "@/lib/validation";
import { z } from "zod";
import CustomFormField, { FormFieldType } from "../forms/CustomFormField";
import { Button } from "../ui/button";
import { IconLoader } from "@tabler/icons-react";
import { updateUserInfo } from "@/lib/actions/user.actions";
import { toast } from "@/hooks/use-toast";
import { createPublicUser } from "@/lib/actions/publicUsers.actions";

const ProfileApprovalActionForm = ({
  user,
  type,
  setOpen,
}: {
  user: User;
  type: "approve" | "cancel";
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const ProfileApprovalActionFormType = profileApprovalActionFormSchema(type);
  const form = useForm<z.infer<typeof ProfileApprovalActionFormType>>({
    resolver: zodResolver(ProfileApprovalActionFormType),
    defaultValues: {
      cancellationReason: "",
    },
  });
  const onSubmit = async (
    data: z.infer<typeof ProfileApprovalActionFormType>
  ) => {
    setIsLoading(true);
    try {
      const userData = {
        cancellationReason: data.cancellationReason,
        status: type === "approve" ? "approved" : "cancelled",
      };
      const updatedUser = await updateUserInfo({
        userId: user.$id,
        userData: userData,
      });
      console.log(updatedUser);
      if (updatedUser) {
        const createdPublicUser = await createPublicUser({
          userData: updatedUser,
        });
        if (createdPublicUser)
          toast({
            variant: "success",
            title: "Updated!",
            description: "Successfully updated profile.",
          });
        setOpen && setOpen(false);
        form.reset();
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
        {type === "cancel" && (
          <section>
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
              name="cancellationReason"
              label="Cancellation Reason"
            />
          </section>
        )}
        <div className="flex justify-end gap-x-4">
          <Button
            type="reset"
            className="capitalize w-40 "
            disabled={isLoading}
            variant="secondary"
            onClick={() => setOpen && setOpen(false)}
          >
            No
          </Button>
          <Button
            type="submit"
            className="capitalize w-40 "
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <IconLoader size={20} className="animate-spin" />
                Loading...
              </>
            ) : (
              "Yes"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileApprovalActionForm;
