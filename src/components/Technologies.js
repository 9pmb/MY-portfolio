import styles from './Technologies.module.css';
import { FaReact, FaNodeJs, FaJava, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiCplusplus, SiMysql } from "react-icons/si";

const Technologies = () => {
    const skills = [
        { name: "React", level: "Advanced", icon: <FaReact /> },
        { name: "Node.js", level: "Intermediate", icon: <FaNodeJs /> },
        { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs /> },
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> },
        { name: "Java", level: "Intermediate", icon: <FaJava /> },
        { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
        { name: "PHP", level: "Advanced", icon: <FaPhp /> },
        { name: "MySQL", level: "Advanced", icon: <SiMysql /> },
        { name: "HTML/CSS", level: "Expert", icon: <FaHtml5 /> },
    ];

    return (
        <section id="skills" className={`${styles.container} animate-on-scroll`}>
            <div className={styles.divider} />
            <h2 className="premium-header">Technologies</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper} style={{ color: 'var(--primary)' }}>
                            {skill.icon}
                        </div>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} data-level={skill.level}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
