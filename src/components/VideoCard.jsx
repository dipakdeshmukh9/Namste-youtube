import React from 'react'

const VideoCard = ({info}) => {

    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url || thumbnails.default.url} alt="thumbnail" />
      <h3 className="font-bold py-2">{title}</h3>
      <p>Channel: {channelTitle}</p>
      <p>Views: {viewCount}</p>
    </div>
  )
}

export default VideoCard;