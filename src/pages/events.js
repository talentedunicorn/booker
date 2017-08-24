import React from 'react';
import Header from '../components/header';
import bg from '../images/kligraphy.jpg';

export default () => 
  <div className="event">
    <Header title="kligraphy" subtitle="Watercolor Floral & Brush Calligraphy Workshop" backTo="/" bg={bg}/>
    <div className="content">
      <div className="floatWrapper">
        <div className="half">
          <h2 className="title">05 September 2017, 3PM - 7PM MYT</h2>
          <p>Learn the basic techniques of watercolour applications and the easiest way to paint florals.</p>
          <p>At the end of the workshop, you will paint one floral masterpiece which you can pair it brush calligraphy which will be taught in class.</p>

          <h2 className="subtitle">Package includes</h2>
          <ul>
            <li>Watercolour brush</li>
            <li>Watercolour paper</li>
            <li>Light refreshments</li>
          </ul>
        </div>
        <div className="half">
          <h2 className="title">Getting there</h2>
          <p>
            <strong>Table & Apron</strong>
            <address>23, Jalan SS 20/11, Damansara Kim<br/> 47400 Petaling Jaya, Selangor, Malaysia</address>
          </p>
          <div style={{
            position: "relative",
            paddingBottom: "50%",
            height: "0",
            overflow: "hidden"
          }}>
            <iframe title="Table & Apron" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.924436888826!2d101.62532855815365!3d3.134600999429379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49379b2de761%3A0xf97118460aa30d06!2sTable+%26+Apron!5e0!3m2!1sen!2smy!4v1503594782256" style={{
              border:"0", 
              position: "absolute", 
              top: "0", 
              bottom: "0", 
              left: "0", 
              right: "0",
              width: "100%",
              height: "100%"
            }}></iframe>
          </div>
        </div>
      </div>

      <div className="floatWrapper">
        <div className="full">
          <h3 className="title">Book now</h3>
        </div>
      </div>
    </div>
  </div>
