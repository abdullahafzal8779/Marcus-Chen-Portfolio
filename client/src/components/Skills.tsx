/**
 * Skills Section Component
 * Design: Minimal Modernism
 * - Skills organized by category
 * - Proficiency indicators using visual bars
 * - Clean, minimal presentation without clutter
 */

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number; // 0-100
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 92 },
      { name: "Next.js", proficiency: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", proficiency: 93 },
      { name: "Express", proficiency: 90 },
      { name: "PostgreSQL", proficiency: 87 },
      { name: "MongoDB", proficiency: 85 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", proficiency: 88 },
      { name: "Git", proficiency: 95 },
      { name: "AWS", proficiency: 82 },
      { name: "CI/CD", proficiency: 85 },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "GraphQL", proficiency: 85 },
      { name: "REST APIs", proficiency: 93 },
      { name: "Testing", proficiency: 88 },
      { name: "System Design", proficiency: 84 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-2xl font-bold font-poppins text-foreground border-b border-border pb-3">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skill Bar Component
 * Visual proficiency indicator with animated bar
 */
function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.proficiency}%`,
            animation: "slideIn 1s ease-out",
          }}
        />
      </div>
    </div>
  );
}
