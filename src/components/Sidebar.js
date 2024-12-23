import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaHistorySolid } from "react-icons/lia";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { SiFireship } from "react-icons/si";
import { PiMusicNotesBold } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { GoTrophy } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
];

const sidebarItem1 = [
  {
    icons: <LiaHistorySolid size="24px" />,
    title: "History",
  },
  {
    icons: <CgPlayList size="24px" />,
    title: "Playlists",
  },
  {
    icons: <GoVideo size="24px" />,
    title: "Your videos",
  },
  {
    icons: <SlGraduation size="24px" />,
    title: "Your courses",
  },
  {
    icons: <MdOutlineWatchLater size="24px" />,
    title: "Watch Later",
  },
  {
    icons: <AiOutlineLike size="24px" />,
    title: "Like videos",
  },
];

const sidebarItem2 = [
  {
    icons: <SiFireship size="24px" />,
    title: "Trending",
  },
  {
    icons: <PiMusicNotesBold size="24px" />,
    title: "Music",
  },
  {
    icons: <SiYoutubegaming size="24px" />,
    title: "Gaming",
  },
  {
    icons: <ImNewspaper size="24px" />,
    title: "News",
  },
  {
    icons: <GoTrophy size="24px" />,
    title: "Sport",
  },
];

const sidebarItem3 = [
  {
    icons: <IoSettingsOutline size="24px" />,
    title: "Settings",
  },
  {
    icons: <MdOutlineOutlinedFlag size="24px" />,
    title: "Report history",
  },
  {
    icons: <MdOutlineHelpOutline size="24px" />,
    title: "Help",
  },
  {
    icons: <RiFeedbackLine size="24px" />,
    title: "Send feedback",
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <>
      <div
        className={` left-0 ${
          open ? "w-[20%]" : "w-[6%]"
        } p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden sticky `}
      >
        {sidebarItem.map((item, index) => {
          return (
            <div
              key={index}
              className="flex my-3 ml-2 h-10 rounded-lg  hover:bg-gray-100"
            >
              {item.icons}
              <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
            </div>
          );
        })}
        <hr></hr>
        <div className="flex my-3 ml-2 items-center h-10 rounded-lg  hover:bg-gray-100">
          {open ? (
            <div className="flex items-center  ">
              <p className="font-semibold text-xl">You</p>
              <div className="ml-5">
                <MdKeyboardArrowRight />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <CgProfile />
              <p>You</p>
            </div>
          )}
        </div>

        {open &&
          sidebarItem1.map((item, index) => {
            return (
              <div
                key={index}
                className="flex my-3 ml-2 h-8 rounded-lg  hover:bg-gray-100"
              >
                {item.icons}
                <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
              </div>
            );
          })}
        <div></div>
        <hr></hr>
        {open && <p className="font-bold text-xl h-10 p-3">Explore</p>}

        {open &&
          sidebarItem2.map((item, index) => {
            return (
              <div
                key={index}
                className="flex my-3 ml-2 h-8 rounded-lg  hover:bg-gray-100"
              >
                {item.icons}
                <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
              </div>
            );
          })}
        <hr />

        {open &&
          sidebarItem3.map((item, index) => {
            return (
              <div
                key={index}
                className="flex my-3 ml-2 h-8 rounded-lg  hover:bg-gray-100"
              >
                {item.icons}
                <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
              </div>
            );
          })}
        <hr />
        {open && <div className="p-3 ">
        <span className="text-xs font-bold text-gray-500 p-2 w-20">About</span>
        <span className="text-xs font-bold text-gray-500 p-2 w-20">Press</span>
        <span className="text-xs font-bold text-gray-500 p-2 w-20">Copyright</span>
        <span className="text-xs font-bold text-gray-500 p-2">Contact us</span>
        <span className="text-xs font-bold text-gray-500 p-2">Creator</span>
        <span className="text-xs font-bold text-gray-500 p-2">Advertise</span>
        <span className="text-xs font-bold text-gray-500 p-2">Developers</span>
        </div>}
        { open && <div className="p-3">

          <span className="text-xs font-bold text-gray-500 p-2">Terms</span>
          <span className="text-xs font-bold text-gray-500 p-2 ">Privacy</span>
          <span className="text-xs font-bold text-gray-500 p-2 ">
            Policy & Savety
          </span>
          <span className="text-xs font-bold text-gray-500 p-2">
            How YouTube works
          </span>
          <span className="text-xs font-bold text-gray-500 p-2">Test new features</span>
          <span className="text-xs font-bold text-gray-500 p-2">Advertise</span>
        </div>}

        {open && <div className="p-3 text-gray-400 text-xs">© 2024 Google LLC</div>}
      </div>
    </>
  );
};

export default Sidebar;
