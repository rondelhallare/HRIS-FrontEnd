import React from 'react'
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
// import Body from "./Components/Dashboard/Body";

 const SidebarData = [
    {
        title: 'Home',
        // path: <Body />,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'TimeLogs',
        path: '/timelogs',
        icon: <AiIcons.AiOutlineClockCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Department',
        path: '/department',
        icon: <FiIcons.FiLayers/>,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/team',
        icon: <FiIcons.FiClipboard />,
        cName: 'nav-text'
    },
    {
        title: 'NoticeBoard',
        path: '/noticeboard',
        icon: <FiIcons.FiCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <FiIcons.FiMail />,
        cName: 'nav-text'
    }
]

export default SidebarData 