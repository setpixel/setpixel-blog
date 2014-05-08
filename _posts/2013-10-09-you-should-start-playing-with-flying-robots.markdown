---
layout: post
title:  "You should start playing with flying robots"
subtitle: "Keep your robot friends close, and your robot enemies closer."
date:   2013-10-09 12:00:00
categories: tech
bigimage: quadcopter
fb-comment-url: http://setpixel.com/post/63547909781/you-should-start-playing-with-flying-robots
---
Multirotor flying robots are more than just a new kind of toy. They represent the convergence of many pieces of tech, and a huge opportunity for innovation that will have application far beyond flying toys.

In 2006, I started my last company at Y Combinator. One of the Y Combinator partners, Trevor Blackwell, had an amazing robotics lab called “Anybots.” At the time, he was focused on creating remote controlled biped robots. The goal was to create a humanoid robot that balances, walks, and climbs steps. What he created was really great, however, required a large harness and power cable. It didn’t seem like a practical pursuit as far as robotic mobile agility was concerned. I remember thinking, “What’s the point of climbing stairs if you could just fly over them?” At the time, remote helicopters were exclusively single rotor. They were either powerless toys, or gas powered, and extremely dangerous. In either case, they were far from agile.

<style>
      .videoWrapper {
      position: relative;
      padding-bottom: 56%; /* 16:9 */
      padding-top: 0px;
      margin-bottom: 0px;
      height: 0;
    }

    .videoWrapper2 {
      position: relative;
      padding-bottom: 56%; /* 16:9 */
      padding-top: 0px;
      margin-bottom: 0px;
      height: 0;
      max-height: 200px;
    }


    .videoWrapper2 iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style>

<div class="videoWrapper2">
  <iframe src="//www.youtube.com/embed/wiZt0JAfp7E?rel=0&vq=hd720&modestbranding=1&showinfo=0&autohide=1&color=white&autoplay=0&controls=1&loop=0" frameborder="0" allowfullscreen=""></iframe>
</div>
  
In early 2008, I saw a video of a German guy, Holger Buss, flying a multirotor copter he created. It was the coolest video I had ever seen. From complete rest, he could shoot the copter up 10 meters in to the air, stop immediately, fly in any direction with ease, and with a camera on board, create beautiful aerial photography with amazing precision. As far as creating the most agile robot in the world, he had done it.

People have tried to create multirotor copters before, however being able to balance and control to the motors efficiently, and to be able to power the electric motors with batteries with enough fuel density had be impossible up until that point. Through the popularization of using 3-axis accelerometers in video game systems like the Wii, and smart phones, like the iPhone, the cost of the components came down significantly. Additionally, smart phone tech drove the demand for incrementally better battery tech.

There was a convergence of sensor, microcomputer, and battery tech that just made multirotor tech possible.

Even though the cost was driven low enough that people could start building their own, the flight controller, the computer to make it all work together was sold in a kit for about $10,000.

I had to have one, but I didn’t have that kind of money.

Apparently, many other people who saw the video thought, “Hey, I can make that!” The fundamentals of the flight controller are actually very simple. By the end of that year, there were at least 4 independent flight controllers available on the market for much cheaper than the original, and some of them were open source.

Over the past few years, I’ve built a couple, learned a ton, been frustrated most of the time, and insanely satisfied at the same time.

Fast forward 3 years, the tech has advanced quite nicely. You can buy a miniature toy quad copter working on the exact same principles as larger more powerful quads, for just $40. You can assemble a multirotor copter with much more advanced features for a fraction of what you could get one for 3 years ago.

<div class="image">
  <img src="https://picturelife.com/v/700/RZTDYtT21a0kFF7X" style="width: 100%;">
  <div class="caption">Custom built quadcopter with APM:Copter controller</div>
</div>

Custom built quadcopter with APM:Copter controller
Currently, it seems that there are two raging nerd camps: 3d printing, and multirotor copters. Currently, both are almost functionally useless. I’ve never seen anything 3d printed worth a god damn, and there isn’t enough aerial photography demand in the world to support the hordes of nerds building copters. I personally think 3d printing is lame and I cant imagine a real use for it. Similarly, I can’t imagine a real use for quad copters, but fuck man, they are super fucking cool. And I don’t think I or anyone else can really articulate it any better.

