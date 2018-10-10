# Time Blocker

A lean JavaScript application to be intentional about how you spend your day.
	can i still call it lean, now that it's react + datatables + dataviz?

describe how this is different from other apps (short version)
	web-bsed so can run on any device
	available on desktop so can quickly input w/ keyboard and mouse instead of clumsy touch interface on mobile device
update short desc to idnex meta tag, also package.json


## What's Time Blocking?

[Time blocking](http://calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/) is a method of planning a schedule for your day, so that you can be *intentional* about focusing on the things that you value the most, rather than just doing whatever feels urgent. It also helps you be intentional about *how much* time you spend on each task, relative to its value. 

Because [how you spend your day is how you spend your life](https://www.goodreads.com/quotes/530337-how-we-spend-our-days-is-of-course-how-we).

It complements systems like [Getting Things Done](https://www.youtube.com/watch?v=NnnaJkKdwjU), but meets a different need, and can be used independently from them. 


## Features

describe how this is different from other apps (long version)

web application so you can use on desktop. mobile interfaces inherintly awful for this kind of thing
keyboard accessible for speed

templates so can quickly setup days based on routine, but each day is independent so can adapt to unique parts of day

plan days based on actual calendar dates rather than abstract days of week - need to explain this better
	have archival record of what you did in past days
	future days are independent from templates, so can edit monday on a sunday without modifying template
 


also fun way to play around w/ modern stuff like web componentes, local storage, progressive web app, offline support, manifest


Example workflow:

1. Create a template for what a typical Monday looks like by creating time blocks for 
1. On Monday morning, load that template into the day's schedule, then adjust it for any ways that this Monday varies from a typical one. 
1. 


## Screenshots


## Instructions for using

download zip? install locally and open browser, or upload to website and use there?
setup http basic auth to avoid other people changing?
	er, no, it's fine b/c localstorage. think through just to be sure though
	even if that's true, maybe warn people to make sure they're aware of it
	

## Instructions for contributing

`git clone url` todo
`npm install` 
`npm start`
in [a seperate terminal pane](https://www.iterm2.com/img/screenshots/split_panes_full.png), run `npm test`
Open http://localhost:3000

`npm build`


## Credits

props to timetune for being a pretty good alternative and providing inspiration
create-react-app
also props to dependencies: html5 bp, npm packages, etc
https://feathericons.com/


## License

gpl 2 or later
link