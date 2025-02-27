"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A content management system for creating and publishing blog posts with user authentication and comments.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Next.js", "Markdown", "Auth0", "Vercel", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Projects
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              A showcase of my recent work and personal projects.
            </p>
          </div>
          <div className="mx-auto max-w-[1200px] py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={project.github} target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                      <Link href={project.demo} target="_blank" rel="noreferrer">
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}