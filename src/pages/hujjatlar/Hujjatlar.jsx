import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import { Container } from 'react-bootstrap'

import './Hujjatlar.css'

function Hujjatlar() {

  const arrHujjat = [
    {
      title:"Hujjat 1",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
    {
      title:"Hujjat 2",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
    {
      title:"Hujjat 3",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
    {
      title:"Hujjat 4",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
    {
      title:"Hujjat 5",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
    {
      title:"Hujjat 6",
      link:"https://Google.com",
      img: "https://sirepid.uz/images/Sticker.png"
    },
  ]


  return (
    <div>

    <Navbar />

    <div className="body_page hujjatlar_page">

      <Container>
        <h5 className="title_body_page">Tashkilot hujjatlari</h5>
      <div className="labs_box container" id="labs_box">
        <br />

        {
          arrHujjat.map((e,i)=>{
            return(
     
              <div className="card_lab" key={i}>
              <div className="card_lab_title">
                <h5 className="lab_titie">{e.title}</h5>
                <a href={`${e.link}`} className="lab_phone">Yuklab olish</a>
              </div>
              <hr />
              <div className="card_lab_description">
                <img src={e.img} alt="Hujjat" />
              </div>
            </div>
            )
          })
        }
</div>
      </Container>

    </div>

    <Footer />

    </div>
  )
}

export default Hujjatlar