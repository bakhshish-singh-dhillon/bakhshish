import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'
// import * as  homeCss from '../scss/index.module.scss'
import profilePic from '../img/Bakhshish-Singh-Dhillon.png'
import tempConst from '../img/under-construction.png'
import ludo from '../img/ludo.png'
import android_game from '../img/android-game.png'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <main>
        <section class="container about" id="about">
          <div class="main-title">
            <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
          </div>
          <div class="about-container">
            <div class="left-about">
              <h4>Information About me</h4>
              <p>
                Hold a Master’s in Computer Applications from India and a Post-Graduate Diploma in Web Development from the University of Winnipeg. <br /> <br /> Worked with a wide array of technologies including WordPress, PHP, Vue, Laravel, C, C++, Java, Arduinos, Microcontroller programming, Android Application development, C graphics, and  Embedded C.

              </p>
              <div class="btn-con">
                <a href="#" class="main-btn">
                  <span class="btn-text">LinkedIn</span>
                  <span class="btn-icon"><i class="fab fa-linkedin-in"></i></span>
                </a>
              </div>
            </div>
            <div class="right-about">
              <div class="about-item">
                <div class="abt-text">
                  <p class="large-text">30+</p>
                  <p class="small-text">Projects <br /> Completed</p>
                </div>
              </div>
              <div class="about-item">
                <div class="abt-text">
                  <p class="large-text">2+</p>
                  <p class="small-text">Years of <br /> experience</p>
                </div>
              </div>
              <div class="about-item">
                <div class="abt-text">
                  <p class="large-text">50+</p>
                  <p class="small-text">Academic <br /> Presentations</p>
                </div>
              </div>
              <div class="about-item">
                <div class="abt-text">
                  <p class="large-text">10+</p>
                  <p class="small-text">Academic <br /> Awards</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-stats">
            <h4 class="stat-title">My Skills</h4>
            <div class="progress-bars">
              <div class="progress-bar">
                <p class="prog-title">php</p>
                <div class="progress-con">
                  <p class="prog-text">80%</p>
                  <div class="progress">
                    <span class="html"></span>
                  </div>
                </div>
              </div>
              <div class="progress-bar">
                <p class="prog-title">laravel</p>
                <div class="progress-con">
                  <p class="prog-text">95%</p>
                  <div class="progress">
                    <span class="css"></span>
                  </div>
                </div>
              </div>
              <div class="progress-bar">
                <p class="prog-title">vuejs</p>
                <div class="progress-con">
                  <p class="prog-text">75%</p>
                  <div class="progress">
                    <span class="js"></span>
                  </div>
                </div>
              </div>
              <div class="progress-bar">
                <p class="prog-title">jquery</p>
                <div class="progress-con">
                  <p class="prog-text">80%</p>
                  <div class="progress">
                    <span class="react"></span>
                  </div>
                </div>
              </div>
              <div class="progress-bar">
                <p class="prog-title">html5</p>
                <div class="progress-con">
                  <p class="prog-text">87%</p>
                  <div class="progress">
                    <span class="node"></span>
                  </div>
                </div>
              </div>
              <div class="progress-bar">
                <p class="prog-title">css</p>
                <div class="progress-con">
                  <p class="prog-text">70%</p>
                  <div class="progress">
                    <span class="python"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 class="stat-title">My Timeline</h4>
          <div class="timeline">
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2021 - 2022</p>
              <h5>PG Diploma Web Development<span> - University of Winnipeg</span></h5>
              <p>
              </p>
            </div>
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2021 - present</p>
              <h5>Associate<span> - Walmart</span></h5>
              <p>
              </p>
            </div>
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2019 - 2021</p>
              <h5>Freelance<span> </span></h5>
              <p>
              </p>
            </div>
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2018 - 2019</p>
              <h5>PHP Programmer<span> - Infino Digital Agency</span></h5>
              <p>
              </p>
            </div>
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2016 - 2018</p>
              <h5>Master of Computer Applications<span> - Punjab Technical University</span></h5>
              <p>
              </p>
            </div>
            <div class="timeline-item">
              <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <p class="tl-duration">2013 - 2016</p>
              <h5>Bachelor of Computer Applications<span> - Punjab Technical University</span></h5>
              <p>
              </p>
            </div>
          </div>
        </section>
        <section class="container" id="portfolio">
          <div class="main-title">
            <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
          </div>
          <p class="port-text">
            Here is some of my work that I've done in various programming languages.
          </p>
          <div class="portfolios">
            <div class="portfolio-item">
              <div class="image">
              <iframe height="300" src="https://www.youtube.com/embed/D3jBXd7pgw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="hover-items">
                <h3>Smart Watch IOT</h3>
                <div class="icons">
                  <a href="https://github.com/bakhshish-singh-dhillon/smart_watch_ESP_arduino" class="icon">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="https://youtu.be/D3jBXd7pgw4" class="icon">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="portfolio-item">
              <div class="image">
                <img src={ludo} alt="" />
              </div>
              <div class="hover-items">
                <h3>Ludo board game</h3>
                <div class="icons">
                  <a href="https://github.com/bakhshish-singh-dhillon/game_ludo_java" class="icon">
                    <i class="fab fa-github"></i>
                  </a>
                  {/* <a href="#" class="icon">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="#" class="icon">
                    <i class="fab fa-youtube"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div class="portfolio-item">
              <div class="image">
                <img src={android_game} alt="" />
              </div>
              <div class="hover-items">
                <h3>Andord Game - Hit the baloon</h3>
                <div class="icons">
                  <a href="https://github.com/bakhshish-singh-dhillon/android_game_hit_the_balloon" class="icon">
                    <i class="fab fa-github"></i>
                  </a>
                  {/* <a href="#" class="icon">
                    <i class="fab fa-behance"></i>
                  </a>
                  <a href="#" class="icon">
                    <i class="fab fa-youtube"></i>
                  </a> */}
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* <section class="container" id="blogs">
          <div class="blogs-content">
            <div class="main-title">
              <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
            </div>
            <div class="blogs">
              <div class="blog">
                <img src="img/port6.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    How to Create Your Own Website
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div class="blog">
                <img src="img/blog1.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    How to Become an Expert in Web Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div class="blog">
                <img src="img/blog2.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    Become a Web Designer in 10 Days
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div class="blog">
                <img src="img/blog3.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    Debbuging made easy with Web Inspector
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div class="blog">
                <img src="img/port1.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    Get started with Web Design and UI Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
              <div class="blog">
                <img src="img/port3.jpg" alt="" />
                <div class="blog-text">
                  <h4>
                    This is what you need to know about Web Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus natus voluptas, eos obcaecati recusandae amet?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section class="container contact" id="contact">
          <div class="contact-container">
            <div class="main-title">
              <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
            </div>
            <div class="contact-content-con">
              <div class="left-contact">
                <h4>Contact me here</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                </p>
                <div class="contact-info">
                  <div class="contact-item">
                    <div class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>Location</span>
                    </div>
                    <p>
                      : London, united Kingdom
                    </p>
                  </div>
                  <div class="contact-item">
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                      <span>Email</span>
                    </div>
                    <p>
                      <span>: maclinzuniversal@gmail.com</span>
                    </p>
                  </div>
                  <div class="contact-item">
                    <div class="icon">
                      <i class="fas fa-user-graduate"></i>
                      <span>Education</span>
                    </div>
                    <p>
                      <span>: Sussex University, East Sussex</span>
                    </p>
                  </div>
                  <div class="contact-item">
                    <div class="icon">
                      <i class="fas fa-user-graduate"></i>
                      <span>Mobile Number</span>
                    </div>
                    <p>
                      <span>: 07522670617</span>
                    </p>
                  </div>
                  <div class="contact-item">
                    <div class="icon">
                      <i class="fas fa-globe-africa"></i>
                      <span>Languages</span>
                    </div>
                    <p>
                      <span>: Afrikaans, English, Spanish</span>
                    </p>
                  </div>
                </div>
                <div class="contact-icons">
                  <div class="contact-icon">
                    <a href="www.facebook.com" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="right-contact">
                <form action="" class="contact-form">
                  <div class="input-control i-c-2">
                    <input type="text" required placeholder="YOUR NAME" />
                    <input type="email" required placeholder="YOUR EMAIL" />
                  </div>
                  <div class="input-control">
                    <input type="text" required placeholder="ENTER SUBJECT" />
                  </div>
                  <div class="input-control">
                    <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                  </div>
                  <div class="submit-btn">
                    <a href="#" class="main-btn">
                      <span class="btn-text">Download CV</span>
                      <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>



    </Layout>
  )
}

export default IndexPage
