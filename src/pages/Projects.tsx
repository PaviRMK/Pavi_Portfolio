import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";

const projects = [
  {
    title: "Crypto Portfolio Tracker with Risk & Scam Analysis",
    description:
      "A web application that helps users track their cryptocurrency investments with live market prices. It also analyzes coins to detect risky or suspicious tokens and warn users about possible scams.",
    tech: ["Java", "Spring Boot", "MySQL", "React.js"],
    image: "/crypto.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "VirtualEdu – Interactive Virtual Learning Platform",
    description:
      "VirtualEdu is a web-based learning platform that uses virtual simulations to help students learn STEM and vocational concepts through interactive, hands-on practice.",
    tech: ["React.js", "Java", "Spring Boot", "MongoDB"],
    image: "/virtual-edu.jpeg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "SKINOVA - AI-Powered Skincare Analysis",
    description:
      "AI-powered skincare analysis application that detects skin conditions from images and provides personalized product recommendations.",
    tech: ["JavaScript", "Python", "Flask", "TensorFlow"],
    image: "/skinova.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
];

const FeaturedProject = ({ project, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid lg:grid-cols-2 gap-12 items-center mb-28"
    >

      {/* IMAGE SECTION */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[320px] object-cover"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className={`space-y-5 max-w-xl ${reverse ? "lg:order-1" : ""}`}>

        <p className="text-primary text-sm font-semibold">
          Featured Project
        </p>

        <h3 className="text-3xl font-bold leading-snug">
          {project.title}
        </h3>

        <div className="glass p-5 rounded-xl">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 pt-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={project.github} target="_blank">
              <Github className="w-5 h-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href={project.live} target="_blank">
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>

      </div>

    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-20">

        <ParticleBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <SectionTitle
            title="My Projects"
            subtitle="A collection of my recent work and experiments"
          />

          <div className="mt-16">
            {projects.map((project, index) => (
              <FeaturedProject
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;