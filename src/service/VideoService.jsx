import axios from "axios";

const mediaStream = () => {
    return navigator.mediaDevices.getUserMedia({video: true})
    .then(res => res);
}

const sendVideo = async (mediaBlobUrl) => {
    const videoFile = await axios.get(mediaBlobUrl).then(res => res);
    const blob = new Blob(videoFile.data, {type: 'video/mp4'});
    const formData = new FormData();
    formData.append("file", videoFile);
    // console.log(videoFile);
    // console.log(blob)
    // console.log(formData);
    return axios.post("http://192.168.1.164:8000/upload_video", formData).then(res => res);
}

const VideoService = {
    mediaStream,
    sendVideo
} 
export default VideoService