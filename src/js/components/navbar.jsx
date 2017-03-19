'use strict';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav card card-2" role="navigation">
                <div className="nav--wrapper container">
                    <img src="./src/assets/images/youtube-logo.png" className="nav__img" alt="Picture of the youtube logo"/>
                    {/*<span className="nav__title">My Youtube Playlist</span>*/}
                </div>
            </div>
        );
    }
}

export default Navbar;