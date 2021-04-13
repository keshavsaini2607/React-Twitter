import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './LeftBar.css'

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="leftLogo">
                <TwitterIcon />
            </div>
            <div className="leftMenu">
                <span className="active">
                    <HomeIcon />
                    Home
                </span>
                <span>
                    <NotificationsIcon />
                    Notification
                </span>
                <span>
                    <MailOutlineIcon />
                    Messages
                </span>
                <span>
                    <BookmarkBorderIcon />
                    Bookmarks
                </span>
                <span>
                    <PersonIcon />
                    Profile
                </span>
            </div>
            <div className="tweetButton">
                <button>Tweet</button>
            </div>
        </div>
    )
}

export default LeftBar

