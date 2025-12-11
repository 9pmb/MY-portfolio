import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <h2 className="premium-header">Let's Connect</h2>
                <p className={styles.subtitle}>Open for opportunities and collaborations.</p>

                <div className={styles.grid}>
                    <a href="mailto:adityarrajjha@gmail.com" className={styles.card}>
                        <div className={styles.iconBox}><FaEnvelope /></div>
                        <h3>Email Me</h3>
                        <p>adityarrajjha@gmail.com</p>
                    </a>
                    <a href="https://github.com/9pmb" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.iconBox}><FaGithub /></div>
                        <h3>GitHub</h3>
                        <p>Check my repos</p>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-raj-jha-815269343/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <div className={styles.iconBox}><FaLinkedin /></div>
                        <h3>LinkedIn</h3>
                        <p>Let's connect</p>
                    </a>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.disclaimer}>
                        *Some project images are AI generated for visualization purposes.
                    </p>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Aditya Raj Jha. Created with Next.js & Passion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
