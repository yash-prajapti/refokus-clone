import React, { useEffect } from 'react'
import './Lazyloader.css'
import './n.scss'
import gsap from 'gsap';

function Lazyloader({ name, loadingState }) {
    useEffect(() => {
        let Tl = gsap.timeline();
        if(!loadingState){
        Tl.to('.loader-container', {
            top: '-100%',
            delay: 1,
            duration: 2,
            ease: "expo.inOut",
        });
    }

        // Cleanup function to ensure GSAP kills the animation when the component unmounts
        return () => {
            Tl.kill();
        };
    }, [loadingState]);
    return (
        <div className='loader-container'>
            <div className='portfolio-experiment'>
                <div className="experiment-title">{name}</div>
            </div>
        </div>
    )
}

export default Lazyloader