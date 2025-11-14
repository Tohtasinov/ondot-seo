import React from "react";
export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[96px] w-full rounded-[var(--radius)] border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 ${props.className || ""}`}
    />
  );
}
