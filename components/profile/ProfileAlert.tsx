import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { IconAlertCircle } from "@tabler/icons-react";
const ProfileAlert = ({
  status,
  cancellationReason,
}: {
  status: Status;
  cancellationReason: string;
}) => {
  return (
    <>
      {status === "created" ? (
        <Alert variant="warning">
          <IconAlertCircle className="h-4 w-4" />
          <AlertTitle>Profile Created</AlertTitle>
          <AlertDescription>
            Your profile has been successfully created! To complete your
            profile, please update all required fields in the Edit Profile
            section.
          </AlertDescription>
        </Alert>
      ) : status === "pending" ? (
        <Alert variant="warning">
          <IconAlertCircle className="h-4 w-4" />
          <AlertTitle>Pending Approval</AlertTitle>
          <AlertDescription>
            Profile update complete! Your information is currently under review.
            Once approved, your profile will be fully active.
          </AlertDescription>
        </Alert>
      ) : status === "cancelled" ? (
        <Alert variant="destructive">
          <IconAlertCircle className="h-4 w-4" />
          <AlertTitle>Incomplete Profile</AlertTitle>
          <AlertDescription>
            Profile update was rejected. Reason: {cancellationReason}.<br />
            Please review your information in the Edit Profile section and
            resubmit for approval.
          </AlertDescription>
        </Alert>
      ) : null}
    </>
  );
};

export default ProfileAlert;
