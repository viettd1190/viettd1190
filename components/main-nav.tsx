"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/awards", label: "Awards" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full pl-2">
      <div className="flex gap-6 md:gap-10">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80 font-medium",
              pathname === item.href
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
}