import React, { useState } from "react";
import testimonialVideo from "../../videos/client-testimonial.mp4";
import thumbnail from '../../images/office-thumbnail.webp'
import "./videos.css";

const AcubeIntroVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className="video-container p-5 acube-video">
            {isPlaying ? (
                <video width="100%" height="auto" controls autoPlay>
                    <source src={testimonialVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    loading="lazy"
                    className="video-thumbnail"
                    onClick={handlePlayVideo}
                />
            )}
        </div>
    );
};

export default AcubeIntroVideo;
