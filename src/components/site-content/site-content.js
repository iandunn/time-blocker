import React, { Component } from 'react';
import ReactTable           from 'react-table';
import PropTypes            from 'prop-types';

import './site-content.css';
import 'react-table/react-table.css'
	// maybe don't need this since want to blend in with site styles + keep page size small?


class SiteContent extends Component {
	static propTypes = {
		timeBlocks: PropTypes.object
	};

	static defaultProps = {
		timeBlocks: {}
	};

	render( props ) {

		// modularize this into smaller components
		// need to hook up input fields on onChange handlers so they update after input
			// then remove readOnly values
			// isn't there a way to do that automatically instead?


		// look at that react table thing you built for wcpt, to see if any best practices want to use here

		// refresh your memory on the lifecycle and when you might want to hook into it

		const timeBlockColumns = [
			// review https://www.npmjs.com/package/react-table#columns for relevant info

			{
				Header   : 'Start Time',
				accessor : 'startTime' // String-based value accessors!
			},
			{
				Header   : 'End Time',
				accessor : 'endTime',
				//Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
			},
			{
				Header   : 'Task',
				accessor : 'taskId'
				//id: 'friendName', // Required because our accessor is not a string
				//accessor: d => d.friend.name // Custom value accessors!
			},
			//{
			//	Header: props => <span>Friend Age</span>, // Custom header components!
			//	accessor: 'friend.age'
			//}

			// "NOTE If your data has a field/key with a dot (.) you will need to supply a custom accessor." -- https://www.npmjs.com/package/react-table#accessors
		];

		//const data = [
		//	{
		//		name   : 'Tanner Linsley',
		//		age    : 26,
		//		friend : {
		//			name : 'Jason Maurer',
		//			age  : 23,
		//		}
		//	}
		//];

		return (
			<main className="site-content">
				<section className="time-block-management">
					<h2>Time Blocks</h2>

					<ReactTable
						data            = { this.props.timeBlocks['2018-10-10'] }
						columns         = { timeBlockColumns }
						showPagination  = { false }
						defaultPageSize = { this.props.timeBlocks['2018-10-10'].length } // better way of saying "all" ?
						filterable      = { true }  // only need for task column? maybe not needed at all

						// shorting icons are hidden, why?

						// default sort column = start tiem

						// Can use `resolveData` if need to massage data before it's displayed -- https://www.npmjs.com/package/react-table#data
						// see what other props wanna pass -- https://www.npmjs.com/package/react-table#props

						// style the table, but probably not with extra package to install, since it should blend in to site's styles
							// make height adjust to # of rows automatically - fixed by setting defaultPageSize dynamically, but that may not be final option

						// hook onUpdate callbacks to the input fields to update the data on input
					/>

					{/* replace this with npm module for table sorting
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
							* /}
						</tbody>
					</table>
					*/}

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
					{/* replace this with npm module for data visualization. create a pie chart w/ fake data just as placeholder, then come back later to add real data
					 https://www.npmjs.com/package/react-minimal-pie-chart won't work b/c it don't support text labels for the pie pieces (wtf?)
					 need to look at the options again and pick a new one, but keep it lightweight
					 */}
				</section>
			</main>
		);
	}
}

export default SiteContent;
