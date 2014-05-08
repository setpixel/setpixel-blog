---
layout: post
title: "Writing a screenplay in Fountain"
subtitle: "Using Fountain to build creative tools and expand the screenplay"
bigimage: writing1small
date: 2014-04-15 12:00:00
categories: writing
---
I am writing a screenplay in <a href="http://fountain.io/" target="_new">Fountain</a>. If you are writing a screenplay, I highly recommend using it. Fountain offers not only a great way to write a screenplay, but also flexibility to create new tools to help you conceptualize, visualize, and realize a really great story.

I am deep in the process of writing my first screenplay. When I first started, I just opened my text editor and wrote. I didn't concern myself with the specifics of the standard screenplay format. I really didn't think it mattered, as long as I was putting my ideas down. 

<figure class="image-regular"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/desk1.jpg"><figcaption class="image-caption">This is my desk where I make stuff.</figcaption></figure>

As I got deeper in the process, I started to send my writing to other people to get feedback. I needed to get it in the standard format, so the conversation would be about my work, and not how my formatting is all wrong.

"You have to use Final Draft."<span class="sidenote" data-sidenote="Final Draft is screenwriting software that students and some industry folk are tricked into buying. You do not need to buy Final Draft, ever."></span>

I don't work at a bank. However, I'm sure that on the first day of orientation, they teach you how to use an application written in 1999 in Visual Basic. It hasn't been updated since 2001, it doesn't work very well, everyone hates it, but it's the way it is, and if you trick it, you might be able to do what you want, or wait until it's 5 PM. It's probably exactly what it's like to use Final Draft.

The joy of writing shouldn't feel like working at a bank.

You should feel free and unlimited, focusing on the challenges and opportunities of creating a great story &ndash; the least of which are how well your screenplay is formatted.

##What is a screenplay?

At a high level, the conceptual basics of a screenplay are very simple. First, it is just text. Secondly, that text is used to describe 5 basic things: 

1. Location for a scene (and time of day)
2. Action
3. Character
4. Parenthetical
5. Dialogue

There are 5 basic metatypes. As long as you write where a scene takes place, what happens, who says what, and maybe a little of how they say it, you have the basics of a screenplay.

Knowing this, when you are writing, it shouldn't really matter what format you write it in. It's just text. You should be able to use any text editor you want, just so long as the metatypes are clearly defined.

##Enter Fountain

<a href="http://fountain.io/" target="_new">Fountain</a><span class="sidenote" data-sidenote="Fountain is a simple markup syntax for writing, editing and sharing screenplays in plain, human-readable text. Fountain allows you to work on your screenplay anywhere, on any computer or tablet, using any software that edits text files."></span> is a very simple way to write a screenplay using just plain text. In fact, it pretty much looks like a screenplay when you're writing it. 

Fountain is not software. It is not a special format. It is simply a specific way to write text to make a screenplay. 

Here is an example of some fountain text:

<figure class="image-regular">
<pre>INT. CHARLES'S APARTMENT - DAY

Charles sits at a desk, typing on his computer. David sits behind him on a couch with his laptop.

CHARLES
(to David)
I think I'm going to write this in Fountain.

DAVID
Never heard of it.

CHARLES
I think you're going to like it.</pre>
<figcaption class="image-caption">A totally gripping scene of Fountain text.</figcaption></figure>

It is very simple to write in Fountain. 

Please take a look at this <a href="http://fountain.io/_img/fountain-quickreference.jpg" target="_blank">quick reference image</a> to see more syntax details and the more specific <a href="http://fountain.io/syntax" target="_blank">syntax reference</a>. 


##What do you do with a Fountain file?

After 12 days of writing, I had a rough draft of my script as a fountain text file. I wanted to see it in screenplay format. I wanted to send it to my mom for critical review. She's mad old. She only uses Final Draft.

With a Fountain file, you can use an app that converts it to PDF or Final Draft. I used an app called <a href="http://slugline.co/" target="_new">Slugline</a>. It's really well built software. Bonus: it's also very nice to write in. 

<figure class="image-regular"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/fountainprocess.png"><figcaption class="image-caption">The simple process of making a PDF out of your Fountain text script using an app called Slugline.</figcaption></figure>

