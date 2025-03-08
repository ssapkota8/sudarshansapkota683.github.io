
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Send, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  Book, 
  Briefcase,
  Code,
  Camera,
  Award,
  Paperclip,
  Download,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Profile = () => {
  const { toast } = useToast();
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const educationInView = useInView(educationRef, { once: true, amount: 0.2 });
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ivory-dark">
      {/* Navigation */}
      <nav className="bg-midnight/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="text-royal font-bold text-2xl font-serif tracking-tight">
            <span className="text-ivory">Sudarshan</span> Sapkota
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">About</a>
            <a href="#education" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">Education</a>
            <a href="#portfolio" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">Portfolio</a>
            <a href="#skills" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">Skills</a>
            <a href="#gallery" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">Gallery</a>
            <a href="#contact" className="text-ivory opacity-80 hover:opacity-100 text-sm font-medium transition-all duration-200 link-underline">Contact</a>
          </div>
          
          <a href="#contact" className="bg-royal hover:bg-royal-dark text-midnight font-medium py-2 px-4 rounded-full text-sm transition-all duration-300">
            Hire Me
          </a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 hero-mask relative bg-gradient-to-b from-midnight to-midnight-light">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-ivory mb-4">
              Sudarshan <span className="text-royal">Sapkota</span>
            </h1>
            <p className="text-xl md:text-2xl text-ivory/80 mb-8 max-w-2xl mx-auto">
              Software Developer & Web Designer
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#contact" 
                className="bg-royal hover:bg-royal-dark text-midnight font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-royal text-royal hover:bg-royal/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hello, I'm Sudarshan Sapkota
              </h2>
              <p className="text-gray-700 mb-4">
                I'm a passionate software developer and web designer with 5+ years of experience in creating beautiful, functional websites and applications. I specialize in modern web technologies and have a keen eye for design.
              </p>
              <p className="text-gray-700 mb-6">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also provide exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-gray-600">5+ Years</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">contact@sudarshan.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Availability</h3>
                  <p className="text-gray-600">Available for hire</p>
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-royal hover:text-royal-dark font-medium transition-colors duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-royal/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Sudarshan Sapkota" 
                  className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" ref={educationRef} className="py-20 px-4 md:px-6 bg-gradient-to-b from-ivory-dark to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={educationInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
            >
              My Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Education & Qualifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              My academic background and professional certifications that have shaped my career path.
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                      <p className="text-royal-dark">Tribhuvan University</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2016 - 2020
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Graduated with first-class honors, specializing in software development and web technologies. Completed thesis on modern web frameworks comparison.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 2 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">AWS Certified Developer</h3>
                      <p className="text-royal-dark">Amazon Web Services</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2021
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Certified AWS Developer Associate with expertise in deploying scalable and fault-tolerant applications on AWS infrastructure.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 3 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Full Stack Web Development</h3>
                      <p className="text-royal-dark">Udemy Professional Certification</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2019
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive training in modern web development including React, Node.js, and database management systems.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 4 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Higher Secondary Education</h3>
                      <p className="text-royal-dark">Nepal Higher Secondary Education Board</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2014 - 2016
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Completed with distinction in Science with Computer Science as a major subject.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={portfolioInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              A showcase of my recent work, projects, and collaborations.
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1 */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="E-commerce Platform" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-600 mb-4">
                    A fully responsive e-commerce website with product management system, user authentication, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">React</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Node.js</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">MongoDB</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Stripe</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Health Tracking Application" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Health Tracking App</h3>
                  <p className="text-gray-600 mb-4">
                    Mobile application for tracking fitness activities, nutrition, and health metrics with data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">React Native</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Firebase</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Chart.js</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Redux</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Project Management Tool" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Management Tool</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive project management application with task tracking, team collaboration, and reporting features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Vue.js</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Express</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">PostgreSQL</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Socket.io</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center bg-royal hover:bg-royal-dark text-midnight font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4 md:px-6 bg-gradient-to-b from-ivory-dark to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={skillsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
            >
              Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Tools, technologies, and skills I've mastered throughout my career.
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-royal" />
                Technical Skills
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">JavaScript / TypeScript</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">React / React Native</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Node.js / Express</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">HTML / CSS / SCSS</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">MongoDB / PostgreSQL</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">AWS / Firebase</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Professional Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-royal" />
                Professional Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">UI/UX Design</h4>
                  <p className="text-gray-600 text-sm">Creating intuitive and visually appealing user interfaces</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Responsive Design</h4>
                  <p className="text-gray-600 text-sm">Building websites that work on all devices and screen sizes</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">API Development</h4>
                  <p className="text-gray-600 text-sm">Creating robust and scalable RESTful APIs</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Project Management</h4>
                  <p className="text-gray-600 text-sm">Leading teams and managing development workflows</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Problem Solving</h4>
                  <p className="text-gray-600 text-sm">Finding innovative solutions to complex technical challenges</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Communication</h4>
                  <p className="text-gray-600 text-sm">Clearly conveying technical concepts to various stakeholders</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-royal" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-royal/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold">AWS Certified Developer Associate</h4>
                    <p className="text-gray-600 text-sm">Amazon Web Services, 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-royal/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold">Professional Full Stack Developer</h4>
                    <p className="text-gray-600 text-sm">Udemy, 2019</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-royal/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold">React Native Specialist</h4>
                    <p className="text-gray-600 text-sm">Coursera, 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={galleryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
            >
              Photo Gallery
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Professional Life in Pictures
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              A visual journey through my professional career and achievements.
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2 row-span-2">
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Team Meeting</h3>
                    <p className="text-white/80">Collaboration session with the development team</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Collaboration</h3>
                    <p className="text-white/80">Working together on project solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Working on laptop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Remote Work</h3>
                    <p className="text-white/80">Focused coding session</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Conference presentation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Conference Talk</h3>
                    <p className="text-white/80">Speaking at a tech conference</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Coding session" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Problem Solving</h3>
                    <p className="text-white/80">Working through complex challenges</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4 md:px-6 bg-gradient-to-b from-ivory-dark to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={contactInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss a potential collaboration? Let's talk!
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              {/* Contact Information */}
              <div className="bg-royal-gradient text-ivory p-8 md:p-12 md:w-2/5">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-ivory/80 mb-8">
                  Feel free to reach out. I'll get back to you as soon as possible!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-royal-light mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-ivory/80">contact@sudarshandev.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-royal-light mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-ivory/80">+977 98XXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h4 className="font-medium mb-4">Social Media</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-midnight/30 hover:bg-midnight/50 text-royal p-3 rounded-full transition-colors duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="bg-midnight/30 hover:bg-midnight/50 text-royal p-3 rounded-full transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="bg-midnight/30 hover:bg-midnight/50 text-royal p-3 rounded-full transition-colors duration-300">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 md:p-12 md:w-3/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal/50 focus:border-royal outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal/50 focus:border-royal outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal/50 focus:border-royal outline-none transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal/50 focus:border-royal outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-royal hover:bg-royal-dark text-midnight font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-midnight text-ivory py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-royal">Sudarshan</span> Sapkota
              </h3>
              <p className="text-ivory/60">Software Developer & Web Designer</p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="flex space-x-4">
                <a href="#" className="text-ivory/60 hover:text-royal transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-ivory/60 hover:text-royal transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-ivory/60 hover:text-royal transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-ivory/60 hover:text-royal transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-ivory/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-ivory/60 text-sm">
              © {new Date().getFullYear()} Sudarshan Sapkota. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-ivory/60 hover:text-royal text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-ivory/60 hover:text-royal text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-ivory/60 hover:text-royal text-sm transition-colors duration-300">
                Credits
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
