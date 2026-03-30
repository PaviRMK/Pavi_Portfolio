import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TailwindCSS" },
      { name: "JavaScript"},
      { name: "React"},
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Spring Boot"},
      { name: "MySQL"},
      { name: "MongoDB"},
     
      //{ name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git"},
      //{ name: "Docker", level: 75 },
      { name: "Figma"},
      //{ name: "AWS", level: 70 },
      //{ name: "CI/CD", level: 80 },
    ],
  },
];

function SkillIcon3D({ skill, position }: { skill: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00d4ff" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 border border-white/10 backdrop-blur-xl"
    >
      <h3 className="text-xl font-bold mb-6 text-gradient">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-lg hover:bg-primary/20 transition"
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* TechStack removed per request */

const Skills = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-16">
        <ParticleBackground />
        
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-soft/10 rounded-full blur-[128px] pointer-events-none" />

        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SkillIcon3D skill="React" position={[-5, 3, -5]} />
              <SkillIcon3D skill="Node" position={[5, -2, -5]} />
              <SkillIcon3D skill="TS" position={[-4, -3, -3]} />
              <SkillIcon3D skill="CSS" position={[4, 2, -4]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <SectionTitle
            title="My Skills"
            subtitle="Technologies and tools I work with to bring ideas to life"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>

          {/* TechStack removed */}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
