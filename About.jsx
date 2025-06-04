import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className={styles.aboutText}
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a passionate web developer with experience building full-stack applications using modern tools like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Firebase</strong>. I love crafting clean UIs, optimizing performance, and solving real-world problems through code.
      </motion.p>
    </section>
  );
}
