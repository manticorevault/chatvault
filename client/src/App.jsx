import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
// import Cookies from "universal-cookie";

// Import styles
import "./App.css";

// Import Components
import { 
    ChannelListContainer, 
    ChannelContainer,
    Auth } 
from "./components"

// Import the cookies and get the values
const cookies = new Cookies();

// Insert the Auth Token from the cookies
const authToken = cookies.get("token");

// Set up the apiKey 
const apiKey = process.env.STREAM_API_KEY

// Create an instance of a Stream Chat
const client = StreamChat.getInstance(apiKey)

// Run the authTokens and create a new user if it isn't created
if (authToken) {
    client.connectUser({
        id: cookies.get("userId"),
        name: cookies.get("username"),
        fullName: cookies.get("fullName"),
        image: cookies.get("avatarURL"),
        hashedPassword: cookies.get("hashedPassword"),
        phoneNumber: cookies.get("phoneNumber")
    }, authToken)
}

const App = () => {

    if (!authToken) return <Auth />

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