import { motion } from "framer-motion";

interface LiquidBlobProps {
  className?: string;
  delay?: number;
}

export const LiquidBlob = ({ className = "", delay = 0 }: LiquidBlobProps) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};
