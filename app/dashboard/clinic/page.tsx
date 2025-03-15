"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, UserPlus, CalendarPlus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function ClinicDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const upcomingAppointments = [
    { id: 1, patient: "Maria Silva", time: "09:00", date: "2023-06-15", status: "confirmado", type: "Limpeza" },
    { id: 2, patient: "João Santos", time: "10:30", date: "2023-06-15", status: "pendente", type: "Consulta" },
    {
      id: 3,
      patient: "Ana Oliveira",
      time: "14:00",
      date: "2023-06-15",
      status: "confirmado",
      type: "Tratamento de Canal",
    },
    { id: 4, patient: "Carlos Pereira", time: "16:30", date: "2023-06-15", status: "cancelado", type: "Extração" },
  ]

  const recentPatients = [
    { id: 1, name: "Maria Silva", lastVisit: "10/06/2023", nextVisit: "15/06/2023" },
    { id: 2, name: "João Santos", lastVisit: "05/06/2023", nextVisit: "15/06/2023" },
    { id: 3, name: "Ana Oliveira", lastVisit: "01/06/2023", nextVisit: "15/06/2023" },
    { id: 4, name: "Carlos Pereira", lastVisit: "28/05/2023", nextVisit: "15/06/2023" },
    { id: 5, name: "Fernanda Lima", lastVisit: "25/05/2023", nextVisit: "20/06/2023" },
  ]

  const filteredPatients = recentPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/clinic/appointments/new">
              <Button>
                <CalendarPlus className="mr-2 h-4 w-4" />
                Nova Consulta
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+4 novos esta semana</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">4 pela manhã, 8 à tarde</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próxima Consulta</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">09:00</div>
              <p className="text-xs text-muted-foreground">Maria Silva - Limpeza</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Novos Pacientes</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+5 em relação ao mês passado</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="appointments">Consultas de Hoje</TabsTrigger>
            <TabsTrigger value="patients">Pacientes Recentes</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Consultas Agendadas</CardTitle>
                <CardDescription>Você tem {upcomingAppointments.length} consultas agendadas para hoje.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {appointment.patient
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{appointment.patient}</p>
                          <div className="text-sm text-muted-foreground">
                            {appointment.time} - {appointment.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            appointment.status === "confirmado"
                              ? "success"
                              : appointment.status === "pendente"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {appointment.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="patients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pacientes Recentes</CardTitle>
                <CardDescription>Você atendeu {recentPatients.length} pacientes recentemente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar paciente..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-3 gap-4 p-4 font-medium">
                      <div>Nome</div>
                      <div>Última Visita</div>
                      <div>Próxima Visita</div>
                    </div>
                    {filteredPatients.map((patient) => (
                      <div key={patient.id} className="grid grid-cols-3 gap-4 border-t p-4">
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-muted-foreground">{patient.lastVisit}</div>
                        <div className="flex items-center gap-2">
                          {patient.nextVisit}
                          <Button variant="outline" size="sm">
                            Ver Ficha
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClinicLayout>
  )
}

