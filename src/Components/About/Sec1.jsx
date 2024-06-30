import React, { useRef } from 'react'
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageBlurhash from '../../utils/ImageBlurhash/ImageBlurhash';

gsap.registerPlugin(ScrollTrigger);

function Sec1() {
    const gridItems = [
        { className: 'grid-item-1', img: 'about1.png',imgSmall: 'about1-small.png'},
        { className: 'grid-item-2', img: 'about2.png',imgSmall: 'about2-small.png'},
        { className: 'grid-item-3', img: 'about3.png',imgSmall: 'about3-small.png'},
        { className: 'grid-item-4', img: 'about4.png',imgSmall: 'about4-small.png'},
        { className: 'grid-item-5', img: 'about5.png',imgSmall: 'about5-small.png'},
        { className: 'grid-item-6', img: 'about6.png',imgSmall: 'about6-small.png'},
        { className: 'grid-item-7', img: 'about7.png',imgSmall: 'about7-small.png'},
    ]
    const containerRef = useRef(null);
    useGSAP(()=>{
        let image = gsap.utils.toArray(".grid-item-1, .grid-item-5, .grid-item-6");
        let image2 = gsap.utils.toArray(".grid-item-2, .grid-item-4, .grid-item-7, .grid-item-3");
        setTimeout(function() {
            gsap.fromTo(image, {xPercent: -150},{
                xPercent: 100,
                ease: "linear",
                scrollTrigger: {
                  trigger: containerRef.current,
                  scrub: true
                }, 
              });
            gsap.fromTo(image2, {xPercent: 150},{
                xPercent: -100,
                ease: "linear",
                scrollTrigger: {
                  trigger: containerRef.current,
                  scrub: true
                }, 
              });
        },2800)
    },[containerRef])
    return (
        <div className='sec-1-container' ref={containerRef}>
            <div className="sec-1-title">
                <h1>Forward <br />
                    –Thinking</h1>
            </div>
            <div className="img-grid-container">
                <div className="img-grid">
                    {gridItems.map((item, index) => (
                        <div className={'grid-item ' + item.className} key={index}>
                            <div className="item-img" style={{backgroundImage:`url(${item.imgSmall})`}}>
                            <ImageBlurhash src={item.img} alt={'alt'}
                                srcSmall={item.imgSmall} 
                            />
                                {/* <img src={item.img} alt="" /> */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Sec1