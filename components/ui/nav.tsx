"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideMap, LucideMessageCircle, LucideRefreshCcw } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useMemo } from "react";

const Nav = () => {
  const segments = useSelectedLayoutSegments();

  const tabs = useMemo<any[]>(() => {
    return [
      {
        name: "Feedback",
        href: "/feedback",
        isActive: segments[0] === "feedback",
        icon: LucideMessageCircle,
      },
      {
        name: "Roadmap",
        href: "/roadmap",
        isActive: segments[0] === "roadmap",
        icon: LucideMap,
      },
      {
        name: "Changelog",
        href: "/changelog",
        isActive: segments[0] === "changelog",
        icon: LucideRefreshCcw,
      },
    ];
  }, [segments]);

  return (
    <nav className="border-b bg-muted">
      <div className="px-3 pt-3 max-w-4xl mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-2xl">Features</h1>
          <Button variant="secondary">Sign in / Sign up</Button>
        </div>
        <ul className="flex flex-row gap-2 mt-6">
          {tabs.map((link) => (
            <Link
              href={link.href}
              className={cn(
                "text-muted-foreground text-sm font-semibold flex flex-row items-center pt-1 pb-1.5 px-2.5 rounded-t-lg -mb-[1px] border border-transparent border-b-border bg-muted hover:bg-background hover:border-border hover:border-b-transparent transition-colors",
                link.isActive &&
                  "bg-background border-border border-b-transparent"
              )}
            >
              <link.icon className="mr-2 size-4" />
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Nav.displayName = "Nav";

export { Nav };
