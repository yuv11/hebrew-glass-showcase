import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Users, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "היכרות ממוקדת",
    description: "מבינים את העסק, הקהל והמטרות",
  },
  {
    icon: Lightbulb,
    title: "קונספט וקופי",
    description: "בונים את המסר והסיפור המדויק",
  },
  {
    icon: Palette,
    title: "עיצוב ובנייה",
    description: "יוצרים חוויה ויזואלית ופונקציונלית",
  },
  {
    icon: Rocket,
    title: "בדיקה והשקה",
    description: "מוודאים שהכל עובד ומשיקים לאוויר",
  },
];

export const Process = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeading>איך זה עובד</SectionHeading>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="glass-panel p-6 text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 glow-primary">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
