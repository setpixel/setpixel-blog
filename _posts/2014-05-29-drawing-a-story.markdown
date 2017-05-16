---
layout: post
title: "Drawing a story"
subtitle: "Using storyboards and animatics as a story development tool"
bigimage: drawingcover2
date: 2014-06-10 12:00:00
categories: tools
inindex: true
---

I've created <a href="http://storyboardfountain.com/" target="_new">Storyboard Fountain</a>. It's an app that allows anyone to visualize a screenplay as fast they can draw stick figures. As you write a script, you can quickly visualize to test if a scene works. Create and show animatics to others. Storyboarding allows you to make your movie, without the cost of making a movie.

Coming from the perspective of a software developer, a game developer, and someone that has built companies, developing a movie with a standard approach seems like a gigantic step backwards.

<figure class="image-regular"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/gamevmovie.png"><figcaption class="image-caption">Creative development process of Video Games vs. Movies.</figcaption></figure>

In videogame development, you start development on day one. You are always iterating, collaborating with team members, testing it with your friends. Even after you release the game, you can still make it better by listening to feedback and issuing updates. At any point, you may learn new things in the process that will cause you to make a pivotal change for the better. Most of the time, this comes at a relatively low cost.

In movie development, a writer develops the story in a relative vacuum. The story is validated by an extremely limited number of people. Production requires many people involved with disconnected schedules. The actual production window is short compared to the total production process. It is also the most expensive.

If you, your producer, your investors, and your mom thought your script was great, that's awesome. If the movie was shot for 4 weeks, and went extremely well, that's even better. 

But does it suck? No one tells their friends their baby is ugly.

I've been invited to a few screenings of movies before they were fully complete. Sometimes there is no music, or the edit is slightly rough. As I'm watching, I cant help but notice some of the problems, most of which have nothing to do with the fact that the edit is rough, and that there is no music. The story is bad. It is a bad movie. No amount of editing could save it. In every case, everyone in the private audience talks about how beautiful the ugly baby is. Do they not know how bad it is? How did it get this far?

This is my greatest fear.

Most creative processes are iterative. 

With videogame development, at any point along the way, I can iterate on the work. I can be dynamic. Yet, once the movie goes into production, the ability to iterate and the time window to do so is extremely limited. This is also the window that incurs the most cost and risk. Is there a way to mitigate this risk, while also making better work?

I want a way to rapid-prototype my movie. I want to make my movie shot for shot before I even start thinking about production. The technical result of a movie is more or less 90 minutes of sequential frames of images and some audio. If I sketch images for key moments, in order, I can allow people to experience the movie. They can experience the story. If they can't, it's not because I didn't draw well enough—it's because the story is not good.

I want to use storyboards to make the best possible story.

I can test my animated storyboards with fresh eyes and use the feedback to make a better story. I can make modifications to the script. I can make modifications to the sketches. I can retest the new story. I can decide to completely change the story, if it needs a total reboot.

I can make a shot for shot version of the movie. I can complete it in little time, at a low cost, with little friction, before doing any production work.

## Creating Storyboard Fountain

I bought a pen tablet display, the Wacom Cintiq 13, to draw my boards in Photoshop. Drawing and managing 1200 boards, the fewest number of shots in my movie, would take forever in Photoshop. I also wanted direct integration with my Fountain script. Having built drawing systems at least 4 times before, and having created a few Fountain visualization tools in Javascript, I felt pretty confident I could make a good storyboard tool from the ground up.

<figure class="image-large"><div class="video-wrapper"><iframe src="//www.youtube.com/embed/g9rz0jaMhak?rel=0&amp;vq=hd720&amp;modestbranding=1&amp;showinfo=0&amp;autohide=1&amp;color=white&amp;autoplay=0&amp;controls=1&amp;loop=0" frameborder="0" allowfullscreen=""></iframe></div><figcaption class="image-caption">Demo of Storyboard Fountain in action.</figcaption></figure>

