import React, { Component } from 'react';

import './site-content.css';

class SiteContent extends Component {
	render() {

		// modularize this into smaller components
		// need to hook up input fields on onChange handlers so they update after input
			// then remove readOnly values
			// isn't there a way to do that automatically instead?

		return (
			<main className="site-content">
				<section className="time-block-management">
					<h2>Time Blocks</h2>

					{/* replace this with npm module for table sorting */}
					<table className="time-blocks">
						<thead>
							<tr>
								<th>Start time</th>
								<th>End time</th>
								<th>Task</th>
							</tr>
						</thead>

						<tbody className="time-block-rows">
							<tr>
								<td colSpan="3">Loading...</td>
							</tr>

							<tr>
								<td className="time-window">
									<input type="number" name="start_hour" maxLength="2" min="0" max="12" value="7" readOnly />
									:
									<input type="number" name="start_minute" maxLength="2" min="0" max="12" value="00" readOnly />

									<select name="start_period" defaultValue="pm">
										<option value="am">am</option>
										<option value="pm">pm</option>
									</select>
								</td>

								<td className="time-window">
									<input type="number" name="end_hour" maxLength="2" min="0" max="12" value="8" readOnly />
									:
									<input type="number" name="end_minute" maxLength="2" min="0" max="12" value="30" readOnly />

									<select name="start_period" defaultValue="pm">
										<option value="am">am</option>
										<option value="pm">pm</option>
									</select>
								</td>

								<td className="task-name-container">
									<input type="text" name="task_name" className="task-name" value="Foo bar meeting" readOnly />
								</td>
							</tr>

							{/*
							<time-block-row>
								<span slot="?">x</span>
							</time-block-row>
							*/}
						</tbody>
					</table>

					<div className="day-controls">
						<button>Add new time block</button>
						<button>Save Current Day As Template</button>
						<button>Clear all blocks on this day</button>
					</div>
				</section>

				<section className="day-stats">
					<h2>Current Day Stats</h2>

					<blockquote className="motivational-quote">
						<p>How we spend our days is, of course, how we spend our lives.</p>

						(<cite>
							<a href="https://www.goodreads.com/quotes/530337-how-we-spend-our-days-is-of-course-how-we">
								&raquo;&raquo;
							</a>
						</cite>)
					</blockquote>

					<img src="https://www.jqueryscript.net/images/Nice-Configuarable-Pie-Donut-Chart-with-jQuery-D3-js-d3pie.jpg" alt="" />
					{/* replace this with npm module for data visualization. create a pie chart w/ fake data just as placeholder, then come back later to add real data */}
				</section>
			</main>
		);
	}
}

export default SiteContent;
