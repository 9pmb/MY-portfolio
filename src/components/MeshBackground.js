import styles from './MeshBackground.module.css';

const MeshBackground = () => {
    return (
        <div className={styles.background}>
            <div className={styles.gradientOrb1}></div>
            <div className={styles.gradientOrb2}></div>
            <div className={styles.backdrop}></div>
        </div>
    );
};

export default MeshBackground;
