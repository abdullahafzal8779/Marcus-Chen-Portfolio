import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

/**
 * Home Page
 * Design: Minimal Modernism
 * - Combines all portfolio sections
 * - Dark theme with neon green accents
 * - Smooth scrolling and transitions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Projects />
        <section id="skills">
          <Skills />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
