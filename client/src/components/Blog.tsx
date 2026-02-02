import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Blog Section Component
 * Design: Minimal Modernism
 * - Featured technical articles
 * - Clean card layout with minimal styling
 * - Reading time estimates
 * - Category tags
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Node.js Applications",
    excerpt: "Explore best practices for designing Node.js applications that can handle millions of requests. Learn about clustering, load balancing, and optimization techniques.",
    category: "Backend",
    readingTime: 12,
    date: "2024-01-15",
    slug: "scalable-nodejs",
  },
  {
    id: "2",
    title: "React Performance Optimization Techniques",
    excerpt: "Deep dive into React performance optimization. Discover memoization, code splitting, lazy loading, and profiling tools to make your apps lightning fast.",
    category: "Frontend",
    readingTime: 10,
    date: "2024-01-10",
    slug: "react-performance",
  },
  {
    id: "3",
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Learn essential database design patterns including normalization, denormalization, and sharding. Understand when to use each pattern in your architecture.",
    category: "Database",
    readingTime: 15,
    date: "2024-01-05",
    slug: "db-patterns",
  },
  {
    id: "4",
    title: "TypeScript Advanced Types Explained",
    excerpt: "Master advanced TypeScript features like generics, conditional types, and mapped types. Build more robust and type-safe applications.",
    category: "TypeScript",
    readingTime: 11,
    date: "2023-12-28",
    slug: "typescript-advanced",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground">Latest Articles</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technical insights and lessons learned from building production systems.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10 font-semibold rounded-md transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Blog Card Component
 * Minimal blog post preview card
 */
function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer">
      {/* Meta information */}
      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-xs">
          {post.category}
        </span>
        <span>{formattedDate}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">{post.readingTime} min read</span>
        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </article>
  );
}
