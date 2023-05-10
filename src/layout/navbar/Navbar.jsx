import React, { useState } from 'react';
import './Navbar.css';
import About from '../../pages/about/About';
// import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

function Navbar() {

  const [isAcctive, setAcctive] = useState(true);
  function onMenu() {
    setAcctive(!isAcctive);
  }

  const [isOpen, setOpen] = useState(true);
  function onOpen() {
    setOpen(!isOpen);
  }

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }
  return (
    <div className='NavFon'>
    <div className='Navbar'id='Navbar' 
    style={scrollY > 10 ? { marginTop: "112px" } : {}}>
      <div className='logo'>
        {/* <a href="#"><img src={logo} /></a> */}
        <a href="/"><div className='LogoTextBlock'>
          <h3 className='LogoText'>Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmatining</h3>
          <p className='LogoLowText'>Sirdaryo viloyati Boshqarmasi</p>
        </div>
        </a>
      </div>

      <div className='MainNav'>
        <ul className='MainNavLi'>
              <li><a href='/about'>Tashkilot haqida</a></li>
              
              <li><a href="/docs">Hujjatlar</a></li>
            
              <li><a href="/matbuot">Matbuot xizmati</a></li>
              
              <li><a href="/muassasalar">Muassasalar</a></li>
              
              <li><a href="/loyihalar">Loyihalar</a></li>
              
              <li><a href="/interaktiv-xizmatlar">Interaktiv xizmatlar</a></li>
              
              <li><a href="/vaksinatsiya">Vakansinatsiya</a></li>
              
              <li><a href="/labs">CoVId-19 Lab</a></li>

        </ul>
      </div>

      {/* <div className='NumberNav'>
        <div className='navbarNumbers'>
          <a className='telPhone' href="tel:+998910010509"><h2>+998 91 001 05 09</h2></a>
          <p className='kursgaYozilish'>kursga yozilish uchun</p>
        </div>
      </div> */}

      <div className="menuGridTemp" onClick={onMenu}>
        {/* <MdOutlineMenu className={isAcctive ? "MenuGrid" : "CloseMenuGrid"} />
        <MdOutlineClose className={isAcctive ? "CloseMenuGrid" : "MenuGrid"} /> */}
              
      </div>
      <div className={isAcctive ? 'menu' : 'menuMob'}>
        <div className="innerMenuMob">
          <div className="topMenuLinks">
            <div className={ isAcctive ? 'MainNav' : 'MainNavActive ' || isOpen ? 'MainNavActive' : 'MainNav' }>
              <ul className={ isAcctive ? 'MainNavLi': 'MainNavLiActive' }>
              
                <li><a onClick={onMenu} href="#">Tashkilot haqida</a></li>
              
                <li><a onClick={onMenu} href="#">Hujjatlar</a></li>
              
                <li><a onClick={onMenu} href="#">Matbuot xizmati</a></li>
                
                <li><a onClick={onMenu} href="#">Muassasalar</a></li>
                
                <li><a onClick={onMenu} href="#">Loyihalar</a></li>
                
                <li><a onClick={onMenu} href="#">Interaktiv xizmatlar</a></li>
                
                <li><a onClick={onMenu} href="#">Vakansinatsiya</a></li>
                
                <li><a onClick={onMenu} href="#">CoVId-19 Lab</a></li>
              </ul>
            </div>

            <div className={isAcctive ? 'NumberNav' : 'NumberNavActive'} 

            >
              <a className='telPhone' href="tel:+998910010509"><h2>+998 91 001 05 09</h2></a>
              <p className='kursgaYozilish'>kursga yozilish uchun</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar