import React, { useState } from 'react';
import './Navbar.css';

import { RxHamburgerMenu } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";



function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  function logit() {
    setScrollY(window.pageYOffset);
  }


  return (
<>
<nav>
        <div className="nav_upper">
        <div className="nav_upper_logoBox">
          <img src="https://sirepid.uz/images/Sticker.png" alt="Sirepid"/>
        </div>
        <div className="nav_upper_contact">
          <ul>
            <li><a href="tel:+998672264926" className="nav_upper_link"> <BsTelephone /> +998672264926</a></li>
            <li><a href="" className="nav_upper_link"> <AiOutlineInstagram /> Instagram</a></li>
            <li><a href="" className="nav_upper_link"><SiTelegram /> Telegram</a></li>
            <li><a href="" className="nav_upper_link"><BsFacebook />Facebook</a></li>
            <li><a href="" className="nav_upper_link"><BsYoutube /> Youtube</a></li>
          </ul>
        </div>
        </div>


        <div className="nav_under">
        <div className={`nav_under ${menuOpen ? 'open' : ''}`}>

        <ul className='nav_under_ul'>
            <li><a onClick={logit} href="/" className='nav_under_ul_a'>Bosh sahifa</a></li>
            {/*  */}
            <li><a onClick={logit} href="/yangiliklar" className='nav_under_ul_a'>Tashkilot haqida</a>
            <ul>
                <li><a onClick={logit} href="/yangiliklar">Yangiliklar</a></li>
                <li><a onClick={logit} href="/rahbarlar">Rahbariyat</a></li>
                <li><a onClick={logit} href="/hodimlar">Hodimlar</a></li>
                <li><a onClick={logit} href="/tuzulma">Tashkiliy tuzilma</a></li>
            </ul>        
            </li>
            {/*  */}
            <li><a onClick={logit} href="/docs" className='nav_under_ul_a'>Hujjatlar</a>
            <ul>
                <li><a onClick={logit} href="#">O'zbekiston Respublikasi qonunlari <div dangerouslySetInnerHTML={{ __html: '&#8594;' }}></div> </a>
                  <ul>
                    <li><a onClick={logit} href="https://lex.uz/docs/2732584">Aholining sanitariya-epidemiologik osoyishtalik to'g'risidagi qonuni</a></li>
                    <li><a onClick={logit} href="#">Atmosfera havosini muhofaza qilish to'g'risidagi qonuni</a></li>
                    <li><a onClick={logit} href="https://lex.uz/docs/12328">Suv to'g'risidagi qonun</a></li>
                    <li><a onClick={logit} href="https://lex.uz/docs/5388842">Suv O'RQ-685-son</a></li>
                  </ul>
                </li>
                <li><a onClick={logit} href="#">Prezident farmon, qaror va farmoyishlari <div dangerouslySetInnerHTML={{ __html: '&#8594;' }}></div></a>
                  <ul>
                    <li><a onClick={logit} href="http://">PQ 122-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 4887-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 6110-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 35-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 3493-son</a></li>
                    <li><a onClick={logit} href="http://">PF 6282-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 5148-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 5177-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 43-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 102-son</a></li>
                    <li><a onClick={logit} href="http://">PF 6221-son</a></li>
                    <li><a onClick={logit} href="http://">PF 60-son</a></li>
                    <li><a onClick={logit} href="http://">PF 5969-son</a></li>
                    <li><a onClick={logit} href="http://">PF 5129-son</a></li>
                    <li><a onClick={logit} href="http://">PF 4790-son</a></li>
                    <li><a onClick={logit} href="http://">PQ 6247-son</a></li>
                    <li><a onClick={logit} href="https://lex.uz/docs/5100663"> PQ 4891-son</a></li>
                  </ul>
                </li>
                <li><a onClick={logit} href="#">Vazirlar mahkamasining qaror va farmoyishlari</a></li>
                <li><a onClick={logit} href="#">Tashkilot hujjatlari</a></li>
            </ul>
            </li>
            {/*  */}
            <li><a onClick={logit} href="/about" className='nav_under_ul_a'>Matbuot xizmati</a>
            <ul>
                <li><a onClick={logit} href="/about">Umumiy ma'lumot</a></li>
                <li><a onClick={logit} href="/fotolavhalar">Fotolavhalar</a></li>
                <li><a onClick={logit} href="/videolavhalar">Videolavhalar</a></li>
                <li><a onClick={logit} href="/matbuot">Matbuot xizmati bilan bog'lanish</a></li>
            </ul> 
            </li>
            {/*  */}
            <li><a onClick={logit} href="#" className='nav_under_ul_a'>Muassasalar</a>
            <ul>
                <li><a onClick={logit} href="/muassasalar" className='nav_under_ul_a'>Hududiy bo'limlar</a></li>
                <li><a onClick={logit} href="hududiy-rahbarlar" className='nav_under_ul_a'>Hududiy bo'lim rahbarlari</a></li>
            </ul> 
            </li>
            {/*  */}
            <li><a onClick={logit} href="/loyihalar" className='nav_under_ul_a'>Loyihalar</a></li>
            <li><a onClick={logit} href="/interaktiv-xizmatlar" className='nav_under_ul_a'>Interaktiv xizmatlar</a></li>
            <li><a onClick={logit} href="/vaksinatsiya" className='nav_under_ul_a'>Vaksinatsiya</a></li>
            <li><a onClick={logit} href="/labs" className='nav_under_ul_a'>CoVid-19 Lab</a></li>
            <li>
              <select name="language" id="language">
                <option value="uz">UZ</option>
                <option value="ru">RU</option>  
              </select>
            </li>
        </ul>
        <div className="nav_toggle" onClick={handleMenuToggle}>
          <RxHamburgerMenu />
        </div>
        </div>
        </div>
    </nav>

</>

  )
}

export default Navbar