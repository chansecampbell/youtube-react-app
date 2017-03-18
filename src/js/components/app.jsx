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
                    <div className="col-sm-9 card card-2">
                        <Video videos={this.state.videos}/>
                    </div> 

                    <div className="col-sm-3">
                        <div className="home__profile card card-2">
                            <img src="./src/assets/images/headshot.jpg" className="home__profile--img" />
                            <div>Chanse Campbell</div>
                            <div><i className="fa fa-code-fork" aria-hidden="true"></i> Web Developer</div>
                            <div><i className="fa fa-map-marker" aria-hidden="true"></i> London, England</div>
                            <hr/>
                            <div className="home__icons">
                                <a href="http://www.github.com/chansecampbell" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                                <a href="http://www.linkedin.com/in/chansecampbell" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                <a href="http://www.twitter.com/chansecampbell" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                                <a href="mailto:chansecampbell@gmail.com?subject=Enquiry" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </div>
                            <hr/>
                        </div>
                    </div> 

                </div> 
            </div>
        );
    }
}

export default App;