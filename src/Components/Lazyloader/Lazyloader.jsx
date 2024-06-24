import React from 'react'
import './Lazyloader.css'
import './n.scss'
import gsap from 'gsap';
import { RingLoader } from 'react-spinners';
import { useGSAP } from '@gsap/react';

function Lazyloader({ name }) {
    useGSAP(() => {
        let Tl = gsap.timeline();
        Tl.to('.loader-container', {
            top: '0',
            ease: "expo.inOut",
        });
        Tl.to('.loader-container', {
            top: '-100%',
            delay: 1.5,
            duration: 1.5,
            ease: "expo.inOut",
        });
        // if (!loadingState) {
        //     Tl.to('.loader-container', {
        //         top: '-100%',
        //         delay: 1,
        //         duration: 1,
        //         ease: "expo.inOut",
        //     });
        // }

        // Cleanup function to ensure GSAP kills the animation when the component unmounts
        // return () => {
            
        //     Tl.kill();
        // };
    }, );
    return (
        <div className='loader-container'>
            <div className='portfolio-experiment'>
                <div className="experiment-title">{name}</div>
            </div>
            <RingLoader color="#3A1675" />
            {/* {loadingState ? (<div className='loader-rs'>
                <span className='loader-text'>Slow connection</span>
                <RingLoader color="#3A1675" />
            </div>) : (<div className='loader-rs'>
                <span className='loader-text'>Established</span>
                <RingLoader color="#3A1675" />
            </div>)} */}

        </div>
    )
}

export default Lazyloader