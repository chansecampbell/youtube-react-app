'use strict';
import React from 'react';
import Navbar from '../components/navbar.jsx';
import VideoPreview from '../components/video-preview.jsx';
import VideoDetail from '../components/video-detail.jsx';
import axios from 'axios';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    } 

    componentDidMount() {
        this.getVideos();
    }  

    getVideos() {
        return axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw').then(res => {
            this.setState({ videos: res.data.items });
        });
    }

    render() {
        // if(this.state.videos.length > 1) {
        //     return <div>Nothing to see.</div>
        // } 
        return (
            <div className="homepage">
                <Navbar/>

                <div className="body container">
                    <VideoPreview videos={this.state.videos}/>
                </div>  
            </div>
        );
    }
}

export default Homepage;