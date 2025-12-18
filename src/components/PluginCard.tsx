import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PluginCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  version: string;
  docsUrl?: string;
  modrinthUrl?: string;
  orbisUrl?: string;
  shortName?: string;
  index?: number;
}

export function PluginCard({
  name,
  description,
  icon,
  version,
  docsUrl,
  modrinthUrl,
  orbisUrl,
  shortName,
  index = 0,
}: PluginCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 gradient-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-hover"
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon and version */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            v{version}
          </span>
        </div>

        {/* Name and description */}
        <h3 className="font-display text-lg font-semibold mb-1">
          {name}
          {shortName && (
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({shortName})
            </span>
          )}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={docsUrl || "#"}>
              <BookOpen className="h-4 w-4" />
              Docs
            </Link>
          </Button>
          {modrinthUrl && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={modrinthUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download
              </a>
            </Button>
          )}
          {orbisUrl && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={orbisUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
