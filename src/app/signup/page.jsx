import SignupForm from "@/components/auth/SignupForm";

export const metadata = {
  title: "Signup | Interview Prep",
  description: "Create your Interview Prep account",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <SignupForm />
    </main>
  );
}
