import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PanelCard from './PanelCard';
import ImageBlurhash from '../../utils/ImageBlurhash/ImageBlurhash';

gsap.registerPlugin(ScrollTrigger);

function Sec2() {
  const containerRef = useRef(null);
  const panels = [
    { className: 'panel-01', img: 'panel1.png', imgSmall: 'panel1-small.png', cardTitle: 'Our People', cardNum: '25+', cardDesc: "We are a world-class team of experts working remotely across different time zones, mostly in Germany, the UK, Argentina, and the US East Coast—the world's leading hubs for creative talent." },
    { className: 'panel-02', img: 'panel2.png', imgSmall: 'panel2-small.png', cardTitle: 'Our Awards', cardNum: '77', cardDesc: "We are results-driven and people-focused (but awards are nice too!). We've won website of the day from multiple awards organizations and have been nominated twice for Webflow Agency of the year." },
    { className: 'panel-03', img: 'panel3.png', imgSmall: 'panel3-small.png', cardTitle: 'Our Vision', cardNum: 'Inno', cardDesc: "We strive to push the boundaries of creativity and technology, continuously seeking new ways to innovate and provide exceptional value to our clients." },
    { className: 'panel-04', img: 'panel4.png', imgSmall: 'panel4-small.png', cardTitle: 'Our History', cardNum: '2021', cardDesc: "We are proud of our short history, positioning ourselves as market leaders and demonstrating that great work fuels growth." },
    { className: 'panel-05', img: 'panel5.png', imgSmall: 'panel5-small.png', cardTitle: 'Our Technology', cardNum: 'Edge', cardDesc: "We utilize cutting-edge technology to provide our clients with innovative and efficient solutions, staying ahead of industry trends." },
    { className: 'panel-06', img: 'panel6.png', imgSmall: 'panel6-small.png', cardTitle: 'Our Support', cardNum: '24/7', cardDesc: "Our support team is available 24/7 to assist our clients with any queries or issues, ensuring seamless operation and satisfaction." },
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");
    const duration = 10;
    const sectionIncrement = duration / (sections.length - 1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: "+=5000"
      }
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: duration,
      ease: "none"
    });

    sections.forEach((section, index) => {
      let tween = gsap.from(section, {
        opacity: 0,
        scale: 0.6,
        duration: 1,
        force3D: true,
        paused: true
      });

      addSectionCallbacks(tl, {
        start: sectionIncrement * (index - 0.99),
        end: sectionIncrement * (index + 0.99),
        onEnter: () => tween.play(),
        onLeave: () => tween.reverse(),
        onEnterBack: () => tween.play(),
        onLeaveBack: () => tween.reverse()
      });

      if (index === 0) tween.progress(1); // the first tween should be at its end (already faded/scaled in)
    });

    function addSectionCallbacks(timeline, { start, end, onEnter, onLeave, onEnterBack, onLeaveBack }) {
      const trackDirection = animation => {
        const onUpdate = animation.eventCallback("onUpdate");
        let prevTime = animation.time();
        animation.direction = animation.reversed() ? -1 : 1;
        animation.eventCallback("onUpdate", () => {
          let time = animation.time();
          if (prevTime !== time) {
            animation.direction = time < prevTime ? -1 : 1;
            prevTime = time;
          }
          onUpdate && onUpdate.call(animation);
        });
      };

      const empty = v => v;
      timeline.direction || trackDirection(timeline);
      start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(), start);
      end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(), end);
    }
  }, [containerRef]);

  return (
    <div className="horizontal-container" ref={containerRef}>
      {panels.map((item, index) => (
        <div className={`panel ${item.className}`} key={index}>
          <div className="panel-image" style={{backgroundImage:`url(${item.imgSmall})`}}>
            <ImageBlurhash src={item.img} alt={'alt'}
              srcSmall={item.imgSmall}
            />
          </div>
          <PanelCard item={item} className="panel-card" />
        </div>
      ))}
    </div>
  );
}

export default Sec2;