Being interested in this tech from the perspective of a visual designer, product designer, and a software engineer has been extremely humorous and inspirational. The incumbent of most of this tech is the RC hobbyist. These people have been flying world war 2 model planes for 20 years, have an amateur radio license, are morbidly obese, smell like urine, and refer to their models using the female gender (WTF, you fat fucks). As a result, a lot of the tech is really old school, poorly designed, and poorly integrated. It’s inspirational to see its potential and how much room for innovation there is.

From a creative perspective, this is incredibly interesting to get into: from just being able to fly, to creating an autonomous flying robot that picks up trash in the street (i just made that shit up). At this point, quads are accessible to most anyone with a little bit of money, so I thought I’d drop some thoughts about multirotor copters.

You are going to start seeing them everywhere.

DJI Phantom, right out of the box.
How much is this going to cost?

A little, and then more, and then even more, and then a lot. But you should definitely start small and see how it goes. Short answer: about $100, then about $1000, then about about $10,000+

Here’s the standard route:

$40 - a mini toy quad
$40 - you broke it, and bought another one.
$679 - bought a phantom because you want to fly for real
$399 - bought a GoPro 3 because you want to record video
$279 - bought a Fatshark Predator V2 for FPV
$40 - bought CP Antenna because the ones that come with Fatshark suck
$20 - bought a cable to hook up GoPro 3 to video transmitter
$179 - bought EZOSD to superimpose the battery level on the video
$699 - bought a Zenmuse H3-2D gimbal because i want to record steady video
$2500 - $5000 - started building your own

Where should you start?

If you are even slightly interested in flying, buy a small toy quad. It’s only $44. You need to fly it to feel comfortable and confident flying a bigger one. Its an amazing learning tool, and even though they are incredibly resilient, you won’t feel bad breaking them.

Ladybird toy quad.
If you have flown a toy quad copter for bit, or you, like many of my friends, need to run before you can walk, you should buy a DJI Phantom. It’s $679. It has everything you need to fly. All you have to do is screw in the landing skids, and it’s ready to fly. In the past 2 years, the company DJI has released the best, most affordable flight controller: the Naza. All their parts are well made and the Phantom is really a beautiful device. DJI is the Apple of multirotor tech right now. Having built much more powerful, much more expensive multirotor copters, I can say that the Phantom is all I need to fly, and is pretty much all I fly right now.

You should know that the tech is super DIY. Even if you buy a Phantom, which looks like an out of the box product, I can assure you, that you will be opening up the case for some reason or another in the future. Further down the road, you will likely buy a soldering iron, special screwdrivers, power connectors, Velcro, etc.

How do the mechanics work?

The fundamentals of the tech are actually very simple. It’s really important to understand all of the pieces and how they work together. Most quads are a frame, with 4 motors with propellers equidistant from the center. ESCs or electronic speed controllers, control the motors speed from data from the central computer, or the flight controller. It has a radio receiver, GPS, digital compass, and its all powered by a battery.


Flight controller

A small computer, the flight controller, pretty much controls everything. A radio receiver takes signals from the transmitter, and relays them to the flight controller. The flight controller’s job is to do what you tell it to do, but also not flip over. Primarily, the flight controller takes input from the 3 axis gyro / accelerometer. It basically tells the computer how level it is, when its not level, it will try to become level by telling specific rotors to spin faster and generate more lift. It is always trying to keep itself level.

DJI Naza Flight controller inside the Phantom.
To really get a feel for how it balances, you can hold onto the quad with a little bit of throttle. Then change the pitch and roll of the quad, you will feel how it is trying to compensate by spinning certain motors faster and level itself out.


Quad motor’s rotation alternate for each arm. To move, the flight controller varies the speed of the motors to generate lift for specific movements. To go up, or throttle up, all motors spin faster to generate more lift and go up. To go down; less. To move forward, the quad will put itself out of balance by increasing thrust on the rear rotors, making it pitch forward. To move left and right, the quad will increase thrust on the opposite directions rotors to roll it left or right. Because the rotors alternate in rotation, increased trust on the clockwise rotors will cause the whole quad to rotate clockwise and vice versa. Pretty simple, and pretty, pretty, pretty cool.


Side note: You have probably seen multirotors with 6 and 8 rotors. The dynamics work exactly the same. They more rotors, the more lift, so you can carry heavier payload. Additionally, if you lose a propeller or a motor goes bad in flight, the aircraft will still be able to fly level, whereas with a quad, it will just fall from the sky.

Radio Tech

