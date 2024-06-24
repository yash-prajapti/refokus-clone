import React from 'react'
import AnimaBtn from '../../Button/AnimaBtn';

function Product({item,index,setHoveredProduct,hoveredProduct}) {
    const mouseEnter = (productIndex) => {
        setHoveredProduct(hoveredProduct.map((ite, ind) => {
            if (ind === productIndex) {
                ite.hover = true;
            } else {
                ite.hover = false;
            }
            return ite;
        }));
    };
    return (
        <div
            className={`products-list-items ${item.hover ? 'hovered' : ''}`}
            key={item.id}
            onMouseEnter={() => mouseEnter(index)}
        >
            <div className="product-item">
                <div className="product-title">
                    <h1>{item.title}</h1>
                </div>
                <div className={`product-video-container ${item.hover ? 'hovered' : ''}`}>
                    <div className="product-video">
                        {/* <video
                            // {...(item.hover && { autoPlay: true, playsInline: true })}
                            muted autoPlay playsInline
                            loop width="100%" loading='lazy'>
                            {item.video && <source src={item.video} type={item.videoType} />}
                            Your browser does not support the video tag.
                        </video> */}
                        <img src={item.img} alt="" />
                    </div>
                </div>
                <div className="product-desc">
                    <div className="product-desc-text">
                        <p>{item.desc}</p>
                    </div>
                    <div className="product-desc-btn">
                        {item.liveWebsite && <AnimaBtn btnText="Live Website" />}
                        {item.caseStudy && <AnimaBtn btnText="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product