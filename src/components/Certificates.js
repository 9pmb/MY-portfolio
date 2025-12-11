import styles from './Certificates.module.css';

const Certificates = () => {
    const certificates = [
        {
            title: "Deloitte Technology Job Simulation",
            issuer: "Deloitte",
            date: "Oct 2025",
            description: "Gained hands-on experience in coding, development, and real-world tech consulting scenarios. Skills: Python."
        },
        {
            title: "Oracle Cloud Infrastructure 2025 AI Foundations",
            issuer: "Oracle",
            date: "Oct 2025",
            description: "Certified proficiency in AI foundations and Oracle Cloud Infrastructure."
        },
        {
            title: "Vadodara Hackathon 6.0",
            issuer: "Parul University",
            date: "Sep 2025",
            description: "Participated in a major hackathon demonstrating innovation, creativity, and teamwork in solving real-world problems."
        },
        {
            title: "AI/ML Foundations (AgenticAI + MLOps)",
            issuer: "Udemy",
            date: "Sep 2025",
            description: "Completed comprehensive foundations course on Agentic AI and MLOps."
        },
        {
            title: "Getting Started with AWS",
            issuer: "Simplilearn",
            date: "Sep 2025",
            description: "Foundational training in Amazon Web Services and Cloud Computing."
        },
        {
            title: "Code Java in 5 Hours",
            issuer: "Udemy",
            date: "2025",
            description: "Complete beginner's guide to Java programming."
        },
        {
            title: "Internship Common Aptitude Test",
            issuer: "ICAT",
            date: "Aug 2025",
            description: "Successfully completed the national level aptitude test with excellent marks."
        }
    ];

    return (
        <section id="certificates" className={styles.container}>
            <div className={styles.divider} />
            <h2 className="premium-header">Certifications</h2>
            <div className={styles.grid}>
                {certificates.map((cert, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>📜</div>
                        <h3 className={styles.certTitle}>{cert.title}</h3>
                        <p className={styles.issuer}>{cert.issuer} • {cert.date}</p>
                        <p className={styles.description}>{cert.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
