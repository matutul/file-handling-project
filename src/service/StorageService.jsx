import axios from "axios";

const storeFile = (files) => {
    console.log(files);
    return axios.post("http://localhost:8080/file/upload", files);
}
const storageService = {
    storeFile,
}
export default storageService;