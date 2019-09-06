import React from "react"

const Video = ({ videoSrcURL, videoTitle, videoPoster, ...props }) => (
  <div className="video">
    <video id=""
           controls=""
           preload="none"
           poster={videoPoster}
           title={videoTitle}
    >
      <source src={videoSrcURL}
              type="video/mp4"/>
    </video>
    {/*<iframe*/}
    {/*  src={videoSrcURL}*/}
    {/*  title={videoTitle}*/}
    {/*  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
    {/*  frameBorder="0"*/}
    {/*  webkitallowfullscreen="true"*/}
    {/*  mozallowfullscreen="true"*/}
    {/*  allowFullScreen*/}
    {/*/>*/}
  </div>
)

export default Video