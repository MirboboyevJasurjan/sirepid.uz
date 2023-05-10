import React from 'react';
import "./Labs.css";
import Navbar from '../../layout/navbar/Navbar';
import Footer from '../../layout/footer/Footer';


function Labs() {

  const arrLabs = [
    {
      title: "Xovos tumani SEO va JS bo`limi qoshidagi PZR laboratoriyasi.",
      addres: "Xovos tumani, Xovos shaxarchasi, Tinchlik mahallasi, 32-uy.",
      telefon: "+99867 226-66-93"
    },
    {
      title: "Guliston tumani SEO va JS bo`limi qoshidagi PZR laboratoriyasi",
      addres: "Xovos tumani, Dexqonobod shaxarchasi, Ziyokor ko`chasi, 100-uy.",
      telefon: " +998 67 769-22-72"
    },
    {
      title: "Sirdaryo tumani SEO va JS bo`limi qoshidagi PZR laboratoriyasi",
      addres: "Sirdaryo viloyati, Guliston shahar Ibn-Sino ko`chasi 15-uy.",
      telefon: "+998 67 377-21-02"
    },
    {
      title: "Sirdaryo viloyati SEO va JS boshqarmasi qoshidagi PZR laboratoriyasi",
      addres: "Sirdaryo viloyati, Guliston shahar Ibn-Sino ko`chasi 15-uy.",
      telefon: "+998 67 226-48-93"
    },
    
  ]

  return (
    <>
      <Navbar />
      <div className="body_page labs_body_page">
        <div className="labs_box container" id="labs_box">
        <h5 className="title_body_page">Sirdaryo viloyatida tashkil etilgan COVID-19 infeksiyasiga PZR test taxlili o`tkazadigan laboratoriyalar bo`yicha ma'lumot.</h5>

        
        {arrLabs.map((e,i) => {
          return (

            <div className="card_lab" key={i}>
            <div className="card_lab_title">
              <h5 className="lab_titie">{e.title}</h5>
            </div>
            <hr />
            <div className="card_lab_description">
              <p className="lab_description">{e.addres}</p>
              <a href={`tel:${e.telefon}`} className="lab_phone">{e.telefon}</a>
            </div>
          </div>
        )
        })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Labs