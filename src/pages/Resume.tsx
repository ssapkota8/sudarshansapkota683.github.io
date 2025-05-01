
import React from "react";
import Layout from "@/components/Layout/Layout";
import DownloadButton from "@/components/DownloadButton";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  // Sample resume data
  const education = [
    {
      degree: "Computer Systems Technology Diploma",
      institution: "Seneca College",
      location: "Toronto, Canada",
      date: "2022 - Present",
      description:
        "Specializing in networking, cloud computing, and cybersecurity. Coursework includes advanced networking, server administration, cloud infrastructure, and security implementation."
    }
    // Add more education entries as needed
  ];

  const experience = [
    {
      title: "IT Support Specialist (Internship)",
      company: "ABC Tech Solutions",
      location: "Toronto, ON",
      date: "Summer 2023",
      responsibilities: [
        "Provided technical support to over 50 users, resolving hardware and software issues",
        "Assisted with network maintenance and security updates",
        "Documented IT processes and created user guides for common procedures",
        "Contributed to the implementation of a new helpdesk ticketing system"
      ]
    },
    {
      title: "Network Administration Assistant (Part-time)",
      company: "XYZ Networks",
      location: "Toronto, ON",
      date: "2022 - 2023",
      responsibilities: [
        "Assisted with maintaining and troubleshooting network infrastructure",
        "Helped implement security measures including firewall configurations",
        "Conducted regular system backups and recovery testing",
        "Supported the migration to a new cloud-based storage solution"
      ]
    }
    // Add more experience entries as needed
  ];

  const projects = [
    {
      title: "Cloud Infrastructure Deployment",
      date: "2023",
      description:
        "Designed and deployed a scalable cloud infrastructure on AWS using Terraform, incorporating best practices for security and high availability."
    },
    {
      title: "Network Security Implementation",
      date: "2022",
      description:
        "Implemented comprehensive security measures for a small business network, including firewalls, IDS/IPS, and VPN solutions."
    },
    {
      title: "System Monitoring Dashboard",
      date: "2023",
      description:
        "Developed a web-based dashboard for monitoring system metrics using React and integrating with Prometheus for data collection."
    }
    // Add more projects as needed
  ];

  const technicalSkills = [
    { category: "Cloud Computing", skills: ["AWS", "Azure", "Cloud Architecture", "IaaS", "PaaS"] },
    { category: "Networking", skills: ["TCP/IP", "Routing", "Switching", "VPN", "Firewall Configuration"] },
    { category: "Security", skills: ["Network Security", "Vulnerability Assessment", "Security Protocols", "Encryption"] },
    { category: "Systems", skills: ["Linux Administration", "Windows Server", "Virtualization", "Docker"] },
    { category: "Programming", skills: ["Python", "Bash Scripting", "PowerShell", "JavaScript Basics"] },
    { category: "Tools", skills: ["Git", "Terraform", "Ansible", "Monitoring Tools", "Wireshark"] }
  ];

  const certifications = [
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      date: "Expected 2023"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "Expected 2024"
    }
    // Add more certifications as needed
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-portfolio-navy py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading text-4xl md:text-5xl mb-4">My Resume</h1>
            <p className="text-xl text-portfolio-muted mb-8 max-w-2xl mx-auto">
              A summary of my education, work experience, and technical skills in IT and cloud computing.
            </p>
            <DownloadButton
              fileUrl="#"
              fileName="Sudarshan_Sapkota_Resume.pdf"
              size="lg"
              className="mx-auto"
            >
              Download Full Resume (PDF)
            </DownloadButton>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold">Sudarshan Sapkota</h2>
                  <p className="text-portfolio-muted mt-1">Computer Systems Student | Cloud & Network Specialist</p>
                </div>
                <DownloadButton
                  fileUrl="#"
                  fileName="Sudarshan_Sapkota_Resume.pdf"
                  variant="outline"
                  className="mt-4 md:mt-0"
                >
                  Download PDF
                </DownloadButton>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:sudarshansapkota86@gmail.com"
                  className="flex items-center gap-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                >
                  <Mail size={18} />
                  sudarshansapkota86@gmail.com
                </a>
                <a
                  href="tel:+14376650843"
                  className="flex items-center gap-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                >
                  <Phone size={18} />
                  +1 437-665-0843
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <Tabs defaultValue="resume" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="skills">Skills & Certifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="resume" className="pt-6">
                {/* Professional Summary */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <UserIcon className="h-5 w-5" />
                    </span>
                    Professional Summary
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-portfolio-muted">
                        A Computer Systems student at Seneca College with a strong focus on cloud computing, 
                        networking, and cybersecurity. Skilled in implementing and managing IT infrastructure, 
                        with hands-on experience in network administration and cloud services. Seeking opportunities 
                        to apply technical knowledge and skills to solve complex IT problems and contribute to 
                        building secure and reliable systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <GraduationCapIcon className="h-5 w-5" />
                    </span>
                    Education
                  </h3>
                  {education.map((edu, index) => (
                    <Card key={index} className="mb-4">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{edu.degree}</h4>
                            <p className="text-portfolio-muted">{edu.institution}, {edu.location}</p>
                          </div>
                          <span className="text-portfolio-muted font-mono mt-1 md:mt-0">{edu.date}</span>
                        </div>
                        <p className="mt-2">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Work Experience */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <BriefcaseIcon className="h-5 w-5" />
                    </span>
                    Work Experience
                  </h3>
                  {experience.map((exp, index) => (
                    <Card key={index} className="mb-4">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{exp.title}</h4>
                            <p className="text-portfolio-muted">{exp.company}, {exp.location}</p>
                          </div>
                          <span className="text-portfolio-muted font-mono mt-1 md:mt-0">{exp.date}</span>
                        </div>
                        <ul className="mt-4 space-y-2 list-disc pl-5">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="text-portfolio-muted">{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Projects */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <CodeIcon className="h-5 w-5" />
                    </span>
                    Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{project.title}</h4>
                            <span className="text-portfolio-muted text-sm">{project.date}</span>
                          </div>
                          <p className="text-portfolio-muted text-sm">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <Button asChild variant="outline">
                      <Link to="/projects">View All Projects</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="pt-6">
                {/* Technical Skills */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <SettingsIcon className="h-5 w-5" />
                    </span>
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalSkills.map((skillGroup, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-4">{skillGroup.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.skills.map((skill, i) => (
                              <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Skill Proficiency */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <ChartIcon className="h-5 w-5" />
                    </span>
                    Skill Proficiency
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Cloud Computing</span>
                            <span className="text-portfolio-muted">80%</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Network Administration</span>
                            <span className="text-portfolio-muted">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Cybersecurity</span>
                            <span className="text-portfolio-muted">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Linux/Unix Systems</span>
                            <span className="text-portfolio-muted">80%</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Programming/Scripting</span>
                            <span className="text-portfolio-muted">70%</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <h3 className="heading text-2xl mb-4 flex items-center">
                    <span className="bg-portfolio-accent/20 text-portfolio-accent w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <AwardIcon className="h-5 w-5" />
                    </span>
                    Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{cert.name}</h4>
                              <p className="text-portfolio-muted text-sm">{cert.issuer}</p>
                            </div>
                            <span className="text-portfolio-muted text-sm">{cert.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-portfolio-navy text-white p-8 rounded-lg shadow-md">
              <div className="text-center">
                <h3 className="heading text-2xl mb-4">Ready to Discuss Opportunities?</h3>
                <p className="text-portfolio-muted mb-6">
                  I'm currently seeking opportunities in cloud computing, networking, and cybersecurity.
                  Feel free to reach out to discuss how I can contribute to your team.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Icon components
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default Resume;
