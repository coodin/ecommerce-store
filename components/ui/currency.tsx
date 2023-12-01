"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type CurrencyProps = {
  value?: string | number;
  className?: string;
};

const Currency: React.FC<CurrencyProps> = ({ value, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <p className={cn("font-semibold", className)}>
      {formatter.format(Number(value))}
    </p>
  );
};

export default Currency;
