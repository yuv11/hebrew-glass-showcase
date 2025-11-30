import { Container } from "@/components/Container";
import { Mail, MessageCircle } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="text-muted-foreground">
            <p className="font-bold text-foreground mb-2">יובל סיטי — בניית דפי נחיתה שמביאים תוצאות</p>
            <p className="text-sm">© {currentYear} כל הזכויות שמורות</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:contact@yuvalcity.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">contact@yuvalcity.com</span>
            </a>
            
            <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">וואטסאפ</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>;
};