I converted it to a Final Draft file in 3 clicks. I sent it to my mom's AOL account. SPOILER: She loved it. I converted it to a PDF and sent it to my friends. They tell me it's very good, despite any concrete references to the script itself. I'll assume they definitely did read it.

After converting it to PDF, from top to bottom, I read it. Something was very wrong. Somehow, the dialogue was all off. Characters were under developed. The pacing was not right. Scenes were missing. Some scenes didn't make sense. This was no fault of Fountain. I had written a shitty screenplay, also known as a rough draft.

I needed to tear it apart and put it back together again. I needed to edit.

<figure class="image-large"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/writing2.jpg"><figcaption class="image-caption">120 pages of printed rough draft.</figcaption></figure>

Editing 120 pages of anything is difficult &ndash; even if you wrote them yourself. With that much text, it's easy to get mired in the fine details of the writing (grammar, word choice, tone), but harder to see the bigger picture (pacing, character development, scene editing, is this a good story?). With everything I do, I always try to think about the micro details how they relate to the macro concepts. Managing the micro and the macro is very difficult with a lot of text.

I wanted a tool that took my current draft, showed me all my scenes with notes, with what page the scene was on. I could print this out. I could put all the printed pages on the floor. I could see my whole story. When my script is being read to me, I could take macro notes. I could quickly add scenes, I could cut scenes, I could make a note about dialogue. I'm essentially describing reoutlining. 

##Building creative tools

I think most writers will disregard what follows as irrelevant to them, roll their eyes, and simply stop reading. However, this is the aspect of Fountain that is the most interesting as a potentially limitless creative screenwriting format: the ability to build tools.

I decided to build the tool.

<blockquote>We humans are tool builders. And we can fashion tools that amplify these inherent abilities that we have to spectacular magnitudes. So for me, a computer has always been a bicycle of the mind &ndash; something that takes us far beyond our inherent abilities. <div class="author">- Abraham Lincoln</div></blockquote>

Creative tools are in their relative infancy.

One of the great things about Fountain, is that it is very clearly defined markup text. It is easily parsed by a short list of regular expressions into tokens. With that data, you can do anything you want. Luckily, the Fountain community has written a bunch of open source software for parsing in many different languages, including <a href="https://github.com/mattdaly/Fountain.js" target="_new">Javascript</a>. 

I love Javascript lately. It runs everywhere &mdash; on your computer, on your phone. It's crazy fast. You can use the DOM to render out things effortlessly. It is forgiving. Great developer tools. Tons of open source. It is an amazing tool to prototype almost anything, and even a great tool to make something suitable for production.

As a creative toolmaker, 90% of the value of the work is creating the design for a tool that solves your problem. As an engineer, much of writing code is trivial. Even though actually writing the code is most of the work, the real value is coming up with the tool, and making it better. You don't have to be an engineer to dream up a tool. You don't have to be an engineer to refine a tool.

Additionally, creative tools are in the service of the finished product.<span class="sidenote" data-sidenote="Watch Tim's Vermeer."></span> Only very small men judge a finished work by the means to create it. If a tool makes your shit better, use it. On the flip, it's hard to polish a turd. There is no substitute for great ideas, critical thought, and solving hard creative problems. Tools can give you new ways to visualize, to provide alerts, to answer quantifiable questions about your own work. You should think critically about the tools you use, make, and how you work. If you are a writer's writer, and you think I've just wasted my time writing tools when I could have been writing, I have unfriended you on Facebook. But yeah, my desk is pretty fucking clean.

##Demos of tools I've built

The first tool I built started with a simple question: "How many scenes do I have?" It's a pretty simple question. Normally, in order to do this, you have to go through the whole script and count the sluglines. I used Javascript to parse my Fountain script. I looped through the sluglines and counted them. Then I was curious about the unique locations. How many times did person A talk vs. person B? I generated some basic stats and spit it out in the console by creating a tool in 20 minutes:

