import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-3xl font-bebas mb-4">
              Burger do <span className="text-accent">Chef</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              O verdadeiro sabor da grelha. Hambúrgueres artesanais feitos com paixão e
              ingredientes premium.
            </p>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-xl font-bebas mb-4 text-accent">Localização</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <p>Rua das Grelhas, 123<br />Bairro Sabor, São Paulo - SP</p>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h4 className="text-xl font-bebas mb-4 text-accent">Horário</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p>Segunda a Quinta: 11h - 23h</p>
                  <p>Sexta e Sábado: 11h - 01h</p>
                  <p>Domingo: 11h - 22h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bebas mb-4 text-accent">Contato</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-accent" />
                <a href="tel:+5511999999999" className="hover:text-accent transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                <a
                  href="mailto:contato@burgerdochef.com.br"
                  className="hover:text-accent transition-colors"
                >
                  contato@burgerdochef.com.br
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-glow transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-glow transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Burger do Chef. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
