import AuthForm from "@/components/forms/AuthForm";

const ForgotPassword = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <AuthForm type="forgot-password" />
    </section>
  );
};

export default ForgotPassword;
