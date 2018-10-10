# TODO

## Minimum Viable Project

go through https://reactjs.org/docs/thinking-in-react.html

look into PWA features like offline and push notifications
	maybe use framework, but probably better to not
	https://developer.mozilla.org/en-US/docs/Web/Manifest
	https://developers.google.com/web/fundamentals/web-app-manifest/


autocomplete task name based on existing ones
	how does that work w/ categories though? maybe search on the task name, but postfix the category in the results list?
		e.g., search for "walk" returns:
			`Walking (Breaks)` or `Breaks > Walking`
			`Create menu walker (Dev)` or `Dev > Create menu walker`
			etc 
	
probably gonna wait an npm module for the calendar, and maybe moment.js too
use localstorage probably, but research options first
	Local storage limit? Need to delete tasks when getting close? Warn to backup first

when loading template, // if current day has anything in it, warn that will proceding will override current blocks

use npm `datatables` for table search/filter/sort
sync back with time-blocker folder and commit to gh

all the stuff in comments in other files

Store db version in localstorsge, when back compatible broken refuse to overwrite db

need way to delete tempaltes

push notifications through browser
	just hardcode as a notif at the start of event for now

Always show pie chart on current day to keep mindful about where spending time

test manifest.json
	update theme_color to compliment background_color
look into service worker stuff in index.js
test print stylesheet, but don't spend much time fixing problems 'cause it's not worth it
	this might be relevant: http://css-discuss.incutio.com/wiki/Printing_Tables

super simple backup. whatever's easiest, probably just download a .json file with the data

keyboard shortcuts for everything
	hit ? to show modal listing them 

Todo blog about when v1 done
also post note on https://www.reddit.com/r/productivity/comments/9lqmh2/looking_for_timeblocking_app_that_notifies_at/
pin to github profile
share with corey and vedanshu as an idea for how to do modern js that doesn't suck

when you setup your templates, add everything you might possilby want to do that day, including meetings that are bi-weekly, etc
	it's easier to just delete a row than to have to add one


## High Priority

Adjust times of other tasks automatically after changing an earlier task? To avoid having to shift everything manually

ability to select multiple tasks, and shift them all backword/forward by an arbitrary time amount

colors and icons for tasks like timetune has. find some open source icon library to use. prefably npm module if already using that for other dependencies like moment.js
	maybe not big enough impact to justify high priority, but it would just make things feel a lot nicer, so it does have a big UX impact

stats on time
	similar to timetune, see what your day/week looks like. if i'm spending 3 hours or 25% of work day on slack/p2, that's bad
	combine w/ categories so can look at just work day?

Electron wrapper so can have dedicate window on desktop rather than getting mixed in with all the regular browser tabs
	push notifications through growl

i still want to have time block alarms on mobile sometimes, though. how to handle that?
	maybe also build a mobile version using electon
		does it already do that automatically when you build desktop?
	don't want alarms going off on both simultaneously, though. only want alarms on mobile if desktop is idle/sleeping

could also use timetune for personal(phone), and timeblocker for work(desktop)


show warning when blocks overlap
	but only if overlap by more than 1 minute, so one task can end at 9:00am and the other can start at 9:00am, isntead of having to start at 9:01am
	highlight row w/ css, but allow to overlap for flexibility and simplicity 

look for design template that you can use to make everything more attractive
	or even just borrow from https://codepen.io/learnwebcode/pen/eyZMyp

offline support
	not really useful for me, but will be a good opportunity to learn how to do it

optional store on Drive, Dropbox, etc, or at least backup there if
	probably don't want to sync multiple devices though b/c of merge conflicts, so make the db keyed to the device it was created on
Or.convert automatically
Do backup first

it'd be nice to have notifications on phone too
	maybe use electron there too?
syncing would be complicated, so maybe read-only
but that might be annoying if they're both going off
or maybe use simperium API? don't think it's really supported anymore, but maybe


automatically show past blocks as complete and highlight current block


## Medium Priority

maybe add a '5 minutes left, wrap it up...' notification before next event starts
	if event is less than 20 minutes, though, maybe make it a % of the task time, so you'd get the notif 1-3 minutes before 

categorize tasks
	this would let me view stats based on cat, so i can view just my work blocks or just my personal blocks, for example
	
allow sub categories, but that doesn't have to be a blocking for adding top-level cats

Notes for categories, but don't clutter the main content area with them, have a separate place to see them, or a toggle or something

automatically pull events from calendar into the day
	allow blocks to overlap each other, but warn user so they can manually correct it
	calendar blocks should probably be read-only, but should be able to re-sync if make modifications on calendar

drag and drop items to re-order things
	automatically switch times, but keep the tasks legnths the same
	probalby a library to handle the drag/drop UI/logic

customize notifications for x minutes before event like timetune

unit tests, but only worth the time as a learning opportunity


## Low Priority

ReacTable feels like overkill for my needs, maybe look to replace with something leaner

make think of a better name, but keep it descriptive instead of "clever"

import backup
