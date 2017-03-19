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
        return (
            <div className="youtube-app">

                <Navbar/>

                <div className="body container">

                    <div className="col-md-9 card card-2">
                        <Video videos={this.state.videos}/>
                    </div> 

                    <div className="body--left col-md-3">
                        <div className="left__profile card card-2" role="personal-profile">
                            <img src="./src/assets/images/headshot.jpg" className="left__profile--img" alt="A profile picture of Chanse Campbell, the owner of the playlist"/>
                            <div>Chanse Campbell</div>
                            <div><i className="fa fa-code-fork" aria-hidden="true"></i> Web Developer</div>
                            <div><i className="fa fa-map-marker" aria-hidden="true"></i> London, England</div>
                            <hr/>
                            <div className="left__icons">
                                <h3>View the code: </h3>
                                <a href="https://github.com/chansecampbell/youtube-react-app" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
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