import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); 

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();


    useEffect(() => {
   const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
    }else{
        getSearchSuggestions();
    }
},200);

    return () => {clearTimeout(timer);}
    },[searchQuery]);

    const getSearchSuggestions = async ()=> {
        console.log("Api call for search suggestions "+ searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({ [searchQuery]: json[1] }));

    }

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
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"
        value={searchQuery } 
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}

        placeholder="Search"/>
        <button className="border border-gray-400 p-2 rounded-r-full px-4 py-2 bg-gray-100">🔍</button>
    </div>
    {showSuggestions && (
        <div className="fixed bg-white w-100 shadow-lg rounded-lg p-5 mt-12 ml-60 border border-gray-100">
            <ul>
                {suggestions.map((s) => (
                    <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
                ))}
            </ul>

        </div>
    )}
    <div className="flex col-span-1">
        <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"/>
    </div>
    </div>
  )
}

export default Head