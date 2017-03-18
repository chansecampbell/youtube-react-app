'use strict';
import React from 'react';

class VideoPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: false,
            video: Object()
        }
    }

    selectVideo(video) {
        this.setState({
            detail: !this.state.detail,
            video: video || Object()
        });
    }

    buildDetail() {
        const url = "https://www.youtube.com/embed/" + this.state.video.snippet.resourceId.videoId;
        return (
            <div className="video-detail">
                <div className="video-detail--wrapper">
                    <div onClick={ () => this.selectVideo() }>Back to list of videos</div>
                    <div className="video-detail__title">{ this.state.video.snippet.title }</div>
                    <div className="video-detail__date">{ this.state.video.snippet.publishedAt }</div>
                    <div className="video-detail__video">
                        <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <div className="video-detail__info">
                        <h2 className="info__synopsis">{ this.state.video.snippet.description }</h2>
                    </div>
                </div> 
            </div>
        );  
    }

    buildPreviews() {
        return this.props.videos.map(video => {
            console.log(video);
            return (
                <div className="video-preview card card-2 row" key={video.id}>

                    <img src={ video.snippet.thumbnails.medium.url }
                        className="video-preview__img col-sm-8"
                        onClick={ () => this.selectVideo(video) }/>

                    <div className="video-preview__info col-sm-4">
                        <h2 className="info__title" onClick={ () => this.selectVideo(video) }>
                            { video.snippet.title }
                        </h2>
                        <div className="info__date">Published on { video.snippet.publishedAt }</div>
                        <div className="info__synopsis">{ video.snippet.description }</div>
                    </div>

                </div>
            );
        });
    }

    render() {
        return (
            <div className="video--wrapper">
                { !this.state.detail ? this.buildPreviews() : this.buildDetail() }
            </div>
        );
    }
}

export default VideoPreview;