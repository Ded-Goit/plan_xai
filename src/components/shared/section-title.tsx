import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-h2 text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            text-body3
            text-muted-foreground
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}