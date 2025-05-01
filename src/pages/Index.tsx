// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p>
      </div>
    </div>
import React from "react";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Briefcase, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Hero />

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="heading text-3xl mb-2">About Me</h2>
                <div className="h-1 w-20 bg-portfolio-accent mb-6"></div>
              </div>

              <p className="text-portfolio-muted">
                I'm a Computer Systems student at Seneca College with a passion for cloud computing, 
                networking, and cybersecurity. My goal is to build secure, scalable, and efficient 
                IT infrastructure solutions for modern businesses.
              </p>

              <p className="text-portfolio-muted">
                Through my education and projects, I've developed skills in network security, 
                cloud architecture, system administration, and software development. I'm constantly 
                learning new technologies and best practices to stay at the forefront of the IT field.
              </p>

              <div className="pt-4">
                <Button asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    Learn More About Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-sm">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/d7063389-1ea4-484b-8459-c736ed5aa4ba.png"
                  alt="Sudarshan Sapkota"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-full w-full border-2 border-portfolio-accent rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading text-3xl mb-2">Featured Projects</h2>
            <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="text-portfolio-muted max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills and interests in IT and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Project Cards - Would be replaced with real projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Cloud Infrastructure Setup</h3>
                <p className="text-portfolio-muted mb-4">
                  A comprehensive AWS cloud infrastructure deployment using Terraform for infrastructure as code.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">AWS</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Terraform</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">DevOps</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-portfolio-accent hover:underline font-medium inline-flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Network Security Analysis</h3>
                <p className="text-portfolio-muted mb-4">
                  A comprehensive security audit and implementation of security measures for an enterprise network.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Security</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Networking</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Firewall</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-portfolio-accent hover:underline font-medium inline-flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Web Application Dashboard</h3>
                <p className="text-portfolio-muted mb-4">
                  A responsive web dashboard for monitoring cloud resources and system performance metrics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Monitoring</span>
                </div>
                <Link 
                  to="/projects" 
                  className="text-portfolio-accent hover:underline font-medium inline-flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section bg-portfolio-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg transition-transform hover:transform hover:-translate-y-1">
              <div className="rounded-full bg-portfolio-accent/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-portfolio-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-xl">Profile</h3>
              <p className="text-portfolio-muted mb-4">Learn more about my background, education, and career goals.</p>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
                <Link to="/profile">View Profile</Link>
              </Button>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg transition-transform hover:transform hover:-translate-y-1">
              <div className="rounded-full bg-portfolio-accent/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-portfolio-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-xl">Resume</h3>
              <p className="text-portfolio-muted mb-4">Check out my education, skills, and professional experience.</p>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
                <Link to="/resume">View Resume</Link>
              </Button>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg transition-transform hover:transform hover:-translate-y-1">
              <div className="rounded-full bg-portfolio-accent/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-portfolio-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-xl">Projects</h3>
              <p className="text-portfolio-muted mb-4">Browse through the various projects I've worked on.</p>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg transition-transform hover:transform hover:-translate-y-1">
              <div className="rounded-full bg-portfolio-accent/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-portfolio-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-xl">Contact</h3>
              <p className="text-portfolio-muted mb-4">Get in touch with me for collaborations or opportunities.</p>
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
