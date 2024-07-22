"use client"
import React from 'react';
import styles from './dot.module.scss';
import {changeSection} from "@/store/slices/globalSlice";
import {useAppDispatch, useAppSelector} from "@/store/hooks";

interface DotProps {
    idx: number
}

const Dot: React.FC<DotProps> = ({idx}) => {

    const dispatch = useAppDispatch();
    const {activeSectionIdx} = useAppSelector(state => state.globalReducer)

    const classes = [styles.scrollDot, idx <= activeSectionIdx ? styles.currentDot : ""]

    const scroll = (idx: number) => {
        let scrollView = document.getElementById("scrollView");
        scrollView.scrollBy({
            top: window.innerHeight * idx - window.innerHeight * activeSectionIdx,
            behavior: 'smooth'
        });
        dispatch(changeSection({
            background: "",
            activeSection: "",
            activeSectionIdx: idx
        }))
    }

    return (
        <span
            className={classes.join(' ')}
            onClick={() => scroll(idx)}
        ></span>
    );
};

export default Dot;
