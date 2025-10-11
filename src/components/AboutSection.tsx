import chefKitchen from "@/assets/chef-kitchen.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bebas mb-6">
              Sobre o <span className="text-gradient">Burger do Chef</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nascemos da paixão pela arte de criar o hambúrguer perfeito. Cada receita foi
                desenvolvida com cuidado, utilizando apenas ingredientes frescos e de alta qualidade.
              </p>
              <p>
                Nossa missão é proporcionar uma experiência gastronômica única, onde cada mordida
                conta uma história de sabor, textura e dedicação. Do pão artesanal ao blend exclusivo
                de carnes, tudo é pensado nos mínimos detalhes.
              </p>
              <p>
                A grelha é nosso palco, e cada hambúrguer que sai da nossa cozinha é uma obra de arte
                feita com amor e o verdadeiro toque de chef.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-4xl font-bebas text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bebas text-accent">10k+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bebas text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Artesanal</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={chefKitchen}
                alt="Chef preparando hambúrgueres na cozinha artesanal"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
