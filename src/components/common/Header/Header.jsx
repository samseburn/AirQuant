import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { Navbar } from '../Navbar';

const Header = () => {
  // const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsopen] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const _header = useRef(null);
  const locationNow = useLocation();

  useEffect(() => {
    if (locationNow.pathname === '/' || locationNow.pathname === '/tech') {
      // main
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [isMain, locationNow]);

  const toggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    function headerChange() {
      if (isMain && scrollPosition > 850) {
        _header.current.classList.add('blue');
      } else _header.current.classList.remove('blue');

      if (!isMain && scrollPosition > 100) {
        _header.current.classList.add('blue');
      }
      // else _header.current.classList.remove('blue');
    }
    headerChange();
  }, [isMain, scrollPosition]);

  return (
    <header
      ref={_header}
      // className={`header `}
      className={`header ${scrollPosition < 100 ? 'blue' : ''}`}
    >
      <div className="gnb">
        <h1 className="logo">
          <Link to={'./'}>AirQuant</Link>
        </h1>
        <div className="lg-only">
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
        <div className="menu-icon lg-hidden">
          <VscMenu onClick={toggleSidebar} />
        </div>
      </div>
      <Navbar open={isOpen} toggle={toggleSidebar} />
    </header>
  );
};

export default Header;
