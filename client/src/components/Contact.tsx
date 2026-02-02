import { Mail, Linkedin, Github, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Section Component
 * Design: Minimal Modernism
 * - Contact form with minimal styling
 * - Social links and resume download
 * - Footer information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Divider */}
        <div className="h-px bg-border mb-16" />

        {/* Contact info and social links */}
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href="mailto:marcus@example.com" className="text-lg font-semibold text-foreground hover:text-accent transition-colors duration-300">
                marcus@example.com
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Connect with me</p>
            <div className="flex flex-wrap gap-3">
              <SocialLink icon={<Github className="w-5 h-5" />} label="GitHub" url="https://github.com" />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" url="https://linkedin.com" />
              <SocialLink icon={<Twitter className="w-5 h-5" />} label="Twitter" url="https://twitter.com" />
            </div>
          </div>

          {/* Resume download */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Download Resume</p>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Marcus Chen. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Social Link Component
 */
function SocialLink({ icon, label, url }: { icon: React.ReactNode; label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}
