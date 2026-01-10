import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface DownloadStore {
  name: string;
  url: string;
}

interface PluginCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  version: string;
  docsUrl?: string;
  downloadStores?: DownloadStore[];
  shortName?: string;
  index?: number;
}

export function PluginCard({
  name,
  description,
  icon,
  version,
  downloadStores = [],
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
        "group relative overflow-hidden rounded-xl border border-border/50 gradient-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-hover flex flex-col h-full"
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

      <div className="relative flex flex-col h-full z-10">
        {/* Icon and version */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            v{version}
          </span>
        </div>

        {/* Name and description - flex-grow to push buttons to bottom */}
        <div className="flex-grow mb-6">
          <h3 className="font-display text-lg font-semibold mb-1">
            {name}
            {shortName && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({shortName})
              </span>
            )}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        {/* Download button - at the bottom */}
        <div className="flex gap-2 mt-auto">
          {downloadStores.length > 0 && (
            <>
              {downloadStores.length === 1 ? (
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href={downloadStores[0].url} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="hero" size="sm" className="w-full">
                      <Download className="h-4 w-4" />
                      Download
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {downloadStores.map((store) => (
                      <DropdownMenuItem key={store.name} asChild>
                        <a
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          {store.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}