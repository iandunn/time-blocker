import React, { Component } from 'react';

/*
 * CRA will probably add Normalize.css in the future. If they do, then remove this.
 * @link https://github.com/facebook/create-react-app/issues/2273
 */
import 'normalize.css/normalize.css';
import './boilerplate.css';
import './app-root.css';

// import jquery from npm
	// wait until actually need it, though
	// leave note to remove ^ if not end up using
	// don't bother trying to load from cdn w/ fallback to local. too much work


import SiteHeader   from '../site-header/site-header.js';
import SiteContent  from '../site-content/site-content.js';
import SiteControls from '../site-controls/site-controls.js';
import SiteFooter   from '../site-footer/site-footer.js';


class App extends Component {


	// replace all classnames with BEMish format, like gutenberg standards

	render() {
		// this probably isn't the right way/place to declare these
		const schemaVersion = '0.1';
		let data;
		// maybe see if it'd make sense to use something like redux here, but a simpler alternative. mobx, future-fetcher?

		//if ( false ) {
		//	// if ! supports web components, localstoage, etc, then show an error and return
		//	// make this overwrite .site-content instead of a popup
		//	alert( 'need upgrade, see happy browser' );
		//	//return;
		//}
		// probably move this to the individual components that use those features

		if ( false ) {
			// load data from localstorage, or whatever is best, read up on the options
		} else {
			data = {
				'version'    : schemaVersion,
				'blocks'     : {},
				'templates'  : [],
				'tasks'      : [],
				'categories' : [],

				// need to store timezone?
			};
		}

		// tmp
		data.tasks[0] = {
			'name': 'Foo',
			'categoryIds': [ 1 ]
		};
		data.tasks[1] = {
			'name': 'Bar',
			'categoryIds': [ 2 ]
		};

		data.blocks = {
			'2018-10-09' : [
				{
					'startTime' : 1,
					'endTime'   : 2,
					'taskId'    : 0
				},
				{
					'startTime' : 3,
					'endTime'   : 4,
					'taskId'    : 1
				}
			],
			'2018-10-10' : [
				{
					'startTime' : 1,
					'endTime'   : 2,
					'taskId'    : 0
				},
				{
					'startTime' : 3,
					'endTime'   : 4,
					'taskId'    : 1
				}
			],
		};

		return (
			<>
				<SiteHeader   />

				<SiteContent
					timeBlocks={ data.blocks }
				/>

				<SiteControls />
				<SiteFooter   />
			</>
		);
	}
}

export default App;
