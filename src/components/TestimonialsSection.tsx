import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    text: "Simplesmente o melhor hambúrguer que já comi! A qualidade dos ingredientes é excepcional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marina Santos",
    text: "Atendimento impecável e o burger é divino. Já virei cliente fiel!",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Lima",
    text: "O bacon está sempre crocante e o ponto da carne é perfeito. Recomendo muito!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ana Paula",
    text: "Até o burger vegetariano é incrível! Provei todos e não tenho favorito, são todos perfeitos.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bebas mb-4">
            O que Dizem Nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação de quem prova é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-card border-border animate-scale-in hover:border-accent/50 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bebas text-xl text-accent">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
