interface GradientBlurProps {
  className?: string;
}

export function GradientBlur({
  className,
}: GradientBlurProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        blur-[120px]
        opacity-40
        ${className}
      `}
    />
  );
}