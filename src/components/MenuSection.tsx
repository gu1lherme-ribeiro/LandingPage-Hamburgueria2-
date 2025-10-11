import { Card, CardContent } from "@/components/ui/card";
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerSpicy from "@/assets/burger-spicy.jpg";
import burgerVeggie from "@/assets/burger-veggie.jpg";

const burgers = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Duplo hambúrguer, queijo cheddar, alface, tomate e picles",
    price: "R$ 28,90",
    image: burgerClassic,
  },
  {
    id: 2,
    name: "Bacon Supremo",
    description: "Hambúrguer artesanal, bacon crocante e cebola caramelizada",
    price: "R$ 32,90",
    image: burgerBacon,
  },
  {
    id: 3,
    name: "Spicy Fire",
    description: "Frango temperado, jalapeños, queijo pepper jack e molho especial",
    price: "R$ 29,90",
    image: burgerSpicy,
  },
  {
    id: 4,
    name: "Veggie Deluxe",
    description: "Portobello grelhado, abacate, vegetais frescos em pão integral",
    price: "R$ 26,90",
    image: burgerVeggie,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bebas mb-4">
            Nossos <span className="text-gradient">Burgers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada hambúrguer é uma obra-prima feita com ingredientes premium e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {burgers.map((burger, index) => (
            <Card
              key={burger.id}
              className="bg-card border-border overflow-hidden group hover:border-accent transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bebas mb-2 text-accent">{burger.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{burger.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bebas text-primary">{burger.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
