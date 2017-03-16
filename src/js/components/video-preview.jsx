'use strict';
import React from 'react';

class VideoPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.value);
        return (
            <div className="video-preview">
                <div className="video-preview--wrapper container">
                    <div className="video-preview__img col-sm-8"></div>
                    <div className="video-preview__info col-sm-4">
                        <div className="info__title">{ this.props.name }</div>
                        <div className="info__date">Sample Date</div>
                        <div className="info__synopsis">Sample synopsis here</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPreview;