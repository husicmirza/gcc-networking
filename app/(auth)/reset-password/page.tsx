import AuthForm from "@/components/forms/AuthForm";

const ResetPassword = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <AuthForm type="reset-password" />
    </section>
  );
};

export default ResetPassword;
