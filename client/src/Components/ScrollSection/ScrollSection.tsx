
import React from 'react';
import styles from './scroll_section.module.scss';

interface ScrollSectionProps {
    children: React.ReactNode
}

const ScrollSection: React.FC<ScrollSectionProps> = ({children}) => {



    return (
        <section className={styles.scrollSection}>

            {children}

        </section>
    );
};

export default ScrollSection;
