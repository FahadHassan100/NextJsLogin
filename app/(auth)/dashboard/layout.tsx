"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { LayoutDashboard, Info, Coins, LogOut, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { handleSignOut } from "./components/signout";
import { currentUser } from "@/lib/auth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "About", href: "/dashboard/about", icon: Info },
  { name: "Tokens", href: "/dashboard/tokens", icon: Coins },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [userName, setUserName] = useState(null); // Replace with actual user data/auth

  useEffect(() => {
    const fetchUser = async () => {
      const userData: any = await currentUser();
      setUserName(userData.Client_Name);
    };
    fetchUser();

    setTimeout(() => {
      //TEMP COMMENT
      redirect(`/testt/dashboard`);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-background ">
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed left-4 top-3 z-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle>Welcome, {userName}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow border-r bg-card px-6 pb-4">
          <div className="flex h-16 items-center border-b">
            <h2 className="text-lg font-semibold">Welcome, {userName}</h2>
          </div>
          <div className="flex flex-1 flex-col gap-1 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-6">
          <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
          <div className="ml-auto">
            <form action={handleSignOut}>
              <Button variant="ghost" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
