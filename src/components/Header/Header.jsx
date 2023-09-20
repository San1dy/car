import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <div className='header__column'>
          <Link to="/" className='header__logo-link'>
            <div className='header__logo-icon'>РУСБИЗНЕСАВТО</div>
          </Link>
          <nav className='header__navigation'>
            <ul className='header__navigation-list'>
              <li>
                <Link to='/car' className='header__navigation-link'>
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/saved-car" className='header__navigation-link'>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

