'use strict';
import React from 'react';
import Navbar from '../components/navbar.jsx';

class HomepageView extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div className="homepage">
                <Navbar/>

                <div className="body container">

                </div>
            </div>
        );
    }
}

export default HomepageView;