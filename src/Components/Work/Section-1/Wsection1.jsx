import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageBlurhash from "../../../utils/ImageBlurhash/ImageBlurhash";


gsap.registerPlugin(ScrollTrigger);

const Wsection1 = () => {

    const [images, setImages] = useState([
        {
            img: 'w1.png',
            imgSmall: 'w1-small.png',
            top: "50%",
            left: "50%",
            isActive: true,
        },
        {
            img: 'w2.png',
            imgSmall: 'w2-small.png',
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            img: 'w3.png',
            imgSmall: 'w3-small.png',
            top: "45%",
            left: "56%",
            isActive: false,
        },
        {
            img: 'w4.png',
            imgSmall: 'w4-small.png',
            top: "60%",
            left: "53%",
            isActive: false,
        },
        {
            img: 'w5.png',
            imgSmall: 'w5-small.png',
            top: "43%",
            left: "40%",
            isActive: false,
        },
        {
            img: 'w6.png',
            imgSmall: 'w6-small.png',
            top: "65%",
            left: "55%",
            isActive: false,
        },
    ]);
    useGSAP(() => {
        const Tl = gsap.timeline()
        // for image appearance based on scrolling
        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const progress = self.progress;

                function imagesShow(arr) {
                    setImages((prev) =>
                        prev.map((item, index) =>
                            arr.indexOf(index) === -1
                                ? { ...item, isActive: false }
                                : { ...item, isActive: true }
                        )
                    );
                }
                switch (Math.floor(progress * 100)) {
                    case 0:
                        imagesShow([]);
                        break;
                    case 4:
                        imagesShow([0]);
                        break;
                    case 8:
                        imagesShow([0, 1]);
                        break;
                    case 12:
                        imagesShow([0, 1, 2]);
                        break;
                    case 17:
                        imagesShow([0, 1, 2, 3]);
                        break;
                    case 22:
                        imagesShow([0, 1, 2, 3, 4]);
                        break;
                    case 23:
                        imagesShow([0, 1, 2, 3, 4, 5]);
                        break;
                    default:
                        break;
                }
            }
        });

        // for slowing container
        Tl.to(".work-container", {
            scrollTrigger: {
                trigger: ".work-container",
                scrub: true,
                pin: true,
                start: "center center",
                end: "bottom -60%",
                ease: "power2"
            }
        }, 0);
        Tl.to(".text-container", {
            scrollTrigger: {
                trigger: ".work-container",
                scrub: 0.5,
                start: "top bottom",
                end: "bottom -300%",
                ease: "power2"
            },
            y: "-20%"
        }, 0);
    }, []);

    return (
        <div className="work-container">
            <div className="text-container">
                <h1 className="heading">
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                    <span>work</span>
                </h1>
                <p className="subheading">Web Design, Webflow Development, Creative Development</p>
                <div className="images-container">
                    {images.map(
                        (item, index) =>
                            item.isActive && (
                                <div className="image"
                                    key={index}
                                    style={{ top: item.top, left: item.left,backgroundImage:`url(${item.imgSmall})` }}
                                >
                                    <ImageBlurhash className='image' src={item.img} alt={'alt'}
                                        srcSmall={item.imgSmall} key={index} />
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wsection1;
