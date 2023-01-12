import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';

const Navbar = (props) => {
  const { open, toggle } = props;
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
          <li className="navbar-nav-item">
            <NavLink
              to={'./'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              제품소개
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <Link to={'./tech'}>적용기술</Link>
          </li>
          <li className="navbar-nav-item">
            <Link to={'./company'}>회사소개</Link>
          </li>
          <li className="navbar-nav-item">
            <Link to={'./case'}>적용사례</Link>
          </li>
          <li className="navbar-nav-item">
            <Link to={'./service'}>고객문의</Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
};

export default Navbar;
