import React from 'react'
import ImageBlurhash from '../../utils/ImageBlurhash/ImageBlurhash'

function Sec3() {
    return (
        <div className='sec-3-container'>
            <div className="tech-headline">
                <h1>Design driven <br />
                    Technology empowered <br />
                    Human focused</h1>
            </div>
            <div className="tech-desc">
                <p>We believe that the synergy between design and technology is unprecedentedly sculpting our world, enhancing our lives, fuelling creativity, boosting efficiency, and constantly redefining the limits of what’s possible.</p>
                <p>This approach, combined with a human-focused mindset, results in the new breed of agency we are creating, one that delivers more value, in less time, and with a better experience for everyone involved.</p>
            </div>
            <div className="ceo-about-sec">
                <div className="ceo-img">
                    <ImageBlurhash src={"ceo.png"} alt={'alt'}
                        srcSmall={'ceo.png'}
                    />
                </div>
                <div className="ceo-name">
                    <h2>Steffi & Leo</h2>
                    <h5>Refokus Founders</h5>
                </div>
            </div>
            <div className="ceo-desc">
                <h1>“Our goal is to create websites that <br /> <span>tell stories,</span> making them stand out in <br /> a digital world where <span>uniqueness</span> is <br /> increasingly rare.”</h1>
            </div>
        </div>
    )
}

export default Sec3