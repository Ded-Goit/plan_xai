"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";

import { navigationLinks } from "@/constants/navigation";

export function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-background/80
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Logo />

          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                   text-nav
                   text-foreground
                   transition-colors
                   hover:text-primary
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              className="rounded-2xl"
            >
              Login
            </Button>

            <Button
              className="
                rounded-2xl
                bg-primary
                text-white
                shadow-lg
                shadow-primary/30
                hover:bg-primary/90
              "
            >
              Get Started
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </header>
  );
}