import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "נא למלא את השם" }).max(100),
  email: z.string().trim().email({ message: "כתובת מייל לא תקינה" }).max(255),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formbold.com/s/9XrGr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "נשלח בהצלחה!",
          description: "נחזור אליכם בהקדם",
        });
        reset();
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      toast({
        title: "שגיאה בשליחה",
        description: "אנא נסו שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading subtitle="השאירו פרטים ונחזור אליכם בהקדם">
            בואו נתחיל
          </SectionHeading>
          
          <GlassCard className="max-w-2xl mx-auto p-8 md:p-12 mt-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  שם מלא
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="איך קוראים לכם?"
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  כתובת מייל
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="email@example.com"
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "שולח..." : "שליחה"}
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
};
