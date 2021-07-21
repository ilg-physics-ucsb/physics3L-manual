# Manual Feature Showcase

:::Intro (Welcome to "The Guide"|Your phone with the Phyphox App installed --- See instructions in Part I |A magnet| Ruler|Steel screw)
In this guide, we will cover most of the features in the online manual renderer. Each section feature full examples as well as code snippets that will produce the examples. ;;; Snippets are working pieces of code that you can directly copy into a file to use as a template. One such example is below this intro;;;

We also provide suggestions for how to use each feature to keep the general flow of labs the same between courses.
:::

```
:::Intro (Welcome to "The Guide"|Your phone with the Phyphox App installed --- See instructions in Part I |A magnet| Ruler|Steel screw)
In this guide, we will cover most of the features in the online manual renderer. Each section feature full examples as well as code snippets that will produce the examples. ;;; Snippets are working pieces of code that you can directly copy into a file to use as a template. One such example is below this intro;;;

We also provide suggestions for how to use each feature to keep the general flow of labs the same between courses.
:::

```


# Second Header in File

The first header in a markdown file is rendered as the title of the page. The second single-hashed header becomes Part I. Typically this should be an introduction section. Since it is the first thing that students will read, they will be less mentally fatigued and recall more of this information. It should summarize the 'big-picture' of the lab, and use visual elements such as images, videos and figures.


## Second Level Headers

Second  level headers are earmarked on the left navigation screen. This means that students can quickly navigate between parts and the subsections. Second level sections should thus be used to delinate important chunks of information. These are particularly useful for 

### Third Level Headers

Third Level Headers and beyond will not generate a link, so they should be used to draw attention to important subcontent in the section. 

# Main Container Elements
In this section we describe the most important cointainer elements in the lab manual format. For each container, we provide the use syntax ;;; The general syntax for containers is: Kind-of-Container (argument-1|argument-2|...|argument-n);;;.


## @fa-wrench@ Materials List
:::Materials (Brains|Computer---Running VS Code or Similar|Notepad and Pen)
:::
The materials list is designed to look nice beneath a section header, allowing you to partition materials for each part of the lab. Each material can be clicked on to change its color. This is intended to help students stay organized as they progress through the lab. You can also add a note to an item, designated by the red notification, that will display when clicked on.  Generate your Material List quickly with the following syntax: `Materials (item 1---note 1|item 2---note 2|item 3---note 3) `. The example above is generated with:

``` 
:::Materials (Brains|Computer---running VS Code or Similar|Notepad and Pen)
:::
```
###### 




## @fa-Exercise-circle@ Exercises

