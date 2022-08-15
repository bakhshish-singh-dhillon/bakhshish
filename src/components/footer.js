import React from "react"
import {useEffect, useState} from 'react';

import { Link } from 'gatsby'
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  useEffect(() => {
    (function () {
      [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
        })
      });
      document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
      })
    })();

  });
  return (
    <footer>
      <div class="controls">
        <div class="control active-btn" data-id="home" >
          <i class="fas fa-home"></i>
        </div>
        <div class="control" data-id="about">
          <i class="fas fa-user"></i>
        </div>
        <div class="control" data-id="portfolio">
          <i class="fas fa-briefcase"></i>
        </div>
        {/* <div class="control" data-id="blogs">
          <i class="far fa-newspaper"></i>
        </div>
        <div class="control" data-id="contact">
          <i class="fas fa-envelope-open"></i>
        </div> */}
      </div>
      <div class="theme-btn">
        <i class="fas fa-adjust"></i>
      </div>
    </footer>
  )
}

export default Footer