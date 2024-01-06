import React, { useState, useEffect } from 'react';

interface VideoPlayerProps {
    video: any;
    isLoop?: boolean;
}

const useIsMobile = () => {
    const [isMobile] = useState(window.innerWidth <= 768);

    return isMobile;

};


const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isLoop = true }) => {

    const isMobile = useIsMobile();

    const videoAttributes = () => {
        return isMobile ? { controls: true , style: { backgroundColor: 'rgba(100, 100, 100, 0.1)' }} : { autoPlay: true };
    };

    console.log(videoAttributes());

    return (

        <video loop={isLoop} muted preload='auto' {...videoAttributes()} >
            <source src={video} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
