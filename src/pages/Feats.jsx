import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Award, ExternalLink, ChevronDown } from "lucide-react";

import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";

const leetcode = {
  name: "LeetCode",
  image:
    "https://leetcard.jacoblin.cool/PAVITHRAA_23?theme=dark&ext=contest",
  link: "https://leetcode.com/PAVITHRAA_23",
  accent: "from-yellow-500/20 to-orange-500/10",
  borderGlow: "hover:border-yellow-500/40 hover:shadow-yellow-500/10",
  dotColor: "bg-yellow-400",
};

const otherPlatforms = [
  {
    name: "HackerRank",
    logo: "/hackerank.png",
    link: "https://www.hackerrank.com/profile/pavithraas2312",
    accent: "from-green-500/20 to-emerald-500/10",
    borderGlow: "hover:border-green-500/40 hover:shadow-green-500/10",
    dotColor: "bg-green-400",
  },
  {
    name: "SkillRack",
    logo: "/skillrack.png",
    link: "https://www.skillrack.com/faces/resume.xhtml?id=439693&key=08fc6642d09b002504e748bb9d3fa228e77f2ec9",
    accent: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    dotColor: "bg-cyan-400",
  },
];

const certificates = [
  {
    title: "Java Developer Certification",
    image: "/public/certificates/c1.jpg",
  },
  {
    title: "HackerRank Java(Basic)",
    image: "/public/certificates/c2.jpg",
  },
  {
    title: "Oracle-Data Science Professional",
    image: "/public/certificates/c3.jpg",
  },
  {
    title: "TCS ION - Young Professional",
    image: "/public/certificates/c4.jpg",
  },
  {
    title: "Gen AI Exchange Hackathon",
    image: "/public/certificates/c5.jpg",
  },
  {
    title: "Internshala - Web Development",
    image: "/public/certificates/c6.jpg",
  },
];

const ViewBtn = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg
      bg-white/5 hover:bg-white/10
      text-white/50 hover:text-white/90
      transition-all duration-300 border border-white/10
      text-xs font-medium
    "
  >
    View Profile <ExternalLink className="w-3 h-3" />
  </a>
);

const CardHeader = ({ accent, dotColor, name }) => (
  <div
    className={`px-4 py-3 bg-gradient-to-r ${accent} border-b border-white/10`}
  >
    <div className="flex items-center gap-2">
      <span
        className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`}
      />
      <h4 className="text-base font-extrabold text-white tracking-wider uppercase">
        {name}
      </h4>
    </div>
  </div>
);

/* ── LeetCode Card ── */
const LeetCodeCard = ({ profile }) => (
  <div
    className={`flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#07182d]/80 backdrop-blur-xl shadow-lg transition-all duration-300 ${profile.borderGlow}`}
  >
    <CardHeader
      accent={profile.accent}
      dotColor={profile.dotColor}
      name={profile.name}
    />

    <div className="h-[160px] bg-[#0a1628] flex items-center justify-center p-3">
      <img
        src={profile.image}
        alt={profile.name}
        className="max-w-full max-h-full object-contain rounded"
      />
    </div>

    <div className="px-4 py-3 flex justify-center">
      <ViewBtn link={profile.link} />
    </div>
  </div>
);

/* ── Other Platforms Card ── */
const OtherCard = ({ profile }) => (
  <div
    className={`flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#07182d]/80 backdrop-blur-xl shadow-lg transition-all duration-300 ${profile.borderGlow}`}
  >
    <CardHeader
      accent={profile.accent}
      dotColor={profile.dotColor}
      name={profile.name}
    />

    {/* SMALL LOGO */}
   <div className="h-[100px] bg-[#0a1628] flex items-center justify-center overflow-hidden">
  <img
    src={profile.logo}
    alt={profile.name}
    className="w-[100px] h-[100px] object-cover scale-[4]"
  />
</div>

    <div className="px-4 py-3 flex justify-center">
      <ViewBtn link={profile.link} />
    </div>
  </div>
);

const Feats = () => {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen relative pt-24 pb-16 bg-[#020817] overflow-hidden">
        <ParticleBackground />

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <SectionTitle
              title="Feats & Certificates"
              subtitle="Coding achievements and certifications"
            />
          </div>

          {/* CODING PLATFORMS */}
          <section className="mb-20">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
              <Code2 className="text-cyan-400" />
              Coding Platforms
            </h3>

            <div className="flex flex-col items-center gap-4 w-full">

              {/* LeetCode */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="w-full max-w-xs"
              >
                <LeetCodeCard profile={leetcode} />
              </motion.div>

              {/* Toggle Button */}
              <div className="w-full max-w-xs">
                <button
                  onClick={() => setShowOthers((prev) => !prev)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 text-sm font-bold"
                >
                  Other Coding Platforms

                  <motion.span
                    animate={{ rotate: showOthers ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
              </div>

              {/* HackerRank + SkillRack */}
              <AnimatePresence>
                {showOthers && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden w-full"
                  >
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                      {otherPlatforms.map((profile, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.08,
                          }}
                          whileHover={{ y: -4 }}
                          className="w-full max-w-xs mx-auto sm:mx-0"
                        >
                          <OtherCard profile={profile} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* CERTIFICATES */}
          <section>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
              <Award className="text-cyan-400" />
              Certificates
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -4 }}
                  className="w-full max-w-[380px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#07182d]/80 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="h-[150px] overflow-hidden bg-white">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="px-4 py-4 text-center">
                    <h4 className="text-sm font-semibold text-white leading-relaxed">
                      {cert.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Feats;