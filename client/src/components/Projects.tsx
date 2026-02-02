import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Projects Section Component
 * Design: Minimal Modernism
 * - Grid layout with project cards
 * - Neon green accent borders on hover
 * - Tech stack displayed as minimal badges
 * - Live demo and repo links for each project
 */

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering. Optimized for performance and accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard with custom charts, real-time data streaming, and export capabilities. Handles millions of data points efficiently.",
    technologies: ["React", "D3.js", "WebSocket", "Node.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "4",
    title: "CLI Development Tool",
    description: "Command-line tool for scaffolding and managing projects. Open-source with 2k+ GitHub stars. Simplifies developer workflows significantly.",
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    repoUrl: "https://github.com",
  },
  {
    id: "5",
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, and request logging. Handles 100k+ requests per minute in production.",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    repoUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Mobile App - Fitness Tracker",
    description: "Cross-platform fitness tracking app with workout logging, progress analytics, and social features. Built with React Native.",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground">Featured Projects</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects showcasing my expertise in full-stack development, architecture, and problem-solving.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Project Card Component
 * Minimal card with hover effects and accent borders
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full flex flex-col bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
      {/* Title */}
      <h3 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-border">
        {project.liveUrl && (
          <Button
            size="sm"
            variant="ghost"
            className="flex-1 text-accent hover:bg-accent/10 rounded-md transition-colors duration-300"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </Button>
        )}
        <Button
          size="sm"
          variant="ghost"
          className="flex-1 text-accent hover:bg-accent/10 rounded-md transition-colors duration-300"
          asChild
        >
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <Github className="w-4 h-4" />
            <span>Repository</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
