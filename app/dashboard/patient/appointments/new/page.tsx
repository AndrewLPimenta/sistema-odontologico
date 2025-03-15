"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"
import { PatientLayout } from "@/components/layouts/patient-layout"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function NewAppointmentPage() {
  const router = useRouter()

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
  const [selectedDentist, setSelectedDentist] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  // Mock data
  const dentists = [
    { id: "1", name: "Dr. Roberto Almeida", specialty: "Clínico Geral" },
    { id: "2", name: "Dra. Carla Mendes", specialty: "Ortodontia" },
  ]

  const appointmentTypes = [
    { id: "1", name: "Consulta de Rotina" },
    { id: "2", name: "Limpeza" },
    { id: "3", name: "Avaliação" },
  ]

  // Horários disponíveis (em um sistema real, isso seria dinâmico com base na data e dentista)
  const availableTimeSlots = [
    { time: "09:00", available: true },
    { time: "09:30", available: true },
    { time: "10:00", available: false },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: false },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: true },
    { time: "15:30", available: false },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulação de envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    router.push("/dashboard/patient/appointments")
  }

  return (
    <PatientLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Agendar Consulta</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Tipo de Consulta</CardTitle>
                <CardDescription>Selecione o tipo de consulta e o profissional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Tipo de Consulta</Label>
                  <RadioGroup value={selectedType} onValueChange={setSelectedType} className="grid grid-cols-1 gap-2">
                    {appointmentTypes.map((type) => (
                      <Label
                        key={type.id}
                        htmlFor={`type-${type.id}`}
                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-muted [&:has(:checked)]:bg-muted"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">{type.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {type.id === "1"
                              ? "Avaliação geral da saúde bucal"
                              : type.id === "2"
                                ? "Remoção de placa bacteriana e tártaro"
                                : "Avaliação específica para tratamento"}
                          </p>
                        </div>
                        <RadioGroupItem id={`type-${type.id}`} value={type.id} className="h-5 w-5" />
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dentist">Dentista</Label>
                  <Select value={selectedDentist} onValueChange={setSelectedDentist}>
                    <SelectTrigger id="dentist">
                      <SelectValue placeholder="Selecione um dentista" />
                    </SelectTrigger>
                    <SelectContent>
                      {dentists.map((dentist) => (
                        <SelectItem key={dentist.id} value={dentist.id}>
                          {dentist.name} - {dentist.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Descreva brevemente o motivo da consulta ou sintomas, se houver"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Data e Horário</CardTitle>
                <CardDescription>Escolha a data e horário para sua consulta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={ptBR}
                        disabled={(date) => {
                          // Desabilita datas passadas e finais de semana
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          return (
                            date < today ||
                            date.getDay() === 0 || // Domingo
                            date.getDay() === 6 // Sábado
                          )
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {date && (
                  <div className="space-y-2">
                    <Label>Horário</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimeSlots.map((slot) => (
                        <Button
                          key={slot.time}
                          type="button"
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          className={cn("flex items-center gap-2", !slot.available && "opacity-50 cursor-not-allowed")}
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                        >
                          <Clock className="h-4 w-4" />
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-lg border p-4 bg-muted/50">
                  <h3 className="font-medium">Resumo</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Tipo:</span>{" "}
                      {selectedType ? appointmentTypes.find((t) => t.id === selectedType)?.name : "Não selecionado"}
                    </p>
                    <p>
                      <span className="font-medium">Dentista:</span>{" "}
                      {selectedDentist ? dentists.find((d) => d.id === selectedDentist)?.name : "Não selecionado"}
                    </p>
                    <p>
                      <span className="font-medium">Data:</span>{" "}
                      {date ? format(date, "PPP", { locale: ptBR }) : "Não selecionada"}
                    </p>
                    <p>
                      <span className="font-medium">Horário:</span> {selectedTime || "Não selecionado"}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !selectedType || !selectedDentist || !date || !selectedTime}
                >
                  {isLoading ? "Agendando..." : "Confirmar Agendamento"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </PatientLayout>
  )
}

