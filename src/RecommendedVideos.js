import React from 'react'
import './recommendedVideos.css'
// import VideoCard from './VideoCard'
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

import { useEffect } from 'react';
import { useRef } from 'react';

function  RecommendedVideos() {
    const ref = useRef(null);
    useEffect(() => {
  ref.current?.addEventListener("timeupdate", () => {
    console.log(ref.current?.currentTime);
  });
}, []);

  return (
    <div className='recommendedVideos'>
         <h2>Recommended</h2>
         <div className="recommendedVideos__videos">


             <Player  
            src={[
              {
                quality: "Full HD",
                url:
                  "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4",
              },
              {
                quality: 720,
                url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4",
              },
              {
                quality: 480,
                url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4",
              },
            ]}
            subtitles={[
              {
                lang: "en",
                language: "English",
                url:
                  "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt",
              },
              {
                lang: "fr",
                language: "French",
                url:
                  "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt",
              },
            ]}
            poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
            
          /> 
       
       </div>
    </div>
  )
}

export default  RecommendedVideos