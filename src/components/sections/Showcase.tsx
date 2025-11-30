import { motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { demoItems } from "@/data/demoItems";
import { ProjectModal } from "@/components/ProjectModal";
import type { PortfolioItem } from "@/data/demoItems";
export const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  return <section id="showcase" className="py-20 md:py-32">
      <Container>
        <SectionHeading subtitle="מכל פרויקט — רעיון, שפה ויזואלית וביצוע נקי.">
          עבודות נבחרות
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {demoItems.map((item, index) => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <GlassCard hoverable onClick={() => setSelectedProject(item)}>
                <div className="aspect-video bg-muted/20 rounded-2xl mb-4 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover border-destructive-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-primary font-medium">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </GlassCard>
            </motion.div>)}
        </div>
      </Container>

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>;
};