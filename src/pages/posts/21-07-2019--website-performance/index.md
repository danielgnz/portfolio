---
path: "/blog/posts/simple-tricks-to-make-websites-blazingly-fast"
category: "posts"
date: "2019-07-21"
title: "Simple Tricks To Make Websites Blazingly Fast"
tags: ['']
excerpt: "In this article I'm going to share with you a few tricks that enabled me to optimize a website's score on Google PageSpeed Insights from 76 to 96/100"
author: "Daniel Buhaianu"
---

# Simple Tricks To Make Websites Blazingly Fast

In this article I'm going to share with you a few tricks that enabled me to optimize a website's score on [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) from 76 up to [ 99 out of 100](https://imgur.com/a/QaV5YJ).


## Table of Contents

* [General Info](#general-info)
* [The 3 Keys to Performance](#the-3-keys-to-performance)
* [Network Performance](#network-performance)
* [Critical Render Path](#critical-render-path)
* [Optimizing HTML](#optimizing-html)
* [Optimizing CSS](#optimizing-css)
* [Optimizing JavaScript](#optimizing-javascript)
* [Conclusion](#conclusion)

<h2 id="general-info">General Info</h2>

In [The Complete Junior to Senior Web Developer Roadmap (2019)](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/) taught by Senior Software Developer [Andrei Neagoie](https://github.com/aneagoie), I have learned that Website Performance is a very important aspect of an online business. 

As a matter of fact, all big companies prioritise fast [UX](https://www.interaction-design.org/literature/topics/ux-design).

#### Did you know that:
* Amazon calculated that if a page load slows down just **one second** that could cost them **1.6 billion dollars** in sales each year

* By slowing Google search results by just **4/10 of a second** they could lose **1,000,000** searches per day

* Your visitors expect your website to load in 2 seconds
* 1/2 of them will leave if it takes more than 3 seconds

**Each second of delay decreases customer satisfaciton and, possibly, money.**

<h2 id="the-3-keys-to-performance">The 3 Keys to Performance</h2>

There are 3 places where work needs to happen when displaying a website:
1. **Request to Server**
  * When a client (user) makes a request to a server to retrieve some data, there is usually some work that needs to be done in order to transfer this request over the wire to the back-end
  
  * Also, the server may need some time to look for the HTML file (index.html) and return it
  
  * Or, in some cases, the server must talk to the database in order to retrieve the requested data

2. **Response to Client**
  * Once the server has retrieved the data from the database, or has found the requested file, it will send a response back to the client, again, over the wire
  
3. **Page Rendering**
  * As soon as the client has received the data from the back-end, the browser will start rendering the page, according to the **.html, .css, and .js** files 

<h2 id="network-performance">Network Performance</h2>

There are **two important principles** that you need to know:
1. <h4 id="honey-i-shrunk-the-files">Honey I shrunk the files</h4>
 * To view a webpage, your computer has to download all the related files from the server and display them in the browser
 
 * The more kilobytes a user needs to download, the longer it takes to load the website
 
2. #### The traveling delivery man
* The requested files need to be transferred over the Internet. 
* The less work is involved in this process, the better the website performance.

<h2 id="critical-render-path">Critical Render Path</h2>

Up until this point we have a simplified view of what happens inside of the browser.
#### But what actually happens inside the hood?

1. The client makes a request to the server
2. The server returns an HTML file
3. The browser reads the HTML file
4. The browser generates a tree model of the HTML tags that are needed to build the website and the DOM
5. The browser encounters the style link to grab the CSS
6. The browser asks for the CSS file from the server
7. When the CSS file arrives, the browser gets back to working on the DOM and creating the structure of the website
8. Once the browser has received all the CSS files, it starts generating a tree model called CSSOM
9. As the browser is building the CSSOM, all of a sudden sees a JavaScript tag
10. The browser asks the server for the JS file
11. The JS file arrives and the browser starts the reading
12. The browser executes any changes needed onto the DOM and CSSOM
13. Once that's done, the browser combines the DOM and CSSOM into a Render Tree
14. The browser uses the Render Tree to create the layout of the page
15. Once that's done, the browser is going to paint all the pixels
16. In the end, the webpage has been displayed on the browser.

This is called the **Critical Render Path** and it's one of the most important concepts for optimizing browser performance.

<h2 id="optimizing-html">Optimizing HTML</h2>

There are two main improvements that can be done in order to optimize the HTML:
1. Load style tag in the `<head>`
2. Load script tag right before `</body>`

### Load the style tag in the `<head>`
One of the core principles of CSS performance is to get the CSS to the browser as soon as possible.
That's because JavaScript requires both the HTML and CSS parsing to finish, before it can be run.
In this way, we give the CSS ample time to create the CSSOM.

### Load script tag right before `</body>`
If you put the JavaScript files at the top of the `<body>` or in the `<head>`, it would block the page rendering.

However, if you added the JS files at the bottom, right before the `</body>`, your style, content and media will start downloading more quickly, giving the perception of improved performance.

**Exception from the rule:**
* If you use a Google Analytics script tag, which tracks user activity from the very beginning of your page load, you might want to put in the `<head>` of the HTML file. 

* But, keep in mind that might slow your website.

<h2 id="optimizing-css">Optimizing CSS</h2>

CSS is called Render Blocking, because in order to construct the Render Tree and print something onto the screen, the CSSOM must be built and combined with the DOM to create the Render Tree.

Also, the CSS should be as lightweight as possible, so the user can see the webpage as soon as possible.

To do so, there are a few things that need to be considered:
1. Only load what is needed
2. Above the fold loading
3. Media Attributes
4. Less Specificity

### Only load what is needed
CSS can get really big if a page is very complex or has many animations.

If the browser loads only what is needed for the first meaningful paint, the client can avoid more download time.

Perhaps, instead of loading an external stylesheet, a good solution would be an internal one:
```
<style>
  h1 {
  color: blue;
  }
</style>
```

But, there is an issue with this type of CSS injection:
* If there are multiple HTML pages which share similar design, the `<style>code</style>` would need to be copy and pasted into other pages, which is bad practice.

Internal CSS is good when doing *Above the fold loading* and using it just for the *Above the fold CSS*.

### Above the fold loading
When a user lands on a page, they only need to see what is above the fold, which is the main content.

So, it wouldn't be a very efficient solution to load the entire page, would it ?

It's only when they start scrolling they should see the rest of the page, as they scroll down.

Here's a quick implementation:

```
const loadStyleSheet = src => {
  if(document.createStylesheet) {
    document.createStylesheet(src)
  }
  else {
    const stylesheet = document.createElement('link')
    stylesheet.href = src
    stylesheet.type = 'text/css'
    stylesheet.rel= 'stylesheet'
    document.getElementsByTagName('head')[0].appendChild(stylesheet)
  }
}

window.onload = function() {
  console.log('window done!')
  loadStyleSheet('./style2.css')
}
```

### Media Attributes
The `media` attribute is mostly used with CSS stylesheets to specify different styles for different media types.

For example, if a user visits a webpage on their mobile phone, it would be a good practice to load a background image which has a smaller size than the one used on the desktop. Remember the *[Honey I shrunk the files](#honey-i-shrunk-the-files)* principle ?

By default, on every `<link>` the media type is set to `all`:
```
<link rel="stylesheet" href="./style.css" media="all">
```
However, one can specify a stylesheet to load only when a mobile user visits the page:
```
<!-- External CSS-->
<link rel="stylesheet" href="./style.css" media="all">

<!-- donwload in the background and not disrupt the page load if screen doesn't match -->
<link rel="stylesheet" href="./style2.css" media="only screen and (max-width: 500px)">
```

### Less Specificity

**Quick reminder**: the more information is sent over the wire, the more bytes that is, and the more time it will to finish.

When using less specifity, generally less characters - hence less bytes - are being transferred, which will automatically improve performance.

Also, during the [Critical Render Path](#critical-render-path) process, the browser needs to calculate the styling in order to create the CSSOM. Therefore, it would have to do more work if the specificity was really complicated:

```
/* bad */
.header .nav .item .link a.important {
  color: pink;
}

/* good */
a.important {
  color: pink;
}
```

<h2 id="optimizing-javascript">Optimizing JavaScript</h2>

1. [Load scripts asynchronously](#load-scripts-asynchronously)
2. [Defer loading of scripts](#defer-loading-of-scripts)
3. [Minimize DOM manipulation](#minimize-dom-manipulation)

<h3 id="load-scripts-asynchronously">Load scripts asynchronously</h3>

When using the general `<script> code </script>` when a JavaScript file is being downloaded, it blocks the HTML parsing. After that, the JS file also needs to be executed which blocks the HTML parsing again.

By using the `async` property, the browser will understand that it needs to download the JavaScript file with another thread.

Although this approach will solve the issue of blocking the HTML parsing, the browser will download the JS file on a **low-priority**. Once the file has been downloaded, it will get executed, which again, will block the HTML parsing.

**Warning**: The JavaScript file will get executed as soon as it's been downloaded, which means it can execute at any time. This leeds to two issues:

1. The JavaScript can execute long after the page has loaded

  If one relies on JavaScript to do something with [UX](https://www.interaction-design.org/literature/topics/ux-design), then they might give the user a suboptimal experience.

2. If the JavaScript executes before the page has finished loading and it starts doing some DOM manipulation without the DOM being there, then one might get some errors.

**Rule of thumb:** Use `<script async>` to any script that **doesn't** affect the DOM.

`Async` should be used for most external scripts that require no knowledge of the code and are not essential for user experience.
* E.g.: Google Analytics / Tracking scripts

<h3 id="defer-loading-of-scripts">Defer loading of scripts</h3>

Using `<script defer>` will not block the HTML parsing while downloading and it will execute after the HTML has been parsed.

**This is really good for scripts that will act on the Render Tree / DOM.**

#### Top Tips:

* If the core functionality requires JavaScript, then `async` is the best, otherwise use `defer`

* Critical scripts should be in the `<script>` tag

* Third-party scripts that don't affect the DOM should be in the `<script async>` tag

* Any scripts that aren't important or above the fold should use the `<script defer>` tag

**Quick Note:** Because of HTML parsing, the location of the script tags which use `async` or `defer` attributes on them is important. [This is a great resource that explains the importance of this](https://stackoverflow.com/questions/10808109/script-tag-async-defer)

<h3 id="minimize-dom-manipulation">Minimize DOM manipulation</h3>

When JavaScript events change any part of the page, it will cause a redraw of the Render Tree, which will force the page to go through Layout and Paint again.

*When users interact with the page, the JavaScript constantly updates and modifies the page by cycling through the Render Tree, Layout and Paint.*

However, this is not always true for all browsers, because each browser behaves differently, and browsers are always trying to improve their performance.

<h2 id="conclusion">Conclusion</h2>

Optimizing performance can be tough sometimes, but in my opinion I think it's worth putting in the time to do it if your website is getting enough traffic. Otherwise, I don't think you should bother, unless you want to improve your Web Developer skills.
