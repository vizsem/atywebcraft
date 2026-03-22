import { cn } from "@/lib/utils";

interface GradTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradText({ children, className }: GradTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400",
        className
      )}
    >
      {children}
    </span>
  );
}
