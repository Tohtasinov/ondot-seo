"use client";
import { useState } from "react";
import { z } from "zod";


const LeadSchema = z.object({
name: z.string().min(2),
phone: z.string().min(7),
city: z.string().optional(),
service: z.string().optional(),
note: z.string().optional(),
});


type LeadInput = z.infer<typeof LeadSchema>;


export default function LeadForm(props: Partial<LeadInput>) {
const [status, setStatus] = useState<string | null>(null);


async function onSubmit(formData: FormData) {
setStatus(null);
const data: LeadInput = {
name: String(formData.get("name") || ""),
phone: String(formData.get("phone") || ""),
city: String(formData.get("city") || props.city || ""),
service: String(formData.get("service") || props.service || ""),
note: String(formData.get("note") || ""),
};
const parse = LeadSchema.safeParse(data);
if (!parse.success) {
setStatus("Please fill required fields");
return;
}


const res = await fetch("/api/lead", { method: "POST", body: JSON.stringify(data) });
if (res.ok) setStatus("Thanks. We will call you shortly.");
else setStatus("Error. Try again.");
}


return (
<form action={onSubmit} id="lead" className="grid gap-3 p-4 border rounded-xl max-w-xl">
<input name="name" required placeholder="Your name" className="border px-3 py-2 rounded" />
<input name="phone" required placeholder="Phone" className="border px-3 py-2 rounded" />
<input name="city" defaultValue={props.city} placeholder="City" className="border px-3 py-2 rounded" />
<input name="service" defaultValue={props.service} placeholder="Service" className="border px-3 py-2 rounded" />
<textarea name="note" placeholder="Describe issue" className="border px-3 py-2 rounded" />
<button className="rounded bg-black text-white px-4 py-2">Send</button>
{status && <p className="text-sm text-gray-600">{status}</p>}
</form>
);
}