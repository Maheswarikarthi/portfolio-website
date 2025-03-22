import React from 'react';
import image1 from '../../assets/AWS.png'
import image2 from '../../assets/intern.png'
import image3 from '../../assets/ic.png'
import './CertifyComponent.css'


const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className='certify'>
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>

      </div>
    </section>
  );
};

export default Certifications;
