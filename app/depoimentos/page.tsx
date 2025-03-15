import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowRight, Star, Quote, Users, Calendar, DollarSign } from "lucide-react"

export default function DepoimentosPage() {
  const depoimentosClinicas = [
    {
      id: 1,
      nome: "Dr. Roberto Almeida",
      cargo: "Diretor Clínico",
      clinica: "Clínica Sorriso Perfeito",
      cidade: "São Paulo, SP",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "O DentalCare transformou completamente a gestão da nossa clínica. Reduzimos o tempo gasto com tarefas administrativas em 70% e aumentamos nossa produtividade. Os lembretes automáticos diminuíram as faltas em consultas em mais de 60%, o que impactou diretamente nosso faturamento. A interface é intuitiva e toda a equipe se adaptou rapidamente.",
      avaliacao: 5,
      destaque: true,
      resultados: {
        reducaoFaltas: "60%",
        aumentoProdutividade: "35%",
        tempoEconomizado: "25 horas/semana",
      },
    },
    {
      id: 2,
      nome: "Dra. Carla Mendes",
      cargo: "Proprietária",
      clinica: "Odonto Center",
      cidade: "Rio de Janeiro, RJ",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "Após testar vários sistemas, o DentalCare foi o único que atendeu todas as nossas necessidades. A gestão financeira é excepcional, com relatórios detalhados que nos ajudam a tomar decisões estratégicas. O suporte técnico é ágil e sempre disponível para resolver qualquer dúvida. Recomendo para clínicas de todos os tamanhos.",
      avaliacao: 5,
      destaque: false,
      resultados: {
        aumentoFaturamento: "28%",
        satisfacaoPacientes: "95%",
        retornoInvestimento: "10x",
      },
    },
    {
      id: 3,
      nome: "Dr. Marcelo Santos",
      cargo: "Ortodontista",
      clinica: "Clínica Dental Saúde",
      cidade: "Belo Horizonte, MG",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "Como ortodontista, precisava de um sistema que me permitisse acompanhar tratamentos de longo prazo. O DentalCare oferece ferramentas específicas para isso, com controle detalhado de cada etapa do tratamento. A possibilidade de anexar fotos e radiografias diretamente no prontuário digital facilita muito o acompanhamento dos casos.",
      avaliacao: 5,
      destaque: false,
      resultados: {
        melhoriaAcompanhamento: "100%",
        organizacaoProntuarios: "Completa",
        economiaTempoConsulta: "15 min/paciente",
      },
    },
    {
      id: 4,
      nome: "Dra. Juliana Costa",
      cargo: "Diretora Administrativa",
      clinica: "Odontologia Especializada",
      cidade: "Curitiba, PR",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "O módulo financeiro do DentalCare é simplesmente fantástico. Conseguimos ter controle total sobre receitas, despesas e comissões dos profissionais. Os relatórios gerenciais nos dão uma visão clara da saúde financeira da clínica e nos ajudam a identificar oportunidades de melhoria. A implementação foi rápida e o suporte é excelente.",
      avaliacao: 5,
      destaque: true,
      resultados: {
        controleFinanceiro: "100%",
        reducaoCustos: "22%",
        aumentoLucratividade: "30%",
      },
    },
  ]

  const depoimentosPacientes = [
    {
      id: 1,
      nome: "Maria Silva",
      cidade: "São Paulo, SP",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "Poder agendar minhas consultas pelo celular a qualquer hora do dia é muito prático! Recebo lembretes automáticos e posso visualizar todo meu histórico de tratamentos. Isso facilita muito minha vida e me ajuda a não esquecer das consultas.",
      avaliacao: 5,
    },
    {
      id: 2,
      nome: "João Santos",
      cidade: "Rio de Janeiro, RJ",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "O aplicativo é muito fácil de usar. Consigo ver meus próximos agendamentos, histórico de tratamentos e até mesmo as radiografias. Os lembretes por WhatsApp são muito úteis e me ajudam a não perder as consultas.",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Ana Oliveira",
      cidade: "Belo Horizonte, MG",
      foto: "/placeholder.svg?height=100&width=100",
      depoimento:
        "Gosto muito da facilidade para remarcar consultas quando preciso. Antes tinha que ligar para a clínica e às vezes esperar na linha. Agora faço tudo pelo aplicativo em segundos. Também recebo lembretes que me ajudam a não esquecer dos horários.",
      avaliacao: 4,
    },
  ]

  const estatisticas = [
    {
      valor: "95%",
      texto: "de satisfação dos usuários",
      icon: Users,
    },
    {
      valor: "60%",
      texto: "de redução em faltas",
      icon: Calendar,
    },
    {
      valor: "30%",
      texto: "de aumento em faturamento",
      icon: DollarSign,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                O Que Nossos Clientes Dizem
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Descubra como o DentalCare tem transformado clínicas odontológicas e melhorado a experiência dos
                pacientes em todo o Brasil.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {estatisticas.map((estatistica, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <estatistica.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-4xl font-bold text-primary">{estatistica.valor}</h3>
                      <p className="mt-2 text-muted-foreground">{estatistica.texto}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos de Clínicas */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Depoimentos de Clínicas</h2>
              <p className="mt-4 section-description">
                Veja como o DentalCare tem ajudado clínicas odontológicas a melhorar sua gestão e aumentar seus
                resultados.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              {depoimentosClinicas.map((depoimento, index) => (
                <AnimateOnScroll key={depoimento.id} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={depoimento.foto || "/placeholder.svg"}
                            alt={depoimento.nome}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {depoimento.nome}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                          <p className="text-sm text-muted-foreground">
                            {depoimento.clinica}, {depoimento.cidade}
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < depoimento.avaliacao ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="relative">
                        <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                        <p className="pl-6 italic text-muted-foreground">{depoimento.depoimento}</p>
                      </div>

                      {depoimento.resultados && (
                        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                          {Object.entries(depoimento.resultados).map(([key, value]) => (
                            <div key={key} className="rounded-lg bg-muted p-3 text-center">
                              <p className="text-lg font-bold text-primary">{value}</p>
                              <p className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos de Pacientes */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Depoimentos de Pacientes</h2>
              <p className="mt-4 section-description">
                Veja como o DentalCare tem melhorado a experiência dos pacientes.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              {depoimentosPacientes.map((depoimento, index) => (
                <AnimateOnScroll key={depoimento.id} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-20 w-20 rounded-full overflow-hidden">
                          <Image
                            src={depoimento.foto || "/placeholder.svg"}
                            alt={depoimento.nome}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {depoimento.nome}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{depoimento.cidade}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < depoimento.avaliacao ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="relative">
                        <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                        <p className="pl-6 italic text-muted-foreground">{depoimento.depoimento}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Vídeo Depoimentos */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Veja Depoimentos em Vídeo</h2>
              <p className="mt-4 section-description">
                Assista aos depoimentos de clientes que transformaram suas clínicas com o DentalCare.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" className="group">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-lg">
                <div className="aspect-video w-full bg-muted">
                  <Image
                    src="/placeholder.svg?height=720&width=1280&text=Vídeo%20Depoimentos"
                    alt="Vídeo de depoimentos"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-8 w-8"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Estudos de Caso */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Estudos de Caso</h2>
              <p className="mt-4 section-description">
                Conheça histórias reais de clínicas que transformaram sua gestão com o DentalCare.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="fade-right" className="group">
                <Card className="apple-card h-full">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Estudo%20de%20Caso%201"
                      alt="Estudo de Caso 1"
                      width={600}
                      height={300}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Clínica Sorriso Perfeito: 60% menos faltas em consultas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Veja como a Clínica Sorriso Perfeito reduziu drasticamente as faltas em consultas e aumentou seu
                      faturamento em 30% com o DentalCare.
                    </p>
                    <Button className="mt-4 group apple-button">
                      <span>Ler Estudo Completo</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="group">
                <Card className="apple-card h-full">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Estudo%20de%20Caso%202"
                      alt="Estudo de Caso 2"
                      width={600}
                      height={300}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Odonto Center: Gestão financeira otimizada e 28% mais lucro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Descubra como a Odonto Center otimizou sua gestão financeira, reduziu custos e aumentou sua
                      lucratividade com o DentalCare.
                    </p>
                    <Button className="mt-4 group apple-button">
                      <span>Ler Estudo Completo</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">Junte-se a Centenas de Clínicas Satisfeitas</h2>
              <p className="mt-4 section-description">
                Experimente o DentalCare gratuitamente por 14 dias e descubra como podemos transformar sua clínica.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=clinic">
                  <Button size="lg" className="group apple-button">
                    <span>Começar Gratuitamente</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="group hover:bg-primary/10 transition-colors">
                    <span>Agendar Demonstração</span>
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

