"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  SmileIcon as Tooth,
  Search,
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowRight,
  Filter,
  FileText,
  Bell,
  Calendar,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function ClinicasParceiraPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data para clínicas parceiras
  const clinicas = [
    {
      id: 1,
      nome: "Clínica Odontológica Sorriso Perfeito",
      endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      telefone: "(11) 3456-7890",
      horario: "Seg-Sex: 8h às 18h | Sáb: 8h às 12h",
      especialidades: ["Clínica Geral", "Ortodontia", "Implantes", "Estética"],
      avaliacao: 4.8,
      avaliacoes: 124,
      imagem: "/placeholder.svg?height=200&width=400",
      destaque: true,
    },
    {
      id: 2,
      nome: "Odonto Center",
      endereco: "Rua Augusta, 500 - Consolação, São Paulo - SP",
      telefone: "(11) 3333-4444",
      horario: "Seg-Sex: 9h às 19h | Sáb: 9h às 13h",
      especialidades: ["Clínica Geral", "Endodontia", "Periodontia"],
      avaliacao: 4.6,
      avaliacoes: 98,
      imagem: "/placeholder.svg?height=200&width=400",
      destaque: false,
    },
    {
      id: 3,
      nome: "Clínica Dental Saúde",
      endereco: "Av. Brigadeiro Faria Lima, 1500 - Pinheiros, São Paulo - SP",
      telefone: "(11) 2222-3333",
      horario: "Seg-Sex: 8h às 20h | Sáb: 8h às 14h",
      especialidades: ["Clínica Geral", "Ortodontia", "Odontopediatria"],
      avaliacao: 4.7,
      avaliacoes: 156,
      imagem: "/placeholder.svg?height=300&width=500",
      destaque: true,
    },
    {
      id: 4,
      nome: "Odontologia Especializada",
      endereco: "Rua Oscar Freire, 800 - Jardins, São Paulo - SP",
      telefone: "(11) 4444-5555",
      horario: "Seg-Sex: 8h às 19h | Sáb: 8h às 13h",
      especialidades: ["Clínica Geral", "Implantes", "Prótese", "Cirurgia"],
      avaliacao: 4.9,
      avaliacoes: 210,
      imagem: "/placeholder.svg?height=300&width=500",
      destaque: false,
    },
  ]

  const clinicasFiltradas = clinicas.filter(
    (clinica) =>
      clinica.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinica.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinica.especialidades.some((esp) => esp.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Tooth className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold group-hover:text-primary transition-colors">DentalCare</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" className="hover:bg-primary/10 transition-colors">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className="hover:bg-primary/90 transition-colors">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Encontre as Melhores Clínicas Odontológicas
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Todas as clínicas parceiras utilizam o sistema DentalCare para oferecer a melhor experiência aos
                pacientes.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <div className="relative w-full max-w-md group">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
                  <Input
                    placeholder="Buscar por nome, localização ou especialidade..."
                    className="pl-10 w-full focus:border-primary transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="gap-2 hover:bg-primary/10 transition-colors">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold">Clínicas Parceiras</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clinicasFiltradas.map((clinica, index) => (
                <AnimateOnScroll key={clinica.id} animation="fade-up" delay={index * 100} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={clinica.imagem || "/placeholder.svg"}
                        alt={clinica.nome}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {clinica.destaque && (
                        <Badge className="absolute right-2 top-2 bg-primary group-hover:scale-110 transition-transform">
                          Destaque
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{clinica.nome}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary group-hover:scale-110 transition-transform" />
                          <span>{clinica.avaliacao}</span>
                          <span className="text-muted-foreground">({clinica.avaliacoes} avaliações)</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start gap-2 group/item hover:bg-muted/50 p-1 rounded-md transition-colors">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                        <span className="text-sm">{clinica.endereco}</span>
                      </div>
                      <div className="flex items-start gap-2 group/item hover:bg-muted/50 p-1 rounded-md transition-colors">
                        <Phone className="mt-0.5 h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                        <span className="text-sm">{clinica.telefone}</span>
                      </div>
                      <div className="flex items-start gap-2 group/item hover:bg-muted/50 p-1 rounded-md transition-colors">
                        <Clock className="mt-0.5 h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                        <span className="text-sm">{clinica.horario}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {clinica.especialidades.map((esp, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {esp}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full gap-2 group-hover:bg-primary/90 transition-colors"
                        onClick={() => router.push(`/register?type=patient&clinic=${clinica.id}`)}
                      >
                        <span>Cadastrar como Paciente</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            {clinicasFiltradas.length === 0 && (
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">Nenhuma clínica encontrada com os critérios de busca.</p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Benefícios para Pacientes</h2>
              <p className="mt-4 text-muted-foreground">
                Ao se cadastrar em uma clínica que utiliza o DentalCare, você tem acesso a:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <AnimateOnScroll animation="fade-up" delay={100} className="group">
                  <div className="rounded-lg bg-background p-6 text-center shadow-sm hover:shadow-lg transition-all">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="mt-4 font-medium group-hover:text-primary transition-colors">Agendamento Online</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Marque suas consultas a qualquer momento, sem precisar telefonar.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200} className="group">
                  <div className="rounded-lg bg-background p-6 text-center shadow-sm hover:shadow-lg transition-all">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="mt-4 font-medium group-hover:text-primary transition-colors">Histórico Completo</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Acesse seu histórico de tratamentos e documentos em um só lugar.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300} className="group">
                  <div className="rounded-lg bg-background p-6 text-center shadow-sm hover:shadow-lg transition-all">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Bell className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="mt-4 font-medium group-hover:text-primary transition-colors">
                      Lembretes Automáticos
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Receba lembretes de consultas e retornos no seu celular.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

              <div className="mt-10">
                <Link href="/register?type=patient">
                  <Button size="lg" className="group hover:bg-primary/90 transition-colors">
                    <span>Cadastre-se Agora</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
            © {new Date().getFullYear()} DentalCare. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

