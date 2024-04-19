import axios, {put, putForm} from "axios";
import Button from "../../component/Button";
import {useState} from "react";

function Upload() {
    const [file, setFile] = useState(null);
    const [videoDuration, setVideoDuration] = useState(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(selectedFile);

        videoElement.onloadedmetadata = () => {
            const duration = videoElement.duration;
            if (duration > 60 ) {
                alert("video không hợp lệ")
                setFile(null)
            }
            setVideoDuration(duration);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:8080/files', formData)
            .then(response => {
                console.log('File upload successful:', response.data);
                alert("ok")
            })
            .catch(error => {
                console.log(error)
            });
    };

    return (
        <div>
            <h2>Upload Page</h2>

            <form onSubmit={handleSubmit} encType={"multipart/form-data "}>
                <input type="file" onChange={handleFileChange} accept="video/*" multiple={false}/>
                <Button type="submit" primary disabled={!file} >
                    Upload
                </Button>
            </form>
        </div>
    );
}

export default Upload;