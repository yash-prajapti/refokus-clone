import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wsection1 = () => {

    const [images, setImages] = useState([
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top: "50%",
            left: "50%",
            isActive: true,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top: "45%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top: "60%",
            left: "53%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top: "43%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
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
                        (elem, index) =>
                            elem.isActive && (
                                <img
                                    className="image"
                                    src={elem.url}
                                    key={index}
                                    style={{ top: elem.top, left: elem.left }}
                                    alt="work"
                                    loading="lazy"
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wsection1;
