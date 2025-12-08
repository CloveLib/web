import { cn } from "@/lib/utils";

interface DocSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function DocSection({ title, children, className }: DocSectionProps) {
  return (
    <section className={cn("rounded-xl border border-border/50 bg-card p-6 md:p-8", className)}>
      <h2 className="font-display text-xl font-semibold mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language = "yaml" }: CodeBlockProps) {
  return (
    <pre className="mt-4 rounded-lg bg-muted p-4 overflow-x-auto text-sm">
      <code className="text-foreground">{children}</code>
    </pre>
  );
}

interface CommandProps {
  name: string;
  description: string;
  usage?: string;
  permission?: string;
}

export function Command({ name, description, usage, permission }: CommandProps) {
  return (
    <div className="border-b border-border/50 last:border-0 py-3 first:pt-0 last:pb-0">
      <code className="text-primary font-semibold">{name}</code>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      {usage && (
        <p className="text-xs text-muted-foreground mt-1">
          <span className="font-medium">Usage:</span> <code className="bg-muted px-1 rounded">{usage}</code>
        </p>
      )}
      {permission && (
        <p className="text-xs text-muted-foreground mt-1">
          <span className="font-medium">Permission:</span> <code className="bg-muted px-1 rounded">{permission}</code>
        </p>
      )}
    </div>
  );
}
