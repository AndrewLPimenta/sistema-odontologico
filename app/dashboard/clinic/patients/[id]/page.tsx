"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarPlus, FileText, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function PatientDetailsPage() {
  const params = useParams()
  const patientId = params.id

  // Em um sistema real, buscaríamos os dados do paciente com base no ID
  // Aqui estamos usando dados mockados
  const patient = {
    id: patientId,
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123 - São Paulo, SP",
    birthDate: "15/05/1985",
    lastVisit: "10/06/2023",
    nextVisit: "15/06/2023",
    status: "Ativo",
    notes: "Paciente com histórico de sensibilidade dentária. Prefere atendimentos no período da manhã.",
  }

  const appointments = [
    {
      id: 1,
      date: "15/06/2023",
      time: "09:00",
      type: "Limpeza",
      status: "confirmado",
      dentist: "Dr. Roberto Almeida",
      notes: "Limpeza de rotina semestral",
    },
    {
      id: 2,
      date: "10/05/2023",
      time: "10:30",
      type: "Consulta",
      status: "concluído",
      dentist: "Dra. Carla Mendes",
      notes: "Avaliação de sensibilidade nos molares",
    },
    {
      id: 3,
      date: "15/04/2023",
      time: "14:00",
      type: "Restauração",
      status: "concluído",
      dentist: "Dr. Roberto Almeida",
      notes: "Restauração no dente 24",
    },
  ]

  const treatments = [
    {
      id: 1,
      date: "15/04/2023",
      procedure: "Restauração",
      tooth: "24",
      dentist: "Dr. Roberto Almeida",
      notes: "Restauração com resina composta devido a cárie moderada",
    },
    {
      id: 2,
      date: "20/01/2023",
      procedure: "Limpeza",
      tooth: "Todos",
      dentist: "Dra. Carla Mendes",
      notes: "Limpeza de rotina com remoção de tártaro",
    },
    {
      id: 3,
      date: "10/10/2022",
      procedure: "Aplicação de Flúor",
      tooth: "Todos",
      dentist: "Dr. Roberto Almeida",
      notes: "Aplicação preventiva de flúor",
    },
  ]

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Detalhes do Paciente</h2>
          <div className="flex items-center gap-2">
            <Link href={`/dashboard/clinic/appointments/new?patient=${patientId}`}>
              <Button>
                <CalendarPlus className="mr-2 h-4 w-4" />
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Informações do Paciente</CardTitle>
              <CardDescription>Dados pessoais e informações de contato</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">
                    {patient.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold">{patient.name}</h3>
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Badge variant="outline">{patient.status}</Badge>
                    <Badge variant="secondary">Desde 2021</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">{patient.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{patient.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-sm text-muted-foreground">{patient.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Data de Nascimento</p>
                    <p className="text-sm text-muted-foreground">{patient.birthDate} (38 anos)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium">Observações</p>
                <p className="mt-1 text-sm text-muted-foreground">{patient.notes}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Resumo</CardTitle>
              <CardDescription>Visão geral do histórico do paciente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Próxima Consulta</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold">{patient.nextVisit}</p>
                  <p className="text-sm text-muted-foreground">09:00 - Limpeza</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Última Visita</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold">{patient.lastVisit}</p>
                  <p className="text-sm text-muted-foreground">10:30 - Consulta</p>
                </div>
              </div>

              <div className="mt-6">
                <img
                  src="/placeholder.svg?height=200&width=600"
                  alt="Gráfico de histórico de tratamentos"
                  className="h-[200px] w-full rounded-lg object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="appointments">Consultas</TabsTrigger>
            <TabsTrigger value="treatments">Tratamentos</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Consultas</CardTitle>
                <CardDescription>Consultas agendadas e realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-medium">
                            {appointment.date} às {appointment.time}
                          </p>
                          <Badge
                            variant={
                              appointment.status === "confirmado"
                                ? "success"
                                : appointment.status === "concluído"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {appointment.type} com {appointment.dentist}
                        </p>
                        <p className="mt-1 text-sm">{appointment.notes}</p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 sm:mt-0">
                        <FileText className="mr-2 h-4 w-4" />
                        Detalhes
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="treatments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Tratamentos</CardTitle>
                <CardDescription>Procedimentos realizados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {treatments.map((treatment) => (
                    <div key={treatment.id} className="rounded-lg border p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <p className="font-medium">{treatment.procedure}</p>
                          <p className="text-sm text-muted-foreground">
                            {treatment.date} - Dente: {treatment.tooth}
                          </p>
                        </div>
                        <Badge variant="outline">{treatment.dentist}</Badge>
                      </div>
                      <p className="mt-2 text-sm">{treatment.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Documentos</CardTitle>
                <CardDescription>Receitas, atestados e outros documentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Receita - Analgésico</p>
                        <p className="text-sm text-muted-foreground">Emitido em 15/04/2023 por Dr. Roberto Almeida</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Visualizar
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Atestado Odontológico</p>
                        <p className="text-sm text-muted-foreground">Emitido em 15/04/2023 por Dr. Roberto Almeida</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Visualizar
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Radiografia Panorâmica</p>
                        <p className="text-sm text-muted-foreground">Realizada em 10/01/2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Visualizar
                      </Button>
                    </div>
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