<figure class="image-regular">
<pre>total scenes: 189
unique locations: 149
pages per scene: 0.67724
unique characters: 51
total words: 27604
words per page: 215.65625
dialogue lines: 797
dialogue avg: 13.13676286
dialogue longest: 122
dialogue to action: 0.717762
longest action: 58</pre><figcaption class="image-caption">Basic stats for John August's Big Fish.</figcaption></figure>

Why?

To be totally honest, I wanted to see the answers to these questions and compare them to other scripts. Could I potentially see a huge quantifiable problem based on comps? Could I see some general trends in the numbers as guidelines? I bought <a href="http://quoteunquoteapps.com/highland/" target="_new">Highland</a> to convert all the Academy Award consideration script PDFs to Fountain.

I was pretty much on par, however, I did dig deeper. I built a tool that can identify particularly thick exposition in dialogue, and simply highlight its existence. Sure enough, the tool identified not only an area that I knew about, but also 2 other spots I hadn't even considered.

###Screenplay visualizer

When you read a screenplay, and specifically your own, you can almost see the movie in your head. I wanted to create a visual way to see the whole movie. Again, a Fountain file has all the information I need to construct this view. I wanted to see if I had any scenes that were particularly long.

I wanted to visualize the scenes in the movie, as well as specific individual scene:

<div class="image-large demo">
  <a class="no-border" href="http://playground.setpixel.com/scriptvisualizer/">
  <div class="css-slideshow" data-width="1527" data-height="1046">
  <figure>
  <img src="/gfx/visualizer-1.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/visualizer-2.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/visualizer-3.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/visualizer-4.png" class="img-responsive" />
  </figure>
  <div class="shade"></div>
  <div class="demo-button"><i class="icon-youtube-play" style="font-size: 13px;"></i> View Demo</div>
  </div>
  <figcaption class="image-caption">Click to view demo of my Fountain Script Visualizer<br/><br/>Click around on the scenes at the top, and the next line to advance the scene.</figcaption>
  </a>  
</div>

Sure enough, my scenes that were heavy with exposition were longer than any other scenes. The tool made me take a second look and start editing.

As I was playing with the tool, I realized that I wanted to get in there and start sketching over the screen. At any point, I should be able click and add a picture. I could create a tool that would allow me to easily previsualize my entire movie. The references to the images would be stored in my Fountain file, so I could still edit it in a text editor. I would be able to output the appropriate XML for Final Cut to get my previs data into real editing software.

###Outline / Printed outline

In the process of editing, I had the script read back to me as I marked up a printed script. I wanted a printed sheet of all the scenes with actual real scene titles and summaries so I could quickly write broad notes and look ahead and backwards easily. I also included which page the scene is on, and some basic stats. The titles and synopsis were added easily:


<figure class="image-regular">
<pre>### ETHAN GETS MIAS NUMBER FROM LUCAS

= Show Ethan walking around thinking. Get number. DAY 1 - 6pm dusk

EXT. NEW YORK CITY STREET - DUSK

[[ rewrite so they are together walking ]]</pre><figcaption class="image-caption">Adding scene titles and synopsis in Fountain.</figcaption></figure>

Translates to this in my outline tool:

<figure class="image-regular"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/outline1.jpg"><figcaption class="image-caption">A printed outline page marked up with notes for the next revision.</figcaption></figure>

###Word cloud

I saw a tweet about someone wanting a wordcloud for their Fountain script, but excluding sluglines and specific words. Personally, I think wordclouds look like shit, aesthetically. But it's a pretty cool view to show overused word, passive voice, and general character when you filter down by specific character. 

<div class="image-regular demo">
  <a class="no-border" href="http://playground.setpixel.com/wordcloud/" target="_new">
  <div class="css-slideshow" data-width="782" data-height="573">
  <figure>
  <img src="/gfx/wordcloud1.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/wordcloud2.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/wordcloud3.png" class="img-responsive" />
  </figure>
  <figure>
  <img src="/gfx/wordcloud4.png" class="img-responsive" />
  </figure>
  <div class="shade"></div>
  <div class="demo-button"><i class="icon-youtube-play" style="font-size: 13px;"></i> View Demo</div>
  </div>
  <figcaption class="image-caption">Click to view demo of my Fountain Wordcloud<br/><br/>Instructions are self explanatory.</figcaption>
  </a>  
