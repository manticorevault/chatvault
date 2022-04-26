import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
// Import Cookies
import Cookies from "universal-cookie";

// Import Icons
import GlobeIcon from "../assets/globe.png"

// Import Components
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";


// Create Sidebar to display channels
const Sidebar = () => {
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={GlobeIcon} alt="Countries" width="30"/>
            </div>
        </div>
    </div>
}

const ChannelListContainer = () => {
    return (
        <div>
            ChannelListContainer
        </div>
    )
}

export default ChannelListContainer;