import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hambúrguer artesanal gourmet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas mb-6 leading-tight">
            O Sabor que <span className="text-gradient">Domina</span> a Grelha!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hambúrgueres artesanais feitos com ingredientes selecionados e aquele toque de chef.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="bg-primary hover:bg-primary-glow text-lg glow-primary"
            >
              Ver Cardápio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("order")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg"
            >
              Peça Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("menu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent"
        aria-label="Scroll para cardápio"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
