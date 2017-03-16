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
                    <div className="navbar__title col-sm-12">My Youtube Playlist</div>
                </div>
            </div>
        );
    }
}

export default Navbar;