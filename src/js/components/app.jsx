'use strict';
import React from 'react';
import Navbar from './navbar.jsx';
import Video from './video.jsx';
import ProfileCard from './profile-card.jsx';
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
        return (
            <div className="youtube-app">

                <Navbar title="Chanse's Youtube Playlist" />

                <div className="body container">
                    <div className="body--right col-md-3">
                        <ProfileCard name="Chanse Campbell"
                                    occupation="Web Developer"
                                    location="London, England"
                                    githubURL="https://github.com/chansecampbell/youtube-react-app" />
                    </div> 

                    <div className="body--left col-md-9 card card-2">
                        <Video videos={this.state.videos}/>
                    </div> 

                </div> 

            </div>
        );
    }
}

export default App;