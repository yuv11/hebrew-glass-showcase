import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ 
  children, 
  className = "", 
  hoverable = false,
  onClick 
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "glass-panel p-6",
        hoverable && "glass-panel-hover cursor-pointer",
        className
      )}
      whileHover={hoverable ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
