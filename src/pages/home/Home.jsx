import React, { useState, useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Iframe from 'react-iframe'
import './Home.css'
import { Container } from "react-bootstrap";


const CarouselDisplay = ({ images }) => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
  
    return (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5 ease"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </Carousel>
    );
  };


function Home() {
  //News
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNews(data.slice(0, 3))); // limit to latest 3 news messages
  }, []);

  // Carousel

  const [images, setImages] = useState([]);
  const [reversedImages, setReversedImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.slice(0, 5)); // limit to latest 5 images
        setReversedImages(data.slice(-5).reverse()); // last 5 images in reverse order
      });
  }, []);

  const arr = [
    {
      image: "https://sirepid.uz/images/rahbarlar/1.png",
      name: "Hasanov Jo`rabek Hamroboyevich",
      lavozim:
        "Hasanov Jo`rabek Hamroboyevich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i.",
      telefon: "+998 67 226 49 26",
      email: "jurabek.khasanov@ssv.uz",
      time: '12 Aug, 22:22, 2023'
    },
    {
      image: "https://sirepid.uz/images/rahbarlar/2.png",
      name: "Sultanov Jamshid Artiqbayevich",
      lavozim:
        "Sultanov Jamshid Artiqbayevich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i o`ribosari.",
      telefon: "+998 67 226 49 26",
      email: "jamshid.khasanov@ssv.uz",
      time: '12 Aug, 22:22, 2023'
    },
    {
      image: "https://sirepid.uz/images/rahbarlar/3.png",
      name: "Abduqodirov Xavast Abdukarimovich",
      lavozim:
        "Abduqodirov Xavast Abdukarimovich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i o`ribosari.",
      telefon: "+998 67 226 49 26",
      email: "xavast.khasanov@ssv.uz",
      time: '12 Aug, 22:22, 2023'
    }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* News */}
      <Container>
      <div className="HomeNews body_page">
        <h2>Latest News</h2>

        <div className="news_box">
        {arr.map((e, i) => (
          <div className="rahbar_box">
            <div className="rahbar_img_box">
              <img src={e.image} alt="Rahbar surati" />
            </div>
            <div className="rahbar_contact_box">
              <div className="rahbar_upper_contact">
                <h5>{e.name}</h5>
              </div>
              <hr className="rahbar_red_hr" />
              <div className="rahbar_detail_contact">
                <div className="rahbar_detail_contact_item">
                  <a href="#">{e.lavozim}</a>
                </div>
                <div className="rahbar_detail_contact_item time_news">
                  <p className="time_news_p">{e.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      
      {/* Carousel */}
      <div>
      <h2>Carousel Display (Correct Order)</h2>
      <CarouselDisplay images={images} />

      <h2>Carousel Display (Reverse Order)</h2>
      <CarouselDisplay images={reversedImages} />
    </div>
      {/* Google map */}
      </div>
      </Container>
    <div className="map_container">      
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.910305873838!2d68.75903491220008!3d40.521473559626024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b207a873ffffff%3A0x9f34ae5e610ace43!2sOblastnaya%20Bol&#39;nitsa.!5e0!3m2!1suz!2s!4v1683382395259!5m2!1suz!2s"
        // width="800"
        // height="600"
        id="iframeMap"
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

      {/* Links */}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
