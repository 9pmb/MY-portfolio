import styles from './Timeline.module.css';

const Timeline = () => {
    const events = [
        {
            year: "2024 - 2025",
            title: "Team Leader - SIH 2025",
            description: "Led a team in Smart India Hackathon for 2 consecutive years. Managed project scope, coordinated development, and presented solutions.",
            category: "Leadership"
        },
        {
            year: "2025 - 2029",
            title: "B.Tech in Computer Science",
            institution: "Parul Institute of Engineering & Technology",
            description: "Focusing on Full Stack Development, DSA, and System Design.",
            category: "Education"
        },
        {
            year: "2025",
            title: "Participant - Vadodara Hackathon 6.0",
            description: "Collaborated on innovative solutions for real-world problems.",
            category: "Hackathon"
        },
        {
            year: "2024",
            title: "Full Stack Developer Training",
            description: "Intensive training in MERN Stack and modern web technologies.",
            category: "Certification"
        }
    ];

    return (
        <section className={styles.container}>
            <h2 className="premium-header">My Journey</h2>
            <div className={styles.timeline}>
                {events.map((event, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <span className={styles.year}>{event.year}</span>
                            <h3 className={styles.title}>{event.title}</h3>
                            {event.institution && <h4 className={styles.institution}>{event.institution}</h4>}
                            <p className={styles.description}>{event.description}</p>
                            <span className={styles.category}>{event.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
