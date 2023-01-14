---
title: "How I made this site?"
author: "Aditya Giri"
category: "coding"
date: "2023-01-14"
excerpt: "Recently, I took on work of designing and deploying my portfolio site. There are a lot of tiny things that I have done with this site, and I want to walk you through my process of developing this site."
---

For past few months, I was a dormant programmer. I had lost all of my motivation to do programming. Recently, I started a job hunt. And since I do not have any college degree, I have to let my work speak for itself. That is why I started to work on this portfolio site.

## Coming around the design

I wanted to make sure that the design that I have on this site is unique. I wanted a few little widgets, and a bunch of pages that give you a glimpse of who I am. Following are the things I decided to end up building in this site.

1. A Sidebar centric design
2. Easy dark mode
3. Widget for spotify to show people what I am listening to
4. Widget for my total coding time fetched from wakatime
5. A badge that shows whether I am online or not
6. "Uses this" page to showcase my work setup
7. Projects page displaying all of my open source as well as general to public stuff

With all of this list, it was time to design something quickly in Figma. I fired up my Figma account after a long while, set the rulers to on, and started designing all different sections. Towards the end, this is what I had in my design.

![Figma design](https://ik.imagekit.io/brainbuzzer/figma-ruler.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673712854419)

## Implementing the design

Now that I had a design, it was time to implement it. I started on saturday morning, wondering what and how much I could do by sunday night. With this, there was an important choice to be made. How do I make this? I had a few options. I could either use a static site generator like Hugo, or I could use a framework like NextJS and Gatsby. I also wanted to use a framework that gives me the flexibility to build the site with different components without being too heavy. I chose NextJS. NextJS is a web framework which utilizes React and can not only do Static Site Generation, but also create server endpoints. Plus, it also comes with excellent support from Vercel. You just have to push to Git, and BAM! It has a lot of features that I wanted, and it was easy to get started with.

I started with a basic NextJS site, and then started adding the different components that I wanted. I started with the sidebar, and boy did that take a long time. CSS Grids and Flexboxes are some of the easiest yet most pain in the ass features. In order to make sure that the sidebar was sticky, I had to play around with CSS for an entire day. Once I had that pinned down (pun intended), all that was left to do was to connect spotify and wakatime. (There is also that online badge that I display, but I'll make a separate post about that.)

Connecting with spotify and wakatime was fairly straightforward considering all I had to do was just get the API keys and connect them through with my site.

## The Deployment

Because I had made this site with NextJS, I was able to get the excellent CI/CD pipeline on the site from Vercel. All I had to do was hook up my site on the Vercel dashboard and VOILA!

---

## Conclusion

I had a lot of fun making this site. I learned a lot about Typescript and NextJS. I am really happy with the result. I hope you like it too. If you want to check out the codebase, you can find it at following references.

* Github Repo - <https://github.com/BrainBuzzer/portfolio>
* Online Badge Repo (Topic for next post) - <https://github.com/BrainBuzzer/online-checker>

---
