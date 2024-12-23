import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Avatar from "react-avatar";
import API_KEY from '../constant/youtube';

const VideoCart = ({ item }) => {
    const [ytIcon, setYtIcon] = useState("");
    const [loading, setLoading] = useState(true);  // Track loading state
    const [error, setError] = useState(null); // Track error state

    const getYoutubeChannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
            setLoading(false);  // Set loading to false once the data is fetched
        } catch (error) {
            console.error(error);
            setError('Failed to load channel icon');
            setLoading(false);
        }
    };

    useEffect(() => {
        getYoutubeChannelName();
    }, [item]);  // Add item to dependency array to rerun effect when item changes

    return (
        <div className='w-94 cursor-pointer my-2'>
            <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt="ytvideo" />
            <div>
                <div className='flex mt-2'>
                    {/* Show a default avatar or loading spinner if data is loading */}
                    <Avatar src={ytIcon || "https://example.com/default-avatar.png"} size={35} round={true} />
                    <div className='ml-2'>
                        <h1 className='font-bold'>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
                    </div>
                </div>
                {/* Show an error message if the API call fails */}
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
        </div>
    );
}

export default VideoCart;
