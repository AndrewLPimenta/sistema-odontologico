"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SmileIcon as Tooth } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { href: "/recursos", label: "Recursos" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <Tooth className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold group-hover:text-primary transition-colors">DentalCare</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href && "text-primary font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="outline" className="hover:bg-primary/10 transition-colors">
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button className="hover:bg-primary/90 transition-colors">Cadastrar</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

