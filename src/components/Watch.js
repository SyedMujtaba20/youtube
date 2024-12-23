import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../constant/youtube";
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
      setSingleVideo(null); // Optionally set an error state to handle UI
    }
  };

  const sendMessage = () => {
    if (input.trim()) {
      dispatch(setMessage({ name: "Patel", message: input }));
      setInput("");
    }
  };

  useEffect(() => {
    if (videoId) {
      getSingleVideo();
    }
  }, [videoId]); // Add videoId as a dependency to re-fetch data when it changes

  return (
    <div className="w-full">
      <div className="flex ml-4 w-full mt-2">
        <div className="flex w-[88%]">
          {singleVideo ? (
            <div>
              <iframe
                width="900"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h1 className="font-bold mt-2 text-lg">
                {singleVideo?.snippet?.title}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-[35%]">
                  <div className="flex">
                    <Avatar
                      src={singleVideo?.snippet?.thumbnails?.high?.url}
                      size={35}
                      round={true}
                    />
                    <h1 className="font-bold ml-2">
                      {singleVideo?.snippet?.channelTitle}
                    </h1>
                  </div>
                  <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center w-[40%] justify-between mt-2">
                  <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                    <AiOutlineLike size="20px" className="mr-5" />
                    <AiOutlineDislike size="20px" />
                  </div>
                  <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                    <PiShareFatLight size="20px" className="mr-2" />
                    <span>Share</span>
                  </div>
                  <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
                    <GoDownload />
                    <span>Download</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">Loading video...</div>
          )}
          
          <div className="w-full border border-gray-300 ml-8 rounded-lg h-fit p-4">
            <div className="flex justify-between items-center">
              <h1>Top Chat</h1>
              <BsThreeDotsVertical />
            </div>
            <div className="overflow-y-auto h-[28rem] flex flex-col-reverse">
              <LiveChat />
            </div>

            <div className="flex items-center justify-between border-t p-2">
              <div className="flex items-center w-[90%]">
                <div>
                  <Avatar
                    src="https://imgcdn.stablediffusionweb.com/2024/3/24/17ee935b-c63a-4374-8fc3-91b2559e02f2.jpg"
                    size={35}
                    round={true}
                  />
                </div>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border-b border-gray-300 outline-none ml-2"
                  type="text"
                  placeholder="Send message..."
                />
                <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
                  <LuSendHorizonal onClick={sendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-sm text-black pt-3 pb-10"
        dangerouslySetInnerHTML={{
          __html: singleVideo?.snippet?.description
            ?.replace(/\n/g, "<br>")
            .replace(/\s+/g, " ")
            .trim(),
        }}
      ></div>
    </div>
  );
};

export default Watch;