</div>

###Future tool ideas

I'm sure as I'm further along in the process, I'll be building more tools specifically around production. I am super interested in building better tools for the process of writing. In my Fountain file, I've been marking story beats and character development beats. I've been thinking about a tool that renders a distilled version of the story with just the essentials. Mainly to see if, at a high level, the story is good. But additionally to see what I can cut out of the script or where things need to be more developed.

-----

##Screenplay format

Accomplished screenwriters, John August and Craig Mazin, have been talking consistently about a "New screenplay format" in at least their past 5 episodes of their <a href="http://johnaugust.com/scriptnotes" target="_new">Scriptnotes</a><span class="sidenote" data-sidenote="Each week, screenwriters John August and Craig Mazin discuss screenwriting and things that are interesting to screenwriters, everything from the craft to the business to the best ways to actually get yourself writing. It's a great podcast."></span> podcast. Their concerns include: font, sluglines as scene delineation / need for sequence demarcation, need for images / music / reference links, deemphasizing pagination. They call for a new screenplay format. I really wish they would think about or at least present it a little differently. I think all the building blocks of a new view for a screenplay are there, and the ability to contain the data is here.

In the process of writing creative tools, I made software to render a standard print screenplay. You can print or print to PDF a standard screenplay from a Fountain file. I wasn't happy with the existing paginators in Fountain software. Additionally, in my fountain file, I had added references to images using the Fountain notes syntax:

<figure class="image-regular">
<pre>INT. CHARLES'S APARTMENT - DAY

[[ IMG: http://myurl.com/charles-apartment-13.jpg ]]

Charles sits at a desk, typing on his computer. David sits behind him on a couch with his laptop.</pre><figcaption class="image-caption">Added image to Fountain text.</figcaption></figure>

I'm a visual person. My entire screenplay is storyboarded. I wanted to create a view of the screenplay that could optionally include the images. I also marked sequences, and beats with notes that are used to break the screenplay up in interactive view, as well as break page after sequence. If someone wants the standard screenplay, they got it. If someone wants the pretty images, they got it. Same file.

###Model view controller

<a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_new">MVC</a><span class="sidenote" data-sidenote="Model–view–controller (MVC) is a software pattern for implementing user interfaces. It divides a given software application into three interconnected parts, so as to separate internal representations of information from the ways that information is presented to or accepted from the user. The central component, the model, consists of application data, business rules, logic and functions. A view can be any output representation of information, such as a chart or a diagram. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants. The third part, the controller, accepts input and converts it to commands for the model or view."></span> is a software design pattern &mdash; a concept used in software development. The model is the data. The controller performs logic on that data. The view is the output or interface. 

Regarding screenplays, it's important to think of things at this level of abstraction. If you have a model, you can visualize the data in any way you dream up. 

A screenplay written in Fountain is a model. It's the data. With that data you can make any view you want. 

Because fountain is pretty flexible, you could add metadata for anything you might want to extend the screenplay with. In my case, I have included storyboards. You could add metadata for the song that is playing. You could add metadata about which characters are in the scene, if its not totally clear. You could add metadata about what the purpose of a scene is. You could add anything. If I could make a small ask to the Fountain team, I would love a specific way to insert metadata. I am using notes. I'm thinking about putting curly bracket objects inside of notes going forward.

With the same screenplay fountain file, you could output: an outline, a storyboard, some stats, a wordcloud, a standard paginated screenplay, or any new screenplay format you dream up with music and videos and pictures. This idea is extremely powerful. I could imagine a screenplay being a much more interactive and collaborative thing in the future. Views could be made by people who need to see specific information. You could switch between views while maintaining position. A team member could add metadata to the screenplay and submit it for review.

-----

I think Fountain is powerful beyond what it was intended to be used for. It's great for writing. It's great for building tools.

Sorry for the incredibly long, meandering post. My next post will be focused on the storyboarding tool I'm building using Fountain, which turns is much more of a writing tool. If you have a good idea for a tool, email me: <a href="mailto:charles@setpixel.com" target="_new">charles@setpixel.com</a>, I'll probably build it &mdash; you know, while I should be working on my 2nd script revision.