import axios from "axios";

const storeFile = (file) => {
    console.log(file);
    return axios.post("http://localhost:8080/file/upload", file);
}
const storageService = {
    storeFile,
}
export default storageService;