## How it works / Process

Storyboard Fountain works with a Fountain screenplay file. Open it, and the entire script is displayed on the left of the file. Action, dialogue, and parenthetical lines are shown as elements, so you can create boards for every filmable line in the movie. In fact, you can have as many boards as you want per line, or even choose not to have a board, if it's not necessary. As you draw, each drawing tool you use is saved on its own layer. The images are saved in a folder next to your Fountain file on your hard drive. The reference to each board is saved in location in the Fountain file itself. As a result, you can use the Fountain editor of your choice to edit your script while maintaining the integrity of the location of the storyboards. 

### 1. Sketching out scenes from script

Once you want to start visualizing the script, just go through a scene and start adding boards as you would imagine shooting the movie. Use the arrow keys, and press the "N" key to create boards. You can use a visualizer color (the pastel blues) to sketch out the shots with stick figures. Draw the least amount of information to get the the emotion out, to visualize the action. Step through the scene to see how well it's working. With even a couple boards, you can start to see a scene working.

If you rough out a scene at a time, you can board a feature length movie in little time. At about 1 minute per board, it should take less than 20 hours. You can copy and paste boards, which is an easy way to reuse shots and make small changes.

### 2. Going back and fleshing it out

You'll notice as you're drawing that you'll want to add visual details. You can go back through and make your drawings nicer. Add technical details, write notes. In some cases, you will realize that you want to cut some dialogue or change it. In other cases, drawing might cause you to change a scene in a major way. You can flip to the "Script Text" tab and make changes to the script, and flip back to "Boards" to see it in action. This is where drawing becomes part of the writing process.

You can use keyboard shortcuts. "1" for painting marker (a fat wet marker), "2" for pencil (a small soft pencil), and "3" for pen (a sharp thick pen). You can use the numpad to change colors. 

You can work with someone else to polish up your rough art. Or additionally, in a shared environment, you can use a team of people to each work on a scene or collaborate on ideas.

### 3. Sketching visual scenes

Occasionally, I've had an idea that was just easier to draw than to write, especially if I have that idea while I'm drawing. Just start drawing boards. You can flip to "Script Text" and add a slug line to make it a scene, add dialogue, and action lines. In theory, you could draw a whole silent movie, and time it out, without ever writing a script.

### 4. Pitching a story / Recording a pitch

In animation, the writer or story artist acts out boards for a sequence or scene to an audience. It is as if you are right there watching the show. The drawings have the meaning and the story of what they're trying to say. No one knows the story better than them, so they present the scene with passion. 

Walt Disney developed the process of pitching for animation. Animators use it as a key story development tool in animation today. Why this isn't standard in live action production, I have no idea.

<figure class="image-regular"><img data-width="646" data-height="429" class="img-responsive" src="/gfx/waltdisneypitch.jpg"><figcaption class="image-caption">Walt Disney pitching Pinocchio.</figcaption></figure>

In Storyboard Fountain, you can give a pitch while tapping the right arrow key to advance the boards. Of course, while you pitch an audience live, you can see the reactions of people. You'll know what's hitting and what's not. You can make changes as soon as you're done. You can get feedback from your group and incorporate the ideas into your changes.

Once a scene is pretty solid, you can record it. Just click record. It will count down from 3, and start recording your audio. As you pitch and tap the arrow to advance, Storyboard Fountain will record the timing. As soon as you finish the scene, it will stop recording the audio. You can playback the scene by pressing play.

Furthermore, you can export a scene or the entire movie so you can send your pitches to anyone. 

### 5. Controlled testing

Storyboard Fountain creates pitches and animatics with ease. This allows you to experiment and test. With a single written script, different directors will have their own unique take on how to shoot a scene. As a result, different directors or artists boarding the same script may vary wildly. Embrace this. Why not have few trusted people take a shot at the same scene? You could merge the great ideas from 2 different boards.

