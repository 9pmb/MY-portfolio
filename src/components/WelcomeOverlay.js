'use client';
import { useState, useEffect } from 'react';
import styles from './WelcomeOverlay.module.css';

const WelcomeOverlay = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2500); // Overlay visible for 2.5 seconds
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.loader}>
                <div className={styles.bar}></div>
                <div className={styles.text}>INITIALIZING SYSTEM...</div>
            </div>
        </div>
    );
};

export default WelcomeOverlay;
