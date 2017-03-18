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
        const backMessage = "< Back to list of videos";
        return (
            <div className="video-detail row">

                <div className="video-detail__top-info col-sm-12">
                    <div className="top-info__back" onClick={ () => this.selectVideo() }> { backMessage }</div>
                    <h3 className="top-info__title">{ this.state.video.snippet.title }</h3>
                    <div className="top-info__date">{ this.state.video.snippet.publishedAt }</div>
                </div>

                <div className="col-sm-6">
                    <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen className="video-detail__iframe"></iframe>
                </div>
                <div className="video-detail__btm-info col-sm-6">
                    <div className="btm-info__synopsis">{ this.state.video.snippet.description }</div>
                </div>

            </div>
        );  
    }

    buildPreviews() {
        return this.props.videos.map(video => {
            return (
                <div className="video-preview row" key={video.id}>
                    
                    <div className="col-sm-6">
                        <img src={ video.snippet.thumbnails.medium.url }
                            className="video-preview__img"
                            onClick={ () => this.selectVideo(video) }/>
                    </div>

                    <div className="video-preview__info col-sm-6">
                        <h3 className="info__title" onClick={ () => this.selectVideo(video) }>
                            { video.snippet.title }
                        </h3>
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