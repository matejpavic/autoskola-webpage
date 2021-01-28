import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
    <div>
        <div className="homepage">

 {/* <!-- Header -->*/}
    <div id="header">
      <div id="nav-wrapper"> 
        
{/*        <!-- Nav -->*/}
        <nav id="nav">
          <ul>
            <li className="active"><a href="index.html">Naslovna</a></li>
            <li className="active"><a href='https://matejpavic.github.io/propisi/'>TEST</a></li>
            <li className="active"><a href='#footer'>KONTAKT</a></li>
          </ul>
        </nav>
      </div>
      <div className="container"> 
        
{/*        <!-- Logo -->*/}
        <div id="logo">
          <h1>Autoškola Bruno</h1>
          <span className="tag">30 godina s vama</span>
        </div>
      </div>
    </div>

{/*  <!-- Featured -->*/}
    <div id="featured">
      <div className="container">
        <header>
          <h2>Dobro došli na stranice autoškole Bruno</h2>
        </header>
        <p>Autoškola Bruno će Vam svojim dugogodišnjim iskustvom omogućiti da bez poteškoća i u vrlo kratkom vremenu dođete do znanja i vještina potrebnih za stjecanje vozačke dozvole.</p>
      
        
      </div>
    </div>

{/*  <!-- Main -->*/}
    <div id="main">
      <div id="content" className="container">

        <div className="row">
          <section className="6u">
            <a href="" className="image full"><img src="images/bruno30w.webp" alt="" /></a>
            <header>
              <h2>Tradicija</h2>
            </header>
            <p>Logo na slici iznad izrađen je davne 1990. godine što dovoljno govori koliko godina naša tvrtka egzistira na tržištu. Tisuće obučenih vozača kroz 30 godina postojanja garancija su da je "Bruno" pravi izbor za Vas.</p>
          </section>        
          <section className="6u">
            <a href="" className="image full"><img src="images/vwinterior.webp" alt="" /></a>
            <header>
              <h2>Prilagođen vozni park</h2>
            </header>
            <p>Za obuku kandidata koristimo vozila prilagođena obučavanju. Iskustvom smo se uvjerili da je za samu obuku te konačni uspjeh kandidata na ispitu ključan izbor vozila. Za obuku B kategorije koristimo automobile marke VW, konkretnije nove gradske Golf i Polo modele.</p>
          </section>        
        </div>

        <div className="row">
          <section className="6u">
            <a href="" className="image full"><img src="images/mt07w.webp" alt="" /></a>
            <header>
              <h2>Najbolja ponuda A, A1 i A2 kategorija</h2>
            </header>
            <p>Uz iskusne instruktore, možemo se pohvaliti i vrhunskim Yamaha motorima. Uvijek smo ukorak sa zadnjim generacijama na tržištu. Uz povoljne cijene A kategorija nudimo povoljne uvjete plaćanja.</p>
          </section>        
          <section className="6u">
            <a href="" className="image full"><img src="images/vozilaw.webp" alt="" /></a>
            <header>
              <h2>Stručnost kadra</h2>
            </header>
            <p>Naša najveća kvaliteta je upravo naš kadar. Prometne propise i sigurnosna pravila predaje magistar inženjer prometa sa stečenim pedagoškim kompetencijama. Također, u našoj autoškoli rade samo i isključivo instruktori s dugogodišnjim iskustvom i dokazanim rezultatima. </p>
          </section>        
        </div>
      
      </div>
    </div>

{/*  <!-- Tweet -->*/}
    <div id="tweet">
      <div className="container">
        <section>
          <blockquote>&ldquo;Već 30 godina obučavamo kandidate za vozače motornih vozila A, A1, A2 i B kategorija.&rdquo;</blockquote>
        </section>
      </div>
    </div>

{/*  <!-- Footer -->*/}
    <div id="footer">
      <div className="container">
        <section>
          <header id="kraj">
            <h2>Kontaktirajte nas</h2>
            <span className="byline">Telefonski smo dostupni unutar radnog vremena od pon - pet 08:00 - 19:30</span>
          </header>
          <ul className="contact">
            <li><a href="https://www.instagram.com/autoskolabruno/?hl=hr" className="fa fa-instagram"><span>Instagram</span></a></li>
            <li className="active"><a href="https://web.facebook.com/autoskolabrunodoo/" className="fa fa-facebook"><span>Facebook</span></a></li>
            <li><a href="https://www.google.com/maps/place/Velebitska+ul.+33,+21000,+Split/" className="fa fa-map-marker"><span>Location</span></a></li>
            <li><a href="mailto:autoskola.bruno@st.t-com.hr" className="fa fa-envelope"><span>E-mail</span></a></li>
            <li><a href="tel:+38521572089" className="fa fa-phone"><span>Phone</span></a></li>
          </ul>
        </section>
      </div>
    </div>

{/* Copyright*/}
    <div id="copyright">
      <div className="container">
        Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
      </div>
    </div>

  </div>
    </div>
  );
  }
}

export default HomePage;