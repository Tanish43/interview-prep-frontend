"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth.service";

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await loginUser(form);

    setLoading(false);

    if (!response?.error) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: response.token,
        }),
      );

      router.push("/dashboard");
      return;
    }
    //TODO: use toast message
    alert(response?.errorResp?.message || "Login Failed");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-slate-900 text-white items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">Interview Prep</h1>
          <p className="mt-4 text-slate-300">
            Practice smarter. Get hired faster.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <h2 className="text-3xl font-bold">Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 text-white p-3 rounded"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-violet-600">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
