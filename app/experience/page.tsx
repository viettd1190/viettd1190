"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// Experience data
const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Software Engineer",
    period: "Jan 2022 - Present",
    description: "Leading a team of developers to build scalable web applications. Implementing best practices and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    id: 2,
    company: "Digital Innovations",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dec 2021",
    description: "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality products.",
    technologies: ["React", "Express", "PostgreSQL", "Docker", "Redux"],
  },
  {
    id: 3,
    company: "WebTech Startup",
    position: "Frontend Developer",
    period: "Jun 2018 - Feb 2020",
    description: "Built responsive user interfaces and implemented new features. Worked closely with designers to ensure pixel-perfect implementations.",
    technologies: ["JavaScript", "HTML/CSS", "Vue.js", "Sass", "Git"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Work Experience
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              My professional journey and career highlights.
            </p>
          </div>
          <div className="mx-auto max-w-[980px] py-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full border bg-background">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>{exp.position}</CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                          <CardDescription className="text-base font-medium">
                            {exp.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p>{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}