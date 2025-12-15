import React from "react";
import { cn } from "../../utils/cn";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "green";
}

export default function NeonCard({ children, className, glowColor = "cyan" }: NeonCardProps) {
  const glowClass = {
    cyan: "hover:shadow-neon-cyan hover:border-neon-cyan/50",
    purple: "hover:shadow-neon-purple hover:border-neon-purple/50",
    green: "hover:shadow-neon-green hover:border-neon-green/50",
  }[glowColor];

  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6 border border-zinc-800 transition-all duration-300 ease-in-out",
        glowClass,
        className
      )}
    >
      {children}
    </div>
  );
}
