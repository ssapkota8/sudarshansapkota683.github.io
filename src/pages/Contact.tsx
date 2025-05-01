import React from "react";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-portfolio-navy py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading text-4xl md:text-5xl mb-4">Get in Touch</h1>
            <p className="text-xl text-portfolio-muted mb-6 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:sudarshansapkota86@gmail.com" 
                        className="text-portfolio-accent hover:underline"
                      >
                        sudarshansapkota86@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Phone</h3>
                      <a 
                        href="tel:+14376650843" 
                        className="text-portfolio-accent hover:underline"
                      >
                        +1 437-665-0843
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 rounded-full p-3">
                      <Linkedin className="h-6 w-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-accent hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 rounded-full p-3">
                      <Github className="h-6 w-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">GitHub</h3>
                      <a 
                        href="https://github.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-accent hover:underline"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-portfolio-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-portfolio-muted">Toronto, Ontario, Canada</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading text-2xl mb-6">Send Me a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="heading text-2xl mb-6 text-center">Location</h2>
          <div className="bg-white rounded-lg shadow-md p-2 h-80">
            <iframe
              title="Toronto Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289994948!2d-79.54286155!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1693274792089!5m2!1sen!2sca"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
