"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import { Card, CardBody, CardHeader } from "./ui/Card";

export default function LeadForm(props: { city?: string; service?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      city: String(formData.get("city") || props.city || ""),
      service: String(formData.get("service") || props.service || ""),
      note: String(formData.get("note") || ""),
    };
    if (!payload.name || !payload.phone) { setStatus("err"); return; }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <Card className="max-w-xl ">
      <CardHeader><h3 className="text-lg font-semibold">Request service</h3></CardHeader>
      <CardBody>
        <form action={onSubmit} className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="name" required placeholder="Your name" />
            <Input name="phone" required placeholder="Phone" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="city" defaultValue={props.city} placeholder="City" />
            <Input name="service" defaultValue={props.service} placeholder="Service" />
          </div>
          <Textarea name="note" placeholder="Describe issue" />

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send"}
            </Button>
            {status === "ok"  ? <span className="text-sm text-green-600">Thanks. We will call you shortly.</span> : null}
            {status === "err" ? <span className="text-sm text-red-600">Error. Fill required fields or try again.</span> : null}
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
