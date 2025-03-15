"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"
import { cn } from "@/lib/utils"

export default function NewAppointmentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const patientId = searchParams.get("patient")

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedPatient, setSelectedPatient] = useState(patientId ? "1" : "")
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const patients = [
    { id: "1", name: "Maria Silva" },
    { id: "2", name: "João Santos" },
    { id: "3", name: "Ana Oliveira" },
    { id: "4", name: "Carlos Pereira" },
    { id: "5", name: "Fernanda Lima" },
  ]

  const dentists = [
    { id: "1", name: "Dr. Roberto Almeida" },
    { id: "2", name: "Dra. Carla Mendes" },
  ]

  const appointmentTypes = [
    { id: "1", name: "Consulta de Rotina" },
    { id: "2", name: "Limpeza" },
    { id: "3", name: "Restauração" },
    { id: "4", name: "Tratamento de Canal" },
    { id: "5", name: "Extração" },
    { id: "6", name: "Avaliação" },
  ]

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulação de envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    router.push("/dashboard/clinic/appointments")
  }

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Agendar Nova Consulta</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Informações do Paciente</CardTitle>
                <CardDescription>Selecione o paciente para a consulta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient">Paciente</Label>
                  <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                    <SelectTrigger id="patient">
                      <SelectValue placeholder="Selecione um paciente" />
                    </SelectTrigger>
                    <SelectContent>
                      {patients.map((patient) => (
                        <SelectItem key={patient.id} value={patient.id}>
                          {patient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedPatient && (
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{patients.find((p) => p.id === selectedPatient)?.name}</p>
                        <p className="text-sm text-muted-foreground">Última consulta: 10/05/2023</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        onClick={() => router.push(`/dashboard/clinic/patients/${selectedPatient}`)}
                      >
                        Ver Ficha
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="dentist">Dentista</Label>
                  <Select>
                    <SelectTrigger id="dentist">
                      <SelectValue placeholder="Selecione um dentista" />
                    </SelectTrigger>
                    <SelectContent>
                      {dentists.map((dentist) => (
                        <SelectItem key={dentist.id} value={dentist.id}>
                          {dentist.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Detalhes da Consulta</CardTitle>
                <CardDescription>Defina o tipo, data e horário da consulta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Consulta</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Selecione o tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      {appointmentTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={ptBR} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Horário</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Adicione informações relevantes sobre a consulta"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading || !selectedPatient || !date}>
              {isLoading ? "Agendando..." : "Agendar Consulta"}
            </Button>
          </div>
        </form>
      </div>
    </ClinicLayout>
  )
}

