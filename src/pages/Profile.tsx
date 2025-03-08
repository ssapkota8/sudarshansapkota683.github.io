
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Send, 
  Phone, 
  Github, 
  Linkedin, 
  Book, 
  Briefcase,
  Code,
  Camera,
  Award,
  MapPin,
  Download,
  ExternalLink,
  Server,
  Shield,
  Database,
  Globe
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
            Contact Me
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
              Computer Systems Technician Student & Cook
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
                I'm a 20-year-old Computer Systems Technician student at Seneca Polytechnic College in Toronto, with a passion for technology and cybersecurity. In addition to my studies, I have experience in the culinary field, working as a cook at Absolute Comedy Club.
              </p>
              <p className="text-gray-700 mb-6">
                My journey began in Nepal, where I developed an interest in both technology and cooking. Now in Canada, I'm pursuing my education in IT while honing my culinary skills. I'm particularly interested in cybersecurity, networking, and database management, and I aspire to build a career that bridges technology with practical problem-solving.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Study</h3>
                  <p className="text-gray-600">Seneca Polytechnic College</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">sudarshanofficial86@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interests</h3>
                  <p className="text-gray-600">Cybersecurity, Cooking</p>
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
                      <h3 className="text-xl font-bold">Diploma in Computer Systems Technician</h3>
                      <p className="text-royal-dark">Seneca Polytechnic College, Toronto</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2023 - Present (Expected 2025)
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Currently pursuing a diploma in Computer Systems Technician with a focus on cybersecurity, networking, and database management. Participating in hands-on projects using technologies like Splunk, Azure, and web server configurations.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 2 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Food Handling Certificate</h3>
                      <p className="text-royal-dark">The Canadian Institute of Food Safety</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        2023
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Completed certification in food safety and handling practices, essential for my work in the culinary field at Absolute Comedy Club and other establishments.
                  </p>
                </div>
              </motion.div>
              
              {/* Timeline Item 3 */}
              <motion.div variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">High School Diploma</h3>
                      <p className="text-royal-dark">National School of Sciences, Kathmandu, Nepal</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-royal-light/10 text-royal-dark text-sm font-medium rounded-full">
                        Graduated
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Completed high school education with a focus on sciences and mathematics, which built the foundation for my current technical studies.
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
              Featured Projects & Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              A showcase of my work in both technical and culinary fields.
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={portfolioInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1 - Cybersecurity */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Cybersecurity Project" 
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
                  <h3 className="text-xl font-bold mb-2">SEC320 Network Security</h3>
                  <p className="text-gray-600 mb-4">
                    Security monitoring project using Splunk and Wireshark for network traffic analysis. Implemented and configured security tools for threat detection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Splunk</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Wireshark</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">FTK Imager</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Network Security</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project 2 - Database */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Database Project" 
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
                  <h3 className="text-xl font-bold mb-2">DAT330 Database Management</h3>
                  <p className="text-gray-600 mb-4">
                    Designed and implemented relational databases with SQL, focusing on data integrity, normalization, and efficient query optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">MySQL</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">PostgreSQL</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">SQL Server</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Data Modeling</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Project 3 - Culinary */}
            <motion.div variants={itemVariants} className="group">
              <div className="royal-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Culinary Experience" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      <a href="#" className="bg-royal hover:bg-royal-dark text-midnight p-2 rounded-full transition-colors duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Absolute Comedy Club - Cook</h3>
                  <p className="text-gray-600 mb-4">
                    Prepare and cook food to order for comedy club patrons. Manage kitchen operations during busy performance nights while maintaining food quality standards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Food Preparation</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Kitchen Management</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Food Safety</span>
                    <span className="text-xs font-medium bg-royal/10 text-royal-dark px-3 py-1 rounded-full">Team Coordination</span>
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
              Tools, technologies, and skills I've developed throughout my education and work experience.
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
                    <span className="font-medium text-gray-700">Cybersecurity</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Networking</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Database Management</span>
                    <span className="text-sm text-gray-500">70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Web Development</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Culinary Arts</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Food Safety</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-royal rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Tool Expertise */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-royal" />
                Tool Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 bg-royal/10 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Security Tools</h4>
                    <p className="text-gray-600 text-sm">Splunk, FTK Imager, Wireshark</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 bg-royal/10 p-2 rounded-full">
                    <Server className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Networking</h4>
                    <p className="text-gray-600 text-sm">VMware, pfSense, AWS EC2, VPC</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 bg-royal/10 p-2 rounded-full">
                    <Database className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Databases</h4>
                    <p className="text-gray-600 text-sm">MySQL, PostgreSQL, SQL Server</p>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md flex items-start">
                  <div className="mr-4 bg-royal/10 p-2 rounded-full">
                    <Globe className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Web Development</h4>
                    <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
                  </div>
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
                    <h4 className="font-bold">Food Handling Certificate</h4>
                    <p className="text-gray-600 text-sm">The Canadian Institute of Food Safety, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-royal/10 p-2 rounded-full">
                    <Award className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold">Technical Courses Completion</h4>
                    <p className="text-gray-600 text-sm">Seneca Polytechnic College, 2023-Present</p>
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
              A visual journey through my professional and academic experiences.
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Programming" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Coding Session</h3>
                    <p className="text-white/80">Working on a programming assignment</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1631651364808-e62804727f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Cooking" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">In the Kitchen</h3>
                    <p className="text-white/80">Preparing dishes at Absolute Comedy Club</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Study Session" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Study Session</h3>
                    <p className="text-white/80">Preparing for exams at Seneca College</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Networking lab" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Networking Lab</h3>
                    <p className="text-white/80">Setting up network infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative h-full overflow-hidden rounded-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80" 
                  alt="Toronto skyline" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Toronto Life</h3>
                    <p className="text-white/80">My new home in Canada</p>
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
              Have a project in mind or want to discuss a potential opportunity? Let's talk!
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
                      <p className="text-ivory/80">sudarshanofficial86@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-royal-light mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-ivory/80">+1 437-665-0843</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-royal-light mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-ivory/80">1 Winlock Park, Toronto, Ontario, Canada</p>
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
              <p className="text-ivory/60">Computer Systems Technician Student & Cook</p>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
