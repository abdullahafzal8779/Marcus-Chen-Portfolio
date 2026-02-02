import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section Component
 * Design: Minimal Modernism - Swiss Design principles
 * - Centered layout with generous whitespace
 * - Neon green accents for interactivity
 * - Typography hierarchy through Poppins (headings) and Inter (body)
 * - Subtle animations on entrance
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-3xl mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins text-foreground leading-tight">
              Marcus Chen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium font-poppins">
              Full-Stack Developer & Open Source Enthusiast
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems. Specializing in modern web technologies, scalable architectures, and developer tools that make a difference.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <TechBadge icon="⚛️" label="React" />
            <TechBadge icon="🟦" label="TypeScript" />
            <TechBadge icon="🔵" label="Node.js" />
            <TechBadge icon="🗄️" label="PostgreSQL" />
            <TechBadge icon="⚡" label="Next.js" />
            <TechBadge icon="🎨" label="Tailwind" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-semibold rounded-md transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 animate-bounce">
            <div className="text-accent text-sm font-medium">Scroll to explore</div>
            <div className="text-2xl">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Tech Badge Component
 * Minimal badge showing technology with icon and label
 */
function TechBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border hover:border-accent transition-colors duration-300 cursor-default">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}
