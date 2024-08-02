import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <div>
        <LoginForm />
      </div>
    </Suspense>
  );
}

export default LoginPage