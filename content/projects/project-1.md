+++
date = "2025-10-16"
draft = false
title = "LoRaWAN Connection Mapping Device"
description = "Mapping the range of a LoRaWAN gateway for municipal IoT use cases"
[extra]
image = "/images/project-1.jpg"
+++

## MAE 4220 Course Intro

As part of my undergraduate degree in Mechanical Engineering at Cornell University, I completed *MAE 4220: Introduction to Internet of Things Technology*. The course introduced students to the design and implementation of Internet of Things (IoT) systems—networks of physical devices embedded with sensors and microcontrollers that collect, exchange, and act on data. Through hands-on projects, we used C++, Arduino microcontrollers, and I²C communication protocols to interface with various sensors and actuators. We also deployed data over *The Things Network* using LoRaWAN technology, exploring how long-range, low-power communication can enable community-scale IoT applications across Upstate New York.


## Project


<p style="text-align:justify;">
  <figure style="float:right; width:380px; margin:0 0 1rem 1.5rem; text-align:center;">
    <img src="../../images/project1_map_black.jpg"
         alt="LoRaWAN Gateway Connection Map – Ithaca"
         style="width:100%; height:auto; border-radius:1rem; display:block; margin-bottom:0.4rem;">
    <figcaption style="font-size:0.9rem; color:#111;">LoRaWAN Gateway Connections Map – Ithaca</figcaption>
  </figure>
  For our final project, my team developed an improved LoRaWAN signal strength tracker to support community-driven smart city projects in Upstate New York. Working with partners from the City of Syracuse and Blueprint Geneva, we redesigned a previous LoRaWAN tracker to be more compact, weather-resistant, and user-friendly for non-technical volunteers. The device used an Arduino Feather board and an I²C bus to log GPS and signal data locally on an SD card while also transmitting it to The Things Network via LoRaWAN. Our design included an OLED display for real-time feedback, a simple D-pad interface, and all-day battery life. Through field testing around Ithaca, we confirmed reliable GPS and LoRaWAN connectivity across more than 26 square kilometers. The green dots on the map represent instances where the device successfully sent a signal ping to the gateway, confirming connectivity during our drive test. This project produced an open-source tool and documentation package that enables local governments and nonprofits to map network coverage and expand access to IoT infrastructure.
</p>


<div style="text-align:center; margin:2rem 0;">
  <div style="width:650px; height:380px; overflow:hidden; border-radius:1rem; margin:0 auto; position:relative;">
    <img src="../../images/project1_map_white.jpg"
         alt="Field Testing Area – Ithaca Region"
         style="width:110%; height:100%; object-fit:cover; object-position:center 10%; transform:translateX(-4%); display:block;">
  </div>
  <p style="font-size:0.95rem; color:#111; margin-top:0.5rem;">Field Testing Area – Ithaca Region</p>
</div>







My main contribution was the physical design for the device. Using Autodesk Inventor, I designed the protective casing to be compact and handheld while ensuring the circuitry inside remained secure.


## CAD Visual
<div style="display:flex; justify-content:center; align-items:flex-start; gap:2rem; flex-wrap:wrap; margin:2rem 0;">

  <!-- Front view -->
  <div style="text-align:center;">
    <div style="width:300px; height:300px; overflow:hidden; border-radius:1rem; margin-bottom:0.5rem;">
      <img src="../../images/project-1-CAD-front.png"
           alt="Device Casing CAD - Front"
           style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <p style="font-size:0.95rem; color:#111; margin:0;">Device Casing CAD – Front</p>
  </div>

  <!-- Back view -->
  <div style="text-align:center;">
    <div style="width:300px; height:300px; overflow:hidden; border-radius:1rem; margin-bottom:0.5rem;">
      <img src="../../images/project-1-CAD-back.png"
           alt="Device Casing CAD - Back"
           style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <p style="font-size:0.95rem; color:#111; margin:0;">Device Casing CAD – Back</p>
  </div>

</div>

![Screenshot](../../images/project1_inside.jpg)