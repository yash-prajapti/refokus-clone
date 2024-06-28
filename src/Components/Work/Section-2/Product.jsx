import React from 'react'
import AnimaBtn from '../../Button/AnimaBtn';
import ImageBlurhash from '../../../utils/ImageBlurhash/ImageBlurhash';

function Product({ item, index, setHoveredProduct, hoveredProduct }) {
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
                        <ImageBlurhash src={item.img} alt={'alt'}
                            srcSmall={item.imgSmall}
                        />
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