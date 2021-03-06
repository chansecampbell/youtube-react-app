import React from 'react';

/** This builds a Profile Card component which takes user inputted parameters to complete the card 
 * Possible props: name, occupation, location and githubURL
*/

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
        return (
            <div className="profile-card card card-1" role="personal-profile">
                <img src="./assets/images/headshot.jpg" className="profile-card__img" alt="A profile picture of the playlist owner" />
                <div>{ this.props.name }</div>
                <div><i className="fa fa-code-fork" aria-hidden="true"></i> { this.props.occupation }</div>
                <div><i className="fa fa-map-marker" aria-hidden="true"></i> { this.props.location }</div>
                <hr/>
                <div className="profile-card__icons">
                    <h3>View the code: </h3>
                    <a href={ this.props.githubURL } target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                </div>
                <hr/>
            </div>
        );
    }
}

export default ProfileCard;