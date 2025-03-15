"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmileIcon as Tooth } from "lucide-react"
import { loginUser } from "@/lib/auth"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>, userType: string) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const success = await loginUser(email, password, userType)
      if (success) {
        router.push(userType === "clinic" ? "/dashboard/clinic" : "/dashboard/patient")
      } else {
        setError("Credenciais inválidas. Por favor, tente novamente.")
      }
    } catch (error) {
      setError("Ocorreu um erro ao fazer login. Por favor, tente novamente.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <Tooth className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">DentalCare</span>
            </Link>
            <h1 className="text-2xl font-bold">Bem-vindo de volta</h1>
            <p className="text-sm text-muted-foreground">Entre com sua conta para acessar o sistema</p>
          </div>
          <Tabs defaultValue="clinic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="clinic">Clínica</TabsTrigger>
              <TabsTrigger value="patient">Paciente</TabsTrigger>
            </TabsList>
            <TabsContent value="clinic">
              <form onSubmit={(e) => handleSubmit(e, "clinic")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clinic-email">Email</Label>
                  <Input id="clinic-email" name="email" type="email" placeholder="nome@clinica.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="clinic-password">Senha</Label>
                    <Link href="/reset-password" className="text-xs underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="clinic-password" name="password" type="password" required />
                </div>
                {error && <div className="text-sm text-red-500">{error}</div>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar como Clínica"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="patient">
              <form onSubmit={(e) => handleSubmit(e, "patient")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-email">Email</Label>
                  <Input id="patient-email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="patient-password">Senha</Label>
                    <Link href="/reset-password" className="text-xs underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="patient-password" name="password" type="password" required />
                </div>
                {error && <div className="text-sm text-red-500">{error}</div>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar como Paciente"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/register" className="underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

