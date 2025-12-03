"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-gradient-to-r from-cyan-500 to-purple-600 text-white": variant === "default",
          "border-transparent bg-white/10 text-white": variant === "secondary",
          "border-transparent bg-red-500 text-white": variant === "destructive",
          "text-white border-white/20": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
