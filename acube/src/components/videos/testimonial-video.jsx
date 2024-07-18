import React, { useState } from "react";
import thumbnail from "../../images/video-thumbnail.webp";
import testimonialVideo from "../../videos/client-testimonial.mp4";
import "./videos.css";

const TestimonialVideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className="video-container p-5">
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

export default TestimonialVideoPlayer;
