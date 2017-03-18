'use strict';
import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <div className="nav--wrapper container">
                    <h3 className="nav__title col-sm-12">My Youtube Playlist</h3>
                </div>
            </div>
        );
    }
}

export default Navbar;