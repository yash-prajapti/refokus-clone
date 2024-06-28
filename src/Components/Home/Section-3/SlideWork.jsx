import React from 'react'
import AnimaBtn from '../../Button/AnimaBtn'
import ImageBlurhash from '../../../utils/ImageBlurhash/ImageBlurhash'
import LazyVideo from '../../Lazyloader/LazyVideo'

function SlideWork({ item, index }) {
    return (
        <div className="slide-item gs_reveal" key={index}>
            <div className="slide" style={{ backgroundColor: item.bgColor, backgroundImage: `url(${item.bgImg})` }}>
                <div className="slides-flex">
                    <div className="slide-left">
                        <div className="slide-cc-01">
                            <ImageBlurhash src={item.img1} alt={item.alt}
                                srcSmall={item.img1Small}
                            />
                        </div>
                        <div className="slide-cc-02">
                            <ImageBlurhash src={item.img2} alt={item.alt}
                                srcSmall={item.img2Small}
                            />
                        </div>
                    </div>
                    <div className="slide-right">
                        <div className="slide-cc-03">
                            <div className="slide-video">
                                <LazyVideo
                                    src={item.video}
                                    type={item.videoType}
                                    poster={item.videoPoster}
                                    width="100%"
                                    height="100%"
                                />
                                {/* <video muted autoPlay playsInline loop width="100%" loading='lazy'>
                                    {item.video && <source src={item.video} type={item.videoType} />}
                                    Your browser does not support the video tag.
                                </video> */}
                            </div>
                        </div>
                        <div className="slide-testimonial">
                            <div className="tl-title">
                                <p>{item.title}</p>
                            </div>
                            <div className="tl-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident labore unde nesciunt magnam quam adipisci sint aliquid?</p>
                            </div>
                            <AnimaBtn btnText={'Visit Website'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SlideWork