If you are coming from a engineering perspective, learning about radio control for the first time, it will feel like you are in the days of when modems had phone couplers. For the most part, radio control is one way. There is a transmitter in the controller, and a receiver in the quad. On the controller there are switches, and analog potentiometers that each send their values exclusively through their own channels. On the receiver side, you hook each channel up to the flight controller. It seems mega old school to me that all the channels aren’t packaged up into packets so you could have many more channels. For that, I supposed you would lose latency and utter simplicity. You get a strong sense that not much innovation has happened in the past 20 years as far as the packaging of the data.

Now that the control is being mitigated by the flight controller in the first place, it would be nice to send back data as far as what is going on with the flight controller. I could imagine applying force feedback to the controls to allow for smoother safer flight. Imagine as you are landing and decreasing the throttle, if you we landing too fast, an opposite force would be applied to give you an indication you are descending too fast.

Most radio control is on 2.4GHz. On the Phantom, they say that the range is 300 meters. However there are Youtube videos showing that it can go as far as 1KM. Range can be increased with more power on the transmitter. However, most of the range increase comes with better antenna with higher gain.

One of the biggest fears while flying, is losing radio signal and then permanently losing your multirotor.

We have cellphone coverage over most of the functional world. In many places, the cellular internet is quite fast and low latency, unless you are on Verizon, in which case we can only feel sorry for ourselves. OMG YOU FUCKING SUCK, VERIZON. WHY DON’T YOU DIE A HORRIBLE DEATH? I kid. But seriously, what the fuck?

It would seem to me that the best radio system would run both on the standard radio system, and also augmented by the cellular network radio. This way, you have the low latency of direct radio, with the failsafe of cellular and ability to send back large bandwidth data. The main downside is that the cell towers point downward, so you cant really get a signal above 100 feet.

Battery Life / Battery Tech

You can fly for 12 minutes on a fully charged battery. Max.

No problem right? Just add another battery and fly for 24 minutes right? Nope. The more weight the quad carries, the more newtons of force needed to lift it, the more energy it consumes. It is true, that can get an incremental increase in battery life with 2 batteries, however, you will greatly sacrifice maneuverability. Additionally, adding a GoPro and any other payload will bring its flight time down quickly. Basically, you should expect 5 to 10 minutes.

The best strategy is to buy many batteries, charge them before you fly, and swap them out as they die.

The battery that comes with the Phantom is a 11.1V (3S) 2200mAh LiPo. If you are new to battery tech, it’s sort of confusing reading about it. After flying 1 or 2 times and measuring your batteries voltage, you will get an immediate feel for it. LiPo means Lithium Polymer which is the best type of battery tech available to consumers currently.

Dual battery charger.
11.1V is the resting charge of 3 cells in serial (3s). 2200mAh is 2200 milliamp hours, or the capacity of the battery. If you take a fully charged battery, and you use it completely, you will have used 2200mAh. It is possible to measure how many mAhs you have used, but not how much are left in your battery. What’s left in a battery is really measured by the voltage. You can charge an 11.1V 3S up to 12.6 volts. As you use the battery, the voltage will drop to 11.1V. The voltage drops off exponentially. So you will be at 12.6 for a while… 12.5.., 12.4.., 12.3.. and then drop off quicker and quicker.

Safety

Lithium Polymer batteries can be CRAZY dangerous. As in, will light all your shit on fire in a violent way. If a Phantom battery catches fire, it will shoot a flame 5 feet in the air for 30 seconds. You never want to use more than 80% of a LiPo. If you do, the life of your battery will deteriorate quickly, and it might puff up. Don’t overcharge your battery. If you crash and the battery is damaged, it may start on fire. If your battery is puffy or damaged, soak it in salt water in a bucket for 2 weeks and then throw it away.

I keep my batteries in a military metal ammunition container I bought on ebay.

Fires are rare, but don’t be dumb: more info.

The future of battery tech

An important concept to understand in battery tech is fuel density. If you have a kg of gasoline, and a kg of lithium polymer, which contains more energy? Of course gasoline. But how much more? About 60 times more, dawg. What? That sucks. Scientists need to figure that shit out so I can get that flying car Back to the Future promised me.

Gasoline = 12,000 Wh/kg Litium Polymer = 200 Wh/kg

But the cool thing is that efficiency of gasoline is only about 20%, and the efficiency of Lithium polymer is about 80-90%. So that makes:

Gasoline = 12,000 Wh/kg * .2 = 2440 Wh/kg Litium Polymer = 200 Wh/kg * .8 = 160 Wh/kg

