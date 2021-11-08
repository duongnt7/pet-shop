import React from 'react';

export default function Navbar({showCart}) {
  return (
    <header className="container">
      <span onClick={showCart}>Giỏ hàng</span>
      <span>
        <button>Đăng nhập</button>
      </span>
    </header>
  );
}
