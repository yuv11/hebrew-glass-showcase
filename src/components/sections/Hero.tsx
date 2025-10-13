import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LiquidBlob } from "@/components/LiquidBlob";
import { Container } from "@/components/Container";
import { MessageCircle, ArrowLeft } from "lucide-react";

export const Hero = () => {
  const scrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated gradient blobs */}
      <LiquidBlob className="top-20 right-20 w-96 h-96 bg-primary" delay={0} />
      <LiquidBlob className="bottom-20 left-20 w-80 h-80 bg-secondary" delay={2} />
      <LiquidBlob className="top-1/2 left-1/2 w-72 h-72 bg-accent" delay={4} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            דף נחיתה יפה זה נחמד.
            <br />
            <span className="text-gradient">דף שעובד — זה מה שחשוב.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            בונה חוויה ברורה, מהירה ומדויקת, שהופכת מבקרים ללקוחות.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group"
              asChild
            >
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="ml-2" />
                דברו איתי
              </a>
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              onClick={scrollToShowcase}
            >
              <ArrowLeft className="ml-2" />
              צפו בעבודות
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
