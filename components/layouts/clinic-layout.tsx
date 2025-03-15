"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  SmileIcon as Tooth,
  Menu,
  X,
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LogOut,
  Bell,
  DollarSign,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

interface ClinicLayoutProps {
  children: React.ReactNode
}

export function ClinicLayout({ children }: ClinicLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard/clinic",
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard/clinic",
    },
    {
      href: "/dashboard/clinic/appointments",
      label: "Consultas",
      icon: Calendar,
      active: pathname.includes("/dashboard/clinic/appointments"),
    },
    {
      href: "/dashboard/clinic/patients",
      label: "Pacientes",
      icon: Users,
      active: pathname.includes("/dashboard/clinic/patients"),
    },
    {
      href: "/dashboard/clinic/financeiro",
      label: "Financeiro",
      icon: DollarSign,
      active: pathname.includes("/dashboard/clinic/financeiro"),
    },
    {
      href: "/dashboard/clinic/settings",
      label: "Configurações",
      icon: Settings,
      active: pathname.includes("/dashboard/clinic/settings"),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <Tooth className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">DentalCare</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
            <span className="sr-only">Notificações</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform md:static md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Tooth className="h-6 w-6" />
              <span className="">Clínica</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-3 md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar menu</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Menu Principal</h2>
              <div className="space-y-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary",
                      route.active ? "bg-muted text-primary" : "text-muted-foreground",
                    )}
                  >
                    <route.icon className="h-4 w-4" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </aside>
        <div
          className={cn(
            "fixed inset-0 z-10 bg-background/80 backdrop-blur-sm md:hidden",
            sidebarOpen ? "block" : "hidden",
          )}
          onClick={() => setSidebarOpen(false)}
        />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