You could also test it assembling two separate audiences of fresh eyes for a long sequence, or the whole movie. One with scene A in place, and the other with scene B in place. You can gage the feedback by asking pointed questions about that particular scene. You will get a general audience opinion of what works better in each scene.

You could distribute the pitches on the securely internet. You could run demographic tests on boards with ease.

My thoughts on this are somewhat half baked. I am thinking about collecting feedback on pitches and organizing that data as a web service that is private and secure.

I would love to know other peoples thoughts on this.

### 6. Exporting to an editing environment

You can export a Final Cut XML file or an Adobe Premiere project file. Storyboard Fountain records all timing data for board advancement while recording a pitch. You can import your pitch/animatic into Final Cut, Premiere, or AfterEffects. It imports the visual boards with the correct timing, and the audio recording of the pitch. If you have boarded for every shot, you will have a shot for shot version of your movie. In a perfect world, you would just have to shoot to match the sketches in production, and swap out each board for a live action shot.

## What do other people think?

Can you apply storyboarding and pitches to the story development process as animation has done? I think so. But I started asking people to get feedback on my application in hopes to make the best tool from other people's experiences.

The first response I got was, "Of course! They storyboard most studio films!" After inquiring further, it is because most studio films use VFX. Those scenes are blocked out so they can edit the movie together without waiting for the VFX to be done. In other cases, complicated action sequences are boarded to make certain which shots are needed for the edit. This does not aid in the creation of the story, it aids in technical aspects of production and post production. Boarding, unfortunately, is not done early enough to have a material impact on making the story better.

Many accomplished feature writers I talked to did not like the idea. The process implies collaboration, working with more than just you, the writer on the story. "After you've made a few movies that work, you know what works on the page. Storyboarding a superfluous step that doesn't add much of anything." I guess all you have to do is make 3 hit movies, and then you'll just keep churning out the hits? A producer told me that the beauty of live action is the happy accidents that make a movie great. For reals?

"Storyboarding works well in animation because they can't shoot it. It's animation." With story, what is the difference between live action and animation? Nothing.

Some TV writers liked the idea of working with illustrators, visualizing ideas as fast as they came up with them. TV writers often collaborate with other writers in "writer's rooms." 

Any writer or producer that had worked in animation before loved the idea. They had seen the benefit not only as a production tool but also as a writing tool. Having gone through the process before, they wanted a tool that would make the process more simple and organized.

This idea is not new to anyone. Many people have been using it as a story development tool as opposed to just a preproduction tool. Alfred Hitchcock, Stanley Kubrick, Steven Spielberg, Martin Scorsese, George Lucas, James Cameron, Ridley Scott. After Fantastic Mr. Fox, Wes Anderson has been creating animatics for his following movies.

I think the best example of story development is...

## Pixar

After writing about creative toolmaking, a couple people from Pixar emailed me. They told me about some tools they created in-house to help with the creative process. I've been a fan of the legend of their process, and I was super anxious to hear more about their process and tools. Yet, because of non disclosure agreements, they wouldn't tell me many details.

In the middle of working on Storyboard Fountain, my friend <a href="http://sriramk.com/" target="_new">Sriram Krishnan</a> texted me a 4 paragraph excerpt from the excellent book: <a href="http://www.amazon.com/gp/product/0812993012/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812993012&linkCode=as2&tag=setpixel-20&linkId=7XTUH65UT2RZ5GBH" target="_new">Creativity, Inc. by Ed Catmull</a>:

<div class="longquote">

<p>Another key innovation occurred after a frustrated Pete Docter stopped by my office one day in 2002. What he really needed, he said, was the ability to splice together rough storyboards of a scene, time them out precisely, and then narrate over them in a Braintrust meeting, enabling him to convey the same enthusiasm and passion as he did in his initial live pitch and better approximating the desired end result: a film. I went to one of our software leaders, Michael Johnson, to see if he could put something together for Pete. Two weeks later, Michael came back with a prototype that would later become known as “Pitch Docter,” in homage to Pete.</p>

