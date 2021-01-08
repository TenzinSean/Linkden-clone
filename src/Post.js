import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Post.css";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from "./InputOption";
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
                <InputOption Icon={ChatIcon} title="comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post
