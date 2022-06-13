# The Brain Attic

![image](https://github.com/olee2/portfolio/blob/master/images/brainattic.png)

This is my project exam for the first year of front-end development studies at Noroff.

## Description

We were tasked with making a blog site with a theme of our own choosing. I choose to build a site that
focuses on ideas and mental models for better decision making.

Requirements:

- Using WP for handling content and its REST API to fetch the content to the front-end.
- Home page w/slider showing latest posts.
- Posts page with 10 initial posts in the list. More Post button for loading more posts to the list. Optinal: Functionality for sorting and categorizing.
- Single post made dynamically with a unique title tag for every post. Optional: A working comment section.
- About page.
- A contact page with a form for which we had to write our own form validation i JS. Optional: Functionality for getting and storing the messages.

Posts and its corresponding comments are handled with the Wordpress REST API. The contact form post to Contact Form 7 in WP via the REST API, storing the data using the Flamingo plugin.

I learned a lot making this project, especially regarding the interaction with the WP REST API. In general I try to break the JS into as many components as possible, but I still have work to do in this regard. I ran into several problems due to the posts not being fetched and html created in time for other functionality to be added, due to async vs. sync. I solved this by combining the async function approach with then() method.

As for the CSS I still need to work on my classes, not repeating properties when they can be outsourced to a reusable class.

[Live Site](http://brainattic.netlify.app)

## Built With

- HTML
- CSS
- Vanilla JavaScript
- Wordpress for content management

## Contact

[My LinkedIn page](https://www.linkedin.com/in/ole-andr%C3%A9-eikrem-1b0752202/)

## Acknowledgments

[John Smilga's](https://www.johnsmilga.com/) content has been of much help working on this project.
