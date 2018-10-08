// look into web components
// try to find a modern way that doesn't require a fraking build step
	// maybe that "HEC/HEX" article on medium
		// es6 is mostly supported natively by browsers, and has template literals
//Can write web components without a framework or build tool?
//	If so, start there

// look into PWA features like offline and push notifications
	// maybe use framework, but probably better to not
	// https://developer.mozilla.org/en-US/docs/Web/Manifest
	// https://developers.google.com/web/fundamentals/web-app-manifest/

// detect if required features available, and abort if they're not
	// or maybe use polyfill. have to explicitly add it or does modernizer do that automatically?
	// https://philipwalton.com/articles/loading-polyfills-only-when-needed/

// use es6 natively. but double check that modern browsers support all the things you use

/*
autocomplete task name based on existing ones
probably gonna wait an npm module for the calendar, and maybe moment.js too
use localstorage probably, but research options first

 */

( function() {
	'use strict';

	const schemaVersion = '0.1';
	let data;

	const app = {
		// jsdoc
		init : function() {
			const tmpSkip = false;  // remove this when the condition stubs below are replaced

			if ( tmpSkip ) {
				// if ! supports web components, localstoage, etc, then show an error and return
				// make this overwrite .site-content instead of a popup
				alert( 'need upgrade, see happy browser' );
				return;
			}

			if ( tmpSkip ) {
				// load data from localstorage, or whatever is best, read up on the options
			} else {
				data = {
					'version' : schemaVersion,
					'blocks'  : []
				};
			}

			// const template = _.template( 'time-block-row', data.blocks );
			// document.getElementsByClassName(  )

			// use try/catch for anything async
		},

		// jsdoc
		saveTemplate : function() {
		},

		// jsdoc
		loadTemplate : function() {
			// warn that will override current blocks
		},

		/**
		 * Log a message to the console
		 *
		 * @param {*} error
		 */
		log : function( error ) {
			if ( ! window.console ) {
				return;
			}

			if ( 'string' === typeof error ) {
				console.log( 'Time Blocker: ' + error );
			} else {
				console.log( 'Time Blocker: ', error );
			}
		}
	};

	try {
		app.init();
	} catch( exception ) {
		app.log( exception );
	}
}() );
