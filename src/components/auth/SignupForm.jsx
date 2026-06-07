"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth.service";

export default function Signup() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
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

    const response = await registerUser(form);

    setLoading(false);

    if (!response?.error) {
      router.push("/login");
      return;
    }

    alert(response?.errorResp?.message || "Registration Failed");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-violet-700 text-white items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">Interview Prep</h1>

          <p className="mt-4">Create your account and start practicing.</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <h2 className="text-3xl font-bold">Signup</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            value={form.name}
            onChange={handleChange}
          />

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
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-violet-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
