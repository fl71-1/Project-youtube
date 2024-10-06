import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function DataYoutubeApi() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&regionCode=Sa&chart=mostPopular&maxResults=50&key=AIzaSyCySTLbPbzs_-iwhdQ9DwQT382ZTC-sPdo')
            .then(function (response) {
                // Handle Success
               setVideo(response.data.items);
            })
            .catch(function (error) {
                // Handle Error //
                console.log(error);
            });
    }, []);

    return (
        <>
            {/* NavBar */}
            <Navbar />
            {/*=== NavBar ===*/}

            {/* ============================================================================================================================= */}
            {/* ============================================================================================================================= */}
 
            {/* Vedios Section */}
            <div className="my-10">
                <div className="flex flex-col justify-center items-start gap-y-10 flex-wrap md:flex-row md:justify-evenly md:gap-x-5 md:gap-y-10 md:items-start">
                    {video.map((element, index) => {
                        return (
                                <div key={index}>
                                    <Link to={`/showVideo/${element.id}`}>
                                        <div className="card card-compact bg-base-100 w-96">
                                            <figure>
                                                <img
                                                    className="w-full"
                                                    src={element.snippet.thumbnails.medium.url}
                                                    alt="The Vedio Image" 
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <div className="flex justify-center items-start text-center">

                                                    <h2 className="card-title text-lg">{element.snippet.title}</h2>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    )};
                </div>
            </div>
            {/*=== Vedios Section ===*/}
        </>
    )
};