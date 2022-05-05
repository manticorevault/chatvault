import React from "react";

import { AddChannel } from "../assets";

const TeamChannelList = 
        ({  children, 
            error = false, 
            loading, 
            type }) 
        => {

    if (error) {
        return type === "team" ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    There was a connection error! Wait a minute and try again!
                </p>
            </div>
        ) : null;
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    { type === "team" ? "Channels" : "Message" } Loading...
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header_title">
                    { type === "team" ? "Channels" : "Direct Message" } Loading...
                </p>
            </div>

            { children }
        </div>
    )
}

export default TeamChannelList