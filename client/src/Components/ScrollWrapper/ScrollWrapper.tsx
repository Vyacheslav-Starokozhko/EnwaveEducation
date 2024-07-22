"use client"
import React, {ReactNode} from 'react';
import styles from './scroll_wrapper.module.scss';
import UpArrow from "@/assets/icons/arrow-up.svg";
import DownArrow from "@/assets/icons/arrow-down.svg";
import SectionNavigation from "@/Components/SectionNavigation/SectionNavigation";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {changeSection} from "@/store/slices/globalSlice";

interface ScrollWrapperProps {
    children: ReactNode
}

const ScrollWrapper: React.FC<ScrollWrapperProps> = ({children}) => {
    const dispatch = useAppDispatch();
    const {activeSectionIdx, countSections} = useAppSelector(state => state.globalReducer)


    const scrollUp = () => {
        let scrollView = document.getElementById("scrollView");
        scrollView.scrollBy({top: -window.innerHeight, behavior: 'smooth'});
        dispatch(changeSection({
            background: "",
            activeSection: "",
            activeSectionIdx: activeSectionIdx - 1
        }))
    }
    const scrollDown = () => {
        let scrollView = document.getElementById("scrollView");
        scrollView.scrollBy({top: window.innerHeight, behavior: 'smooth'});
        dispatch(changeSection({
            background: "",
            activeSection: "",
            activeSectionIdx: activeSectionIdx + 1
        }))
    }

    return (
        <div className={styles.scrollWrapper}>
            <SectionNavigation/>
            {activeSectionIdx !== 0 && (
                <button className={styles.arrowUp} onClick={scrollUp}>
                    <UpArrow width={40} height={40}/>
                </button>
            )}
            <div id="scrollView">
                {children}
            </div>

            {activeSectionIdx !== countSections - 1 && (
                <button className={styles.arrowDown} onClick={scrollDown}>
                    <DownArrow width={40} height={40}/>
                </button>
            )}

        </div>
    );
};

export default ScrollWrapper;
