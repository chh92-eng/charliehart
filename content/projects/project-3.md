+++
title = "Wind Turbine Blade Design"
description = "MAE 4272: Fluids and Heat Transfer Lab — Blade Design Project"
date = 2025-10-15
template = "project.html"
[extra]
image = "images/project-3.jpg"
+++


## Overview

<p style="text-align:justify;">
  <figure style="float:right; width:380px; margin:0 0 1rem 1.5rem; text-align:center;">
    <img src="../../images/project-3-blades.jpeg"
         alt="Iteration of Full Rover Leg Assembly"
         style="width:100%; height:auto; border-radius:1rem; display:block; margin-bottom:0.4rem;">
    <figcaption style="font-size:0.9rem; color:#111;">Printed Blades</figcaption>
  </figure>
  For this project, our team was tasked with designing the blades for a small-scale wind turbine that would operate within strict geometric and performance constraints. The turbine had to use a standardized 1-inch hub, accept blades no longer than 6 inches, and run at a fixed angular velocity not exceeding 2000 RPM. We were also required to optimize performance for a wind environment characterized by a Weibull distribution with parameters k = 5 and c = 5, representing typical mid-range wind conditions.
</p>

The objective was to engineer a blade geometry that maximized aerodynamic efficiency under these operating conditions while remaining fully manufacturable for 3D printing and compatible with the course’s testing apparatus. The final design included a complete aerodynamic analysis, CAD modeling of the optimized geometry, and preparation for downstream fabrication and testing.

## Design Process
To develop an efficient and manufacturable blade, I wrote a custom Python script that automated the full aerodynamic design and optimization workflow. The script began by generating interpolated lift and drag polars for the NACA 4412 airfoil across the Reynolds-number range expected on a 6-inch blade. These polars served as inputs to a Blade Element Momentum Theory (BEMT) model that I also implemented in Python, allowing us to compute induced velocities, aerodynamic loading, and the local flow angle at each radial station.

Using these results, the script iteratively updated the chord and twist distributions to maintain an optimal angle of attack and circulation distribution along the span. Each iteration combined the BEMT solution with ideal loading expressions, Prandtl tip and root loss models, and numerical stabilization techniques to ensure convergence under low-Reynolds conditions near the hub. Once the aerodynamic solution stabilized, I incorporated smoothing routines to ensure the final geometry met manufacturability constraints and the project’s axial projection limits.

After the optimized geometry converged, the Python script exported the chord, twist, and radial positioning data for CAD. I then used these computed profiles to build a complete 3D blade model, which our instructor sent to an external fabrication partner for high-resolution 3D printing. The printed blades were later used for experimental testing in the course.

## Prototype Testing

<div style="display:flex; justify-content:center; align-items:flex-start; gap:2rem; flex-wrap:wrap; margin:2rem 0;">

  <!-- Front view -->
  <div style="text-align:center;">
    <div style="width:300px; height:300px; overflow:hidden; border-radius:1rem; margin-bottom:0.5rem;">
      <img src="../../images/project-3-setup.jpeg"
           alt="Device Casing CAD - Front"
           style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <p style="font-size:0.95rem; color:#111; margin:0;">Turbine in Wind Tunnel</p>
  </div>
</div>

Describe your contributions here.

## My Role
Explain your workflow here.

## Results
Add images, plots, and outcomes.
