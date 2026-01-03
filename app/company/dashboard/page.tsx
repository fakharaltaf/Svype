"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Briefcase, TrendingUp, Eye, Plus, Settings, LogOut, FileText, PenSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function CompanyDashboard() {
  const router = useRouter()
  const [stats] = useState({
    activeJobs: 5,
    totalApplicants: 142,
    viewsThisWeek: 387,
    hiredThisMonth: 8,
  })

  const recentJobs = [
    { id: 1, title: "Senior Frontend Engineer", applicants: 23, status: "active", posted: "2 days ago" },
    { id: 2, title: "Product Designer", applicants: 18, status: "active", posted: "1 week ago" },
    { id: 3, title: "Backend Developer", applicants: 31, status: "active", posted: "1 week ago" },
    { id: 4, title: "Marketing Lead", applicants: 15, status: "closed", posted: "2 weeks ago" },
  ]

  const recentApplicants = [
    { id: 1, name: "Sarah Johnson", job: "Senior Frontend Engineer", status: "pending", applied: "2 hours ago" },
    { id: 2, name: "Michael Chen", job: "Product Designer", status: "pending", applied: "5 hours ago" },
    { id: 3, name: "Emma Wilson", job: "Backend Developer", status: "reviewing", applied: "1 day ago" },
    { id: 4, name: "James Brown", job: "Senior Frontend Engineer", status: "pending", applied: "1 day ago" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">TechCorp Inc.</h1>
              <p className="text-sm text-muted-foreground">Company Dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => router.push("/company/posts")}>
                Posts
              </Button>
              <Button variant="ghost" size="icon" onClick={() => router.push("/")}>
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => router.push("/")}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.activeJobs}</p>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalApplicants}</p>
                  <p className="text-sm text-muted-foreground">Applicants</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.viewsThisWeek}</p>
                  <p className="text-sm text-muted-foreground">Views</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.hiredThisMonth}</p>
                  <p className="text-sm text-muted-foreground">Hired</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <Button size="lg" className="h-auto py-4" onClick={() => router.push("/company/post-job")}>
            <Plus className="w-5 h-5 mr-2" />
            Post New Job
          </Button>
          <Button size="lg" variant="outline" className="h-auto py-4" onClick={() => router.push("/company/review-applicants")}>
            <Users className="w-5 h-5 mr-2" />
            Review Applicants
          </Button>
          <Button size="lg" variant="outline" className="h-auto py-4" onClick={() => router.push("/company/posts")}>
            <PenSquare className="w-5 h-5 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applicants">Recent Applicants</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-4">
            {recentJobs.map((job) => (
              <Card key={job.id} className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <Badge variant={job.status === "active" ? "default" : "secondary"}>
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.applicants} applicants
                        </span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="applicants" className="space-y-4">
            {recentApplicants.map((applicant) => (
              <Card key={applicant.id} className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{applicant.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {applicant.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Applied for: {applicant.job}</p>
                        <p>{applicant.applied}</p>
                      </div>
                    </div>
                    <Button size="sm">Review</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
