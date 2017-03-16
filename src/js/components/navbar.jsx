'use strict';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar--wrapper container">
                    <div className="navbar__title col-sm-4">My Youtube Playlist</div>
                    <div className="navbar__links col-sm-8">
                        <span className="links--text">1</span>
                        <span className="links--text">2</span>
                        <span className="links--text">3</span>
                        <span className="links--text">4</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;