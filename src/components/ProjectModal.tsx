import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import type { PortfolioItem } from "@/data/demoItems";

interface ProjectModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
            {project.title}
          </DialogTitle>
          <p className="text-primary font-medium">{project.category}</p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="aspect-video bg-muted/20 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">קונספט עיצובי</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.concept}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-center text-lg mb-4">
              אהבתם את הסגנון הזה?
            </p>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
