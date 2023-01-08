import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { Navbar } from '../Navbar';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  console.log(scrollPosition);
  return (
    <header className={`header ${scrollPosition < 100 ? 'blue' : ''}`}>
      <div className="gnb">
        <h1 className="logo">
          <Link to={'./'}>AirQuant</Link>
        </h1>
        <div className="sm-hidden">
          <ol>
            <li>
              <Link to={'./'}>제품소개</Link>
            </li>
            <li>
              <Link to={'./tech'}>적용기술</Link>
            </li>
            <li>
              <Link to={'./company'}>회사소개</Link>
            </li>
            <li>
              <Link to={'./case'}>적용사례</Link>
            </li>
            <li>
              <Link to={'./service'}>고객문의</Link>
            </li>
          </ol>
        </div>
        <div className="menu-icon sm-only">
          <VscMenu />
        </div>
      </div>
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
