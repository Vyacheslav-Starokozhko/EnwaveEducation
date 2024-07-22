"use client"
import React, {useEffect, useState} from 'react';
import styles from './section_navigation.module.scss';
import Dot from "@/Components/Dot/Dot";
import {useAppDispatch} from "@/store/hooks";
import {setCountSections} from "@/store/slices/globalSlice";
interface SectionNavigationProps {

}

const SectionNavigation: React.FC<SectionNavigationProps> = ({}) => {

    const dispatch = useAppDispatch();

    const [sections,setSections] = useState<HTMLElement[]>([]);

    useEffect(()=>{
        let sections: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("section");
        setSections(Array.from(sections));
        dispatch(setCountSections({
            countSections:sections.length
        }))
    },[])

    return (
        <div className={styles.sectionNavigation}>
            {
               sections.length > 0 &&(
                   sections.map((item,idx)=> <Dot key={idx} idx={idx}/>)
                )
            }
        </div>
    );
};

export default SectionNavigation;
