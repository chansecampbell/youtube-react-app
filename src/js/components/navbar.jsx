import React from 'react';

/** This creates a simple Navbar that could be used across all pages, were more to be made.
 * It takes a custom title prop to be displayed beside the logo
 */
class Navbar extends React.Component {
	constructor(props) {
		super(props);
    }

	render() {
        return (
            <div className="nav card card-2" role="navigation">
                <div className="nav--wrapper container">
                    <img src="./assets/images/youtube-logo.png" className="nav__img" alt="Picture of the youtube logo"/>
                    <span className="nav__title">{ this.props.title }</span>
                </div>
            </div>
        );
    }
}

export default Navbar;