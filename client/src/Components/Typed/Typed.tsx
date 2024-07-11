'use client'
import React from 'react';
import {TypeAnimation} from "react-type-animation";
import useTyped from "@/hooks/useTyped";

interface TypedProps {
    words: TypedWord[],
    wrapper: string,
    speed: number
}

const Typed: React.FC<TypedProps> = ({
                                         words,
                                         wrapper,
                                         speed
                                     }) => {
    let sequence = useTyped(words);
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper={wrapper}
            speed={speed}
            repeat={Infinity}
        />
    );
};

export default Typed;