So really about 15 times.

The next realized battery tech likely to come out is Lithium sulfur which may be out in 2016. It has an energy density of 350 Wh/kg or 1/8th of gasoline. That means you will be able to fly 21 minutes instead of 12. Which is pretty excellent.

Check these guys out: Envia Systems

However, the battery tech with the greatest promise is something called the Metal-air electrochemical cell. Metals, like zinc, are combined with air in a liquid electrolyte to produce electricity. The challenge has been making the batteries rechargeable. Recently, a couple companies have claimed success in creating rechargeable metal-air batteries. What is great is that the zinc air has an energy density of 1,300 Wh/kg which is half that of effective gasoline. But the truly amazing thing is that metals like aluminum have a 3,600 Wh/kg and lithium has an astounding 13,200 theoretical Wh/kg.

Lithium air batteries have a theoretical effective energy density 40 times that of gasoline. That’s 792 minutes (13 hours) of flight time in a battery the size of the existing one.

In 10 years, 50% of cars will be electric, and in 20 years, cars that run on gas will be collectors items.

The major point is: 12 minutes might seem depressing, but there is a lot to look forward to soon.

GPS / Compass / Barometer

Standard GPS tech is accurate down to 1-2 meters. Cell phones get around this by first making the assumption that you might be on a road and managing your position virtually, or listening to wifi radios to improve accuracy. It would be nice if GPS in multirotors also listened to wifi. However, this tech looks super awesome: Piksi the RTK GPS Receiver. With accuracy down to 2 inches and an update rate of 50Hz, Multirotors could hold their position beautifully.

A digital compass is also used to keep its yaw rotation stable. The problem is that the digital compass is very sensitive to magnetic interference. It needs to be re-calibrated every other flight. If a RTK GPS could be used in combination with the accelerometer, the multirotor might be able to calibrate the compass itself.

A barometer is used to detect the altitude. The truth is that the barometer will give different readings on different days. It can really only be used to stabilize its altitudes in air over short periods of time. In fact it is really difficult to know the altitude over the ground. To do this properly, the flight controller would need a map of the topology of the area. I think that with the combination of RTK GPS and known maps, you could achieve super accurate, high frequency altitude readings.

Basics of flying

Flying using a standard radio transmition controller is pretty straightforward. For those that play first person shooter videogames, it will take you all of 3 minutes to get a good feel for it.

The simple DJI Phantom Controller
Taking off

First you have to arm the multirotor by pushing the 2 sticks down and towards each other. This will start to spin the motors up. Then, increase the throttle to a little past the midway point. On the DJI Phantom, this will trigger a macro in the flight controller to take off by itself, fly to 1 meter above the ground and hover.

Flying

Once it is hovering, you can fly it in any direction. The basic three things you have to pay attention to are, horizontal movements, rotation (yaw), and altitude.

Tip: Be subtle. The controls are very sensitive. The slightest movement on the sticks will result in some action.


Rotation is very important when flying. Most multirotors have LEDs so you can easily see what the orientation of the device is. You always want the orientation pointing directly away from you. As you move around, the movements are relative to the devices orientation, so if you want to move left, and its rotated 90 degrees, it will go away from you. You can control the rotation with left and right movement of the left stick. As you move around, the rotation may shift. Keep an eye on it and correct it as it happens.

To adjust the altitude, you move the left stick up and down. The neutral position is in the center. As you move the stick up slowly, it will ascend. Down, will descend. You want to make sure you are always well above the ground.

To move forward, backward, to the left and to the right, you use the right stick. Remember to be subtle with the controls, as the device can move very quickly. Remember to also check your rotation. If it doesnt seem to be moving the way you want it to, it probably isn’t oriented to you properly.

Landing

To land, simply descend slowly and as you approach the ground descend even more slowly. Once you are on the ground, disarm by pushing both sticks down and together.

Getting better…

Flying well requires you to have excellent spacial understanding of your environment and the position of the multirotor in your space. Some people just have a knack for it immediately, and some require a lot of practice.

Don’t allow it to get behind you. Once it is behind you, your sense of orientation will be completely thrown out of whack. If it gets behind you, stop, turn around and rotate it to make sure you have a good sense of its orientation.

Once its farther than 30 feet away, you have a physical inability to judge depth other than scale. Are you too close to that tree? Probably. Humans has binocular vision which allows us to perceive depth. Its really only important for things immediately in front of us. Once it moves past the threshold of perception, the only thing you can go off is the scale of the multirotor, or a feeling of how far you’ve traveled. Its extremely hard to get this right, and the further out you are, the harder it is to be precise. It is the easiest way to crash.

