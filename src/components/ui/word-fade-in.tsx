import { motion, Variants } from "motion/react";
import { cn } from "../../lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay, duration: 0.5 },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "font-heading font-bold text-black dark:text-white flex flex-wrap",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word + i} variants={variants} custom={i} className="inline-block mr-[0.25em]">
           {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
