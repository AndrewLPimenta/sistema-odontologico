"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp, TrendingDown, Calendar, Filter, Download, Plus, Search } from "lucide-react"
import { ClinicLayout } from "@/components/layouts/clinic-layout"

export default function FinanceiroPage() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("mes")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const resumoFinanceiro = {
    receitas: 15750.0,
    despesas: 8320.0,
    lucro: 7430.0,
    receitasPendentes: 3200.0,
    receitasMes: [
      { mes: "Jan", valor: 12500 },
      { mes: "Fev", valor: 13200 },
      { mes: "Mar", valor: 14100 },
      { mes: "Abr", valor: 13800 },
      { mes: "Mai", valor: 14500 },
      { mes: "Jun", valor: 15750 },
    ],
  }

  const transacoes = [
    {
      id: 1,
      data: "15/06/2023",
      descricao: "Consulta - Maria Silva",
      categoria: "Consulta",
      tipo: "receita",
      valor: 150.0,
      status: "pago",
    },
    {
      id: 2,
      data: "15/06/2023",
      descricao: "Tratamento de Canal - João Santos",
      categoria: "Tratamento",
      tipo: "receita",
      valor: 800.0,
      status: "pago",
    },
    {
      id: 3,
      data: "14/06/2023",
      descricao: "Limpeza - Ana Oliveira",
      categoria: "Limpeza",
      tipo: "receita",
      valor: 120.0,
      status: "pendente",
    },
    {
      id: 4,
      data: "14/06/2023",
      descricao: "Aluguel",
      categoria: "Despesa Fixa",
      tipo: "despesa",
      valor: 3500.0,
      status: "pago",
    },
    {
      id: 5,
      data: "13/06/2023",
      descricao: "Materiais Odontológicos",
      categoria: "Insumos",
      tipo: "despesa",
      valor: 1200.0,
      status: "pago",
    },
    {
      id: 6,
      data: "12/06/2023",
      descricao: "Salário - Assistente",
      categoria: "Folha de Pagamento",
      tipo: "despesa",
      valor: 2200.0,
      status: "pago",
    },
    {
      id: 7,
      data: "12/06/2023",
      descricao: "Restauração - Carlos Pereira",
      categoria: "Restauração",
      tipo: "receita",
      valor: 350.0,
      status: "pendente",
    },
  ]

  const despesas = [
    {
      id: 1,
      data: "14/06/2023",
      descricao: "Aluguel",
      categoria: "Despesa Fixa",
      valor: 3500.0,
      status: "pago",
      vencimento: "15/06/2023",
    },
    {
      id: 2,
      data: "13/06/2023",
      descricao: "Materiais Odontológicos",
      categoria: "Insumos",
      valor: 1200.0,
      status: "pago",
      vencimento: "13/06/2023",
    },
    {
      id: 3,
      data: "12/06/2023",
      descricao: "Salário - Assistente",
      categoria: "Folha de Pagamento",
      valor: 2200.0,
      status: "pago",
      vencimento: "12/06/2023",
    },
    {
      id: 4,
      data: "10/06/2023",
      descricao: "Conta de Luz",
      categoria: "Utilidades",
      valor: 450.0,
      status: "pago",
      vencimento: "10/06/2023",
    },
    {
      id: 5,
      data: "08/06/2023",
      descricao: "Conta de Água",
      categoria: "Utilidades",
      valor: 120.0,
      status: "pago",
      vencimento: "08/06/2023",
    },
    {
      id: 6,
      data: "05/06/2023",
      descricao: "Internet e Telefone",
      categoria: "Utilidades",
      valor: 250.0,
      status: "pago",
      vencimento: "05/06/2023",
    },
    {
      id: 7,
      data: "01/06/2023",
      descricao: "Material de Limpeza",
      categoria: "Insumos",
      valor: 180.0,
      status: "pago",
      vencimento: "01/06/2023",
    },
  ]

  const receitas = [
    {
      id: 1,
      data: "15/06/2023",
      descricao: "Consulta - Maria Silva",
      categoria: "Consulta",
      valor: 150.0,
      status: "pago",
      paciente: "Maria Silva",
    },
    {
      id: 2,
      data: "15/06/2023",
      descricao: "Tratamento de Canal - João Santos",
      categoria: "Tratamento",
      valor: 800.0,
      status: "pago",
      paciente: "João Santos",
    },
    {
      id: 3,
      data: "14/06/2023",
      descricao: "Limpeza - Ana Oliveira",
      categoria: "Limpeza",
      valor: 120.0,
      status: "pendente",
      paciente: "Ana Oliveira",
    },
    {
      id: 4,
      data: "12/06/2023",
      descricao: "Restauração - Carlos Pereira",
      categoria: "Restauração",
      valor: 350.0,
      status: "pendente",
      paciente: "Carlos Pereira",
    },
    {
      id: 5,
      data: "10/06/2023",
      descricao: "Consulta - Fernanda Lima",
      categoria: "Consulta",
      valor: 150.0,
      status: "pago",
      paciente: "Fernanda Lima",
    },
    {
      id: 6,
      data: "08/06/2023",
      descricao: "Clareamento - Roberto Alves",
      categoria: "Estética",
      valor: 600.0,
      status: "pago",
      paciente: "Roberto Alves",
    },
    {
      id: 7,
      data: "05/06/2023",
      descricao: "Extração - Juliana Costa",
      categoria: "Cirurgia",
      valor: 400.0,
      status: "pago",
      paciente: "Juliana Costa",
    },
  ]

  const transacoesFiltradas = transacoes.filter(
    (transacao) =>
      transacao.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transacao.categoria.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <ClinicLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Financeiro</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Período
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receitas</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {resumoFinanceiro.receitas.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 font-medium">+12%</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Despesas</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {resumoFinanceiro.despesas.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 font-medium">+5%</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {resumoFinanceiro.lucro.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 font-medium">+18%</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendente</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {resumoFinanceiro.receitasPendentes.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">2 pagamentos pendentes</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
            <CardDescription>Resumo financeiro do período</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <img
                src="/placeholder.svg?height=200&width=800"
                alt="Gráfico financeiro"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="transacoes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transacoes">Transações</TabsTrigger>
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
            <TabsTrigger value="despesas">Despesas</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="transacoes" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Transações Recentes</CardTitle>
                    <CardDescription>Histórico de receitas e despesas</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Buscar transação..."
                        className="pl-8 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filtros
                    </Button>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Nova Transação
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transacoesFiltradas.map((transacao) => (
                      <TableRow key={transacao.id}>
                        <TableCell>{transacao.data}</TableCell>
                        <TableCell>{transacao.descricao}</TableCell>
                        <TableCell>{transacao.categoria}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              transacao.tipo === "receita"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                            }`}
                          >
                            {transacao.tipo === "receita" ? "Receita" : "Despesa"}
                          </span>
                        </TableCell>
                        <TableCell
                          className={`text-right font-medium ${
                            transacao.tipo === "receita" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transacao.tipo === "receita" ? "+" : "-"}R$ {transacao.valor.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              transacao.status === "pago"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            }`}
                          >
                            {transacao.status === "pago" ? "Pago" : "Pendente"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receitas" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Receitas</CardTitle>
                    <CardDescription>Pagamentos recebidos e a receber</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filtros
                    </Button>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Nova Receita
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receitas.map((receita) => (
                      <TableRow key={receita.id}>
                        <TableCell>{receita.data}</TableCell>
                        <TableCell>{receita.descricao}</TableCell>
                        <TableCell>{receita.paciente}</TableCell>
                        <TableCell>{receita.categoria}</TableCell>
                        <TableCell className="text-right font-medium text-green-600">
                          R$ {receita.valor.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              receita.status === "pago"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            }`}
                          >
                            {receita.status === "pago" ? "Pago" : "Pendente"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="despesas" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Despesas</CardTitle>
                    <CardDescription>Pagamentos realizados e a pagar</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filtros
                    </Button>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Nova Despesa
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {despesas.map((despesa) => (
                      <TableRow key={despesa.id}>
                        <TableCell>{despesa.data}</TableCell>
                        <TableCell>{despesa.descricao}</TableCell>
                        <TableCell>{despesa.categoria}</TableCell>
                        <TableCell>{despesa.vencimento}</TableCell>
                        <TableCell className="text-right font-medium text-red-600">
                          R$ {despesa.valor.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              despesa.status === "pago"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            }`}
                          >
                            {despesa.status === "pago" ? "Pago" : "Pendente"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios</CardTitle>
                <CardDescription>Análise financeira detalhada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Select defaultValue="mes">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dia">Hoje</SelectItem>
                        <SelectItem value="semana">Esta Semana</SelectItem>
                        <SelectItem value="mes">Este Mês</SelectItem>
                        <SelectItem value="trimestre">Este Trimestre</SelectItem>
                        <SelectItem value="ano">Este Ano</SelectItem>
                        <SelectItem value="personalizado">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="todos">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="receitas">Receitas</SelectItem>
                        <SelectItem value="despesas">Despesas</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Exportar Relatório
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Receitas por Categoria</h3>
                      <div className="mt-4 h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Gráfico de receitas por categoria"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Despesas por Categoria</h3>
                      <div className="mt-4 h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Gráfico de despesas por categoria"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Evolução Financeira</h3>
                    <div className="mt-4 h-[200px]">
                      <img
                        src="/placeholder.svg?height=200&width=800"
                        alt="Gráfico de evolução financeira"
                        className="h-full w-full rounded-lg object-cover"
                      />
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

