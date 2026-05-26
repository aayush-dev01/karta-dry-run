export type BlogCategory = "All" | "Programs" | "Stories" | "News" | "Events";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: Exclude<BlogCategory, "All">;
  readTime: string;
  featured?: boolean;
};

export const blogCategories: BlogCategory[] = [
  "All",
  "Programs",
  "Stories",
  "News",
  "Events",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "karta-access-program-2026",
    title: "Karta Access Program 2026: Applications Now Open",
    excerpt:
      "Learn how rural students in Class XI and XII can join our holistic mentorship pathway from school to university.",
    content: `The Karta Access Program supports talented students from low-income rural communities through mentorship, skill development, and university readiness.

Students in Class XI and XII receive structured guidance over 2–3 years, including academic support, career counselling, and exposure to higher education pathways. Our team works closely with Jawahar Navodaya Vidyalayas, Eklavya Model Residential Schools, and community-based partner schools across India.

What you can expect as a participant:
• One-on-one mentorship from experienced educators
• University application and essay workshops
• English communication and digital literacy training
• Career exploration sessions with industry professionals

To become a Karta Scholar, students must first be an active member of the Karta Access Program. For questions, write to karta.access@karta-initiative.org.`,
    author: "Karta Team",
    date: "2026-05-15",
    category: "Programs",
    readTime: "4 min read",
    featured: true,
  },
  {
    slug: "scholar-spotlight-priya",
    title: "Scholar Spotlight: From JNV Bihar to Ashoka University",
    excerpt:
      "Priya shares how mentorship and a 100% scholarship helped her pursue her dream of studying liberal arts.",
    content: `Priya grew up in a rural village in Bihar and attended a Jawahar Navodaya Vidyalaya. Despite strong academic performance, she lacked access to information about premier universities and the application process felt overwhelming.

Through Karta's mentorship program, she received guidance on applications, essays, and interviews. Mentors helped her identify Ashoka University as a fit for her interests in social sciences and public policy.

Today, she is a Karta Scholar at Ashoka University on a full scholarship, pursuing her undergraduate degree while mentoring younger students from her community.

"Karta didn't just help me apply—they helped me believe I belonged there," Priya says. "For the first time, I could see a path that matched my ambition."`,
    author: "Communications",
    date: "2026-04-22",
    category: "Stories",
    readTime: "5 min read",
  },
  {
    slug: "partner-universities-2025",
    title: "Welcoming New University Partners Across India and Abroad",
    excerpt:
      "Karta expands its network of partner institutions to create more pathways for rural youth.",
    content: `We are proud to announce new partnerships with leading universities in India and internationally, strengthening our mission to connect rural talent with world-class education.

Our partner network includes institutions such as Ashoka University, FLAME University, Krea University, Plaksha University, and universities in the UK and Canada.

These partnerships enable Karta Scholars to access scholarships, internships, and career readiness programs. Each partner shares our commitment to diversity, equity, and supporting first-generation learners.

We look forward to welcoming more scholars to these campuses in the coming academic year.`,
    author: "Partnerships Team",
    date: "2026-03-10",
    category: "News",
    readTime: "3 min read",
  },
  {
    slug: "stem-career-workshop-2026",
    title: "STEM Career Development Workshop for Karta Scholars",
    excerpt:
      "Hands-on sessions on research pathways, coding basics, and careers in science and technology.",
    content: `Karta recently hosted a STEM Career Development workshop led by Dr. Srishti Arora and our STEM program team. Scholars from Class XI and XII explored careers in engineering, data science, biotechnology, and research.

The two-day workshop included:
• Panel discussions with professionals from IITs and leading tech companies
• Hands-on coding and data visualization exercises
• Guidance on choosing science streams and preparing for entrance exams

Participants left with personalized career roadmaps and connections to mentors in their fields of interest.`,
    author: "STEM Program",
    date: "2026-02-18",
    category: "Events",
    readTime: "4 min read",
  },
  {
    slug: "mentor-volunteer-drive",
    title: "Calling Volunteer Mentors: Join the Karta Community",
    excerpt:
      "Share your expertise and guide the next generation of leaders from rural India.",
    content: `Karta is expanding its mentor network and inviting professionals, alumni, and educators to volunteer their time.

Mentors commit to regular check-ins with assigned scholars—helping with academics, career planning, and building confidence. Training and orientation are provided by our program team.

Whether you are based in India or abroad, your guidance can transform a student's trajectory. Visit our official site to learn more about volunteer mentor opportunities.`,
    author: "Program Team",
    date: "2026-01-30",
    category: "News",
    readTime: "3 min read",
  },
  {
    slug: "impact-report-2025",
    title: "2025 Impact at a Glance: Scholars, Schools, and States",
    excerpt:
      "A year of growth across 10 states and 6 union territories—see how Karta reached more students than ever.",
    content: `2025 was a milestone year for the Karta Initiative India Foundation. We expanded our footprint to 10 states and 6 union territories, partnering with over 100 schools.

Highlights from the year:
• 55+ Karta Scholars placed at premier universities in India and abroad
• 30+ partner universities in our global network
• Expanded STEM and work-readiness programming for final-year students

We remain focused on our mission: equalizing access and unlocking opportunities for girls, first-generation learners, and youth from marginalized communities.`,
    author: "Karta Team",
    date: "2025-12-12",
    category: "News",
    readTime: "4 min read",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
