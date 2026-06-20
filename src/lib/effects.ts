const gaudiSpring = {
  type: "spring",
  stiffness: 60,
  damping: 18,
  mass: 1.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, rotate: -1 },
  visible: { y: 0, opacity: 1, rotate: 0, transition: gaudiSpring },
};
