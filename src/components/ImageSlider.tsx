import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRef, useState, useEffect } from "react";
import image1 from "/public/cinklogo.jpg";

const ImageSlider = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoPlayInterval, setAutoPlayInterval] = useState(3000);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setAutoPlayInterval(3000); // Reset to default interval after video ends
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      setAutoPlayInterval(videoRef.current.duration * 1000); // Set interval to video duration
      setIsVideoPlaying(true);
    }
  };

  useEffect(() => {
    if (isVideoPlaying) {
      videoRef.current?.play();
    }
  }, [isVideoPlaying]);

  return (
    <div className="relative top-0 left-0 w-full h-auto lg:h-screen">
      <div className="w-full h-full">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={autoPlayInterval}
          selectedItem={isVideoPlaying ? 1 : undefined}
        >
          <div className="relative h-auto lg:h-screen">
            <img src={image1.src} alt="Image 1" className="object-cover h-full w-full" />
          </div>
          <div className="relative h-auto lg:h-screen">
            <video
              ref={videoRef}
              className="object-cover h-full w-full"
              autoPlay
              loop={false}
              muted
              onEnded={handleVideoEnd}
              onPlay={handleVideoPlay}
              controls
            >
              <source src="/shopvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
