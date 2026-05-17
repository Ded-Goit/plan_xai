import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-primary
          text-lg
          font-bold
          text-white
          shadow-lg
          shadow-primary/30
        "
      >
        PX
      </div>

      <div className="flex flex-col">
        <span className="text-body2 text-foreground">
          PlanXAI
        </span>

        <span className="text-small text-muted-foreground">
          AI Operating System
        </span>
      </div>
    </Link>
  );
}