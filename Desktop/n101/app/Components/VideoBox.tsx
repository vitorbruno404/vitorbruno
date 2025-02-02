import { useDaily, useVideoTrack } from "@daily-co/daily-react";

interface VideoBoxProps {
  id: string;
}

const VideoBox = ({ id }: VideoBoxProps) => {
  const { videoRef, isSubscribed, error } = useVideoTrack(id);
  
  console.log("VideoBox state:", {
    id,
    isSubscribed,
    error,
    hasVideoRef: !!videoRef
  });

  if (error) {
    console.error("VideoBox error:", error);
  }

  return (
    <div className="relative w-full h-full">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        className="w-full h-full object-cover"
      />
      {!isSubscribed && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white">Loading video...</p>
        </div>
      )}
    </div>
  );
};

export default VideoBox;