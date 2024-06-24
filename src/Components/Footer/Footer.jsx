import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className='footer-container-cc'>
        <div className="footer-cc-01">
          <Link to={'/contact'} className='contact-link contact-lhs'>
            <div className="footer-contact">
              <div className="f-blocks-cc">
                <div className="f-title">
                  <h6>Up Next: Projects</h6>
                  <IoIosArrowRoundForward />
                </div>
                <div className="f-desc">
                  <h3>
                    <span>Projects & Case</span>
                    <span>Studies</span>
                  </h3>
                </div>
                <div className="f-work-name"><p><span>Web Design, Webflow</span> <span>Development, and Creative</span> <span>Development.</span></p></div>
              </div>
            </div>
          </Link>
          <Link to={'/contact'} className='contact-link contact-rhs'>
            <div className="footer-contact footer-contact-diff">
              <div className="f-blocks-cc">
                <div className="f-title">
                  <h6>Up Next: Projects</h6>
                  <IoIosArrowRoundForward />
                </div>
                <div className="f-desc"><h3><span>Let’s get to it,</span> <span>together.</span></h3></div>
                <div className="f-bText">Start a Project</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="footer-cc-black-02">
          <p>© All Rights Reserved YK</p>
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" loading='lazy' />
        </div>
      </div>
    </>
  )
}

export default Footer