import React, { useState, useRef } from 'react'
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'
import './VideoCard.css'

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      // play
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className='videoCard'>
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className='videoCard__player'
        src={url}
        alt='IG reel video'
        loop
      ></video>
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  )
}

export default VideoCard