Don’t freak out. If it seems to be out of control, it probably isn’t. At rest, it just hovers. So in the worst case, you can just make sure it is hovering, and slowly bring it down - or rotate it, move it forward, rotate it, move it forward to get a sense of its orientation.

Modes

There are a few modes on most flight controllers. You never directly control the rotors, the computer does the work to translate what you want, into what it will do. The different modes allow you to pick how that works.

The most used, is attitude hold. This modes main priority is to maintain the altitude no matter what you do unless you explicitly want to change the altitude. This creates a feeling as if there is a horizontal plane that you are free to move around horizontally on while maintaining vertical position. It’s like you are driving a car in the air. This mode uses a barometer sensor to gage the altitude and move accordingly.

Another mode, called GPS hold, is really basically the same as attitude hold, with a second priority which is to maintain its horizontal global position. When you first start the multirotor, the flight controller will attempt to lock onto as many GPS satellites as it can to ensure a good sense of position. As you move, it updates where it thinks it should be. At idle, it will attempt to keep its GPS position no matter what. Imagine a very windy day. In attitude mode, the multirotor will drift. In GPS mode, it will counter against the wind to maintain its position.

A mode not many people will ever need to use is manual or acrobatic mode. You still are flying through the flight controller obviously, but the controls are much less mitigated by the computer. As a result, you can do crazy things like flips, flying upside down, flying vertically. It is the easiest way to completely wreck your multirotor, or worse hurt someone or yourself.

What the flight controller does to translate what you want into what it should do is beautiful. Because the flight controller is basically software, the firmware can be updated. This creates opportunities to create new, useful and sometimes novel flight modes.

On the DJI Phantom, there is a mode called intelligent orientation control. This aims to solve the problem of yaw orientation when you are far out, and you cant really see your yaw rotation. It uses GPS and the compass to orient flight always in relation to you, and not to the device itself. This allows you to not have to worry about the rotation of the multirotor, which means you are much less likely to lose control.

The more you fly, the more you will think, “Hey it would be really cool if I could fly like this..” or “I wish I could do this automatically..” or “If this happens, this other thing should happen.” That is what is great about the flight controller’s software, it is always being developed.

For example, taking off used to be very difficult for beginners. You have to have a good sense of how aggressive to push the throttle while being subtle enough not to fly off like crazy. The DJI Naza controller built in a macro that pretty much does this for you automatically and put it in the update of the firmware.

More interestingly, there are other flight controller platforms that allow you to write your own software or modify the existing platform. If you dream it, you can probably build it. The APM:Copter (ArduCopter) platform is the most interesting. The platform originated based on top of the Arduino. They have outgrown the Arduino platform and are now their own open source platform with a great community. This is where multirotors get extremely interesting.

Cameras

So if you’re flying one of these things around, your first thought is to strap a camera to it so you can make some totally sweet videos no one will ever watch on Youtube. The standard is the GoPro camera. It’s so standard that the DJI Phantom has a built in mount for it. You basically press record, fly around, and then stop recording.

The GoPro is of course not without issue. It will completely lock up at the most odd times, forcing you to remove the battery to reboot. Dear GoPro, you had one fucking job.

Zenmuse H3-2D Gimbal
From that footage, you’ll notice that the footage is extremely shaky. To fix this, you can install a motorized gimbal to keep your camera completely level by correcting for the rotation. The footage from a camera mounted on a gimbal is amazing. It’s like the camera is on rails.


The gimbals can be difficult to install. So you can just attach easily. The DJI Zenmuse H3-2D is quite nice, however will take 2 hours to install, soldering experience, and lots of patience. It also costs $700. You can get lesser gimbals for $150. On larger multirotor setups, you can get 3 axis gimbals for several thousands of dollars.

FPV: First person view

FPV allows you to attach a transmitter to the camera and feed live video back as you fly. This basically means that you can fly as if you were sitting in the quad itself. Flying this way is what feels most like playing a video game.

One big reason to fly FPV is that it removes the problem of yaw orientation when flying. You can just fly without worrying about rotation. Another reason is that if you are shooting video, you can see what you are shooting and frame your shots accordingly.

Fatshark goggles
Technically, the setup is pretty simple. You attach a 5.8 gHz transmitter connected to the camera. On the receiving side, you have a receiver connected with some sort of display. The two types are usually a pair of video goggles or LCD display you attach to your controller.

