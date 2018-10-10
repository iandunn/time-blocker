import React, { Component } from 'react';

import './site-controls.css';

class SiteControls extends Component {
	render() {
		return (
			<nav className="site-controls">
				{/*
				setup as calendar view so can plan monday on sunday without modifying weekly routine
					wait, what? i don't remember what i meant when i wrote this
					still want to use calendar view, just need to remember how to explain it
				*/}
				<section className="calendar">
					<h2>Calendar</h2>
					<img src="https://www.jqueryscript.net/images/Simple-jQuery-Calendar-Date-Picker-Plugin-DCalendar.jpg" alt="" />
					{/* this is temp placeholder */}
					{/* add question mark icon. when hover over it, explain that ? */}

					<div>
						{/* look for library to do this. clicking on day loads the saved blocks for that day in `.time-block-rows` */}
					</div>
				</section>

				<section className="existing-templates">
					<h2>Templates</h2>
					{/* add question mark icon. when hover over it, explain that to create a new template, setup the blocks for a day, then click save button */}

					<ul className="existing-templates">
						{/* style as links, but without underline decoration? */}
						<li>
							<button data-template-id="1">Monday</button>
						</li>
						<li>
							<button data-template-id="2">Tuesday/Thursday</button>
						</li>
						<li>
							<button data-template-id="3">Wednesday/Friday</button>
						</li>
						<li>
							<button data-template-id="4">Saturday</button>
						</li>
						<li>
							<button data-template-id="5">Sunday</button>
						</li>
					</ul>
				</section>

				<section className="miscellaneous-controls">
					<button>Backup Data</button>
				</section>
			</nav>
		);
	}
}

export default SiteControls;
