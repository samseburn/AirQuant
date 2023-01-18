import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';

const Navbar = (props) => {
  const { open, toggle, pathname } = props;
  console.log(pathname);
  console.log(pathname.includes('/service'));
  return (
    <aside className={`navbar lg-hidden ${open ? 'is-active' : ''}`}>
      <header className="navbar-header">
        <h1 className="logo">
          <Link tp={'/'}>AirQuant</Link>
        </h1>
        <button type={'button'} className="close-button" onClick={toggle}>
          <TfiClose />
        </button>
      </header>
      <nav className="navbar-nav">
        <h2 className="visually-hidden">사이드바 메뉴</h2>
        <ol className="navbar-nav-list">
          <li className={`navbar-nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Link to={'./'} onClick={toggle}>
              제품소개
            </Link>
          </li>
          <li
            className={`navbar-nav-item ${
              pathname === '/tech' ? 'active' : ''
            }`}
          >
            <Link to={'./tech'} onClick={toggle}>
              적용기술
            </Link>
          </li>
          <li
            className={`navbar-nav-item ${
              pathname === '/company' ? 'active' : ''
            }`}
          >
            <Link to={'./company'} onClick={toggle}>
              회사소개
            </Link>
          </li>
          <li
            className={`navbar-nav-item ${
              pathname === '/case' ? 'active' : ''
            }`}
          >
            <Link to={'./case'} onClick={toggle}>
              적용사례
            </Link>
          </li>
          <li
            className={`navbar-nav-item ${
              pathname.includes('service') ? 'active' : ''
            }`}
          >
            <Link to={'./service'} onClick={toggle}>
              고객문의
            </Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
};

export default Navbar;
