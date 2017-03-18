'use strict';
import React from 'react';
import Navbar from './navbar.jsx';
import Video from './video.jsx';
import axios from 'axios';

class App extends React.Component {
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
            <div className="youtube-app">
                <Navbar/>
                <div className="body container">
                    <div className="col-sm-12">
                        <Video videos={this.state.videos}/>
                    </div>  
                </div>
            </div>
        );
    }
}

export default App;