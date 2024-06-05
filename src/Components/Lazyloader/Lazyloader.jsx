import React, { useEffect } from 'react'
import './Lazyloader.css'
import './n.scss'
import gsap from 'gsap';
import { RingLoader } from 'react-spinners';

function Lazyloader({ name, loadingState }) {
    useEffect(() => {
        let Tl = gsap.timeline();
        if (!loadingState) {
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
            {loadingState ? (<div className='loader-rs'>
                <span className='loader-text'>Slow connection</span>
                <RingLoader color="#3A1675" />
            </div>) : (<div className='loader-rs'>
                <span className='loader-text'>Established</span>
                <RingLoader color="#3A1675" />
            </div>)}

        </div>
    )
}

export default Lazyloader