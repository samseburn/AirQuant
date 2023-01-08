import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar lg-hidden">
      <div className="gnb">
        <h1 className="logo">
          <Link to={'./'}>AirQuant</Link>
        </h1>
        <div>
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
      </div>
    </div>
  );
};

export default Navbar;
