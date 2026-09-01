"use client";

import { useState } from "react";

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormPayload {
  name?: string;
  email: string;
  subject?: string;
  phone?: string;
  message: string;
}

export function useContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const submit = async (payload: ContactFormPayload): Promise<ContactFormStatus> => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      return "success";
    } catch {
      setStatus("error");
      return "error";
    }
  };

  return { status, submit };
}
