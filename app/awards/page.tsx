"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Awards data
const awards = [
  {
    id: 1,
    title: "Best Innovation Award",
    organization: "Tech Conference 2023",
    date: "November 2023",
    description: "Recognized for developing an innovative solution that addresses real-world problems in the fintech industry.",
  },
  {
    id: 2,
    title: "Outstanding Contribution",
    organization: "Open Source Community",
    date: "July 2022",
    description: "Awarded for significant contributions to open-source projects that have benefited the developer community.",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    organization: "Global Code Challenge",
    date: "March 2021",
    description: "First place in a 48-hour hackathon for developing a sustainable technology solution.",
  },
];

// Activities data
const activities = [
  {
    id: 1,
    title: "Tech Conference Speaker",
    organization: "DevCon 2023",
    date: "October 2023",
    description: "Presented a talk on 'Scaling Microservices Architecture' to an audience of 500+ developers.",
  },
  {
    id: 2,
    title: "Open Source Contributor",
    organization: "Various Projects",
    date: "Ongoing",
    description: "Active contributor to several open-source projects, focusing on improving documentation and adding new features.",
  },
  {
    id: 3,
    title: "Tech Mentor",
    organization: "Code Academy",
    date: "2021 - Present",
    description: "Mentoring junior developers and students, providing guidance on career development and technical skills.",
  },
  {
    id: 4,
    title: "Workshop Facilitator",
    organization: "Local Developer Meetup",
    date: "Quarterly",
    description: "Conducting hands-on workshops on modern web development technologies and best practices.",
  },
];

export default function AwardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Awards & Activities
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Recognition and community involvement throughout my career.
            </p>
          </div>
          <div className="mx-auto max-w-[980px] py-8">
            <Tabs defaultValue="awards" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
                <TabsTrigger value="activities">Community Activities</TabsTrigger>
              </TabsList>
              <TabsContent value="awards" className="mt-6">
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <motion.div
                      key={award.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader className="flex flex-row items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <CardTitle>{award.title}</CardTitle>
                            <CardDescription className="flex items-center">
                              {award.organization}
                              <span className="mx-2">•</span>
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3" />
                                {award.date}
                              </span>
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{award.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="activities" className="mt-6">
                <div className="space-y-6">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader className="flex flex-row items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <CardTitle>{activity.title}</CardTitle>
                            <CardDescription className="flex items-center">
                              {activity.organization}
                              <span className="mx-2">•</span>
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3" />
                                {activity.date}
                              </span>
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{activity.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}