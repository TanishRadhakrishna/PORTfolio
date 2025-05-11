import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'AI Mental Health Community (Minor Project)',
    description: 'An AI-driven platform for mental health support using chatbots to assist users emotionally and connect them with help.',
    link: 'https://github.com/TanishRadhakrishna/AI-Mental-Health-Community'
  },
  {
    title: 'LAN-Based Multiplayer Game (Mini Project)',
    description: 'A real-time multiplayer game played over a local network with custom server-client architecture and smooth gameplay.',
    link: 'https://github.com/TanishRadhakrishna/LAN-Based-Multiplayer-Game'
  },
  {
    title: 'Interview Preparation',
    description: 'A curated platform offering practice questions, tips, and coding exercises for job interview preparation using Gemini.',
    link: 'https://github.com/TanishRadhakrishna/Interview-Preparation'
  },
  {
    title: 'Movie Recommendation System',
    description: 'A personalized movie recommendation platform to add and list favorite movies using TMDB  API for movie database and .',
    link: 'https://github.com/TanishRadhakrishna/Movie-Recommendation'
  },
  {
    title: 'Gemini Chatbot',
    description: 'An interactive AI chatbot built to simulate conversation and provide assistance .',
    link: 'https://github.com/TanishRadhakrishna/Gemini-chatbot'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A standout developer portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header />

        <section className={styles.hero}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className={styles.highlight}>Tanish Radhakrishna</span>
          </motion.h1>
          <p className={styles.subtitle}>Full Stack Developer | React & Next.js Enthusiast</p>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((proj, index) => (
              <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <ProjectCard title={proj.title} description={proj.description} />
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
