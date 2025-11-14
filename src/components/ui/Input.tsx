import React from "react";
export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-10 w-full rounded-[var(--radius)] border border-black/10 px-3 text-sm outline-none focus:ring-2 focus:ring-black/10 ${props.className || ""}`}
    />
  );
}
