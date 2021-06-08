import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">پیشخوان</Link>
        </li>

        <li>
          <Link to="/products">محصولات</Link>
        </li>

        <li>مالی</li>
        <li>سفارشات</li>
      </ul>
    </nav>
  );
}

export default Navbar;