<p>The basic problem Pitch Docter sought to solve is one I’ve mentioned before—that when a director first pitches a movie, he or she is basically acting it out like a piece of performance art. A pitch is dynamic. The director is able to look the audience in the eye, see how the various elements are playing, and adjust on the fly. This performance, though, is not the film, and when the story is put up on reels and forced to stand on its own, it frequently falls flat. Conventional pitching was good theater, in other words, but it didn’t begin to simulate a movie. Pitch Docter did that. </p>

<p>Pitch Docter let artists seek criticism earlier, which is always better. It allowed those giving feedback to evaluate the material by simulating its presentation in film. Initially we didn’t know if the artists would accept this way of working—they had spent their careers working on paper, and if they were going to adopt this technology, they needed to discover and embrace it on their own. Soon, though, they saw its advantages. Since storyboards are frequently modified, having them on the computer simplified the process; the delivery of new versions to the team was as easy as a push of a button. As more artists adopted the tool, meanwhile, their requests for more features improved the tool itself. The software developers and the artists worked together to move the tools forward, and the model of how the artists did their work changed as the software evolved to meet their needs.</p> 

<p>This process was driven both by requests from artists and suggestions from programmers—a back and forth that came about because of the integration of technology and art. Michael’s team, known as the Moving Pictures Group, meanwhile, has become an example of the mindset we value—a mindset that doesn’t fear change. We apply this concept throughout the studio—software people rotate in and out of production. This way of doing things is responsive; it is nimble—and it makes us better.</p>

</div>

This was amazing — and not amazing like a white girl describes her kale salad. This was the first time I heard the name of their Storyboard software, "Pitch Docter". Within seconds of Googling, I found some videos of Pitch Docter in action:

<figure class="image-regular"><div class="video-wrapper"><iframe src="//www.youtube.com/embed/EOI0wDqc5Bg?rel=0&amp;vq=hd720&amp;modestbranding=1&amp;showinfo=0&amp;autohide=1&amp;color=white&amp;autoplay=0&amp;controls=1&amp;loop=0&start=4&end=321" frameborder="0" allowfullscreen=""></iframe></div><figcaption class="image-caption">Kelsey Mann pitching the first scene of Monsters University using Pitch Docter.</figcaption></figure>

The crazy thing is, Pitch Docter looks like what I've been building! I immediately bought Creativity, Inc. and read the whole thing in one sitting. I wish live action movies took a similar approach to the way Pixar thinks about story development.

## This process can cut production costs

A complete set of boards is a great aid to communicate the big picture to your cast and crew. This will cut confusion. You can shoot exactly what you need with minimal coverage, decreasing production time. Also, creating the shot list from the storyboards and doing a script breakdown will be much easier.

## Future plans

I'm building this 90% for myself, 10% for everyone that has to suffer through a shit movie like Transcendence.

I love movies. There is an implicit contract between people that make movies and people that watch them. If you make a movie, don't waste the viewer's time. Although that sounds nebulous, wholly impossible, and slightly absurd, everyone knows what it means.

The movie industry has not grown at all in the past 10 years. It likely wont grow in the next 10 years. Total dollar-wise, it's as steady as stone. There is huge room for opportunity, if you make a better product at a cheaper cost. You can suck the air out of the room through innovating on process and technology. You can drink their milkshake.

The value here is in improving the creative process, not the new tool itself.

This tool is a fancy way to organize sketches. Being excited about this tool, is like being excited about a notebook, instead of being excited about all the great ideas you're going to write in it. I'm excited to build a tool to help a better process, and ultimately make better work.

Please download: <a href="http://storyboardfountain.com/" target="_new">Storyboard Fountain</a> and check it out. It is also open source on: <a href="https://github.com/setpixel/storyboard-fountain" target="_new">GitHub</a>. Please email me us feedback! We want to make the best tool possible, and your feedback lets us know how to make it better.