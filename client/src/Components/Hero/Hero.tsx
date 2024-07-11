import React from 'react';
import styles from './hero.module.scss';
import Typed from "@/Components/Typed/Typed";
import ScrollSection from "@/Components/ScrollSection/ScrollSection";
interface HeroProps {

}

const Hero: React.FC<HeroProps> = ({}) => {

    return (
        <ScrollSection gradient="--gradient-1">
            <div className={styles.hero}>
                <Typed
                    words={[
                        {delay:500,text:"Next Level Education!"},
                        // {delay:500,text:"Only Best Practice!"},
                        // {delay:500,text:"Only Better mentors!"},
                    ]}
                    wrapper="h1"
                    speed={25}
                />
            </div>
        </ScrollSection>
    );
};

export default Hero;
