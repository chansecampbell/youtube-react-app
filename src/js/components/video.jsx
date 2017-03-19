'use strict';
import React from 'react';

/** This builds a Video component which takes an array of data */
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

/** If the state of detail is updated to true upon click, a rerender will be triggered and a single item will be built */
    buildDetail() {
        const url = "https://www.youtube.com/embed/" + this.state.video.snippet.resourceId.videoId;
        const date = new Date(this.state.video.snippet.publishedAt);
        const backMessage = "< Back to list of videos";
        const description = this.state.video.snippet.description ? this.state.video.snippet.description : "No description provided.";
        
        return (
            <div className="video-detail row">

                <div className="video-detail__top-info col-sm-12">
                    <div className="top-info__back" role="button" onClick={ () => this.selectVideo() }> { backMessage }</div>
                    <h3 className="top-info__title">{ this.state.video.snippet.title }</h3>
                    <div className="top-info__date">Published on {date.toDateString()}</div>
                </div>

                <div className="col-sm-6">
                    <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen className="video-detail__iframe"></iframe>
                </div>
                <div className="video-detail__btm-info col-sm-6">
                    <div className="btm-info__synopsis">{ description }</div>
                </div>

            </div>
        );  
    }

/** By default a list of items are built */
    buildPreviews() {
        return this.props.videos.map(video => {

            const date = new Date(video.snippet.publishedAt);
            const description = video.snippet.description ? video.snippet.description : "No description provided.";

            return (
                <div className="video-preview row" key={video.id} role="listitem">
                    
                    <div className="col-sm-6">
                        <img src={ video.snippet.thumbnails.medium.url }
                            className="video-preview__img"
                            alt="A preview thumbnail of the youtube video"
                            role="button"
                            onClick={ () => this.selectVideo(video) }/>
                    </div>

                    <div className="video-preview__info col-sm-6">
                        <h3 className="info__title" role="button" onClick={ () => this.selectVideo(video) }>
                            { video.snippet.title }
                        </h3>
                        <div className="info__date">Published on {date.toDateString()}</div>
                        <div className="info__synopsis">{ description }</div>
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