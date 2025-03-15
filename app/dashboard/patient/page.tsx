"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, CalendarPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PatientLayout } from "@/components/layouts/patient-layout"

export default function PatientDashboard() {
  // Mock data
  const upcomingAppointments = [
    { id: 1, dentist: "Dr. Roberto Almeida", time: "09:00", date: "15/06/2023", status: "confirmado", type: "Limpeza" },
    {
      id: 2,
      dentist: "Dra. Carla Mendes",
      time: "14:30",
      date: "22/06/2023",
      status: "pendente",
      type: "Consulta de Rotina",
    },
  ]

  const treatmentHistory = [
    { id: 1, date: "10/05/2023", dentist: "Dr. Roberto Almeida", procedure: "Limpeza", notes: "Concluído com sucesso" },
    {
      id: 2,
      date: "15/04/2023",
      dentist: "Dra. Carla Mendes",
      procedure: "Restauração",
      notes: "Dente 24, material compósito",
    },
    {
      id: 3,
      date: "20/03/2023",
      dentist: "Dr. Roberto Almeida",
      procedure: "Consulta de Rotina",
      notes: "Sem problemas identificados",
    },
  ]

  return (
    <PatientLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Meu Dashboard</h2>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/patient/appointments/new">
              <Button>
                <CalendarPlus className="mr-2 h-4 w-4" />
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próxima Consulta</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/06/2023</div>
              <p className="text-xs text-muted-foreground">09:00 - Limpeza com Dr. Roberto Almeida</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Última Visita</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10/05/2023</div>
              <p className="text-xs text-muted-foreground">Limpeza com Dr. Roberto Almeida</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documentos</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Receitas e recomendações disponíveis</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="appointments">Consultas Agendadas</TabsTrigger>
            <TabsTrigger value="history">Histórico de Tratamentos</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Minhas Consultas</CardTitle>
                <CardDescription>Você tem {upcomingAppointments.length} consultas agendadas.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-medium">{appointment.type}</p>
                        <div className="text-sm text-muted-foreground">
                          {appointment.date} às {appointment.time} com {appointment.dentist}
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
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Tratamentos</CardTitle>
                <CardDescription>Seus últimos procedimentos odontológicos.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {treatmentHistory.map((treatment) => (
                    <div key={treatment.id} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{treatment.procedure}</p>
                        <span className="text-sm text-muted-foreground">{treatment.date}</span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">Dentista: {treatment.dentist}</div>
                      <div className="mt-1 text-sm">{treatment.notes}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PatientLayout>
  )
}

