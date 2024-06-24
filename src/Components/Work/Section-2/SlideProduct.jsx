import React from 'react'
import AnimaBtn from '../../Button/AnimaBtn'

function SlideProduct({item}) {
    return (
        <div className="product-slide">
            <div className="slide-title">
                <h1>{item.title}</h1>
            </div>
            <div className="slide-img">
                <img src={item.img} alt="" />
            </div>
            <div className="slide-desc">
                <p>{item.desc}</p>
            </div>
            <div className="slide-btn">
                {item.liveWebsite && <AnimaBtn btnText="Live Website" />}
                {item.caseStudy && <AnimaBtn btnText="Case Study" />}
            </div>
        </div>
    )
}

export default SlideProduct