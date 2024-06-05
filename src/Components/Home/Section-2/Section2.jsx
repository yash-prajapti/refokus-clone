import React from 'react'

function Section2() {
    const MarqueeLogos = [
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg' }]
    const Marquee2Logos = [
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg' },
        { src: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg' }]
    return (
        <>
            {/* section 2 ------------------------------*/}
            <div className="marquee-container">
                <div className="marquee-logos">
                    <div className="marquee-wrapper">
                        <div className="marquee">
                            {MarqueeLogos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo'/>
                            ))}
                        </div>
                        <div className="marquee">
                            {MarqueeLogos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo' />
                            ))}
                        </div>
                        <div className="marquee">
                            {MarqueeLogos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo'/>
                            ))}
                        </div>
                    </div>
                    <div className="marquee-wrapper">
                        <div className="marquee">
                            {Marquee2Logos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo'/>
                            ))}
                        </div>
                        <div className="marquee">
                            {Marquee2Logos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo' />
                            ))}
                        </div>
                        <div className="marquee">
                            {Marquee2Logos.map((logo, index) => (
                                <img key={index} src={logo.src} alt="logo" className='marquee-logo'/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2