import React from 'react';
import styles from './about.module.scss';
import ScrollSection from "@/Components/ScrollSection/ScrollSection";
import Typed from "@/Components/Typed/Typed";
interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <ScrollSection gradient="--gradient-2">
            <div className={styles.about}>
                <Typed
                    words={[
                        {delay:500,text:"Next Section!"},
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

export default About;
