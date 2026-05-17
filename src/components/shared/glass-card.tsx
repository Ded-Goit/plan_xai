import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
          glass
          rounded-3xl
          border
          border-white/10
          p-6
          shadow-2xl
        `,
        className
      )}
    >
      {children}
    </div>
  );
}