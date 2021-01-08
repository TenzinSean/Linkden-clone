import React, { useState } from 'react';
import "./Feed.css";
import Post from "./Post.js";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    const [posts, setPosts] =  useState([]);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption 
                        Icon={ImageIcon} 
                        title="Photo" 
                        color="#78b5f9" 
                    />
                    <InputOption 
                        Icon={SubscriptionsIcon} 
                        title="Video" 
                        color="#E7A33E" 
                    />
                      <InputOption 
                        Icon={EventNoteIcon} 
                        title="Event" 
                        color="#" 
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon} 
                        title="Write article" 
                        color="#7FC15E"
                    />
                </div>
            </div>
            
            {posts.map((post) => 
                <Post />
            )}
            <Post 
                name="Tenzin Sean" 
                description="This is a test" 
                message="Wow this worked"
            />
        </div>
    )
}

export default Feed;
