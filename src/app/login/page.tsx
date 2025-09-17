import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12 px-6">
      <h1 className="text-xl font-semibold">ورود</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>ورود به داشبورد</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
