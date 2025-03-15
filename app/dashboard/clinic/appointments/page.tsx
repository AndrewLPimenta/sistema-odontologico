"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, CalendarPlus, MoreHorizontal, FileText, Phone, X } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data
  const appointments = [
    {
      id: 1,
      patient: "Maria Silva",
      date: "15/06/2023",
      time: "09:00",
      type: "Limpeza",
      status: "confirmado",
      dentist: "Dr. Roberto Almeida",
    },
    {
      id: 2,
      patient: "João Santos",
      date: "15/06/2023",
      time: "10:30",
      type: "Consulta",
      status: "pendente",
      dentist: "Dra. Carla Mendes",
    },
    {
      id: 3,
      patient: "Ana Oliveira",
      date: "15/06/2023",
      time: "14:00",
      type: "Tratamento de Canal",
      status: "confirmado",
      dentist: "Dr. Roberto Almeida",
    },
    {
      id: 4,
      patient: "Carlos Pereira",
      date: "15/06/2023",
      time: "16:30",
      type: "Extração",
      status: "cancelado",
      dentist: "Dra. Carla Mendes",
    },
    {
      id: 5,
      patient: "Fernanda Lima",
      date: "16/06/2023",
      time: "09:30",
      type: "Consulta",
      status: "confirmado",
      dentist: "Dr. Roberto Almeida",
    },
    {
      id: 6,
      patient: "Roberto Alves",
      date: "16/06/2023",
      time: "11:00",
      type: "Limpeza",
      status: "pendente",
      dentist: "Dra. Carla Mendes",
    },
    {
      id: 7,
      patient: "Juliana Costa",
      date: "16/06/2023",
      time: "14:30",
      type: "Restauração",
      status: "confirmado",
      dentist: "Dr. Roberto Almeida",
    },
  ]

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.date.includes(searchTerm) ||
      appointment.time.includes(searchTerm)

    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Consultas</h2>
          <Link href="/dashboard/clinic/appointments/new">
            <Button>
              <CalendarPlus className="mr-2 h-4 w-4" />
              Nova Consulta
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Consultas</CardTitle>
            <CardDescription>Você tem um total de {appointments.length} consultas agendadas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por paciente, tipo ou data..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="confirmado">Confirmado</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Hora</TableHead>
                      <TableHead className="hidden md:table-cell">Tipo</TableHead>
                      <TableHead className="hidden md:table-cell">Dentista</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {appointment.patient
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{appointment.patient}</span>
                          </div>
                        </TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell className="hidden md:table-cell">{appointment.type}</TableCell>
                        <TableCell className="hidden md:table-cell">{appointment.dentist}</TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Abrir menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                Ver Detalhes
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Phone className="mr-2 h-4 w-4" />
                                Contatar Paciente
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <X className="mr-2 h-4 w-4" />
                                Cancelar Consulta
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ClinicLayout>
  )
}

