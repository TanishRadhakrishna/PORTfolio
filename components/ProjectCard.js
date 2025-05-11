import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function ProjectCard({ title, description }) {
  return (
    <motion.div
      className={styles.projectCard}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={styles.projectCardTitle}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={styles.projectCardDesc}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
