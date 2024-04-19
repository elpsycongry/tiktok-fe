import axios from "axios";
import Button from "../../component/Button";
import {useEffect, useState} from "react";

function Upload() {
    const [file, setFile] = useState(null);
    const [videoDuration, setVideoDuration] = useState(null);
    const userID = 2;
    const [createVideoCounter, setVideoCounter] = useState(0);

    // Log gọi api xem video có số video mà người này đã đăng trong hôm nay
    useEffect(() => {
        axios.get("http://localhost:8080/files/api/v1/create-video-counter?userID=2")
            .then((res) => {
                setVideoCounter(res.data)
            })
    }, [file]);


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        setFile(selectedFile);
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(selectedFile);
        videoElement.onloadedmetadata = () => {
            const duration = videoElement.duration;

            if (createVideoCounter >= 3) {
                alert("Bạn chỉ có thể đăng tối đa 3 video 1 ngày Bạn có thể xoá video cũ đi để đăng cái mới")
                setFile(null)
            }

            if (duration > 60) {
                alert("Video ngẵn hơn 1 phút")
                setFile(null)
            }

            setVideoDuration(duration);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userID', 2)
        axios.post('http://localhost:8080/files', formData)
            .then(response => {
                setFile(null)
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
                <Button type="submit" primary disabled={!file}>
                    Upload
                </Button>
            </form>
        </div>
    );
}

export default Upload;