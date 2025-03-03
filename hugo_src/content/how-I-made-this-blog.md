+++
date = '2025-02-27'
draft = false
title = 'How I Made My Blog'
+++

Long story short, I made it using Hugo!

## Backstory

I've been wanting a creative outlet where I can share more details about my projects, and a blog seemed like a natural outlet. I spent a lot of time looking at what others were doing. Which led me to believe that I needed a React framework. Taking a look at all the [branches](https://github.com/V01Ddev/v01d.dev/branches/all) my site has, you'll find a plethora of failures... 

Later, learning about static site generators ignited my hope of a simple and fast way of creating content. I didn't want to abandon my simple HTML, CSS and JS to load my main page. A simple web search and a "Hugo in 100 seconds" masterclass convinced me I had found just the right thing!

## Unconventional use of Hugo

While keeping my landing page just as is, the goal was to get Hugo to compile to a /blog directory. I created a "hugo_src/" directory where the Hugo source code will live. I had Hugo compile to a "../blog" directory that can be hosted normally as my site is. This was achieved by editing the hugo.toml:

```
baseURL = 'https://v01d.dev/blog'
languageCode = 'en-us'
title = 'Blog'
publishDir = "../blog"

[[menus.main]]
name = 'Blog'
pageRef = '/blog'
weight = 10
```

The key is defining the "publishDir" to "../blog". I kept the rest of the site simple, with only the /blog page that includes the list of content. The only major changes I then made were to the main.css, navbar and finally including the date in the summary view of the content.

While I'm sure this isn't the best way to create the most optimized blog. This was an amazing way to get exactly what I wanted in a few hours of work over the weekend.

Of course, the source code to my website can be found on my [GitHub](https://github.com/V01Ddev/v01d.dev)
