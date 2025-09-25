"use client";
import { useState, useEffect } from "react";

export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Solo true en cliente
  }, []);

  if (!mounted) return null; // No renderiza nada en SSR
  return <>{children}</>;
}
