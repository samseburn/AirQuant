import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const piQuantURL = 'http://www.piquant.asia';
  return (
    <footer className="footer">
      <h1 className="footer-logo">PiQuant</h1>
      <ol className="footer-information">
        <li className="footer-information-address">
          <h1 className="address-title">Address</h1>
          <div className="address-box">
            <p>서울특별시 용산구 한강대로 372, C동 2층</p>
            <p>
              2nd Floor, C Tower 372, Hangang-daero, Yongsan-gu, Seoul, Republic
              of Korea
            </p>
          </div>
        </li>
        <li className="footer-information-contact">
          <h1 className="contact-title">Contact</h1>
          <dl>
            <dt>대표전화</dt>
            <dd>
              <Link to="tel:02-2088-8765">02-2088-8765</Link>
            </dd>
          </dl>
          <dl>
            <dt>사이트</dt>
            <dd onClick={() => window.open(piQuantURL)}>www.piquant.asia</dd>
          </dl>
          <dl>
            <dt>E-Mail</dt>
            <dd>
              <Link to="mailto:contact@piquant.asia">contact@piquant.asia</Link>
            </dd>
          </dl>
        </li>
      </ol>
    </footer>
  );
};

export default Footer;
