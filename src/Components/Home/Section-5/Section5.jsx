import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimaBtn from '../../Button/AnimaBtn';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Section5() {
    const parallaxRef = useRef(null);
    const parallaxItem1 = useRef(null);
    const parallaxItem2 = useRef(null);
    const parallaxItem3 = useRef(null);
    useGSAP(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
            tl.fromTo(parallaxItem1.current, { y: 50 }, { y: -100, ease: "expo", delay: 0.1 }, 0);
            tl.fromTo(parallaxItem2.current, { y: 150 }, { y: -130, ease: "expo", delay: 0.2 }, 0);
            tl.fromTo(parallaxItem3.current, { y: 100 }, { y: -250, ease: "expo", delay: 0.3 }, 0);
        }, parallaxRef)
        return () => context.revert();
    }, []);
    return (
        <>
            <div className='newsinsight-container' ref={parallaxRef}>
                <div className="ns-row-01 " >
                    <div className="ns-content">
                        <h1>
                            <span>Forward</span>
                            <span>Thinking</span>
                        </h1>
                        <p>
                            <span>Redefining the creative world with design,</span>
                            <span>innovation, and forward-thinking as a</span>
                            <span>leading Webflow Agency.</span>
                        </p>
                        <div className='insight-btn'>
                            <Link to='/news'>
                                <AnimaBtn btnText={'News & Insights'}></AnimaBtn>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ns-row-02" >
                    <div className="ns-list-pr " >
                        <div className="ns-video-01" ref={parallaxItem1}>
                            <div className='ns-video'>
                                <video muted loop autoPlay playsInline width="100%" loading='lazy'>
                                    <source src='people-short.mp4' type='video/mp4' />
                                </video>
                            </div>
                            <div className='ns-video-desc'>
                                <p>Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta.</p>
                            </div>
                        </div>
                        <div className="ns-img-02 " ref={parallaxItem2}>
                            <div className="ns-img">
                                <img src="ns2.jpg" alt="ns" />
                            </div>
                            <div className="ns-desc">
                                <p>Why Refokus is the Best Partner to Build Your Venture Capital Website</p>
                            </div>
                        </div>
                        <div className="ns-img-03 " ref={parallaxItem3}>
                            <div className="ns-img">
                                <img src="ns3.png" alt="ns" />
                            </div>
                            <div className="ns-desc">
                                <p>Webflow Agency Case Study of Refokus as a leading Webflow Enterprise Partner</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section5