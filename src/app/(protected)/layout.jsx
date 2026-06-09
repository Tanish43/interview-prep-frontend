"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";

export default function ProtectedLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
