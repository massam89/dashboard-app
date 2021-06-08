import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'

function Navbar() {
  const { navbarSelect, setNavbarSelect} = useContext(AppContext)

  return (
    <nav>
      <ul>
        <li className={navbarSelect === 'counter' ? 'navbar-select' : ''}>
          <Link onClick={() => setNavbarSelect('counter')} to="/">پیشخوان</Link>
        </li>

        <li className={navbarSelect === 'products' ? 'navbar-select' : ''}>
          <Link onClick={() => setNavbarSelect('products')} to="/products">محصولات</Link>
        </li>

        <li>مالی</li>
        <li>سفارشات</li>
      </ul>
    </nav>
  );
}

export default Navbar;
