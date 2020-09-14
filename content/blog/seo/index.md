---
title: Analytics and SEO with Gatsby.js and Netlify
date: "2020-09-13T22:40:32.169Z"
description: analyzing and optimizing your web traffic.
---

##Google Analytics
Create a <a href="https://analytics.google.com/"
           target="_blank">google analytics account</a>, then install and configure <a
                                                                                      href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/"
                                                                                      target="_blank">gatsby-plugin-google-analytics</a> in your project's `gatbsy-config.js` :

![gatsby-config.js](./gatsby-config.png)

To find your `GOOGLE_ANALYTICS_TRACKING_ID`, from your analytics dashboard go to: Admin > Tracking Info > Tracking Code

In Netlify, add your ID to your Enviroment Variables.

##SEO

![Mozlow's Hierarchy of SEO Needs](./seo.png)https://moz.com/beginners-guide-to-seo

sources:
[Arisa Fukuzaki](https://aiki-developer.com/blog/gatsby-google-analytics) about configuring the analytics of a Gatsby project with Netlify.
