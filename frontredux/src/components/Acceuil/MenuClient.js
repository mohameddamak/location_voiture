import React from 'react';
import NavScrollExample from './Navbar';
import ControlledCarousel from './Carousel';
import { Footer } from './Footer';
import InsertMarque from '../marque/InsertMarque';
import MultipleCarousels from './Carousel';
import NavClient from './NavClient';

function MenuClient() {
  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const carrouselStyle = {
    // marginTop: '60px', // Ajoutez la marge souhaitée entre le navbar et le carrousel
  };
  const footerStyle = {
    maxHeight: '10px', // Ajustez la hauteur maximale du footer selon vos besoins
  };
  const welcomeTextStyle = {
    marginTop: '20px', // Marge supérieure
    marginBottom: '0px', // Marge inférieure
  };
  return (
    <div style={menuStyle}>
      <NavClient />
      <div style={welcomeTextStyle}>

        <header>
          <h2><em>Bienvenue chez Nous</em></h2>
          <h3><em>L'endroit où l'aventure commence!</em></h3>
        </header>
        {/* <img
          src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1699832520/yy_ecjeax.jpg'}
          alt=""
          style={{ width: '800px', height: '300px' }}
        /> */}
      </div>
      <div style={carrouselStyle} marginBottom>
        <MultipleCarousels />
      </div>
      {/* <section>
        <p><b>Nous sommes ravis de vous accueillir dans notre univers dédié à la liberté de voyage.</b></p>
        <p><b>Chez nous, nous ne vous proposons pas simplement des voitures;</b></p>
        <p><b>nous vous offrons les clés pour créer des souvenirs inoubliables.</b></p>
        {/* <p><b>Explorez notre site et préparez-vous à vivre une expérience de voyage exceptionnelle!</b></p> */}
      {/* </section> */} *

      <section>
        <p><strong><em>Nous sommes ravis de vous accueillir dans notre univers </em></strong></p>
        {/* <p><strong><em>Chez nous, nous ne vous proposons pas simplement des voitures;</em></strong></p> */}
        <p><strong><em> Nous vous proposons une large gamme de voiture ;</em></strong></p>
        <p><strong><em>nous vous offrons les clés pour créer des souvenirs inoubliables.</em></strong></p>
        <img
          src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1699831702/voit3_pc7nga.jpg'}
          alt=""
          style={{ width: '800px', height: '400px' }}
        />
        <br></br>
        <p><strong><em>Explorez notre site et Reserver votre voiture !</em></strong></p>
      </section>
      <Footer style={footerStyle} />
    </div>
  );
}

export default MenuClient;