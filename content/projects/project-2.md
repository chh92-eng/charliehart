+++
title = "Airless Tire and Hub System"
description = "Cornell Mars Rover Project Team"
date = 2025-10-18
template = "project.html"
[extra]
image = "images/project-2.jpg"
+++

## Team Objective

**Cornell Mars Rover** is an extracurricular, for-credit engineering project team that designs and builds a fully autonomous Mars rover each year. The rover is developed for the **University Rover Challenge (URC)** in Utah, hosted by *The Mars Society* each May, where teams are judged on system performance and mission execution in Mars-like terrain.

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:1rem; margin:2rem 0;">
  <iframe src="https://www.youtube.com/embed/HoFIuPtQGmM"
          title="Cornell Mars Rover – URC SAR 2025"
          style="position:absolute; top:0; left:0; width:100%; height:100%; border:0; border-radius:1rem;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
  </iframe>
</div>

<div style="text-align:center; font-size:1rem; color:#555; margin-top:0rem;">
  Cornell Mars Rover – URC SAR 2025
</div>

<br>

## Project Overview

As a member of the *Drives Subteam*, I contributed to the design and prototyping of the rover’s wheel and hub system—components that had to be lightweight, manufacturable, and capable of withstanding harsh desert conditions. I worked on modeling and refining the wheel geometry in Autodesk Inventor, creating shop drawings, and preparing the parts for fabrication. During this process, I earned certification to operate equipment such as mills and lathes, which gave me first-hand experience translating CAD models into precise physical components.

My role also involved analyzing material performance and load behavior using ANSYS, collaborating closely with other subteams to ensure mechanical designs integrated smoothly with electrical and software systems. Working in this multidisciplinary environment taught me how iterative design, communication, and testing all come together to make a complex system reliable. My time on the team strengthened my technical foundation while giving me a practical understanding of how large engineering projects move from concept to competition.

<div style="display:flex; align-items:center; justify-content:flex-start; gap:2rem; flex-wrap:wrap; margin-bottom:2.5rem;">

  <!-- Image on the right -->
  <div style="width:350px; height:350px; overflow:hidden; border-radius:1rem; flex-shrink:0;">
    <img src="../../images/project-2.jpg"
         alt="Wheel assembly"
         style="width:100%; height:100%; object-fit:cover; object-position:center 40%; display:block;">
  </div>

  <!-- Text content on the left -->
  <div style="flex:1; min-width:260px;">
    <h1 style="margin:0; font-size:1.5rem; font-weight:700;">Tire and Hub System on 2025 Rover</h1>
    <p style="margin:0.5rem 0 1rem; font-size:1.1rem; color:#111;">
      Wheel mounted on rover used in competition
    </p>
  </div> <!-- ✅ this closing tag was missing -->

</div> <!-- ✅ closes the outer flex container -->

## My Role

<p style="text-align:justify;">
  <figure style="float:right; width:380px; margin:0 0 1rem 1.5rem; text-align:center;">
    <img src="../../images/project2-cdrCAD.png"
         alt="Iteration of Full Rover Leg Assembly"
         style="width:100%; height:auto; border-radius:1rem; display:block; margin-bottom:0.4rem;">
    <figcaption style="font-size:0.9rem; color:#111;">Iteration of Full Rover Leg Assembly</figcaption>
  </figure>
  Within this team, I was a part of the Drives Subteam, which focus on design the frame, legs, and wheels of the rover. My task was to work with my partner to develop a new wheel and hub system that reduced the total weight of the wheel systems on the rover. The competition rules set the maximum weight for the rover at 50 kilograms, so weight optimization is a large part of the responsibility for Drives Subteam engineers.
</p>

We decided to design a tire and hub system that would utilize airless tires, produced using TPU filament on a 3D printer. The system was designed with the intent that if the airless tires were to catastrophically fail, they could be easily replaced with pneumatic tires. This meant we had to create a hub that could be interoperable with different types of tires.

<p style="text-align:justify;">
  <figure style="float:left; width:380px; margin:1rem 1.5rem 1rem 0; text-align:center;">
    <img src="../../images/project2-cad2.png"
         alt="Tire CAD Model"
         style="width:100%; height:auto; border-radius:1rem; display:block; margin-bottom:0.4rem;">
    <figcaption style="font-size:0.9rem; color:#111;">Tire CAD Model</figcaption>
  </figure>
  When designing the tires themselves, my partner and I studied different designs for airless tires, such as previous rover designs or tires from Michelin. In previous iterations of the rover that utilized airless tires, the main shortfall was the unpredictability of the direction of bending experienced by the support trusses within the two rims of the tires. To remedy this, my partner and I designed the wheel to have arched supports between the two rims that would reliably bend inwards upon one another when they experienced high loads. This would ensure smooth geometry of the outer rim as it compressed against the ground. If the supports were to bend in opposing directions, it would lead to uneven distributions of strength, inducing higher loads upon certain sections of the wheel and lower loads along other portions. Our design ensured loading was even across the entirety of the wheel experiencing the load at one time.
</p>

### CAD

<p style="text-align:justify;">
  <figure style="float:right; width:300px; margin:0rem 1.5rem 0 0; text-align:center;">
    <div style="width:100%; height:200px; overflow:hidden; border-radius:1rem;">
      <img src="../../images/project-2-fullCAD.png"
           alt="Full System Assembly CAD Model"
           style="width:100%; height:100%; object-fit:cover; object-position:70% 65%; display:block;">
    </div>
    <figcaption style="font-size:0.9rem; color:#111;">Full System Assembly CAD Model</figcaption>
  </figure>
  My work on this project allowed me to build strong skills in using CAD software, specifically Autodesk Inventor, for modeling complex prototypes and creating detailed assemblies. I designed both the tire and hub geometry, ensuring proper fit between the TPU-printed tire, aluminum hubs, and torque-transmitting spacers. I also learned how to apply geometric constraints and tolerances that ensured consistent alignment between parts during assembly and testing. Beyond function, I incorporated visual and practical design details—such as curved spoke patterns for controlled deformation and powder-coated matte black hubs—to produce a robust and professional-looking final product.
</p>


### Physical Testing

Once the prototype wheel assembly was completed, I conducted a series of physical tests to evaluate its performance under realistic loading conditions. Using a custom-built test rig consisting of parts I manufactured, I applied more than 25 kilograms of compressive force to the wheel to measure deflection and observe material behavior. These tests revealed how the TPU tire deformed between spacers and confirmed that the hub system withstood expected loads without failure. I analyzed deformation patterns to ensure the spokes bent predictably inward, validating the design’s intended behavior under stress. The results informed minor geometric refinements and guided future improvements, including additional torque and roll testing planned with the suspension team.

<div style="display:flex; justify-content:center; align-items:flex-start; gap:2rem; flex-wrap:wrap; margin:2rem 0;">

  <!-- Front view -->
  <div style="text-align:center;">
    <div style="width:300px; height:300px; overflow:hidden; border-radius:1rem; margin-bottom:0.5rem;">
      <img src="../../images/project2-test2.jpeg"
           alt="Test Rig Manufactured Part Installed"
           style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <p style="font-size:0.95rem; color:#111; margin:0;">Test Rig Manufactured Part Installed</p>
  </div>

  <!-- Back view -->
  <div style="text-align:center;">
    <div style="width:300px; height:300px; overflow:hidden; border-radius:1rem; margin-bottom:0.5rem;">
      <img src="../../images/project2-test1.png"
           alt="Wheel Deformation During Testing"
           style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <p style="font-size:0.95rem; color:#111; margin:0;">Wheel Deformation During Testing</p>
  </div>

</div>

