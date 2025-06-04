import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import AvatarUploader from './AvatarUploader';

export default function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        className={styles.homeTitle}
      >
        Likhitha Sai
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.2 }} 
        className={styles.homeSubtitle}
      >
        I am a web Developer passionate about building beautiful and functional web applications.
      </motion.p>
      <AvatarUploader />
    </section>
  );
}
