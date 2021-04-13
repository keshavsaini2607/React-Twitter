import React, {useState} from 'react'
import FlareIcon from '@material-ui/icons/Flare';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './Main.css'
import NewTweet from './NewTweet';

const allPosts = [];

const Main = () => {

    const [newTweet, setNewTweet] = useState('');
    const [newPhoto, setNewPhoto] = useState('');
    
    // console.log("All posts", allPosts);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                console.log("image", reader.result);
                setNewPhoto(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const postNewTweet = () => {
        if(newTweet) {
            const newPost = {
                description: newTweet,
                photo: newPhoto ? newPhoto : "",
                isLiked: false
            }
            allPosts.push(newPost);
            
            setNewTweet('');
            setNewPhoto('')
        }else {
            alert("Please write first")
        }
    }

    return (
        <div className="main">
            <div className="main__header">
                <div className="header__main">
                    <span>Home</span>
                    <FlareIcon />
                </div>
                <div className="tweet__header">
                    <div className="tweet__avatar">
                        <AccountCircleIcon />
                    </div>
                    <div className="tweet__window">
                        <input type="text" onChange={e => setNewTweet(e.target.value)} value={newTweet} placeholder="What's Happening?" />
                        <div className="tweet__options">
                            <label htmlFor="upload__img"><CropOriginalIcon /></label>
                            <div>
                                <input type="file" id="upload__img" onChange={imageHandler} accept="image/x-png,image/gif,image/jpeg" />
                                {newPhoto && <CheckCircleIcon />}
                            </div>
                            <button onClick={postNewTweet}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newTweets__show">
            {allPosts.map(post => 
                <NewTweet text={post.description} imgFile={post.photo} />
            )}
                <NewTweet imgFile="https://cdn.pixabay.com/photo/2020/07/03/14/28/water-5366496_960_720.jpg" />
                <NewTweet imgFile="https://cdn.pixabay.com/photo/2018/03/26/18/51/plant-3263600_960_720.jpg" />
                <NewTweet imgFile="https://cdn.pixabay.com/photo/2020/01/09/19/24/bird-4753741_960_720.jpg" />
                <NewTweet imgFile="https://cdn.pixabay.com/photo/2020/09/04/18/23/street-5544630_960_720.jpg" />
                
            </div>
        </div>
    )
}

export default Main
