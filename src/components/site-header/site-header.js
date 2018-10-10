import React, { Component } from 'react';

import './site-header.css';

class SiteHeader extends Component {
	render() {
		/*
		document somewhere that intentionally using png for favicon even though ios doesn't support it, becuase ios is stupid for not supporting it
		shouldn't have to have duplicate icons in different formats for favicon/apple icon/manifest icon

		use proper html boilerplate - underscore or html5 boilerplate, probably lattter since more js app focused and exposure to something new
		should be able to edit everything with keyboard


		add labels to form inputs. how to do proper a11y when don't want extra label for minute and am/pm? screen-reader-text?
		support "00" in minutes

		is it possible to tell browser to not display the `type=number` up/down controls? just clutters it up.
			maybe just have a single input field for hour/minute/period and use a js library to parse that into a timestamp?
			probably better ux
		*/

		return (
			<header className="site-header">
				{/* logo.png lives in the public folder because it's also used for the favicon */}
				{/*
				maybe don't need this at all. if keep it, style is so it's unobtrusive and doesn't make the header taller
				<img src={process.env.PUBLIC_URL + '/logo.png'} className="App-logo" alt="logo" />
				*/}

				<h1>Time Blocker</h1>
			</header>
		);
	}
}

export default SiteHeader;
