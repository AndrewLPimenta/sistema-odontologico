"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, XCircle, MessageSquare } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppointmentDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const appointmentId = params.id

  const [status, setStatus] = useState("confirmado")
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Em um sistema real, buscaríamos os dados da consulta com base no ID
  // Aqui estamos usando dados mockados
  const appointment = {
    id: appointmentId,
    patient: {
      id: "1",
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 98765-4321",
      lastVisit: "10/05/2023",
    },
    date: "15/06/2023",
    time: "09:00",
    type: "Limpeza",
    status: "confirmado",
    dentist: "Dr. Roberto Almeida",
    notes: "Limpeza de rotina semestral",
    duration: 30, // duração em minutos
    created: "01/06/2023",
  }

  async function handleStatusChange(newStatus: string) {
    setIsLoading(true)
    setStatus(newStatus)

    // Simulação de envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
  }

  async function handleSaveNotes(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulação de envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsDialogOpen(false)
  }

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Detalhes da Consulta</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => router.back()}>
              Voltar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Informações da Consulta</CardTitle>
                  <CardDescription>Detalhes do agendamento</CardDescription>
                </div>
                <Badge
                  variant={status === "confirmado" ? "success" : status === "pendente" ? "outline" : "destructive"}
                  className="text-sm"
                >
                  {status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Data</p>
                      <p className="text-sm text-muted-foreground">{appointment.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Horário</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.time} - {appointment.duration} minutos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Tipo</p>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <User className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Dentista</p>
                      <p className="text-sm text-muted-foreground">{appointment.dentist}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Agendado em</p>
                      <p className="text-sm text-muted-foreground">{appointment.created}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium">Observações</p>
                <p className="mt-1 text-sm text-muted-foreground">{appointment.notes}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button
                  variant={status === "confirmado" ? "default" : "outline"}
                  onClick={() => handleStatusChange("confirmado")}
                  disabled={isLoading}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Confirmar
                </Button>
                <Button variant="outline" onClick={() => handleStatusChange("pendente")} disabled={isLoading}>
                  <Clock className="mr-2 h-4 w-4" />
                  Marcar como Pendente
                </Button>
                <Button
                  variant={status === "cancelado" ? "destructive" : "outline"}
                  onClick={() => handleStatusChange("cancelado")}
                  disabled={isLoading}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancelar Consulta
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Adicionar Anotações
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleSaveNotes}>
                      <DialogHeader>
                        <DialogTitle>Anotações da Consulta</DialogTitle>
                        <DialogDescription>Adicione observações e procedimentos realizados</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="procedure">Procedimento Realizado</Label>
                          <Select>
                            <SelectTrigger id="procedure">
                              <SelectValue placeholder="Selecione o procedimento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="limpeza">Limpeza</SelectItem>
                              <SelectItem value="restauracao">Restauração</SelectItem>
                              <SelectItem value="extracao">Extração</SelectItem>
                              <SelectItem value="canal">Tratamento de Canal</SelectItem>
                              <SelectItem value="avaliacao">Avaliação</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Observações</Label>
                          <Textarea
                            id="notes"
                            placeholder="Descreva os procedimentos realizados e recomendações"
                            className="min-h-[150px]"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={isLoading}>
                          {isLoading ? "Salvando..." : "Salvar Anotações"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações do Paciente</CardTitle>
              <CardDescription>Dados do paciente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg">
                    {appointment.patient.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.patient.name}</p>
                  <p className="text-sm text-muted-foreground">Última visita: {appointment.patient.lastVisit}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">{appointment.patient.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{appointment.patient.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Link href={`/dashboard/clinic/patients/${appointment.patient.id}`}>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Ficha Completa
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClinicLayout>
  )
}

