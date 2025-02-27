import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Software Engineer & Technical Leader
            </p>
          </div>
          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 py-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                "I believe in writing clean, maintainable code that solves real-world problems efficiently."
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/about">
                  <Button className="w-full">
                    About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resume.pdf" target="_blank">
                  <Button variant="outline" className="w-full">
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@example.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border">
                <Image
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}