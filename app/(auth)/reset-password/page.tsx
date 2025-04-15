import { Suspense } from "react";
import AuthForm from "@/components/forms/AuthForm";
import { IconLoader } from "@tabler/icons-react";

const ResetPassword = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <Suspense fallback={<IconLoader size={50} className="animate-spin" />}>
        <AuthForm type="reset-password" />
      </Suspense>
    </section>
  );
};

export default ResetPassword;
