import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Lightbulb, MapPin, Calendar } from "lucide-react";

import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";

const highlights = [
  { icon: Palette, label: "Full Stack Developer", color: "from-purple-500 to-pink-500" },
  { icon: Code2, label: "Problem Solver", color: "from-primary to-cyan-soft" },
  { icon: Rocket, label: "5+ Projects", color: "from-orange-500 to-red-500" },
  { icon: Lightbulb, label: "Creative Thinker", color: "from-amber-500 to-yellow-500" },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-16">
        <ParticleBackground />

        {/* Background Glow Effects */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-soft/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Section Title */}
          <SectionTitle
            title="About Me"
            subtitle="Passionate developer with a love for creating beautiful, functional experiences"
          />

          {/* Main About Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

            {/* Avatar Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-soft/20"
                />

                <div className="absolute inset-8 glass rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-cyan-soft/30 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-foreground">
                      Pavi
                    </span>
                  </div>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary glow-soft"
                />
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              {/* Location + Availability */}
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Chennai, India</span>

                <Calendar className="w-5 h-5 text-primary ml-4" />
                <span>Open to opportunities</span>
              </div>

              {/* About Text */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m an Aspiring Full Stack Developer who enjoys creating modern, user-friendly web applications and meaningful digital experiences. My work focuses on combining strong problem-solving skills with intuitive design, using technologies such as React, Spring Boot, MySQL, and UI/UX design tools like Figma.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I have developed projects including a Crypto Portfolio Tracker with Risk Analysis, Skinova – an AI-powered skincare analysis platform, and VirtualEdu – an interactive learning platform built with Unity WebGL. I am continuously learning and exploring new technologies while growing toward becoming a skilled Full Stack Developer.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 flex items-center gap-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Coding Profiles Section */}
         

        </div>
      </div>
    </PageTransition>
  );
};

export default About;