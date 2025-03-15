"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const clinicData = {
    name: "Clínica Odontológica Sorriso Perfeito",
    email: "contato@sorrisoperfeito.com.br",
    phone: "(11) 3456-7890",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Clínica odontológica especializada em tratamentos estéticos e preventivos, oferecendo serviços de qualidade com profissionais altamente qualificados.",
    openingHours: {
      monday: { start: "08:00", end: "18:00", closed: false },
      tuesday: { start: "08:00", end: "18:00", closed: false },
      wednesday: { start: "08:00", end: "18:00", closed: false },
      thursday: { start: "08:00", end: "18:00", closed: false },
      friday: { start: "08:00", end: "18:00", closed: false },
      saturday: { start: "08:00", end: "12:00", closed: false },
      sunday: { start: "00:00", end: "00:00", closed: true },
    },
  }

  const dentists = [
    { id: "1", name: "Dr. Roberto Almeida", specialty: "Clínico Geral", email: "roberto@sorrisoperfeito.com.br" },
    { id: "2", name: "Dra. Carla Mendes", specialty: "Ortodontia", email: "carla@sorrisoperfeito.com.br" },
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulação de envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
  }

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Perfil da Clínica</TabsTrigger>
            <TabsTrigger value="team">Equipe</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="schedule">Agenda</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Clínica</CardTitle>
                  <CardDescription>Atualize as informações da sua clínica</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={clinicData.logo} alt="Logo da clínica" />
                        <AvatarFallback>SP</AvatarFallback>
                      </Avatar>
                      <Button type="button" variant="outline" size="sm">
                        Alterar Logo
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome da Clínica</Label>
                        <Input id="name" defaultValue={clinicData.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" defaultValue={clinicData.description} className="min-h-[100px]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={clinicData.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue={clinicData.phone} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" defaultValue={clinicData.address} />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Salvando..." : "Salvar Alterações"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Equipe</CardTitle>
                <CardDescription>Gerencie os profissionais da sua clínica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button>Adicionar Profissional</Button>

                <div className="space-y-4">
                  {dentists.map((dentist) => (
                    <div
                      key={dentist.id}
                      className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {dentist.name
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{dentist.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {dentist.specialty} • {dentist.email}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2 sm:mt-0">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Remover
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>Configure como você deseja receber notificações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Lembretes de Consulta</p>
                    <p className="text-sm text-muted-foreground">Enviar lembretes automáticos para pacientes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Confirmações</p>
                    <p className="text-sm text-muted-foreground">Solicitar confirmação de consultas</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Aniversários</p>
                    <p className="text-sm text-muted-foreground">Enviar mensagens de aniversário para pacientes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Retornos</p>
                    <p className="text-sm text-muted-foreground">Lembrar pacientes sobre consultas de retorno</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button>Salvar Preferências</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Horário de Funcionamento</CardTitle>
                <CardDescription>Configure os horários de atendimento da clínica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {Object.entries(clinicData.openingHours).map(([day, hours]) => {
                    const dayNames: Record<string, string> = {
                      monday: "Segunda-feira",
                      tuesday: "Terça-feira",
                      wednesday: "Quarta-feira",
                      thursday: "Quinta-feira",
                      friday: "Sexta-feira",
                      saturday: "Sábado",
                      sunday: "Domingo",
                    }

                    return (
                      <div key={day} className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="w-32 font-medium">{dayNames[day]}</div>
                        <div className="flex flex-1 items-center gap-2">
                          <Switch checked={!hours.closed} id={`${day}-switch`} />
                          <Label htmlFor={`${day}-switch`}>{hours.closed ? "Fechado" : "Aberto"}</Label>
                        </div>
                        {!hours.closed && (
                          <div className="flex items-center gap-2">
                            <Input type="time" defaultValue={hours.start} className="w-32" />
                            <span>até</span>
                            <Input type="time" defaultValue={hours.end} className="w-32" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button>Salvar Horários</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClinicLayout>
  )
}

