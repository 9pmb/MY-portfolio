import styles from './Sidebar.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h1>A<span className={styles.accent}>.</span></h1>
            </div>

            {/* Navigation Removed per user request */}
            <div className={styles.navPlaceholder}></div>

            <div className={styles.socials}>
                <a href="https://linkedin.com/in/aditya-raj-jha-815269343" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/9pmb" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:adityaraj.jha.civ21@itbhu.ac.in">
                    <FaEnvelope />
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
