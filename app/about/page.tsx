import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Code, Server, Database, Lightbulb, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              About Me
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Learn more about my background, skills, and experience.
            </p>
          </div>
          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 py-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Professional Summary</h2>
              <p className="text-muted-foreground">
                I am a passionate Software Engineer with over 5 years of experience in developing scalable applications. 
                My expertise spans across frontend and backend development, with a focus on creating efficient, 
                maintainable, and user-friendly solutions.
              </p>
              <p className="text-muted-foreground">
                Throughout my career, I've worked with diverse teams to deliver high-quality software products 
                that solve real-world problems. I'm constantly learning and adapting to new technologies 
                to stay at the forefront of the industry.
              </p>
              <div className="pt-4">
                <Link href="/resume.pdf" target="_blank">
                  <Button>
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:contact@example.com" className="text-primary hover:underline">
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">LinkedIn:</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">GitHub:</span>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground">City, Country</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[980px] py-8">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Frontend Development</CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS, HTML/CSS
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Backend Development</CardTitle>
                  <Server className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Node.js, Express, Python, Django, RESTful APIs
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Database</CardTitle>
                  <Database className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    MongoDB, PostgreSQL, MySQL, Redis
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">DevOps</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Docker, Kubernetes, CI/CD, AWS, GitHub Actions
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Other Skills</CardTitle>
                  <Lightbulb className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Agile Methodologies, TDD, System Design, Problem Solving
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}