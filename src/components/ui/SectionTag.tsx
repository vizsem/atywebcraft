import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
    >
      {children}
    </div>
  );
}
