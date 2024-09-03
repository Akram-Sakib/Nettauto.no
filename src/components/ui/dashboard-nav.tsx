"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "./icons";
import { NavItem } from "@/types";
import { Button } from "./button";
import { logout } from "@/lib/logout";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];

        if (item.label === "logout") {
          return (
            <Button
              key={index}
              onClick={logout}
              className="rounded-md px-3 py-2 text-sm font-medium bg-primaryred w-[155px] hover:bg-primaryred/80 ml-4"
            >
              {item.title}
            </Button>
          );
        } else {
          return (
            item.href && (
              <Link
                key={index}
                href={item.disabled ? "/" : item.href}
                onClick={() => {
                  if (setOpen) setOpen(false);
                }}
              >
                <span
                  className={cn(
                    "group flex items-center px-3 py-3 text-sm font-medium hover:bg-[#141458] border-l-4 border-transparent hover:border-primaryred",
                    path === item.href
                      ? "bg-[#141458] border-primaryred"
                      : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {/* <Icon className="mr-2 h-4 w-4" /> */}
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        }
      })}
    </nav>
  );
}
