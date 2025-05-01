import React from "react";
import Layout from "@/components/Layout/Layout";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      description:
        "Automated deployment of multi-tier cloud infrastructure using AWS CloudFormation and Terraform, implementing infrastructure as code principles.",
      technologies: ["AWS", "Terraform", "CloudFormation", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      documents: [
        { name: "Infrastructure Documentation", url: "#" },
        { name: "Deployment Guide", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Network Security Implementation",
      description:
        "Designed and implemented a comprehensive network security architecture including firewalls, IDS/IPS, and secure VPN for a small business.",
      technologies: ["Networking", "Security", "Firewall", "VPN"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      documents: [
        { name: "Security Architecture", url: "#" },
        { name: "Implementation Guide", url: "#" }
      ]
    },
    {
      id: 3,
      title: "System Monitoring Dashboard",
      description:
        "A responsive web dashboard for monitoring system performance metrics, built with React and integrating with Prometheus for data collection.",
      technologies: ["React", "TypeScript", "Prometheus", "Grafana"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      documents: [
        { name: "User Guide", url: "#" },
        { name: "Technical Documentation", url: "#" }
      ]
    },
    {
      id: 4,
      title: "Automated Backup Solution",
      description:
        "Implemented an automated backup and recovery solution for critical business data using AWS S3, Glacier, and custom scripts.",
      technologies: ["AWS", "Python", "Bash", "S3", "Glacier"],
      imageUrl: "https://images.unsplash.com/photo-1586772802721-105cb894ad39?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      documents: [
        { name: "Backup Strategy", url: "#" },
        { name: "Recovery Procedures", url: "#" }
      ]
    },
    {
      id: 5,
      title: "Containerized Application Deployment",
      description:
        "Containerized a legacy application using Docker and orchestrated deployment with Kubernetes for improved scalability and management.",
      technologies: ["Docker", "Kubernetes", "CI/CD", "DevOps"],
      imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      documents: [
        { name: "Container Architecture", url: "#" },
        { name: "Deployment Guide", url: "#" }
      ]
    },
    {
      id: 6,
      title: "Identity Management System",
      description:
        "Designed and implemented a centralized identity management system using Microsoft Active Directory and Azure AD for hybrid environments.",
      technologies: ["Active Directory", "Azure AD", "IAM", "PowerShell"],
      imageUrl: "https://images.unsplash.com/photo-1633265486501-b40df9dfc5d9?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/",
      documents: [
        { name: "System Architecture", url: "#" },
        { name: "Administration Guide", url: "#" }
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "cloud", label: "Cloud Computing" },
    { id: "networking", label: "Networking" },
    { id: "security", label: "Security" },
    { id: "devops", label: "DevOps" }
  ];

  const getFilteredProjects = (category: string) => {
    if (category === "all") return projects;
    
    const categoryMap: Record<string, string[]> = {
      cloud: ["AWS", "Azure", "CloudFormation", "Terraform", "S3", "Glacier"],
      networking: ["Networking", "VPN", "Firewall"],
      security: ["Security", "IAM", "Firewall", "VPN"],
      devops: ["CI/CD", "DevOps", "Docker", "Kubernetes", "Terraform"]
    };
    
    return projects.filter(project => 
      project.technologies.some(tech => categoryMap[category]?.includes(tech))
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-portfolio-navy py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading text-4xl md:text-5xl mb-4">My Projects</h1>
            <p className="text-xl text-portfolio-muted mb-6 max-w-2xl mx-auto">
              A collection of my work showcasing my skills in cloud computing, networking, 
              security, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container-custom">
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getFilteredProjects(category.id).map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                {getFilteredProjects(category.id).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-portfolio-muted text-lg">
                      No projects found in this category yet.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Approach Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading text-3xl mb-4">My Approach to Projects</h2>
            <p className="text-portfolio-muted">
              When working on projects, I follow a structured methodology to ensure the best outcomes.
              Here's how I typically approach my work:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Research & Planning</h3>
              <p className="text-portfolio-muted">
                Thoroughly researching requirements, technologies, and best practices to create a solid foundation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Design & Development</h3>
              <p className="text-portfolio-muted">
                Creating detailed designs and implementing solutions with a focus on security, scalability, and maintainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Testing & Documentation</h3>
              <p className="text-portfolio-muted">
                Rigorously testing all implementations and creating comprehensive documentation for future reference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
