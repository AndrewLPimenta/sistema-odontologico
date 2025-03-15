"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmileIcon as Tooth } from "lucide-react"
import { registerUser } from "@/lib/auth"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("clinic")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "clinic" || type === "patient") {
      setActiveTab(type)
    }
  }, [searchParams])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>, userType: string) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (password !== confirmPassword) {
      setError("As senhas não coincidem")
      setIsLoading(false)
      return
    }

    try {
      const success = await registerUser(name, email, password, userType)
      if (success) {
        router.push("/login")
      } else {
        setError("Não foi possível criar a conta. Tente novamente.")
      }
    } catch (error) {
      setError("Ocorreu um erro ao criar a conta. Por favor, tente novamente.")
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
            <h1 className="text-2xl font-bold">Crie sua conta</h1>
            <p className="text-sm text-muted-foreground">Preencha os dados abaixo para se cadastrar</p>
            <div className="flex gap-2 text-sm">
              <Link href="/beneficios-clinicas" className="text-primary hover:underline">
                Benefícios para Clínicas
              </Link>
              <span>•</span>
              <Link href="/clinicas-parceiras" className="text-primary hover:underline">
                Clínicas Parceiras
              </Link>
            </div>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="clinic">Clínica</TabsTrigger>
              <TabsTrigger value="patient">Paciente</TabsTrigger>
            </TabsList>
            <TabsContent value="clinic">
              <form onSubmit={(e) => handleSubmit(e, "clinic")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clinic-name">Nome da Clínica</Label>
                  <Input id="clinic-name" name="name" placeholder="Nome da sua clínica" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinic-email">Email</Label>
                  <Input id="clinic-email" name="email" type="email" placeholder="nome@clinica.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinic-password">Senha</Label>
                  <Input id="clinic-password" name="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinic-confirm-password">Confirmar Senha</Label>
                  <Input id="clinic-confirm-password" name="confirmPassword" type="password" required />
                </div>
                {error && <div className="text-sm text-red-500">{error}</div>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Cadastrando..." : "Cadastrar Clínica"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="patient">
              <form onSubmit={(e) => handleSubmit(e, "patient")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-name">Nome Completo</Label>
                  <Input id="patient-name" name="name" placeholder="Seu nome completo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-email">Email</Label>
                  <Input id="patient-email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-password">Senha</Label>
                  <Input id="patient-password" name="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient-confirm-password">Confirmar Senha</Label>
                  <Input id="patient-confirm-password" name="confirmPassword" type="password" required />
                </div>
                {error && <div className="text-sm text-red-500">{error}</div>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Cadastrando..." : "Cadastrar Paciente"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="underline">
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

