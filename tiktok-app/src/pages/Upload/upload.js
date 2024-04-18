import axios, {put, putForm} from "axios";
import Button from "../../component/Button";
import {useState} from "react";

function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:8080/files', formData)
            .then(response => {
                // console.log('File upload successful:', response.data);
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
                <input type="file" onChange={handleFileChange} />
                <Button type="submit" primary  >
                    Upload
                </Button>
            </form>
        </div>
    );
}

export default Upload;