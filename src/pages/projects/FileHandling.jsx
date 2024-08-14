import { useState } from "react";
import storageService from "../../service/StorageService";


const FileHandling = () => {
    const [files, setFiles] = useState();
    const upload = (e) => {
      e.preventDefault();
      if (files) {
        for (let i = 0; i < files.length; i++) {
          let formData = new FormData();
          formData.append("file", files[i]);
          storageService.storeFile(formData);
        }
      }
    };
  return (
    <form className="flex gap-2">
          <div className="flex flex-col gap-4 w-1/2">
            <p className="text-2xl font-semibold text-gray-700">
              File upload here
            </p>
            <div className="flex gap-2 p-4 bg-gray-300 rounded-md flex-wrap">
              <div className="w-full flex items-center gap-2">
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  className="px-2 py-1"
                  placeholder="Your name"
                />
              </div>
              <div className="w-full flex items-center gap-2">
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="px-2 py-1"
                  placeholder="Your email"
                />
              </div>
              <div className="w-full flex items-center gap-2">
                <label htmlFor="profile">Add Photo :</label>
                <input
                  type="file"
                  name="profile"
                  id=""
                  className="px-2 py-1"
                  placeholder="Your profile"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                  accept="image/*, video/*"
                />
              </div>
              <button
                className="py-2 px-6 bg-green-600 rounded-md text-white font-medium tracking-wide hover:bg-green-500"
                onClick={(e) => upload(e)}
              >
                Upload
              </button>
            </div>
          </div>
          {files && (
            files[0].type.includes("video/")?
            <video
              src={URL.createObjectURL(files[0])}
              autoPlay
              controls
              className="w-1/2 rounded-lg"
            ></video>
            :
            <img src={URL.createObjectURL(files[0])} className="w-1/2 rounded-lg"></img>
          )}
        </form>
  )
}

export default FileHandling