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
	/* convert this to react
	const schemaVersion = '0.1';
	let data;

	if ( tmpSkip ) {
		// if ! supports web components, localstoage, etc, then show an error and return
		// make this overwrite .site-content instead of a popup
		alert( 'need upgrade, see happy browser' );
		//return;
	}

	if ( false ) {
		// load data from localstorage, or whatever is best, read up on the options
	} else {
		data = {
			'version'   : schemaVersion,
			'blocks'    : [],
			'templates' : []
		};
	}
	*/

	// replace all classnames with BEMish format, like gutenberg standards

	render() {
		return (
			<>
				<SiteHeader   />
				<SiteContent  />
				<SiteControls />
				<SiteFooter   />
			</>
		);
	}
}

export default App;
