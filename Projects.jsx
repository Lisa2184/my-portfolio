import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Gemini Pro ATS Resume Tracker ',
      description: 'Developed a web-based Applicant Tracking System (ATS) using Python, FastAPI, Streamlit, Firebase to automate and streamline resume screening.',
      link: 'https://github.com/Lali182k5/Gemini_Pro_ATS_Resume_Tracker',
    },
    {
      title: 'Personal Fitness Tracker',
      description: 'Built an ML-powered web app using Streamlit and Random Forest Regression to predict calorie burn based on personal metrics, featuring real-time visualizations with Matplotlib and Seaborn.',
      link: 'https://github.com/Lali182k5/Personal-Fitness-Tracker',
    },
     {
      title: 'Automatic Number Plate Recognition (ANPR) System',
      description:'Developed a fast and accurate OCR-based vehicle plate recognition system using  Python ,OpenCV, Streamlit and image processing techniques for enhanced reliability.',
      link: 'https://github.com/Lali182k5/Automatic-Number-Plate-Recognition-ANPR-System',
    },

  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
