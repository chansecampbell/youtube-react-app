'use strict';
import React from 'react';
import Navbar from '../components/navbar.jsx';
import VideoPreview from '../components/video-preview.jsx';
import VideoDetail from '../components/video-detail.jsx';
// import videoData from '../services/data.js';

class HomepageView extends React.Component {
    constructor(props) {
        super(props);
        // this.data = videoData.getAll();
    }   

    render() {
        // console.log(this.data);
        return (
            <div className="homepage">
                <Navbar/>

                <div className="body container">
                    <VideoPreview />
                </div> 
            </div>
        );
    }
}

export default HomepageView;