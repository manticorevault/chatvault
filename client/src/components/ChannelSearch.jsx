import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

// Import search icon
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
    // Define the query and the loading state
    const { query, setQuery } = useState("");
    const { loading, setLoading } = useState(false);

    // Function to pass the query and get chat channels
    const getChatChannels = async() => {
        try {
            // Fetch Channels
        } catch(error) {
            setQuery("")
        }
    }
    
    // Method to handle the search event
    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true)
        setQuery(event.target.value);
        getChatChannels(event.target.value);
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>

                <input
                    className="channel-search__input__text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch