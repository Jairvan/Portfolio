import React from 'react';
import home from '../../assets/home.png';
import './intro.css';

const Intro = () => {
  return (
    <section class="home">
        <div class="home-img">
            <img src={home} alt=""/>
        </div>
        <div class="home-content">
            <h2 class="animate bounce">Hello, I'm</h2>
            <h1 class="animate animation--slow slideInRight">Jairvan Alarcon</h1>
            <h3  class="text">And I'm a <span>Frontend Developer</span></h3>
            <p>I am a motivated and results-driven IT graduate seeking entry level employment where my skills can be
            utilized and where I can grow professionally.</p>
            <div class="social-media">
                <a href="https://github.com/Jairvan" target="https://github.com/Jairvan"><i class='bx bxl-github' ></i></a>
                <a href="https://www.facebook.com/mendokseeeee" target="https://www.facebook.com/mendokseeeee"><i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/jairvaaan/" target="https://www.instagram.com/jairvaaan/"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="https://www.linkedin.com/in/jairvan-alarcon-2595992b1/" target="https://www.linkedin.com/in/jairvan-alarcon-2595992b1/"><i class='bx bxl-linkedin'></i></a>
            </div>
            <a href="JairvanAlarcon_Resume.pdf" class="btn" download>Download CV</a>
        </div>
    </section>
  )
}

export default Intro;