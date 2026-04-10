import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
    <div className="flex col-span-1">
        <img 
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer" alt="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"/>
        <a href="/">
        <img className="h-8 mx-2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/3840px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
        </a>
    </div>
    <div className="flex col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search"/>
        <button className="border border-gray-400 p-2 rounded-r-full px-4 py-2 bg-gray-100">🔍</button>
    </div>
    <div className="flex col-span-1">
        <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"/>
    </div>
    </div>
  )
}

export default Head