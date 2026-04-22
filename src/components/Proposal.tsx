import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Check,
  ShoppingCart,
  Wrench,
  Package,
  BarChart3,
  Sparkles,
  Clock,
  Gift,
  AlertCircle,
  Zap,
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ecommerceFeatures = [
  "Cadastro, login e recuperação de senha de clientes",
  "Edição de perfil e gerenciamento de endereços",
  "Catálogo de produtos com busca e filtros (nome, categoria, preço, disponibilidade)",
  "Página de detalhes do produto com variações (cor, tamanho, modelo)",
  "Vitrine virtual com destaques, promoções e produtos em evidência",
  "Carrinho de compras e checkout completo",
  "Cálculo de frete e aplicação de cupons/promoções",
  "Múltiplas formas de pagamento",
  "Criação e acompanhamento do status do pedido",
  "Histórico de compras e área do cliente",
  "Integração com estoque em tempo real e baixa automática",
  "Cancelamento de pedido (quando permitido)",
  "Notificações por e-mail e WhatsApp",
  "Personalização visual: banners, coleções e páginas institucionais",
  "SEO básico para páginas de produto e categorias",
  "Upload e exibição otimizada de imagens",
  "Kits, adicionais e regras de preço por promoção",
];

const erpFeatures = [
  "Login com perfis e permissões de usuários",
  "Cadastro de clientes, funcionários, produtos e serviços",
  "Cadastro e edição de Ordens de Serviço (OS)",
  "Quadro Kanban para visualizar etapas da OS",
  "Histórico de mudança de etapa da OS",
  "Envio automático de WhatsApp na mudança de etapa",
  "Filtro em tempo real ao digitar nome do produto",
  "Controle de estoque com entradas, saídas e baixas automáticas",
  "Histórico de movimentação de estoque",
  "Produtos da OS vinculados ao estoque",
  "Pedidos do e-commerce integrados ao sistema de gestão",
  "Financeiro: contas a pagar, a receber e caixa",
  "PDV (Ponto de Venda)",
  "Relatórios de vendas, estoque, OS e financeiros",
  "Emissão e vinculação de nota fiscal a pedidos/OS",
  "Painel administrativo completo do e-commerce",
  "Auditoria e histórico de alterações importantes",
  "Estrutura preparada para múltiplas filiais",
  "Separação de áreas: atendimento, estoque, financeiro e técnico",
];

const coreFeatures = [
  "Catálogo de produtos",
  "Vitrine virtual",
  "Carrinho e checkout",
  "Pedidos integrados ao sistema",
  "Cadastro de clientes",
  "OS com Kanban",
  "Estoque automático",
  "Financeiro básico",
  "WhatsApp automático por etapa",
  "Relatórios simples",
];

export default function Proposal() {
  const ref = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!ref.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(ref.current, {
        backgroundColor: "#0b0e16",
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("Orcamento-Popota-Motos.pdf");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">Proposta Comercial</span>
          </div>
          <Button onClick={handleDownload} disabled={downloading} className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
            <Download className="mr-2 h-4 w-4" />
            {downloading ? "Gerando PDF..." : "Baixar PDF"}
          </Button>
        </div>
      </div>

      <div ref={ref} className="container max-w-5xl py-12 space-y-12">
        {/* Hero */}
        <header className="text-center space-y-6 py-12">
          <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1">
            <Sparkles className="mr-2 h-3 w-3" /> Proposta Personalizada
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Orçamento{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Popota Motos
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plataforma completa de e-commerce integrada a sistema de gestão de oficina.
            Tudo que sua operação precisa em um único ecossistema.
          </p>
        </header>

        {/* Resumo do investimento */}
        <Card className="bg-gradient-card border-border/50 p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" /> Investimento
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground">Software (implantação única)</p>
              <p className="text-4xl font-bold mt-2 bg-gradient-primary bg-clip-text text-transparent">
                R$ 8.000
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/30 p-6">
              <p className="text-sm text-muted-foreground">Mensalidade</p>
              <p className="text-4xl font-bold mt-2">R$ 200<span className="text-base text-muted-foreground font-normal">/mês</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-4 border border-border/50">
              <Gift className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium">1 mês grátis</p>
                <p className="text-sm text-muted-foreground">Sem mensalidade no primeiro mês</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-4 border border-border/50">
              <Sparkles className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium">3 meses de mudanças</p>
                <p className="text-sm text-muted-foreground">Ajustes gratuitos no escopo</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-4 border border-border/50">
              <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium">Suporte contínuo</p>
                <p className="text-sm text-muted-foreground">Manutenção e evolução</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <AlertCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              Mudanças fora do escopo combinado estão sujeitas à cobrança de{" "}
              <span className="text-foreground font-medium">R$ 50/hora</span> de programação
              (valor sujeito a reajuste).
            </p>
          </div>
        </Card>

        {/* Núcleo inicial */}
        <Card className="bg-gradient-card border-primary/30 p-8 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-gradient-primary text-primary-foreground border-0">
              Recomendado
            </Badge>
          </div>
          <h2 className="text-2xl font-bold mb-2">Núcleo Inicial Enxuto</h2>
          <p className="text-muted-foreground mb-6">
            Comece com o essencial e expanda conforme a operação cresce.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {coreFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-lg bg-background/40 p-3 border border-border/50">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* E-commerce */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <ShoppingCart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">E-commerce</h2>
              <p className="text-sm text-muted-foreground">Loja virtual completa para o cliente final</p>
            </div>
          </div>
          <Card className="bg-gradient-card border-border/50 p-6 shadow-card">
            <div className="grid md:grid-cols-2 gap-3">
              {ecommerceFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ERP / Oficina */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Wrench className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sistema de Gestão da Oficina</h2>
              <p className="text-sm text-muted-foreground">ERP integrado para operação interna</p>
            </div>
          </div>
          <Card className="bg-gradient-card border-border/50 p-6 shadow-card">
            <div className="grid md:grid-cols-2 gap-3">
              {erpFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Diferenciais */}
        <section className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Package, title: "Tudo Integrado", desc: "E-commerce e oficina conversando em tempo real" },
            { icon: Zap, title: "Automação", desc: "WhatsApp e estoque automáticos" },
            { icon: BarChart3, title: "Relatórios", desc: "Visibilidade total da operação" },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="bg-gradient-card border-border/50 p-6 shadow-card">
              <Icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Proposta válida por 30 dias · Vamos transformar a Popota Motos juntos 🏍️
          </p>
        </footer>
      </div>
    </div>
  );
}
