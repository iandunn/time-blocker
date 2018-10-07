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

/*
autocomplete task name based on existing ones
probably gonna wait an npm module for the calendar, and maybe moment.js too
use localstorage probably, but research options first

 */

( function() {
	'use strict';

	let timeBlocks = {};

	const app = {
		// jsdoc
		init : function() {
			// const template = _.template( 'time-block-row', timeBlocks );
			// document.getElementsByClassName(  )
		},

		saveTemplate : function() {
		},

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
		console.log( exception );
		// if console, etc. check quick nav interface to see what it does
	}
}() );
