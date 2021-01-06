import React from 'react';
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" 
                alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Tenzin Lehpel</h2>
                <h4>tenzin.jeunesse@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statNumber">2,545</div>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <div className="sidebar__statNumber">2,448</div>
                </div>
            </div>
            <div className="sidebar__botom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('develop')}

            </div>
        </div>
    )
}

export default Sidebar