import React from 'react'
import './News.css'
import Lazyloader from '../Lazyloader/Lazyloader'

function News() {
  return (
    <>
    <Lazyloader name={'news'} loadingState={true}/>
      <div className="news-container">
        <div className="news-section-01">
          <div className="news-title">
            <h3>News</h3>
          </div>
          <div className="news-heading">
            <h1>Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta</h1>
          </div>
          <div className="news-desc">
            <p>Refokus’s 2022 offsite in Hamburg was a memorable mix of work,<br /> play, and culinary exploration, strengthening our team spirit and <br /> setting new goals for the future.</p>
          </div>
        </div>
        <div className="news-section-02">
          <div className="news-yt-iframe">
            <iframe src="https://www.youtube.com/embed/l8dHHAHKqF4" title="Refokus Offsite 2022"></iframe>
          </div>
          <div className="news-yt-desc">
            <p>Just over a month ago, the Refokus squad decided to shake things up a bit. Working remotely has its perks, but nothing beats the magic of getting the whole gang together. So, what’s the secret sauce to keeping our team knit without the usual office space? A smashing offsite event that’s bound to be the talk of the town (or at least, our Slack channels) for months to come.</p>
          </div>
          <div className="news-desc-cc">
            <h1>Celebrating Us: The Kickoff</h1>
            <p>The offsite began with a look back at the rollercoaster of the past 18 months. It was more than a pat on the back—it was a celebration of resilience, creativity, and the unveiling of our snazzy new onboarding box (yes, it's as cool as it sounds). But it wasn’t just about where we’ve been; we shared our blueprint for Refokus’s bold future, and let’s just say, we’re all revved up for the ride ahead.</p>
          </div>
          <div className="news-desc-cc">
            <h1>Workshop Wonders and Lego Towers</h1>
            <p>In true Refokus fashion, we dove into a communication workshop that was anything but typical. Sure, creating a safe space for everyone to voice their thoughts is crucial, but have you ever tried to build a Lego tower under time pressure? It’s the kind of challenge that gets the creative juices flowing and proves that, yes, adults can still have a blast with Legos.</p>
          </div>
          <div className="news-desc-cc">
            <h1>Culinary Adventures in Hamburg</h1>
            <p>Next up, we took over the most stunning kitchen in Hamburg, tasked with what might just be our most challenging project to date. Under the guidance (and occasional exasperation) of two pro chefs, we tackled homemade ravioli and tiramisu. Spoiler alert: It was a delicious success, proving that Refokus’s talents extend far beyond digital screens.</p>
          </div>
          <div className="news-desc-cc">
            <h1>Elevating Our Game</h1>
            <p>The offsite wasn’t all play; we got down to business, refining our processes and brainstorming new ways to keep smashing our goals. It’s about making sure everyone's set up to unleash their full potential—no holding back.</p>
          </div>
          <div className="news-desc-cc">
            <h1>Boat Tours, City Explorations, and... Picnics?</h1>
            <p>Yes, you read that right. Our Hamburg escapade included an enlightening boat tour around the port, where we soaked up knowledge about yachts, dream retirement spots, and container ships, all while attempting to capture the perfect moonlit photo. And because we’re all about embracing those friend vibes, we wrapped up with a city tour and a picnic—Refokus style. Imagine us, lounging around, playing games, and setting records for the highest Jenga tower, until it was time to part ways with promises of “until next time…”</p>
          </div>
          <div className="news-desc-cc">
            <h1>Looking Back, Charging Forward</h1>
            <p>As we reflect on our 2022 offsite, it’s clear that these moments are the glue (or should we say, the code) that keeps our team close. It’s not just about the work we do but about creating experiences that allow us to learn, grow, and enjoy each other's company beyond the digital realm.</p>
          </div>
          <div className="news-yt-desc">
            <p>So, here’s to more offsites, more unforgettable memories, and to continuing our journey as a team driven by design and empowered by technology. Until next time, Refokus family!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default News