import React from 'react'
import Hero from '../../assets/images/hero.svg'
import github_logo from '../../assets/images/github_logo.svg'
import linkedin_logo from '../../assets/images/linkedin_logo.svg'
import './index.scss'

const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="heroContainer__logo">
        <img className="hero-img" src={Hero} alt="autoportrait" />
      </div>
      <div className="heroContainer__footer">
        <section className="heroContainer__footer__text">
          <h2>
            <span className="blue">>Bonjour,</span>
            <br></br>
            <span className="purple">>Je suis Younes,</span>
            <br></br>
            <span className="turquoise">>Développeur en formation,</span>
            <br></br>
            <span className="purple">>Bienvenue sur mon portfolio.</span>
            <br></br>
          </h2>
        </section>
        <section className="heroContainer__footer__social">
          <a href="https://www.linkedin.com/in/younes-yousfi/" target="_blank">
            <img className="logo" src={linkedin_logo} alt="linkedin" />
          </a>
          <a href="https://github.com/yuyu1403" target="_blank">
            <img className="logo" src={github_logo} alt="github" />
          </a>
        </section>
      </div>
    </div>
  )
}

export default HeroSection
