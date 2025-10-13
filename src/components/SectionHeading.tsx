import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading = ({ 
  children, 
  subtitle,
  className = "",
  centered = true 
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(centered && "text-center", "mb-12 md:mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
