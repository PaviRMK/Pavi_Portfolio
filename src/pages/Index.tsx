import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import ParticleBackground from "@/components/ParticleBackground";
import Scene3D from "@/components/Scene3D";
import { Link } from "react-router-dom";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />
        <Scene3D />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-soft/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl"
          >

            

            <div className="-translate-y-10">

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Pavithraa</span>
            </motion.h1>

            {/* <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground mb-4"
            >
              Full-Stack Developer & UI/UX Designer
            </motion.p> */}

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
            >
              Aspiring Full Stack Developer and UI/UX Designer, proficient in Java, passionate
              about transforming ideas into intuitive and impactful web experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/Pavithraa Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center"
            >
              {[
                { icon: Github, href: "https://github.com/PaviRMK", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pavithraa23/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
            </div>
          </motion.div>

          {/* Down arrow removed */}
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
