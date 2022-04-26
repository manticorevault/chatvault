import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
// import Cookies from "universal-cookie";

// Import styles
import "./App.css";

// Import Components
import { 
    ChannelListContainer, 
    ChannelContainer } 
from "./components"

const apiKey = process.env.STREAM_API_KEY

// Create an instance of a Stream Chat
const client = StreamChat.getInstance(apiKey)

const App = () => {
    return (
        <div className="app__wrapper">
            <Chat client={ client } theme="team dark">
                <ChannelListContainer 
                
                />

                <ChannelContainer 
                
                />
            </Chat>
        </div>
    );
}

export default App;