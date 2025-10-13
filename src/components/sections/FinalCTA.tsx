import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { GlassCard } from "@/components/GlassCard";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="max-w-4xl mx-auto text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              רוצים דף מדויק לעסק שלכם
              <br />
              <span className="text-gradient">שמביא לקוחות משלמים?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              אשמח לבנות משהו שתפור בדיוק לעסק שלכם.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="text-lg px-12 py-6 h-auto"
              asChild
            >
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="ml-2 w-6 h-6" />
                בואו נדבר בוואטסאפ
              </a>
            </Button>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
};
