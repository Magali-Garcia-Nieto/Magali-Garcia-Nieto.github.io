import React from "react";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
        <div class="footer-style">
                
                <p style={{color:"#87DFD6"}} className="footer-text">Magalí García Nieto ⓒ {year}</p>
        </div>
        </section>
  );
}

export default Footer;