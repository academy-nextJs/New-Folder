'use client'
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

const teamMembers = [
  "کیان جانلو",
  "عارف سالاری",
  "محمد درزی",
  "مهدی قاسمی",
];

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
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AboutComponent() {
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
          درباره دلتا
        </motion.h1>
        <motion.p
          className="text-subText mb-12 leading-relaxed text-justify"
          variants={item}
        >
          مشاوره املاک دلتا با سال‌ها تجربه در حوزه‌ی خرید، فروش، رهن و اجاره‌ی ملک، بستری مطمئن برای مشتریان فراهم کرده تا با خیالی آسوده معاملات ملکی خود را انجام دهند. تیم ما با شناخت دقیق بازار، تحلیل‌های حرفه‌ای و مشاوره‌ی تخصصی، همراه مطمئن شما در تمامی مراحل معامله است. ما معتقدیم اعتماد، پایه‌ی اصلی هر همکاری موفق است و همواره در تلاشیم تا خدماتی صادقانه، شفاف و کارآمد ارائه دهیم.
        </motion.p>

        <motion.h2 className="text-xl font-semibold text-accent mb-6" variants={item}>
          اعضای دلتا
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((name, index) => (
            <motion.div
              key={index}
              className="bg-secondary-light3 p-6 rounded-2xl shadow-md flex flex-col items-center"
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
