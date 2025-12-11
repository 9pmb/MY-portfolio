import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <section id="hero"><Hero /></section>
        <section id="about"><Timeline /></section>
        <section id="projects"><Projects /></section>
        <section id="tech"><Technologies /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}
