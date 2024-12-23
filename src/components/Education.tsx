import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center gap-8 scroll-mt-20"
    >
      <motion.h1
        className="text-center text-white-1 font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.8 }}
      >
        Formação
      </motion.h1>
    </section>
  );
};

export default Education;
