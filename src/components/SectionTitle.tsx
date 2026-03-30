import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-primary to-cyan-soft mx-auto mt-6 rounded-full"
      />
    </motion.div>
  );
};

export default SectionTitle;
