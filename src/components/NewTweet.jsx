import React,{useState} from 'react'
import './NewTweet.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const NewTweet = ({imgFile, text}) => {
    const [isLiked, setIsLiked] = useState(false);
    console.log("LIked", isLiked);
 
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (
        <div className="newTweet">
            <div className="tweet__avatar">
                <AccountCircleIcon />
            </div>
            <div className="tweet__content">
                <div className="content__up">
                    <span className="user__name">
                        Demo User
                    </span>
                    <span className="user__id">
                        @DemoUser234
                    </span>
                    <span className="tweet__time">
                        {time ? time : "24min"}am
                    </span>
                </div>
                <div className="content__desc">
                    <span>
                       {text ? text : "Demo data description of the tweet this twitter is made using react js"}
                    </span>
                    <div className="content__img">
                        <img src={imgFile} alt=""/>
                    </div>
                    <div className="tweet__like">
                        {isLiked ? <FavoriteIcon className="liked" onClick={() => setIsLiked(!isLiked)} /> : <FavoriteBorderIcon onClick={() => setIsLiked(!isLiked)} />}
                        <span>{isLiked ? '1' : '0'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTweet
