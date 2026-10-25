import Image from "next/image";

export function Logo({
  light = false,
  className = "",
  size = "md",
}: {
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const src = light ? "/logo-light.png" : "/logo-dark.png";

  const sizeClasses = {
    sm: "h-12 w-auto",
    md: "h-14 md:h-16 w-auto",
    lg: "h-20 md:h-24 w-auto",
  }[size];

  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center transition-transform hover:scale-[1.03] ${className}`}
      aria-label="Sameday Logistics ana sayfa"
    >
      <Image
        src={src}
        alt="Sameday Logistics"
        width={420}
        height={264}
        priority
        className={`object-contain ${sizeClasses}`}
      />
    </a>
  );
}



