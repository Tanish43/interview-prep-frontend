import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login | Interview Prep",
  description: "Login to your Interview Prep account",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <LoginForm />
    </main>
  );
}
