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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, UserPlus, MoreHorizontal, FileText, Calendar, Trash } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const patients = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 98765-4321",
      lastVisit: "10/06/2023",
      nextVisit: "15/06/2023",
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao.santos@email.com",
      phone: "(11) 91234-5678",
      lastVisit: "05/06/2023",
      nextVisit: "15/06/2023",
    },
    {
      id: 3,
      name: "Ana Oliveira",
      email: "ana.oliveira@email.com",
      phone: "(11) 99876-5432",
      lastVisit: "01/06/2023",
      nextVisit: "15/06/2023",
    },
    {
      id: 4,
      name: "Carlos Pereira",
      email: "carlos.pereira@email.com",
      phone: "(11) 95555-4444",
      lastVisit: "28/05/2023",
      nextVisit: "15/06/2023",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      email: "fernanda.lima@email.com",
      phone: "(11) 94444-3333",
      lastVisit: "25/05/2023",
      nextVisit: "20/06/2023",
    },
    {
      id: 6,
      name: "Roberto Alves",
      email: "roberto.alves@email.com",
      phone: "(11) 93333-2222",
      lastVisit: "20/05/2023",
      nextVisit: "22/06/2023",
    },
    {
      id: 7,
      name: "Juliana Costa",
      email: "juliana.costa@email.com",
      phone: "(11) 92222-1111",
      lastVisit: "15/05/2023",
      nextVisit: "25/06/2023",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm),
  )

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Pacientes</h2>
          <Link href="/dashboard/clinic/patients/new">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Novo Paciente
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Pacientes</CardTitle>
            <CardDescription>Você tem um total de {patients.length} pacientes cadastrados.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nome, email ou telefone..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paciente</TableHead>
                      <TableHead className="hidden md:table-cell">Email</TableHead>
                      <TableHead className="hidden md:table-cell">Telefone</TableHead>
                      <TableHead>Última Visita</TableHead>
                      <TableHead>Próxima Visita</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {patient.name
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{patient.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{patient.email}</TableCell>
                        <TableCell className="hidden md:table-cell">{patient.phone}</TableCell>
                        <TableCell>{patient.lastVisit}</TableCell>
                        <TableCell>{patient.nextVisit}</TableCell>
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
                                Ver Ficha
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Agendar Consulta
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Excluir
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

