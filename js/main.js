// look into web components
// try to find a modern way that doesn't require a fraking build step
	// maybe that "HEC/HEX" article on medium
		// es6 is mostly supported natively by browsers, and has template literals
//Can write web components without a framework or build tool?
//	If so, start there
// yup, you can. woot.
// might not really even need to componentize everything, though. just using <template> might be enough.
	// definitely worth it for a large app like calypso or gutenberg, but maybe not for something small and simple like this
	// although might still be a good idea just to learn it

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
	Local storage limit? Need to delete tasks when getting close? Warn to backup first

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
					'version'   : schemaVersion,
					'blocks'    : [],
					'templates' : []
				};
			}

			// const template = _.template( 'time-block-row', data.blocks );
			// document.getElementsByClassName(  )

			// use try/catch for anything async



			//
			//customElements.define( 'my-paragraph',
			//	class extends HTMLElement {
			//		constructor() {
			//			super();
			//
			//			const template = document.getElementById( 'my-paragraph' );
			//			const templateContent = template.content;
			//
			//			this.attachShadow( { mode: 'open' } ).appendChild(
			//				templateContent.cloneNode( true )
			//			);
			//		}
			//	}
			//);
			//
			//const slottedSpan = document.querySelector( 'my-paragraph span' );
			//
			//console.log( slottedSpan.assignedSlot );
			//console.log( slottedSpan.slot );




			let template        = document.getElementById( 'my-simple-paragraph' );
			//let templateContent = template.content;
			console.log( template );
			console.log( template.content );

			//const timeBlockContainers = document.getElementsByClassName( 'time-block-rows' );
			//timeBlockContainers[0].innerHTML = template.content;




			// hmmmm, i wonder if this isn't really waht they were made for?
			// maybe just use underscorejs templates?
			// or maybe use html in your js like https://codepen.io/learnwebcode/pen/eyZMyp
				// but that's fugly. at least jsx lets you keep syntax highlighting
				// can you adapt it so that the html is pulled from a <template> element though?
				// but at that point you're really just re-creating underscorejs.tempate from scratch, aren't you?
			// i dunno, it's seeming like all i really need is underscorejs.template
				// what else does something like react provide here?
				// shadow dom - don't need w/ something small like this
				// unidirectional data flow / render stateless based on data - can do that myself easily in this situation, just like 5ftf prototype
				// automatically binding templates to the data they're derived from - nice, but can easily do myself with something small like this
			// maybe you should even use backbone for collections and models? that's not really actively maintained though is it?
				// https://www.reddit.com/r/javascript/comments/781uqv/what_is_obsolete_about_backbonejs/doqjr3o/
				// ok, yeah, now i'm remembering why backbone kind of sucks too
			// maybe try again to get <template> and <slot> working the way you want before going to underscorejs, though.
				// it'd be nice to avoid a big fat library for something you could do natively

			// ok, yeah, feeling like either figure out how to use <template> and dynamically populate <slot> or whatever via js
			// or just use underscore templates and do everything else from scratch
				// maybe that's reinventing the wheel a bit, but avoiding the build step and all that crap feels like it's worth it
			// or maybe re-consider Vue
				// there are some limitations without the build step, but maybe that's ok? learn more about what they are and how much they'd affect something like this
				// https://markus.oberlehner.net/blog/goodbye-webpack-building-vue-applications-without-webpack/

			// sigh. it's not worth swimming upstream. just use `create-react-app` and to learn to love the bomb.



			// todo whatever you end up with, make sure it's not vulnerable to xss
		},

		// jsdoc
		saveTemplate : function() {
		},

		// jsdoc
		loadTemplate : function() {
			// if current day has anything in it, warn that will proceding will override current blocks
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
