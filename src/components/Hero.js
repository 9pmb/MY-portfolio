'use client';
import styles from './Hero.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full-stack Developer | Web Developer | MERN Stack | Java | C++";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(intervalId);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    const handleMouseMove = (e) => {
        const card = document.getElementById('hero-card');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation (-20 to 20 degrees)
        const xRot = ((y / rect.height) - 0.5) * -30;
        const yRot = ((x / rect.width) - 0.5) * 30;

        card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
    };

    const handleMouseLeave = () => {
        const card = document.getElementById('hero-card');
        if (card) card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className={styles.hero} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Floating Shapes */}
            <div className={styles.shape} style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
            <div className={styles.shape} style={{ top: '70%', right: '15%', animationDelay: '2s', width: '60px', height: '60px' }}></div>
            <div className={styles.shape} style={{ top: '40%', left: '80%', animationDelay: '4s', borderRadius: '50%' }}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hello, I'm</p>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>Aditya Raj jha</span>
                    </h1>
                    <p className={styles.description}>
                        B.Tech in Computer Science | SIH 2025 Team Leader <br />
                        {text}<span className="typewriter-cursor"></span>
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className={styles.button} onClick={() => window.open('/resume.pdf', '_blank')}>
                            Resumé
                        </button>
                        <button className={`${styles.button} ${styles.outline}`} onClick={() => document.getElementById('contact').scrollIntoView()}>
                            Contact Me
                        </button>
                    </div>
                </div>
                <div id="hero-card" className={styles.imageWrapper}>
                    <div className={styles.imageBackground}></div>
                    <img
                        src="/profile.jpg"
                        alt="Aditya Raj Jha"
                        className={styles.profileImage}
                    />
                    <div className={styles.floatingBadge}>
                        <span>🚀</span> SIH 2025
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
