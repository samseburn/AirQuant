import React from 'react';
import { Link } from 'react-router-dom';
import { instargram, facebook, blog } from 'images';

const Footer = () => {
  const piQuantURL = 'http://www.piquant.asia';
  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="logo">PiQuant</h1>
        <div className="icon-group">
          <a href="https://blog.naver.com/piquant_asia" target="_blank">
            <img src={blog} alt="파이퀀트 블로그로 이동" />
          </a>
          <a href="https://www.facebook.com/piquant.tech" target="_blank">
            <img src={facebook} alt="파이퀀트 페이스북으로 이동" />
          </a>
          <a href="https://blog.naver.com/piquant_asia" target="_blank">
            <img src={instargram} alt="파이퀀트 인스타그램으로 이동" />
          </a>
        </div>
      </div>
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
          <div className="contact-box">
            <dl>
              <dt>대표전화</dt>
              <dd>
                <Link to="tel:02-2088-8765">02-2088-8765</Link>
              </dd>
            </dl>
            <dl>
              <dt>사이트</dt>
              <dd
                className="piquantUrl"
                onClick={() => window.open(piQuantURL)}
              >
                www.piquant.asia
              </dd>
            </dl>
            <dl>
              <dt>E-Mail</dt>
              <dd>
                <Link to="mailto:contact@piquant.asia">
                  contact@piquant.asia
                </Link>
              </dd>
            </dl>
          </div>
        </li>
      </ol>
    </footer>
  );
};

export default Footer;
