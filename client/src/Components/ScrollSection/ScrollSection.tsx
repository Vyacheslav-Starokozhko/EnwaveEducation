import React from 'react';
import styles from './scroll_section.module.scss';
import DownArrow from "@/assets/icons/arrow-down.svg"
import UpArrow from "@/assets/icons/arrow-up.svg"

interface ScrollSectionProps {
    children:React.ReactNode
}

const ScrollSection: React.FC<ScrollSectionProps> = ({children}) => {

    return (
        <section className={styles.scrollSection} >
            <button className={styles.arrowUp}>
                <UpArrow width={25} height={25}/>
            </button>
            {children}
            <button className={styles.arrowDown}>
                <DownArrow width={25} height={25}/>
            </button>
        </section>
    );
};

export default ScrollSection;
