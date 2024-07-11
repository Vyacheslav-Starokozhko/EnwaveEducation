'use client'
const useGradient = (gradient:string)=>{
    document.querySelector("body").style.background = `var(${gradient})`;
}

export default useGradient
