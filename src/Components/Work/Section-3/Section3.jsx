import React, { useState } from 'react';
import Collapsible from './Collapsible';

function Section3() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className='section-3-container'>
            {accordion.map((item, index) => (
                <Collapsible
                    item={item}
                    key={index}
                    index={index}
                    isActive={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}

const accordion = [
    { ind: 0, que: 'What type of clients do you work with?', ans: 'We work with a range from startups to Fortune 500 companies, including some cool niches like Venture Capital firms. Sometimes we work with founders, and other times with marketing managers, but what’s most important is that our clients are ready to break the mold and refocus their brand and website with unique experiences.' },
    { ind: 1, que: 'How big does my project need to be?', ans: 'It doesn’t matter the size; we build everything from single-page landings to enterprise-level migrations of 1000+ pages and anything in between.' },
    { ind: 2, que: 'What’s your pricing looking like?', ans: 'Our pricing typically ranges from $25k to $150k, though most of our projects are around $50k. We like to work smart with budgets and strategize around your needs. For example, if you have a few pages but not a big budget, we could do something really cool for the homepage and opt for CMS templates or a component-driven approach for internal pages. But if you give us a huge budget, we can go crazy, add 3D animations, and all the good stuff.' },
    { ind: 3, que: 'Do you also make normal websites?', ans: 'We get this a lot. Yes, we do make normal websites, but with our own twist. Everything we do feels high-end and carefully crafted, and it doesn’t need to be crazy animated to feel amazing.' },
    { ind: 4, que: 'Is Refokus a Webflow agency?', ans: 'We are a Webflow Enterprise Partner and have been nominated (twice) for Webflow Agency of the Year. So yeah, we are kind of a Webflow agency, but not your typical one: we use Webflow as an engineering tool, coding cool stuff on top like GSAP animations, WebGL, and some other black magic.' },
];

export default Section3;
