import React from "react";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, Briefcase, Calendar, Code, Database, Network, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const skills = [
    { name: "Cloud Computing (AWS, Azure)", level: 85 },
    { name: "Network Administration", level: 90 },
    { name: "Cybersecurity", level: 80 },
    { name: "Linux/Unix Administration", level: 85 },
    { name: "Windows Server", level: 75 },
    { name: "Virtualization", level: 80 },
    { name: "Python Programming", level: 70 },
    { name: "Bash Scripting", level: 75 },
    { name: "Docker/Containerization", level: 65 }
  ];

  const education = [
    {
      degree: "Computer Systems Technology Diploma",
      institution: "Seneca College",
      duration: "2022 - Present",
      description: "Specializing in networking and cloud infrastructure with focus on security implementation and system administration."
    },
    // Add more educational backgrounds as needed
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-portfolio-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-dark to-portfolio-navy opacity-90"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading text-4xl md:text-5xl mb-6">Sudarshan Sapkota</h1>
            <p className="text-portfolio-accent font-mono text-lg mb-6">
              IT Professional | Cloud Computing | Networking | Cybersecurity
            </p>
            <p className="text-xl text-portfolio-muted mb-8 max-w-2xl mx-auto">
              A Computer Systems student with a passion for building secure, reliable,
              and scalable IT infrastructure solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="default">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="heading text-2xl mb-4">About Me</h2>
                <div className="h-1 w-16 bg-portfolio-accent mb-6"></div>
                <div className="mb-8">
                  <img
                    src="/lovable-uploads/d7063389-1ea4-484b-8459-c736ed5aa4ba.png"
                    alt="Sudarshan Sapkota"
                    className="rounded-lg shadow-md w-full object-cover aspect-square"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-portfolio-muted">Toronto, ON, Canada</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a 
                      href="mailto:sudarshansapkota86@gmail.com" 
                      className="text-portfolio-accent hover:underline"
                    >
                      sudarshansapkota86@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a 
                      href="tel:+14376650843" 
                      className="text-portfolio-accent hover:underline"
                    >
                      +1 437-665-0843
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-12">
                <div>
                  <h3 className="heading text-2xl mb-4">Professional Summary</h3>
                  <div className="prose max-w-none text-portfolio-muted">
                    <p className="mb-4">
                      I am a Computer Systems student at Seneca College with a focus on cloud computing, 
                      networking, and cybersecurity. My passion lies in designing and implementing robust 
                      IT solutions that ensure the security, reliability, and efficiency of modern 
                      digital infrastructure.
                    </p>
                    <p className="mb-4">
                      With a strong foundation in systems administration and network management, I am 
                      constantly expanding my knowledge in cloud technologies like AWS and Azure, 
                      containerization, and automation tools to stay at the forefront of the ever-evolving 
                      IT landscape.
                    </p>
                    <p>
                      I am currently seeking opportunities where I can apply my technical skills and 
                      knowledge to solve complex IT problems and contribute to building secure and 
                      scalable infrastructure for organizations.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="heading text-2xl mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <Card key={index} className="border-l-4 border-l-portfolio-accent">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 className="font-semibold text-lg">{edu.degree}</h4>
                            <span className="text-sm text-portfolio-muted font-mono">{edu.duration}</span>
                          </div>
                          <p className="text-portfolio-muted mb-4">{edu.institution}</p>
                          <p>{edu.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="heading text-2xl mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-portfolio-muted">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas of Expertise */}
                <div>
                  <h3 className="heading text-2xl mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Cloud className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Cloud Computing</h4>
                        <p className="text-portfolio-muted">
                          Designing and implementing secure, scalable cloud infrastructure on AWS and Azure.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                          <Network className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Network Administration</h4>
                        <p className="text-portfolio-muted">
                          Setting up and managing enterprise networks with focus on performance and security.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <Shield className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Cybersecurity</h4>
                        <p className="text-portfolio-muted">
                          Implementing security measures, conducting audits, and vulnerability assessments.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <Server className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">System Administration</h4>
                        <p className="text-portfolio-muted">
                          Managing and maintaining Linux/Unix and Windows server environments efficiently.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Database className="h-6 w-6 text-yellow-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Database Management</h4>
                        <p className="text-portfolio-muted">
                          Working with SQL and NoSQL databases, ensuring performance and security.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex gap-4">
                      <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Code className="h-6 w-6 text-indigo-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Scripting & Automation</h4>
                        <p className="text-portfolio-muted">
                          Creating scripts and automation workflows with Python, Bash, and PowerShell.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button asChild size="lg">
                    <Link to="/resume" className="flex items-center gap-2">
                      View My Full Resume
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-portfolio-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading text-3xl mb-4">Let's Work Together</h2>
            <p className="text-portfolio-muted text-lg mb-8 max-w-2xl mx-auto">
              I'm currently looking for new opportunities to apply my skills and knowledge.
              If you're interested in working together or have any questions, feel free to reach out.
            </p>
            <Button asChild size="lg" variant="default">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Cloud icon component
const Cloud = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
};

export default Profile;
