import React, { useRef, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import VideoService from './VideoService';

const WebcamPreview = () => {
  const videoRef = useRef(null);

  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({ video: true });

  useEffect(()=> {
    console.log(mediaBlobUrl);
    if(mediaBlobUrl){
      // const videoFile = fetch(mediaBlobUrl).then(r => r.blob());
      // const formData = new FormData();
      // const blob = new Blob([mediaBlobUrl], {type: 'video/mp4'});
      // formData.append("files", mediaBlobUrl);
      const result = VideoService.sendVideo(mediaBlobUrl)
      console.log(result)
    }
  }, [mediaBlobUrl])
  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the webcam:", error);
      }
    };

    startVideo();

    return () => {
      // Clean up: stop the webcam when component is unmounted
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline className='w-[50%] aspect-video' />
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay />
      {/* <video ref={previewStream} className='w-fit h-auto aspect-audio' ></video> */}
    </div>
  );
};

export default WebcamPreview;
