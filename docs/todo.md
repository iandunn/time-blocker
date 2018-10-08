# TODO

## Minimum Viable Project

all the stuff in comments in other files

Store db version in localstorsge, when back compatible broken refuse to overwrite db

push notifications through browser
	just hardcode as a notif at the start of event for now

ability to select multiple tasks, and shift them all backword/forward by an arbitrary time amount

test manifest.json
test print stylesheet, but don't spend much time fixing problems 'cause it's not worth it
	this might be relevant: http://css-discuss.incutio.com/wiki/Printing_Tables

super simple backup. whatever's easiest, probably just download a .json file with the data


Todo blog about when v1 done
also post note on https://www.reddit.com/r/productivity/comments/9lqmh2/looking_for_timeblocking_app_that_notifies_at/
pin to github profile
share with corey and vedanshu as an idea for how to do modern js that doesn't suck



## High Priority

colors and icons for tasks like timetune has. find some open source icon library to use. prefably npm module if already using that for other dependencies like moment.js
	maybe not big enough impact to justify high priority, but it would just make things feel a lot nicer, so it does have a big UX impact

stats on time
	similar to timetune, see what your day/week looks like. if i'm spending 3 hours or 25% of work day on slack/p2, that's bad
	combine w/ tags/categories so can look at just work day?

Electron wrapper so can have dedicate window on desktop rather than getting mixed in with all the regular browser tabs
	push notifications through growl
	
look for design template that you can use to make everything more attractive

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




## Medium Priority

tag/categorize tasks?
	this would let me view stats based on tag, so i can view just my work blocks or just my personal blocks, for example

automatically pull events from calendar into the day
	allow blocks to overlap each other, but warn user so they can manually correct it
	calendar blocks should probably be read-only, but should be able to re-sync if make modifications on calendar

drag and drop items to re-order things
	automatically switch times, but keep the tasks legnths the same
	probalby a library to handle the drag/drop UI/logic

customize notifications for x minutes before event like timetune



## Low Priority

make think of a better name, but keep it descriptive instead of "clever"
