import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Instagram, ExternalLink, Menu, X, User, Code, Briefcase, MessageCircle, ArrowDown, Download, Star, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Secure File Exchange System",
      description: "This project is a secure, offline web-based application designed to ensure the confidentiality and integrity of sensitive file exchanges. It features a 10-layer encryption and decryption module, secure user authentication, and session management, all within a local environment using XAMPP. A dedicated MySQL database manages user data, transaction logs, and activity history.",
      technologies: ["PHP", "HTML/CSS", "Javascript", "Encryption", "XAMPP"],
      status: "Completed",
      featured: true
    },
    {
      title: "College Bus Tracking System",
      description: "UI/UX design for real-time bus tracking system to help students monitor bus locations and schedules. Designed a user-centric mobile interface for a college bus tracking system with role-based access for students, staff.Enhanced overall user experience and system accessibility through intuitive layouts and streamlined workflows.",
      technologies: ["Figma", "UI/UX Design", "Mobile Design", "User Research"],
      status: "Design Phase",
      featured: true
    },
    {
      title: "Food Waste Management Detector",
      description: "Designed an IoT-based solution to monitor food freshness using gas sensors for VOC detection and LCD display for real-time status updates. Integrated Bluetooth connectivity for remote data access and implemented customizable alerts for expiration and spoilage detection. Enabled automated shelf-life tracking via sensor inputs, promoting sustainable consumption and reducing food waste.",
      technologies: ["IoT", "Sensors", "Data Analytics", "Python"],
      status: "Development",
      featured: false
    },
    {
      title: "E-Commerce Website",
      description: "Web developed e-commerce platform with modern UI, secure payments, and inventory management.Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript. Implemented product listings, shopping cart functionality, dynamic UI elements, and interactive user experience.Focused on modern design, cross-device compatibility, and intuitive navigation for enhanced user engagement.",
      technologies: ["React", "CSS", "JavaScript", "Database"],
      status: "Completed",
      featured: false
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      title: "UI/UX Design",
      description: "User-centered mobile and web interface designs using Figma, focusing on intuitive user experiences and modern aesthetics.",
      highlight: "Figma Expert"
    },
    {
      icon: <ExternalLink className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Web Development",
      description: "Responsive websites built with HTML, CSS, and JavaScript, ensuring cross-platform compatibility and performance.",
      highlight: "Full Stack"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Data Visualization",
      description: "Interactive dashboards and insights visualization using Power BI to transform complex data into actionable insights.",
      highlight: "Power BI"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg z-50 border-b border-slate-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Dev Dharshni
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {["home", "about", "portfolio", "services", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === item
                    ? "text-teal-600 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-900/30"
                    : "text-slate-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-gray-800/50"
                    }`}
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="text-slate-800 dark:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-gray-700/50"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {["home", "about", "portfolio", "services", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-4 py-3 text-slate-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 capitalize w-full text-left rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Ultra-Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-50/50 via-transparent to-blue-50/50 dark:from-teal-900/10 dark:via-transparent dark:to-blue-900/10"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-blue-200/30 dark:from-teal-800/20 dark:to-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/2 animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Enhanced Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Enhanced Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/40 dark:to-blue-900/40 border-2 border-teal-200/50 dark:border-teal-700/50 rounded-full text-teal-700 dark:text-teal-300 text-sm font-semibold shadow-lg backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2 text-teal-500 animate-pulse" />
              Available for opportunities
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full ml-3"
              />
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-slate-800 dark:text-white block"
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400 block mt-2"
                >
                  Dev Dharshni
                </motion.span>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl lg:text-3xl text-slate-600 dark:text-gray-300 font-medium max-w-3xl leading-relaxed"
              >
                Aspiring IT Professional crafting digital experiences through
                <span className="text-teal-600 dark:text-teal-400 font-bold"> UI/UX Design</span> &
                <span className="text-blue-600 dark:text-blue-400 font-bold"> Web Development</span>
              </motion.h2>
            </motion.div>

            {/* Enhanced Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative text-lg lg:text-xl text-slate-600 dark:text-gray-300 italic pl-8 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>
              <Star className="absolute -left-2 -top-2 w-6 h-6 text-teal-500 fill-current" />
              "Innovation is not just about technology; it's about creating meaningful connections between people and digital experiences."
            </motion.blockquote>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 dark:from-teal-500 dark:to-blue-500 dark:hover:from-teal-600 dark:hover:to-blue-600 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                View My Work
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-800 hover:border-teal-400 dark:hover:border-teal-500 px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                Let's Connect
                <MessageCircle className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/devdharshni", label: "LinkedIn", color: "hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-700" },
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/devdharshni", label: "GitHub", color: "hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-600" },
                { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/devdharshniii", label: "Instagram", color: "hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-200 dark:hover:border-pink-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-slate-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Side with Square Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Main Image Container with Square Mask */}
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
                {/* Enhanced Floating Background Elements */}
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-teal-400/30 to-blue-500/30 dark:from-teal-600/30 dark:to-blue-700/30 rounded-[3rem] transform rotate-6"
                />
                <motion.div
                  animate={{ rotate: [360, 180, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 dark:from-blue-600/30 dark:to-purple-700/30 rounded-[3rem] transform -rotate-6"
                />

                {/* Enhanced Main Image with Square Mask */}
                <div className="relative w-full h-full bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-teal-600 dark:via-blue-700 dark:to-purple-700 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] bg-white dark:bg-gray-800 p-8 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-600">
                      <img
                        src="/lovable-uploads/c60db9a9-bd31-4afd-a4e1-175f8b299d7b.png"
                        alt="A M Dev Dharshni"
                        className="w-full h-full object-cover filter brightness-110 contrast-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 rounded-3xl p-5 shadow-xl backdrop-blur-sm"
                >
                  <Code className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-8 -left-8 bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-500 dark:to-purple-600 rounded-3xl p-5 shadow-xl backdrop-blur-sm"
                >
                  <Briefcase className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [-10, 10, -10], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-12 bg-gradient-to-r from-green-400 to-teal-500 dark:from-green-500 dark:to-teal-600 rounded-2xl p-4 shadow-lg"
                >
                  <User className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-slate-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 group"
          >
            <span className="text-sm mb-3 font-medium group-hover:font-semibold transition-all">Scroll to explore</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200 dark:border-gray-600 shadow-lg group-hover:shadow-xl transition-all duration-300"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-gray-800/30 dark:to-slate-700/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6"
            >
              <User className="w-4 h-4 mr-2" />
              About Me
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              Passionate About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 block mt-2">
                Innovation
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
                   Hi, I'm A M Dev Dharshni, an Information Technology student at R.M.D. Engineering College with a passion for UI/UX design, cloud computing, and web development. I blend technical skills with a creative and entrepreneurial mindset to build meaningful, user-focused digital experiences. I’m driven by curiosity, adaptability, and a commitment to continuous learning, always exploring new ways to turn ideas into impactful solutions.
                </p>
                
                {/* <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
                  Known for her adaptability and leadership, Dev Dharshni is committed to continuous learning
                  and impact-driven growth, always pushing the boundaries of what's possible in technology.
                </p> */}
              </div>

              {/* Enhanced Soft Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { skill: "Communication", icon: <MessageCircle className="w-6 h-6" />, color: "from-blue-500 to-purple-500" },
                  { skill: "Leadership", icon: <Star className="w-6 h-6" />, color: "from-teal-500 to-green-500" },
                  { skill: "Adaptability", icon: <Sparkles className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-slate-800 dark:text-white text-lg">{item.skill}</h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  Education Timeline
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      period: "2022 - 2026",
                      degree: "B.Tech in Information Technology",
                      institution: "R.M.D. Engineering College",
                      status: "Current",
                      color: "bg-green-500"
                    },
                    {
                      period: "2020 - 2022",
                      degree: "Higher Secondary Certificate (HSC)",
                      institution: "Velammal Vidyalaya",
                      status: "Completed",
                      color: "bg-blue-500"
                    },
                    {
                      period: "2019 - 2020",
                      degree: "Secondary School Leaving Certificate (SSLC)",
                      institution: "Maharishi Vidya Mandir",
                      status: "Completed",
                      color: "bg-purple-500"
                    }
                  ].map((education, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white/80 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-4 h-4 ${education.color} rounded-full mt-3 shadow-lg`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-1">{education.period}</div>
                        <div className="font-bold text-slate-800 dark:text-white text-lg mb-1">{education.degree}</div>
                        <div className="text-slate-600 dark:text-gray-300 mb-2">{education.institution}</div>
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${education.status === "Current"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                          }`}>
                          {education.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-slate-700 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-blue-50/30 dark:from-teal-900/10 dark:to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolio
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 block mt-2">
                Projects
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my recent projects that showcase my technical skills and creative problem-solving abilities in UI/UX design and web development.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 group-hover:scale-105 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-4 pt-8">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-2xl text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                        : project.status === "Development"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                        }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardDescription className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-800 dark:text-teal-300 rounded-lg border border-teal-200 dark:border-teal-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <Button variant="outline" className="w-full group/btn border-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md dark:bg-gray-800 dark:hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                      <span className={`px-2 py-1 text-xs rounded-full ${project.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                        : project.status === "Development"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                        }`}>
                        {project.status}
                      </span>
                    </div>
                    {/* <CardDescription className="text-slate-600 dark:text-gray-300"> */}
                    <CardDescription className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">

                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          // className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full"
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-800 dark:text-teal-300 rounded-lg border border-teal-200 dark:border-teal-700/50"

                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <Button variant="outline" className="w-full group dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-gray-800/30 dark:to-slate-700/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Services
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 block mt-2">
                Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional services that combine technical expertise with creative vision to deliver exceptional results and user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 group-hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 dark:from-teal-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 rounded-3xl w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:shadow-xl transition-all duration-300 border-2 border-teal-100 dark:border-teal-800"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-white px-2 py-1 rounded-full">
                        {service.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">devdharshni34@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+91 9080212170</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleContactSubmit} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 dark:bg-gray-950 text-white py-12 px-4 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              A M Dev Dharshni
            </h3>
            <p className="text-slate-400 dark:text-gray-500 text-lg">
              © 2024 A M Dev Dharshni. Crafted with passion and precision.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
