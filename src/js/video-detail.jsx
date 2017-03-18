'use strict';
import React from 'react';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="video-detail">
                <div className="video-detail--wrapper">
                    <div className="video-detail__title">Sample Video Name</div>
                    <div className="video-detail__date">Sample Date</div>
                    <div className="video-detail__video col-sm-8"></div>
                    <div className="video-detail__info col-sm-4">
                        <div className="info__synopsis">Sample synopsis here</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;