"use client";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AboutComponent() {
  const { t } = useTranslation("about");
  const teamMembers = [t("name1"), t("name2"), t("name3"), t("name4")];

  return (
    <div className="min-h-screen px-6 py-16 bg-secondary text-secondary-foreground">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          className="text-4xl font-bold mb-8 text-primary"
          variants={item}
        >
          {t("about.title")}
        </motion.h1>
        <motion.p
          className="text-subText mb-12 leading-relaxed text-justify"
          variants={item}
        >
          {t("about.description")}
        </motion.p>

        <motion.h2
          className="text-xl font-semibold text-accent mb-6"
          variants={item}
        >
          {t("about.deltaCount")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((name, index) => (
            <motion.div
              key={index}
              className="bg-secondary-light p-6 rounded-2xl shadow-md flex flex-col items-center"
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <UserCircle className="w-12 h-12 text-muted mb-3" />
              <p className="text-lg text-primary">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
