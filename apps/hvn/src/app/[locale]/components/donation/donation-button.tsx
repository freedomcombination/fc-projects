"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

const DonateButton = ({ amount, email, type }: { amount: number; email: string; type: "monthly" | "one-time" }) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  useEffect(() => {
    
    if (status === "success") {
      toast.success("Payment Successful",{  description: "Thank you for your donation!" });
    } else if (status === "cancel") {
      toast.error( "Payment Canceled",{ description: "Your donation was not completed." });
    }
  }, [status]);

  const handleDonate = async () => {
    const successUrl = `${window.location.origin}${path}?status=success`;
    const cancelUrl = `${window.location.origin}${path}?status=cancel`;

    const response = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, email, type, successUrl, cancelUrl })
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <Button onClick={handleDonate}>
      {type === "monthly" ? "Donate Monthly" : "Donate One-Time"}
    </Button>
  );
};

export default DonateButton;
