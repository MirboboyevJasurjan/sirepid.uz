import React, { useState, useEffect } from 'react';
import Footer from '../../../layout/footer/Footer';
import Navbar from '../../../layout/navbar/Navbar';
import { Container } from 'react-bootstrap';

import '../Matbuot.css'

const Videolavhalar = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains an array of videos with title and src properties
        setVideos(data.slice(0, 3)); // Fetching only the first 3 videos
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const handleVideoChange = index => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="video-player body_page">
        <Container>
          <div className="video-container">
            <video className='videoPlayer' controls autoPlay src={videos[currentVideoIndex]?.src} />
          </div>
          <div className="video-playlist">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`playlist-item ${currentVideoIndex === index ? 'active' : ''}`}
                onClick={() => handleVideoChange(index)}
              >
                {video.title}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Videolavhalar;
