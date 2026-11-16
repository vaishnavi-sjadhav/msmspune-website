import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showDivider?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  className = "",
  showDivider = false,
}) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {variant === "light" ? (
        <div className="relative h-11 w-48 sm:w-56 flex items-center">
          <Image
            src="/images/matrix-logo.png"
            alt="Matrix School of Management Studies"
            width={240}
            height={58}
            priority
            className="object-contain object-left h-full w-auto"
          />
        </div>
      ) : (
        <div className="relative h-11 w-48 sm:w-56 flex items-center">
          <Image
            src="/images/matrix-logo-white.png"
            alt="Matrix School of Management Studies"
            width={240}
            height={58}
            className="object-contain object-left h-full w-auto"
          />
        </div>
      )}

      {showDivider && (
        <div className="hidden lg:block h-9 w-[1px] bg-gray-300 ml-2" />
      )}
    </Link>
  );
};
