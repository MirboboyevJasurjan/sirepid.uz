import React from 'react'
import './Muassasalar.css'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import { Container } from 'react-bootstrap'

function Muassasalar() {

    const arrMuassasa = [
        {
            title: "Sanitariya epidimiologik osoyishtalik va jamoat salomatligi Sirdaryo viloyati boshqarmasi",
            rahbar: "Hasanov Jo'rabek Hamroboyevich",
            telefon: "+998(67) 226 49 26",
            manzil: "Sirdaryo viloyati,Guliston shahar,Ibn Sino-15",
            image: "https://sirepid.uz/images/Hududiy/SirdaryoVilBosh.jpg"
        },
        {
            title: "Sanitariya epidimiologik osoyishtalik va jamoat salomatligi Sirdaryo viloyati boshqarmasi",
            rahbar: "Hasanov Jo'rabek Hamroboyevich",
            telefon: "+998(67) 226 49 26",
            manzil: "Sirdaryo viloyati,Guliston shahar,Ibn Sino-15",
            image: "https://sirepid.uz/images/Hududiy/SirdaryoVilBosh.jpg"
        },
        {
            title: "Sanitariya epidimiologik osoyishtalik va jamoat salomatligi Sirdaryo viloyati boshqarmasi",
            rahbar: "Hasanov Jo'rabek Hamroboyevich",
            telefon: "+998(67) 226 49 26",
            manzil: "Sirdaryo viloyati,Guliston shahar,Ibn Sino-15",
            image: "https://sirepid.uz/images/Hududiy/SirdaryoVilBosh.jpg"
        }
    ]


    return (
    <>
        <Navbar/>
        <div className="body_page muassasala_page">
      <Container>
        <div className="muassasalar_boxes">
          {arrMuassasa.map((e, i) => {
            return (
              <div className="muassasa_box" key={i}>
                <div className="muassasa_description">
                  <p className="muassasa_title" key={i}>{e.title}</p>
                  <p className="muassasa_rahbar" key={i}>
                    Rahbar:<span key={i} > {e.rahbar}</span>
                  </p>
                  <a href={`tel:${e.telefon}`} key={i}>{e.telefon}</a>
                  <p className="muassasa_addres" key={i}>{e.manzil}</p>
                </div>
                <img src={e.image} alt="Muassasa" className='muassasa_img'  key={i}/>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
        <Footer />
    </>
  )
}

export default Muassasalar