Exercise boxes should contain *all* items that students must respond to and that TAs will grade. They are brightly colored to draw attention to them and are automatically numbered. The Exercise box syntax is  `Exercise (optional-ref) `, where the optional ref is the name of the exercise so that it may be refered to later. [](#Exercise-following) gives an example of usage.

```
:::Exercise (following)
Are you following along with this tutorial?
:::
```

:::Exercise (following)
Are you following along with this tutorial?
:::

Exercises with multiple subparts are automatically labeled with lower-case letters.

```
:::Exercise (multiple-parts)
Answer the following questions:
1. Using [](#Equation-gbt) for the case of $d=2$ , derive the result $a=\tfrac{1}{2}\pi r^2$
2. How would this result change if $M$ was a manifold of genus 2? Discuss
:::
```

:::Exercise (multiple-parts)
Answer the following questions:
1. Using [](#Equation-gbt) for the case of $d=2$ , derive the result $a=\tfrac{1}{2}\pi r^2$
2. How would this result change if $M$ was a manifold of genus 2? Discuss
:::


## @fa-sitemap@ Activities

Activities are another important call-to-action for students. They act as a stand alone prompt with step-by-step instructions for completing part of a lab. They are automatically numbered and occur in full-width boxes so that any Figures or Exercises within have sufficient readability. **If you want a student to record something done in an activity, the prompt should be placed in an Exercise box**. The syntax for activities is: `Activity (optional-reference|optional-title)`

```
:::::: Activity (magnetic-field|Measuring the Magnetic Field with your Phone)
Let's measure the direction of magnetic field from the  magnet using the phyphox app on your phone.

**Measurement steps:**
1. Put your phone on the table and open the phyphox app and go to “magnetometer”. You can see there are three plots, representing $B_x$,  $B_y$ and $B_z$.
2. Start recording. You should see some random fluctuations on the plot. 
3. Hold the magnet above the magnetomer, with one flat side facing up. Move it up and down above the magnetometer.
4.  Now flip the magnet over, and repeat the motion.
5.  Stop recording to view the collected data. 

::: Exercise
Answer the following questions:
1. Why does $B_z$ change when you move the magnet vertically?
2. At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.
:::
::::::
```

:::::: Activity (magnetic-field|Measuring the Magnetic Field with your Phone)
Let's measure the direction of magnetic field from the  magnet using the phyphox app on your phone.

**Measurement steps:**
1. Put your phone on the table and open the phyphox app and go to “magnetometer”. You can see there are three plots, representing $B_x$,  $B_y$ and $B_z$.
2. Start recording. You should see some random fluctuations on the plot. 
3. Hold the magnet above the magnetomer, with one flat side facing up. Move it up and down above the magnetometer.
4.  Now flip the magnet over, and repeat the motion.
5.  Stop recording to view the collected data. 

::: Exercise
Answer the following questions:
1. Why does $B_z$ change when you move the magnet vertically?
2. At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.
:::
::::::

## @fa-line-chart@ Figures

Figures are critical to the readability of a lab manual. For that reason, the Figure container is quite complex -- the added flexibility in displaying figures allows you to elegantly couple visual aids to the main manual content in a number of ways. Importantly, when used with the designated syntax, the Figures generated will be *automatically* access-compliant. As with most containers, Figures automatically numbered and may be referenced. The syntax for calling a figure is `Figure (optional-ref|optional-size|optional-alignment)`. Optional sizes can be chosen from the presets (xs, s, m , l, xl). Alignment can take on the values (R, L, Row).


### Plain, unformated
The simplest will generate a full row div which breaks the text, with the image baring its original size up to the maximum size of the page: 


``` 
:::Figure (crossproduct|)
![Image of a hand demonstrating the right hand rule. The index finger points along the a vector direction, the middle finger along the b vector direction. The thumb points in the resultant direction, a cross b.](imgs/crossproduct.png "The 'right hand rule' stipulates that when you index and middle finders align with the a and b vectors, respectively, your thumb will point in the direction of the $a \times b$")
:::
``` 
:::Figure (crossproduct|)
![Image of a hand demonstrating the right hand rule. The index finger points along the a vector direction, the middle finger along the 'B' vector direction. The thumb points in the resultant direction, 'A' cross 'B'.](imgs/crossproduct.png "The 'right hand rule' stipulates that when you index and middle finders align with the $\vec a$ and $\vec b$ vectors, respectively, your thumb will point in the direction of the $\vec a \times \vec b$")
:::

### Sizing Figures

To ensure that Figures look nice on large screens, one can specify a maximum size. These sizes, (xs, s, m ,l ,xl) are computed relative to the font size and constrain the maximum height and width of an image. The figures in the excercise below show variants of [](#Figure-crossproduct) as each size as an example.

:::::: Activity (|Sizing Figures)
```
:::Figure (crossproduct-original|)
![This is an image](imgs/crossproduct.png "Original")
:::
```
:::Figure (crossproduct-original|)
![This is an image](imgs/crossproduct.png "Original")
:::

---

```
:::Figure (crossproduct-xs|xs)
![This is an image](imgs/crossproduct.png "xs")
:::

```

:::Figure (crossproduct-xs|xs) 
![This is an image](imgs/crossproduct.png "xs")
:::

---

```
:::Figure (crossproduct-s|s) 
![This is an image](imgs/crossproduct.png "s")
:::
```

:::Figure (crossproduct-s|s)  
![This is an image](imgs/crossproduct.png "s")
:::

---
```
:::Figure (crossproduct-m|m) 
![This is an image](imgs/crossproduct.png "m")
:::

```

:::Figure (crossproduct-m|m) 
![This is an image](imgs/crossproduct.png "m")
:::

---

```
:::Figure (crossproduct-l|l) 
![This is an image](imgs/crossproduct.png "l")
:::
```
:::Figure (crossproduct-l|l) 
![This is an image](imgs/crossproduct.png "l")
:::

---
```

:::Figure (crossproduct-xl|xl) 
![This is an image](imgs/crossproduct.png "xl")
:::
```

:::Figure (crossproduct-xl|xl)  
![This is an image](imgs/crossproduct.png "xl")
:::
::::::

## Figures: Advanced
### Figure Alignment


To improve visual variety you can also make right and left floating figures, respectively. These will float to the right(left) of any text that *follows* it. It is recommended that figure alingment be used in conjuction with sizing to make sure that the flow of text is appropriate.


Right:
``` 
:::Figure (phyphox|m|R)
![Image of a phone with the phyphox app](imgs/phyphox.png "This is a right floating image")
:::
``` 



Left: 
``` 
:::Figure (graphs|m|L)
![A graph of a function that is parallel to the time axis. The position is equal to 5 meters at all times.](imgs/Constant.png "The relationship between x and t is constant")

![](imgs/Linear.png "The relationship between x and t is linear")

![](imgs/Quad.png "The relationship between x and t is quadratic")

:::
``` 


The figure will not float next to this text because the text is placed above the image.

<p style="color:gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

:::Figure (phyphox|m|R)
![Image of a phone with the phyphox app](imgs/phyphox.png "This is a right floating image")
:::

It will, however, float to the right of text that follows. Floating figures are best used for tall images, or a figure containing multiple images.

<p style="color:gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p style="color:gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>


:::Figure (graphs|m|L)
![A graph of a function that is parallel to the time axis. The position is equal to 5 meters at all times.](imgs/Constant.png "The relationship between x and t is constant")

![](imgs/Linear.png "The relationship between x and t is linear")

![](imgs/Quad.png "The relationship between x and t is quadratic")

:::

You might worry that the images appear too small when multiple are in a figure, but the website automatically compiles *modals*. These are frames that pop up to show full-size media when clicked. Go ahead and click on of the images.

<p style="color:gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p style="color:gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

```
You may run into the issue that floating figures somtimes cause containers and headings to get uncentered, like this one. If you do not want this behavior, simply include 6 hashtags `######` in the line above to the container to break the float-wraping environment.
```

######

### Columnation
In order to accommodate a row of images, we can use a 'Row' alignment to generate a container that can accomodate up to '12' columns, as visualized below.

:::::::::Figure (||Row)
::::::row 
:::col ( bg-dark text-light)
C1
:::
:::col ( bg-primary text-light)
C2
:::
:::col ( bg-danger text-light)
C3
:::
:::col ( bg-UCSB-seagreen text-light)
C4
:::
:::col ( bg-UCSB-gold text-light)
C5
:::
:::col ( bg-UCSB-navy text-light)
C6
:::
:::col ( bg-secondary text-light)
C7
:::
:::col ( bg-info text-light)
C8
:::
:::col ( bg-UCSB-coral text-light)
C9
:::
:::col ( bg-UCSB-moss text-light)
C10
:::
:::col ( bg-success text-light)
C11
:::
:::col ( bg-UCSB-aqua text-light)
C12
:::
::::::
:::::::::


Within this, we can designate how many columns each part of the figure should take up large screens. The example below shows the default behavior when no width is specified -- columns equaly divide the available width. Note: all columns take up the full width on mobile and tablet sized screens.

```
::::::::Figure (|m|Row)
::::::row
:::col 
![Part A: Unobstructed view](imgs/crossproduct.png "Part A: This figure takes up 6 of 12 rows")
:::
:::col 
![](imgs/crossproduct.png "Part B: This figure takes up 6 of 12 rows")
:::
::::::
:::::::::
```

::::::::Figure (|m|Row)
::::::row
:::col 
![Part A: Unobstructed view](imgs/crossproduct.png "Part A: This figure takes up 6 of 12 rows")
:::

:::col 
![](imgs/crossproduct.png "Part B: This figure takes up 6 of 12 rows")
:::
::::::
:::::::::

You could designate uneven column allotment between images in a figure if you desire. The images will take on a size equal to the column width, up to the maximum allowed by the size tag.
```
::::::::Figure (|l|Row)
::::::row
:::col 3
![Part A: Unobstructed view](imgs/crossproduct.png "Part A: This figure takes up 3 of 12 rows")
:::

:::col 9
![](imgs/crossproduct.png "Part B: This figure takes up 9 of 12 rows")
:::
::::::
:::::::::
```
::::::::Figure (|l|Row)
::::::row
:::col 3
![Part A: Unobstructed view](imgs/crossproduct.png "Part A: This figure takes up 3 of 12 rows")
:::

:::col 9
![](imgs/crossproduct.png "Part B: This figure takes up 9 of 12 rows")
:::
::::::
:::::::::




## @fa-superscript@ Equations

Just as important as figures, equations get their own box. Each equation is automatically numbered. Equations can be given a reference name and linked to. The Syntax for equations is `Equation (optional-equation-ref|optional-equation-title)`


An example of an important, but unnamed equation is:
```
:::Equation (volume-of-sphere)
$$
V= \frac{2\pi^2}{3}  R^3
$$
:::
```
:::Equation (volume-of-sphere)
$$
V= \frac{2\pi^2}{3}  R^3
$$
:::

When stating an important and named equation, you have the option to title the equation box:
```
:::Equation (gbt|The Gauss-Bonnet Theorem) 
$$
\int_M K dA+\int_{\partial M}k_g ds=2\pi\chi(M)
$$
:::
```

:::Equation (gbt|The Gauss-Bonnet Theorem) 
$$
\int_M K dA+\int_{\partial M}k_g ds=2\pi\chi(M)
$$
:::


Equation markup uses standard KaTeX. For less important equations, KaTeX may be rendered in-line with single dollar signs `$a=\tfrac{1}{2}\pi r^2$`, e.g. : For our purposes [](#Equation-gbt) can be reduced to the more familiar $a=\tfrac{1}{2}\pi r^2$. Similarly, for mathematical maneuvers that don't warrent numbering, you can simply use the double-dollar signs to insert the math directly into the writing.

$$
\begin{aligned}
V &= \int_0^\pi d\theta \int_0^{2\pi} d\phi \int_0^R r^2 dr \\\\
&= 2\pi^2 \frac{r^3}{3} \Big|^R_0 \\\\
&=  \frac{2\pi^2}{3}  R^3
\end{aligned}
$$


```
$$
\begin{aligned}
V &= \int_0^\pi d\theta \int_0^{2\pi} d\phi \int_0^R r^2 dr \\\\
&= 2\pi^2 \frac{r^3}{3} \Big|^R_0 \\\\
&=  \frac{2\pi^2}{3}  R^3
\end{aligned}
$$

```







## @fa-video-camera@ Videos

Videos can be added directly via iframe since html is enabled. Use the Video container to keep them labeled

```
:::Video
<iframe  src="https://www.youtube.com/embed/PT6GM85ut4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

```
:::Video
<iframe  height="100%" width="100%" src="https://www.youtube.com/embed/PT6GM85ut4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

## @fa-space-shuttle@ Simulations


Simulations work the same as everything else, and collapse to save space when they aren't needed:

```
::: Simulation optional-name
<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BiotSavart_Current_Line/Biot_Savart.html" width= "100%" height="800" style="border:none;"></iframe>
:::
```

::: Simulation long-wire
<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BiotSavart_Current_Line/Biot_Savart.html" width= "100%" height="800" style="border:none;"></iframe>
:::

## @fa-warning@ Notes, Warnings, Tables

### Notes
Notes are small blurbs meant to call students' attention to a potential pitfall, or a subtly they might otherwise miss. The simplest note can be generated with just a note tag:

```
::: Note (optional-name)
The default Note breaks the text and creates a 'post-it' environment that takes up about 50% of the manual's width. 

The default Note can be used for anything in a pinch, but is especially good for long peices of explanatory text that are critical to the lab section
:::
```

::: Note (optional-name)
The default Note breaks the text and creates a 'post-it' environment that takes up 33% of the manual's width. 

The default Note can be used for anything in a pinch, but is especially good for long peices of explanatory text that are critical to the lab section
:::
::: Note (this_is_a_right_note|2 R)
Hey, look! This note is to the right of the text and tiny
:::
You may, of course, want to pass on a smaller or larger amount of information. To make it look nice, you can specify the note's width (a number 1-12) and its alignment (L or R) by passing the argument as `Note (optional-ref|width alignment)`.  For example:

######
```
::: Note (this_is_a_right_note|2 R)
Hey, look! This note is to the right of the text and tiny
:::
```




### Warnings
Warnings are like notes, but indicate possible *danger* to the student. To make sure they are seen, they are colored obnoxiously and shake until clicked on

```
::: Warning
Knives are sharp and not a toy!
(click to dismiss)
:::
```

::: Warning
Knives are sharp and not a toy!
<hr>
(click to dismiss)
:::

### Tables

Tables are as usual, and will fill the entire width available. If the width is not long enough to display the table, the table will become scrollable 

```
:::Table
| Offset  $y$ | Radius $R$ | Inverse $1/R$ | Measured $B_y$ | Measured $B_z$ | Field strength $B$ |
| ----------- | ---------- | ------------- | -------------- | -------------- | ------------------ |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
:::
```

:::Table
| Offset  $y$ | Radius $R$ | Inverse $1/R$ | Measured $B_y$ | Measured $B_z$ | Field strength $B$ |
| ----------- | ---------- | ------------- | -------------- | -------------- | ------------------ |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
| @fa-pencil@ |            |               |                |                |                    |
:::

### Plain Card

```
:::Card (ref|optional header|optional footer|style)
These are contents
:::

```
:::Card (ref|optional header|optional footer|style)
These are contents
:::

The style option will accept coloring classes. Here I am coloring the card background UCSB Navy and the text white.



```
:::Card (ref|header|footer|bg-UCSB-navy-50 text-white)
These are contents
:::
```
:::Card (ref|header|footer|bg-UCSB-navy text-white)
These are contents
:::

:::::::::Hider (color-classes|Full List of Colors to add to 'bg-' or 'text-')
::::::row

:::col
<small class="bg-UCSB-navy text-white p-2">UCSB-navy</small>
:::
:::col
<small class="bg-UCSB-gold text-white p-2">UCSB-gold</small>
:::
:::col
<small class="bg-UCSB-seagreen text-white p-2">UCSB-seagreen</small>
:::
:::col
<small class="bg-UCSB-aqua text-white p-2">UCSB-aqua</small>
:::

:::col
<small class="bg-UCSB-coral text-white p-2">UCSB-coral</small>
:::
:::col
<small class="bg-UCSB-moss text-white p-2">UCSB-moss</small>
:::

::::::
::::::row
:::col
<small class="bg-UCSB-mist text-black p-2">UCSB-mist</small>
:::
:::col
<small class="bg-UCSB-clay text-black p-2">UCSB-clay</small>
:::
:::col
<small class="bg-UCSB-sandstone text-black p-2">UCSB-sandstone</small>
:::
:::col
<small class="bg-UCSB-lightgray text-black p-2">UCSB-lightgray</small>
:::
:::col
<small class="bg-dark text-white p-2">dark</small>
:::
:::col
<small class="bg-white text-dark p-2">white</small>
:::

::::::row
:::col
<small class="bg-primary text-white p-2">primary</small>
:::
:::col
<small class="bg-secondary text-white p-2">secondary</small>
:::
:::col
<small class="bg-success text-white p-2">success</small>
:::
:::col
<small class="bg-info text-black p-2">info</small>
:::
:::col
<small class="bg-warning text-black p-2">warning</small>
:::
:::col
<small class="bg-danger text-black p-2">danger</small>
:::


::::::

:::::::::
### Drop Down Card

Similarly, one can make a dropdown card.

```
:::Drop (ref|Header|Footer|bg-UCSB-navy text-white)
These are contents
:::
```
:::Drop (ref|Header|Footer|bg-UCSB-navy text-white)
These are contents
:::

# Other Features

## Linking

Linking allows you to reference previous named material, autogenerating a link to the place on the page it is located and the correct description of the item. The syntax is `[](#ContainerType-ref)`

:::Figure

`[](#Equation-gbt) is an Equation link to the Gauss-Bonnet Theorem`


[](#Equation-gbt) is an Equation link to the Gauss-Bonnet Theorem

`[](#Exercise-following) is a Exercise link to the "Are you following?" Exercise`

[](#Exercise-following) is a Exercise link to the "Are you following?" Exercise


`[](#Figure-crossproducts) is a Figure link to the crossproducts figure`

[](#Figure-crossproducts) is a Figure link to the crossproducts figure


`[](#Activity-magnetic-field) is an Activity link to the Magnetic Strength Activity` 

[](#Activity-magnetic-field) is an Activity link to the Magnetic Strength Activity

`[](#Simulation-long-wire) is a Simulation link to the Biot Savart Simulation ` 

[](#Simulation-long-wire) is a Simulation link to the Biot Savart Simulation

To name a Figure, Equation, Exercise, Activity or Simulation element, simply provide a name directly after the declaration (on the same line). 

:::


## Nested Elements

To nest elements, you must include additional colons for each level of nesting within the element

```
:::::::::Activity
In this Activity, you will do stuff.

:::Figure
![explanatory image](imgs/Lab1/crossproduct.png)
:::

::::::Exercise
Look at the image below and write the first word that comes to mind

:::Figure
![it dips](dip_gif.gif)
:::
::::::
:::::::::
```

:::::::::Activity
In this Activity, you will do stuff.

:::Figure
![explanatory image](imgs/Lab1/crossproduct.png)
:::

::::::Exercise
Look at the image below and write the first word that comes to mind

:::Figure
![it dips](imgs/Lab2/selectdata.png)
:::
::::::
:::::::::

## Iconography

You can use any icons from [Font Awesome 4.7](https://fontawesome.com/v4.7.0/icons/) or [Bootstrap](https://icons.getbootstrap.com/) by sandwiching the icon name with @ symbols

```
@fa-thumbs-up@ @bi-cloud-lightning-rain-fill@ @fa-area-chart@ @bi-calendar3@ @fa-check@ @bi-emoji-sunglasses@  @fa-gear@
```

@fa-thumbs-up@ @bi-cloud-lightning-rain-fill@ @fa-area-chart@ @bi-calendar3@ @fa-check@ @bi-emoji-sunglasses@  @fa-gear@
## Foot Notes


Footnotes are automatically numbered and create small popups on the bottom of the screen that linger for a few seconds to allow for clicking. These are inserted using:

```
[fn]An interesting and informative comment appears here, as if by magic. [http://www.google.com](http://www.google.com)[/fn]
```

  You can see the effect by hovering over the number[fn]An interesting and informative comment appears here, as if by magic. [http://www.google.com](http://www.google.com)[/fn]. 

## Hider

A Hider is good for letting students check their understanding or condensing a less important block of information. To title the Hider, type something after decalring it *without* a line break.

```
:::Hider (drop|If you drop a magnet down a conducting tube, which direction will the force be applied?)

Upwards! Or, more correctly, in the direction opposite of the gravitational force accelerating it

:::
```

:::Hider (drop|If you drop a magnet down a conducting tube, which direction will the force be applied?)

Upwards! Or, more correctly, in the opposite direction of the gravitational force accelerating it

:::

::: Exercise
with text that hangs out above?

1. Why does $B_z$ change when you move the magnet vertically?
2. At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.
3. Testing footnote with $\LaTeX m$ that adds span. [fn] This is a footnote with $\LaTeX \vec{F_{tot}}$ inside [/fn]
4. Testing footnote with $\LaTeX m$ that adds span. [fn] This is a footnote with $\LaTeX F_{tot}$ inside [/fn]
:::

## HTML

HTML is enabled in this markdown compiler, so if you need to include something beyond the scope of what is provided, you can directly code it in. Note that anyplace custom HTML is placed, the markdown renderer will **ignore**.

# Conclusion

## Add a Summary

```
::: Summary
Please turn in your report [here](https://gauchospace.ucsb.edu/courses/my/)
:::
```

::: Summary
Please turn in your report [here](https://gauchospace.ucsb.edu/courses/my/)
:::



