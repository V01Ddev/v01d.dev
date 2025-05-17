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

{{< highlight go  "linenos=inline" >}}
baseURL = 'https://v01d.dev/blog'
languageCode = 'en-us'
title = 'Blog'
publishDir = "../blog"

[[menus.main]]
name = 'Blog'
pageRef = '/blog'
weight = 10
{{< /highlight >}}

The key is defining the "publishDir" to "../blog". I kept the rest of the site simple, with only the /blog page that includes the list of content.

## Theming

As you can probably tell, I didn't use a [theme provided by Hugo](https://themes.gohugo.io/). Based on a black theme created by Hugo. I copied and manually edited the partials and defaults from the basic template into my hugo_src. 

- In the menu.html I removed the default nav bar and added my basic html:
{{< highlight html  "linenos=inline" >}}
<nav>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/blog'>Blog</a></li>
    </ul>
</nav>
{{< /highlight >}}

- In \_defaults, home.html defines the blog page. I included a summary of every post and the date that it was published:
{{< highlight go-template "linenos=inline" >}}
{{ define 'main' }}
  {{ .Content }}
  {{ range site.RegularPages }}
    <h2><a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a></h2>
    <div class='summary'>
        {{ $dateMachine := .Date | time.Format "2006-01-02T15:04:05-07:00" }}
        {{ $dateHuman := .Date | time.Format ":date_long" }}
        <time datetime="{{ $dateMachine }}">{{ $dateHuman }}</time>

        {{ .Summary }}
    </div>
    <br>
    {{ end }}
{{ end }}
{{< /highlight >}}


- Finally in partials, the only change I made was to the menu.html which added my nav bar:

{{< highlight go-template  "linenos=inline" >}}
{{- with index site.Menus $menuID }}
  <nav>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/blog'>Blog</a></li>
        <!-- {{- partial "inline/menu/walk.html" (dict "page" $page "menuEntries" .) }} -->
    </ul>
  </nav>
{{- end }}
{{< /highlight >}}


I **simply** edited the main.css to style everything 👌.

## Conclusion

While I'm sure this isn't the best way to create the most optimized blog. This was an amazing way to get exactly what I wanted in a few hours of work over the weekend.

Of course, the source code to my website can be found on my [GitHub](https://github.com/V01Ddev/v01d.dev)
