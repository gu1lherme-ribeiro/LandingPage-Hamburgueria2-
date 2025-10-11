import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const OrderSection = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer um pedido no Burger do Chef."
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="order" className="py-20 bg-background relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bebas mb-6">
            Peça Agora e Receba o <span className="text-gradient">Sabor</span> em Casa!
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato pelo WhatsApp e garanta seu hambúrguer artesanal agora mesmo.
            Delivery rápido e sabor garantido!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary-glow text-lg glow-primary group"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
              Pedir pelo WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg group"
            >
              <Phone className="mr-2 group-hover:rotate-12 transition-transform" />
              Ligar Agora
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bebas text-accent mb-2">30min</div>
              <p className="text-muted-foreground">Tempo médio de entrega</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bebas text-accent mb-2">Grátis</div>
              <p className="text-muted-foreground">Delivery acima de R$ 50</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bebas text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Atendimento disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
