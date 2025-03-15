import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import {
  Calendar,
  Users,
  FileText,
  DollarSign,
  Clock,
  LayoutDashboard,
  Shield,
  MessageSquare,
  Bell,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function RecursosPage() {
  const recursos = [
    {
      id: 1,
      titulo: "Agendamento Inteligente",
      descricao: "Sistema completo para gerenciar consultas e otimizar a agenda da clínica.",
      icon: Calendar,
      detalhes: [
        "Agendamento online para pacientes",
        "Visualização por profissional ou por sala",
        "Bloqueio de horários para reuniões e intervalos",
        "Lembretes automáticos via SMS e e-mail",
        "Confirmação de consultas com um clique",
        "Histórico de agendamentos por paciente",
      ],
    },
    {
      id: 2,
      titulo: "Gestão de Pacientes",
      descricao: "Cadastro completo e organizado de todos os pacientes da clínica.",
      icon: Users,
      detalhes: [
        "Ficha completa com dados pessoais e de contato",
        "Histórico médico e odontológico",
        "Documentos digitalizados (RX, fotos, etc.)",
        "Segmentação por tipo de tratamento",
        "Histórico de atendimentos e procedimentos",
        "Controle de retornos e acompanhamentos",
      ],
    },
    {
      id: 3,
      titulo: "Prontuário Digital",
      descricao: "Documentação clínica digital completa e de fácil acesso.",
      icon: FileText,
      detalhes: [
        "Odontograma interativo e intuitivo",
        "Registro de procedimentos realizados",
        "Anexo de imagens e documentos",
        "Prescrições e atestados digitais",
        "Planos de tratamento com orçamentos",
        "Assinatura digital de documentos",
      ],
    },
    {
      id: 4,
      titulo: "Gestão Financeira",
      descricao: "Controle completo das finanças da clínica em um só lugar.",
      icon: DollarSign,
      detalhes: [
        "Controle de recebimentos e pagamentos",
        "Fluxo de caixa diário, mensal e anual",
        "Relatórios financeiros detalhados",
        "Gestão de convênios e planos",
        "Controle de comissões de profissionais",
        "Integração com sistemas contábeis",
      ],
    },
    {
      id: 5,
      titulo: "Controle de Estoque",
      descricao: "Gerenciamento eficiente de materiais e medicamentos.",
      icon: LayoutDashboard,
      detalhes: [
        "Cadastro de produtos e fornecedores",
        "Controle de entrada e saída de materiais",
        "Alertas de estoque mínimo",
        "Relatórios de consumo por procedimento",
        "Controle de validade de produtos",
        "Histórico de compras e preços",
      ],
    },
    {
      id: 6,
      titulo: "Gestão de Equipe",
      descricao: "Controle de profissionais, horários e produtividade.",
      icon: Clock,
      detalhes: [
        "Cadastro de profissionais e especialidades",
        "Controle de agenda por profissional",
        "Relatórios de produtividade",
        "Cálculo de comissões automático",
        "Controle de ponto e horas trabalhadas",
        "Permissões de acesso personalizadas",
      ],
    },
    {
      id: 7,
      titulo: "Segurança e Privacidade",
      descricao: "Proteção de dados em conformidade com a LGPD.",
      icon: Shield,
      detalhes: [
        "Criptografia de dados sensíveis",
        "Backup automático na nuvem",
        "Controle de acesso por usuário",
        "Registro de atividades (logs)",
        "Termos de consentimento digitais",
        "Conformidade com a LGPD",
      ],
    },
    {
      id: 8,
      titulo: "Comunicação com Pacientes",
      descricao: "Ferramentas para manter contato eficiente com os pacientes.",
      icon: MessageSquare,
      detalhes: [
        "Envio de lembretes automáticos",
        "Comunicados e campanhas por e-mail",
        "Mensagens personalizadas por WhatsApp",
        "Pesquisas de satisfação",
        "Notificações de aniversários",
        "Portal do paciente para comunicação direta",
      ],
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
                Recursos Completos para sua Clínica Odontológica
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Conheça todas as ferramentas que o DentalCare oferece para transformar a gestão da sua clínica.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Recursos Overview */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="section-title">Tudo que você precisa em um só sistema</h2>
              <p className="mt-4 section-description">
                O DentalCare foi desenvolvido especificamente para atender às necessidades de clínicas odontológicas,
                oferecendo ferramentas completas e integradas.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recursos.slice(0, 8).map((recurso, index) => (
                <AnimateOnScroll key={recurso.id} animation="fade-up" delay={index * 100} className="group">
                  <Card className="apple-card h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <recurso.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                        {recurso.titulo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{recurso.descricao}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Recursos Detalhados */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="section-title">Recursos em Detalhes</h2>
              <p className="mt-4 section-description">
                Explore cada recurso em profundidade e descubra como o DentalCare pode transformar sua clínica.
              </p>
            </AnimateOnScroll>

            <div className="space-y-24">
              {recursos.map((recurso, index) => (
                <AnimateOnScroll
                  key={recurso.id}
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="group"
                >
                  <div
                    className={`grid gap-8 items-center ${index % 2 === 0 ? "md:grid-cols-[1fr_1.5fr]" : "md:grid-cols-[1.5fr_1fr]"}`}
                  >
                    <div className={`${index % 2 !== 0 && "md:order-2"}`}>
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <recurso.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="mt-6 text-3xl font-bold group-hover:text-primary transition-colors">
                        {recurso.titulo}
                      </h3>
                      <p className="mt-4 text-xl text-muted-foreground">{recurso.descricao}</p>
                      <ul className="mt-6 space-y-3">
                        {recurso.detalhes.map((detalhe, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle className="mt-1 h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                            <span className="group-hover/item:text-primary transition-colors">{detalhe}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${index % 2 !== 0 && "md:order-1"} overflow-hidden rounded-2xl border`}>
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(recurso.titulo)}`}
                        alt={recurso.titulo}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">Pronto para transformar sua clínica?</h2>
              <p className="mt-4 section-description">
                Experimente o DentalCare gratuitamente por 14 dias e descubra como podemos ajudar a otimizar sua gestão.
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

        {/* Notificações e Lembretes */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <AnimateOnScroll animation="fade-up" className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h2 className="section-title">Notificações e Lembretes Automáticos</h2>
              <p className="mt-4 section-description">
                Reduza faltas e melhore a comunicação com seus pacientes através de lembretes automáticos.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={100} className="group">
                <Card className="apple-card h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Lembretes de Consulta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Envie lembretes automáticos por SMS, WhatsApp ou e-mail para reduzir faltas em até 60%.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Lembretes 24h antes da consulta</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Confirmação com um clique</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Reagendamento facilitado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200} className="group">
                <Card className="apple-card h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Retornos Programados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Acompanhe pacientes que precisam de retorno e envie lembretes no momento certo.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Programação de retornos</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Notificações automáticas</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Controle de pacientes sem retorno</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={300} className="group">
                <Card className="apple-card h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Campanhas e Aniversários
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Fidelize seus pacientes com mensagens personalizadas em datas especiais e campanhas.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Mensagens de aniversário</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Campanhas sazonais</span>
                      </li>
                      <li className="flex items-start gap-2 group/item">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span className="text-sm">Comunicados personalizados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

