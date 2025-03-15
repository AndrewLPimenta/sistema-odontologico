"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Download, Eye } from "lucide-react"
import { PatientLayout } from "@/components/layouts/patient-layout"

export default function PatientRecordsPage() {
  // Mock data
  const treatments = [
    {
      id: 1,
      date: "10/05/2023",
      procedure: "Limpeza",
      tooth: "Todos",
      dentist: "Dr. Roberto Almeida",
      notes:
        "Limpeza de rotina semestral. Remoção de tártaro e placa bacteriana. Recomendação de uso de fio dental diariamente.",
    },
    {
      id: 2,
      date: "15/04/2023",
      procedure: "Restauração",
      tooth: "24",
      dentist: "Dr. Roberto Almeida",
      notes:
        "Restauração com resina composta devido a cárie moderada. Paciente relatou sensibilidade prévia que foi resolvida após o procedimento.",
    },
    {
      id: 3,
      date: "20/01/2023",
      procedure: "Consulta de Rotina",
      tooth: "Todos",
      dentist: "Dra. Carla Mendes",
      notes: "Avaliação geral. Identificada necessidade de restauração no dente 24. Agendado retorno.",
    },
    {
      id: 4,
      date: "10/10/2022",
      procedure: "Aplicação de Flúor",
      tooth: "Todos",
      dentist: "Dr. Roberto Almeida",
      notes: "Aplicação preventiva de flúor. Orientações sobre higiene bucal reforçadas.",
    },
  ]

  const documents = [
    {
      id: 1,
      title: "Receita - Analgésico",
      date: "15/04/2023",
      dentist: "Dr. Roberto Almeida",
      type: "Receita",
      description: "Prescrição de analgésico para alívio de dor pós-restauração",
    },
    {
      id: 2,
      title: "Atestado Odontológico",
      date: "15/04/2023",
      dentist: "Dr. Roberto Almeida",
      type: "Atestado",
      description: "Atestado de comparecimento à consulta odontológica",
    },
    {
      id: 3,
      title: "Radiografia Panorâmica",
      date: "20/01/2023",
      dentist: "Dra. Carla Mendes",
      type: "Exame",
      description: "Radiografia panorâmica para avaliação geral",
    },
    {
      id: 4,
      title: "Orçamento - Tratamento Completo",
      date: "20/01/2023",
      dentist: "Dra. Carla Mendes",
      type: "Orçamento",
      description: "Orçamento detalhado para tratamento completo",
    },
  ]

  const odontogram = {
    lastUpdate: "10/05/2023",
    dentist: "Dr. Roberto Almeida",
    imageUrl: "/placeholder.svg?height=400&width=600",
  }

  return (
    <PatientLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Meu Histórico Odontológico</h2>
        </div>

        <Tabs defaultValue="treatments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="treatments">Tratamentos</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="odontogram">Odontograma</TabsTrigger>
          </TabsList>

          <TabsContent value="treatments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Tratamentos</CardTitle>
                <CardDescription>Todos os procedimentos realizados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {treatments.map((treatment) => (
                    <div key={treatment.id} className="rounded-lg border p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-medium">{treatment.date}</p>
                          <Badge variant="outline">{treatment.procedure}</Badge>
                        </div>
                        <Badge>{treatment.dentist}</Badge>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Dente: {treatment.tooth}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{treatment.notes}</p>
                      </div>
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
                <CardDescription>Receitas, atestados e exames</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((document) => (
                    <div
                      key={document.id}
                      className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <p className="font-medium">{document.title}</p>
                          <Badge variant="outline">{document.type}</Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {document.date} • {document.dentist}
                        </p>
                        <p className="mt-1 text-sm">{document.description}</p>
                      </div>
                      <div className="mt-3 flex gap-2 sm:mt-0">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="odontogram" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Odontograma</CardTitle>
                <CardDescription>Representação visual da sua saúde bucal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Última atualização: {odontogram.lastUpdate}</p>
                        <p className="text-sm text-muted-foreground">Atualizado por {odontogram.dentist}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF
                      </Button>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <img
                        src={odontogram.imageUrl || "/placeholder.svg"}
                        alt="Odontograma"
                        className="max-h-[400px] rounded-lg object-contain"
                      />
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium">Legenda</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <span className="text-sm">Saudável</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                          <span className="text-sm">Restaurado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                          <span className="text-sm">Tratamento Necessário</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-red-500"></div>
                          <span className="text-sm">Ausente</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PatientLayout>
  )
}

