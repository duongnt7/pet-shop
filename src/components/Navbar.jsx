import React from 'react';

export default function Navbar({showCart, setIsHidden}) {
  function loginAction(){
    setIsHidden(true)
  }

  return (
    <header className="navbar">
      <span className="cart" onClick={showCart}>Giỏ hàng</span>
      <span>
        <button onClick={()=>loginAction()} className="login-btn">Đăng nhập</button>
      </span>
    </header>
  );
}
