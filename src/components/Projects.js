'use client';
import { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            title: "EDPro",
            description: "AI-driven educational platform providing personalized roadmaps and analytics.",
            tags: ["React", "AI/ML", "MongoDB"],
            link: "https://github.com/9pmb/EDPro",
            image: "/edpro.png"
        },
        {
            title: "Dorect (Prototype)",
            description: "MedTech platform for digital recovery & mental health support. Currently in development.",
            tags: ["React", "MedTech", "Prototype"],
            link: "https://dorect.netlify.app/",
            image: "/dorect.png"
        },
        {
            title: "JP Morgan (Forage)",
            description: "Software Engineering Virtual Experience. Fixed broken repo files and optimized data visualization.",
            tags: ["Python", "TypeScript", "React"],
            link: "https://www.theforage.com/simulations/jpmorgan/software-engineering-lite",
            image: "/jpmc.png"
        },
        {
            title: "School Management",
            description: "Data-centric platform focusing on attendance analytics.",
            tags: ["PHP", "MySQL", "Data Viz"],
            link: "https://github.com/9pmb/College-School-Attendance-Management-System",
            image: "/school.png"
        },
        {
            title: "RBAC Security",
            description: "Secure system implementing complex user permissions.",
            tags: ["PHP", "Security", "Auth"],
            link: "https://github.com/9pmb/Advanced-Attendance_system",
            image: "/rbac.png"
        }
    ];

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className={styles.container}>
            <h2 className="premium-header">Projects</h2>
            <div className={styles.carousel}>
                {projects.map((project, index) => {
                    let className = styles.card;
                    if (index === activeIndex) className = `${styles.card} ${styles.active}`;
                    else if (index === (activeIndex - 1 + projects.length) % projects.length) className = `${styles.card} ${styles.prev}`;
                    else if (index === (activeIndex + 1) % projects.length) className = `${styles.card} ${styles.next}`;
                    else className = `${styles.card} ${styles.hidden}`;

                    return (
                        <div key={index} className={className} onClick={() => setActiveIndex(index)}>
                            <div className={styles.imageBox}>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className={styles.info}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Code</a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.controls}>
                <button onClick={prevProject}>←</button>
                <button onClick={nextProject}>→</button>
            </div>
        </section>
    );
};

export default Projects;
