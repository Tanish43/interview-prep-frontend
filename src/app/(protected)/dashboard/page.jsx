"use client";

import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome {user?.name}</h1>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3>Tests Attempted</h3>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3>Average Score</h3>
          <p className="text-3xl font-bold">0%</p>
        </div>

        <div className="border rounded-lg p-6">
          <h3>Weak Topics</h3>
          <p>None Yet</p>
        </div>
      </div>
    </div>
  );
}
