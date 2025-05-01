import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>

import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
        <h1 className="text-9xl font-bold text-portfolio-accent mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-portfolio-muted text-center max-w-md mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
