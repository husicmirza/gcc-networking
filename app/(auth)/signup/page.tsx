import { Suspense } from "react";
import AuthForm from "@/components/forms/AuthForm";
import { IconLoader } from "@tabler/icons-react";

const Signup = () => {
  return (
    <section className="flex items-center justify-center">
      <Suspense fallback={<IconLoader size={50} className="animate-spin" />}>
        <AuthForm type="signup" />
      </Suspense>
    </section>
  );
};

export default Signup;
