import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const message = useSelector((store) => store.chat.message);
    const dispatch = useDispatch();

    useEffect(() => {
        // Set interval for generating and dispatching messages
        const timer = setInterval(() => {
            dispatch(setMessage({ name: generateRandomName(), message: generateRandomMessage(16) }));
        }, 1000);

        // Cleanup function to clear the interval
        return () => {
            clearInterval(timer);
        };

    }, [dispatch]); // Add dispatch to the dependency array

    return (
        <div className='px-4 py-1'>
            <div>
                {
                    message.map((item, idx) => {
                        return (
                            <ChatMessage key={idx} item={item} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default LiveChat;
