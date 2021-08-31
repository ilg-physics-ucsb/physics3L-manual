# Pendulum

:::Intro (Objective)
The objective of this lab is to collect data and evaluate a given model for the period of a pendulum and then make a *quantitative* argument about the model based on the data. 

You will be using the model provided below and see if you can detect a difference between using an initial angle of 10° and 20°. 
:::

# Introduction

## Simple Pendulum Basics
:::Figure (pendulumDiagram|l)
![A diagram of the apparatus. There is a vertical dashed line that marks the lowest point of the pendulum, while the bob itself is displaced to one side. There is an arc from the vertical to the displaced bob and it is labelled theta sub zero, for the initial angle. There is a marker running the length of the string to the middle of the bob to indicate the length of the pendulum designated as L. Lastly there is an m located inside the bob to show it has mass.](imgs/Lab1/PendulumDiagram.png "A diagram of the setup indicating the length, L, the mass, m, and the initial angle, θ_0. (Click on me, or any figure, to see a larger version)")
:::

In the last lab we introduced the simple pendulum. As a reminder, this is what we said.

The simple pendulum is called such because the most simplified model of pendulum that we have. It assumes that we are using a point mass, $m$, at the end of a string of length, $L$, that has negligible mass itself. Notice the simple pendulum does not attempt to exactly replicate what is happening in the real world. Instead it makes some assumptions and ignores some real life features.

This is a typical thing in physics. Often times the real world gets extremely complicated and it becomes easier to make assumptions and ignore things. However, we must be thoughtful about what we choose to assume and ignore. We want to choose things that will have little affect what we are trying to measure. Sometimes we do this well, and sometimes we are too loose with our assumptions. In the latter case we must then reevaluate our simplified model and add back things we may have thought we could ignore, or relax some of our assumptions.

The thing that we will be focusing on is the period, $T$. For the simple pendulum we have three parameters available to us. The mass of the bob, $m$, the length of the pendulum, $L$, and the initial angle, $\theta_0$. Each of these is depicted in [](Figure-pendulumDiagram) We will be adjusting these three parameters to see what affects they have on the period.

## The Model
The model that we will be evaluating will states that the period of the pendulum follows this equation:

:::Equation (model)
$$
T=2\pi \sqrt{\frac{L}{g}}
$$
:::

:::Figure (fullApparatus|m|R)
![Picture of the apparatus. Has a metal bar vertically clamped to a table. At the top of the bar clamped on is another bar that is orthogonal to the original. Clamped to the horizontal bar is a large wooden protractor. In front of the protractor is a string goes through a hole in the horizontal bar. In the middle of the vertical rod is a piece of plastic that is used to adjust the length of the string.](imgs/Lab1/FullApparatus.jpg "Fully constructed pendulum apparatus")
:::

We will be making the following assumptions in our model:
- The only forces on the pendulum are due to gravity and tension in the string.
- The pendulum string is massless.
- The initial angle of the amplitude is small.
- The pendulum bob behaves like a point mass.



## Apparatus



The apparatus is the same as the previous lab and can be shown in [](Figure-fullApparatus). For a review of how the apparatus works you can go to the apparatus section of the previous lab document.


## Pre-Lab

:::Prelab
**Before coming to lab** you will need to complete [](Exercise-procedure). This will be checked off by your TA when you get to class. 
:::

:::Exercise (procedure)
Update your procedure from last week to incorporate what you learned in class about how to best collect data.
:::


# Making a comparison

::::::Activity
Last week you talked a bit about uncertainty and qualitatively made some comparisons by looking at some histogram data. 

Today we will work on making the comparisons more quantitative by looking at some statistics. Namely we will be discussing the $t\prime$ statistic that we will use this quarter for making comparisons. It is defined, with more information, in the reference section of the manual. Just so you don't have to jump back and forth to see its definition we will define it here.

:::Equation (tstat)
$$
t\prime = \frac{A-B}{\sqrt{\delta A^2 + \delta B^2}}
$$
:::

::::::






