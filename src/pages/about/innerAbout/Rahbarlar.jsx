import React from "react";
import Navbar from "../../../layout/navbar/Navbar";
import Footer from "../../../layout/footer/Footer";
import { Container } from "react-bootstrap";

function Rahbarlar() {
  const arr = [
    {
      image: "https://sirepid.uz/images/rahbarlar/1.png",
      name: "Hasanov Jo`rabek Hamroboyevich",
      lavozim:
        "Hasanov Jo`rabek Hamroboyevich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i.",
      telefon: "+998 67 226 49 26",
      email: "jurabek.khasanov@ssv.uz",
      days: "Dushanba, Juma",
      time: "10:00 dan 12:00gacha",
    },
    {
      image: "https://sirepid.uz/images/rahbarlar/2.png",
      name: "Sultanov Jamshid Artiqbayevich",
      lavozim:
        "Sultanov Jamshid Artiqbayevich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i o`ribosari.",
      telefon: "+998 67 226 49 26",
      email: "jamshid.khasanov@ssv.uz",
      days: "Dushanba, Juma",
      time: "10:00 dan 12:00gacha",
    },  
    {
      image: "https://sirepid.uz/images/rahbarlar/3.png",
      name: "Abduqodirov Xavast Abdukarimovich",
      lavozim:
        "Abduqodirov Xavast Abdukarimovich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi boshlig`i o`ribosari.",
      telefon: "+998 67 226 49 26",
      email: "xavast.khasanov@ssv.uz",
      days: "Dushanba, Juma",
      time: "10:00 dan 12:00gacha",
    },
    {
      image: "https://sirepid.uz/images/rahbarlar/4.png",
      name: "Suyunov Doniyor Toshpo`latovich",
      lavozim:
        "Suyunov Doniyor Toshpo`latovich Sanitariya epidemiologik osoyishtalik va jamoat salomatligi xizmati Sirdaryo viloyati boshqarmasi Tashkiliy nazorat va axborot tahlil bo`lim boshlig`i.",
      telefon: "+998 67 226 49 26",
      email: "doniyor.khasanov@ssv.uz",
      days: "Dushanba, Juma",
      time: "10:00 dan 12:00gacha",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="body_page">
        <Container >

        <h5 className="title_body_page">Rahbariyat</h5>

        {arr.map((e, i) => (
          <div className="rahbar_box">
            <div className="rahbar_img_box">
              <img src={e.image} alt="Rahbar surati" srcset="" />
            </div>
            <div className="rahbar_contact_box">
              <div className="rahbar_upper_contact">
                <h5>{e.name}</h5>
                <p>{e.lavozim}</p>
              </div>
              <hr className="rahbar_red_hr" />
              <div className="rahbar_detail_contact">
              <div className="rahbar_detail_contact_item">
                  <p> Telefon </p>
                  <p>{e.telefon}</p>
                </div>
                <div className="rahbar_detail_contact_item">
                  <p> Email </p>
                  <p>{e.email}</p>
                </div>
                <div className="rahbar_detail_contact_item">
                  <p> Qabul kunlari </p>
                  <p>{e.days}</p>
                </div>
                <div className="rahbar_detail_contact_item">
                  <p> Vaqt :</p>
                  <p>{e.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Rahbarlar;