For the truly nerdy, you can hook up goggles to a head tracker (3 axis gyro), that tracks the rotation of your head. You can transmit that rotation to the multirotor’s gimbal, so that when you rotate your head in any direction, it rotates the camera, creating a feeling like you are truly there. It’s like Oculus Rift for the real world.

When I first got my FPV setup, I was most excited about it. I installed it right away.

In reality, FPV, while useful, is only marginally useful, mostly novel, and not without a lot of problems. First, the GoPro’s lens is fish eye and extremely wide. Therefore, when you are flying, you have no sense of how close you are to something. If you think you are too close, you have probably just hit it. When you are even 30 feet away, it is hard to make out the detail of what you are looking at. When I’m flying FPV I have an almost impossible time of telling where I am in relation to the multirotor. I have to constantly check line of site where it is.

It is possible to also attach an OSD (on screen display) unit to the video transmission. Currently, these really only show you how much battery you have left, which is extremely helpful. They also show you speed, location, heading, altitude. However, these readings are often completely inaccurate or so delayed as to be almost completely useless.

Goggles vs. LCD display.

Goggles hacked
The idea of goggles are so fucking cool. You can see everything the multirotor sees! They block out the light. They make it impossible for you to see people making fun of you. In reality, they suck. You absolutely need to be able to see where your multirotor is in relation to you and the world. So you are constantly flying with them on, taking them off to check, and putting them on again to fly. It’s super annoying. The resolution is not good enough to see many details, you just get an idea of the image.

It is much more useful to fly with an LCD display and attach a hood to block out some of the sun.

Amazing opportunities for the future

Outside of the fact that flying multirotors are very novel and fun, there is a huge opportunity for innovation in the space. Prior to advent of multirotors, peoples interest in robotics was declining. If you look at what huge Japanese companies have invested huge amounts of R&D in, it’s humanoid biped robots. Honda, you made a robot that can walk up stairs slower than my grandfather, and he’s fucking dead. The public is not impressed. Multirotors have captured the wow of young engineers as an amazingly agile vehicle for potential autonomy. Young engineers who would have previously been soley interested in computer science are now thinking robotics from a more practical perspective. Additionally, the hardware platforms and capabilities have almost made the mechanical aspect of the tech trivial, leaving most of the work to be done on the software side, which is much more interesting.

Miniature quad specifically for programming
Young engineers have strapped XBOX Kinnects onto multirotors so that they can map an indoor environment, have the device be self aware of its position, and allow it to be flown aggressively while the software protects the pilot from being able to fly into walls, people or any obstacles. This is fucking amazing, and it exists right now, and it was built by kids, not top engineers at Google.

You can easily imagine that this tech could be retrofitted to any vehicle so that drivers are protected from driving off a road, hitting another car, or hitting people. I think what is interesting is that this tech is being built from the bottom up by people who really care about solving hard problems and not from the bottom down by auto companies or even the snails pace of Google. It is an indictment of these large and lazy companies and a huge opportunity for small startups and individuals with great ideas.

As far as the application of multirotors as devices go, they have amazing potential. It is not hard to imagine a not so distant future where it is common for tens of thousands of these to be flying around in the city skies performing tasks. In fact, I think its really only a question of when it will happen.

In terms of applications, I think its impossible to know the future. Certainly, the shortest logical leap is it’s use in delivery and pickup. With the last mile of package delivery being 28% of the cost of delivery, I think this makes a lot of sense. In a large city, packages could be delivered to a warehouse just outside of the city in a conventional fashion, and flown via multirotor to the top of your building and dropped off autonomously. It would be fast, extremely cheap, secure, autonomous, and scalable.

This could also be applied to the pickup and short distance transport of packages. Imagine a cheap beacon attachment to a package that would easily allow a multirotor to identify, dock, pickup and drop off a package. Now imagine swarms of these.

.. And do you know what all this will result in? Thats right: robot drone pirates.

Being able to carry payload, be anywhere, sense anything, and feed information to a central location or swarm are things that make multirotors extremely interesting. The autonomy or semi autonomy built for the tech can and should be used for applications outside of flying robots.

It is very early days with this tech. I really hope that people seeing and playing with flying robots will inspire them to create something really great.

Future articles

Brainstorm of specific applications
The political and social issues surrounding multirotors
More in depth issues and opportunities of autonomy