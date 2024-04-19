import {useEffect, useState} from "react";
import axios from "axios";

function Home({videoURIs}){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
            axios.get("http://localhost:8080/files")
                .then((res) => {
                    setVideos(res.data)
                })
        }, []);


    return (
        <div>
            {videos.map((videoUri) => {
                return (
                    <video width="450" height="300" controls >
                        <source src={videoUri} type="video/mp4"/>
                    </video>
                )
            })}
        </div>
    )
}

export default Home;