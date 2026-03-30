import { motion } from "framer-motion";
import { Code2, Award } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";

const codingProfiles = [
  {
    name: "LeetCode",
    image: "https://leetcard.jacoblin.cool/PAVITHRAA_23?theme=dark&ext=contest",
    link: "https://leetcode.com/PAVITHRAA_23",
  },
  {
    name: "HackerRank",
    image: "/public/hackerank.png",
    link: "https://www.hackerrank.com/profile/pavithraas2312",
  },
  {
    name: "SkillRack",
    image: "/public/skillrack.png",
    link: "https://www.skillrack.com/faces/resume.xhtml?id=439693&key=08fc6642d09b002504e748bb9d3fa228e77f2ec9",
  },
];

const certificates = [
  { title: "Java Developer Certification", image: "/public/certificates/c1.jpg" },
  { title: "HackerRank Java(Basic)", image: "/public/certificates/c2.jpg" },
  { title: "Oracle-Data Science Professional", image: "/public/certificates/c3.jpg" },
  { title: "TCS ION - Young Professional", image: "/public/certificates/c4.jpg" },
  { title: "Gen AI Exchange Hackathon", image: "/public/certificates/c5.jpg" },
  { title: "Internshala - Web Development", image: "/public/certificates/c6.jpg" },
];

const Feats = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-16">

        <ParticleBackground />

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-soft/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          <SectionTitle
            title="Feats & Certificates"
            subtitle="Coding achievements and certifications"
          />

          {/* Coding Platforms */}

          <div className="mb-20">

            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <Code2 className="text-primary" />
              Coding Platforms
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {codingProfiles.map((profile, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-xl overflow-hidden"
                >

                  <div className="bg-black p-2">

                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-56 object-contain"
                    />

                  </div>

                  <div className="p-4 text-center">

                    <h4 className="font-semibold text-lg">
                      {profile.name}
                    </h4>

                    <p className="text-sm text-muted-foreground mt-1">
                      {profile.topic}
                    </p>

                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm mt-3 inline-block"
                    >
                      View Profile →
                    </a>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Certificates */}

          <div>

            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <Award className="text-primary" />
              Certificates
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {certificates.map((cert, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-xl overflow-hidden"
                >

                  <div className="w-full h-56 flex items-center justify-center bg-black rounded-t-xl overflow-hidden">

                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain"
                    />

                  </div>

                  <div className="p-4 text-center">

                    <h4 className="font-semibold">
                      {cert.title}
                    </h4>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Feats;