import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "רונית כהן",
    role: "מנהלת שיווק, TechFlow",
    content: "יובל בנה לנו דף נחיתה שהכפיל את שיעור ההמרה. העיצוב מדהים והתוצאות מדברות בעד עצמן.",
  },
  {
    name: "אורי לוי",
    role: "מייסד, FitPro",
    content: "הגישה המקצועית והיצירתיות של יובל הפכו את החזון שלנו למציאות. הדף הכי יפה שראיתי.",
  },
  {
    name: "מיכל ברק",
    role: "בעלת עסק, Gourmet Kitchen",
    content: "תוך שבועיים קיבלנו דף שמביא לקוחות כל יום. השקעה שמשתלמת פי כמה.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeading>מה אומרים לקוחות</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
