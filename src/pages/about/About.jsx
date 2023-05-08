import React from "react";
import "./About.css";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about_umumiy body_page">
        <ul>
          <li><a href="/rahbarlar">Rahbariyat </a></li>
          <li><a href="/hodimlar">Hodimlar </a></li>
          <li><a href="/tuzulma">Tashkiliy Tuzulma </a></li>
          <li><a href="/yangiliklar">Yangiliklar </a></li>
        </ul>
        <p>
          O‘zbekiston Respublikasi Sanitariya-epidemiologik osoyishtalik va
          jamoat salomatligi xizmati (keyingi o‘rinlarda —
          Sanitariya-epidemiologiya xizmati) maqomi, asosiy vazifalari,
          funksiyalari, huquqlari, javobgarligini, faoliyatini tashkil etish va
          hisobot berish tartibini, shuningdek, uning rahbarlarining funksional
          vazifalari va mas’uliyatini belgilaydi.
          <br />
          Sanitariya-epidemiologiya xizmati aholining sanitariya-epidemiologik
          osoyishtaligi va jamoat salomatligi sohasida yagona davlat siyosatini
          amalga oshirish uchun javobgar bo‘lgan vakolatli davlat boshqaruvi
          organi hisoblanadi.
          <br />
          Sanitariya-epidemiologiya xizmati o‘z faoliyatida O‘zbekiston
          Respublikasi Konstitusiyasi va qonunlariga, O‘zbekiston Respublikasi
          Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi
          Prezidentining farmonlari, qarorlari va farmoyishlariga, Vazirlar
          Mahkamasining qarorlari va farmoyishlariga, shuningdek, ushbu nizomga
          va boshqa qonun hujjatlariga amal qiladi.
          <br />
          Sanitariya-epidemiologiya xizmati va uning Qoraqalpog‘iston
          Respublikasi, viloyatlar, Toshkent shahar sanitariya-epidemiologik
          osoyishtalik va jamoat salomatligi boshqarmalari, tuman (shahar)
          sanitariya-epidemiologik osoyishtalik va jamoat salomatligi
          bo‘limlari, shuningdek, uning tarkibiga kiradigan tegishli idoraviy
          mansub tashkilotlar yuridik shaxs hisoblanadi, O‘zbekiston
          Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat
          tilida yozilgan muhrga egalik qilish huquqiga ega.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;
