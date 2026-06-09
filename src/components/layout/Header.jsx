"use client";

import Link from "next/link";

export default function Header() {
  const { logout } = useAuth();
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          interview-prep
        </Link>

        <div className="space-x-4">
          <Link href="/login">Login</Link>

          <Link href="/signup">Signup</Link>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
  );
}
