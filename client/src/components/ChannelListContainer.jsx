import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
// Import Cookies
import Cookies from "universal-cookie";

// Import Components
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

// Import Icons
import GlobeIcon from "../assets/planet.png"
import LogoutIcon from "../assets/logout.png"

// Create Sidebar Functional Component
// with instant return to display channels
const Sidebar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={GlobeIcon} alt="Countries" width="30"/>
            </div>
        </div>

        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>
    </div>
)

const LogoHeader = () => (
    <div className="channel-list__header">
        <p className="chanel-list__header__text">
            Nomad Vault
        </p>
    </div>
)


const ChannelListContainer = () => {
    return (
        <>
            <Sidebar />
            <div className="channel-list__list__wrapper">
                <LogoHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {... listProps}
                            type="team"
                        />
                    )}

                    Preview={( previewProps ) => (
                        <TeamChannelPreview 
                            { ...previewProps }
                            type="team"
                        />
                    )}
                />

                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {... listProps}
                            type="messaging"
                        />
                    )}

                    Preview={( previewProps ) => (
                        <TeamChannelPreview 
                            { ...previewProps }
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer;