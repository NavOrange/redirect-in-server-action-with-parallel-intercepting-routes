"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
  "use client";
  const { pending } = useFormStatus();

  return <button>{pending ? "pending" : "submit"}</button>;
}
