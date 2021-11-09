import React, { useState } from 'react';

const listProductInit = [
  {
    id: '1',
    title: 'Royal Canin Indoor 27 (túi 2kg) - Thức ăn cho mèo',
    img: 'https://www.petcity.vn/media/product/120_790_16_indoor_27.png',
    amount: 1,
    price: 10,
  },
  {
    id: '2',
    title: 'Royal Canin Indoor 27 (túi 2kg) - Thức ăn cho mèo',
    img: 'https://www.petcity.vn/media/product/120_790_16_indoor_27.png',
    amount: 2,
    price: 15,
  },
  {
    id: '3',
    title: 'Royal Canin Indoor 27 (túi 2kg) - Thức ăn cho mèo',
    img: 'https://www.petcity.vn/media/product/120_790_16_indoor_27.png',
    amount: 5,
    price: 20,
  },
];

export default function Cart({ showCart }) {
  const [listProduct, setListProduct] = useState(listProductInit);

  

  function changeAmount(value, id) {
    let newListProduct = [...listProduct]
    newListProduct[id].amount = value;
    setListProduct(newListProduct)
  }

  function summaryPrice() {
    return listProduct.reduce(
      (sum, value) => sum + value.price * value.amount,
      0
    );
  }

  function removeProduct(id) {
    setListProduct(listProduct.filter((product) => product.id !== id));
  }

  return (
    <div
      className='fancybox-slider-wrap'
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2',
        width: '100vw',
        height: '100%',
      }}
    >
      <div
        className='fancybox-slider'
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          // overflow: 'auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: '3',
            background: '#fff',
            padding: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '10%',
            maxHeight: 'calc(80%)',
            overflowY: 'scroll',
          }}
        >
          <div className='shop_cart'>
            <div className='title'>
              <div className='tl txt_b txt_u txt_red'>Giỏ hàng</div>
              <input type='hidden' id='temp_total' defaultValue={0} />
            </div>
            <div className='clear space10px' />
            {/*Buoc 1 : gio hang*/}
            <div className='list-item-cart cor10px text-18'>
              <table
                className='tbl_cart text-center cor10px'
                cellPadding={5}
                style={{}}
              >
                <tbody>
                  <tr
                    id='shopping-cart-first-row'
                    className='txt_u txt_14 txt_b bg-gray cor10px'
                  >
                    <td style={{ width: '30%' }}>Sản phẩm</td>
                    <td style={{}} className='shopping-cart-price-col'>
                      Đơn giá
                    </td>
                    <td className='shopping-cart-quantity-col center'>
                      Số lượng
                    </td>
                    <td style={{}} className='shopping-cart-sum-col'>
                      Thành tiền
                    </td>
                    <td>Xóa</td>
                  </tr>

                  {listProduct.map((product, index) => (
                    <tr id='itm790' key={product.id}>
                      <td>
                        <div className='cartInfo-img'>
                          <div className href='/royal-canin-indoor-27-2kg.html'>
                            <img
                              src={product.img}
                              className='img-responsive'
                              alt={product.title}
                            />
                          </div>
                        </div>
                        <div className='sum'>
                          <div className='cartInfo-name'>
                            <div className style={{ fontSize: '14px' }}>
                              {product.title}
                            </div>
                            <br />
                          </div>
                        </div>
                      </td>
                      <td className='txt_red txt_b'>
                        <span id='sell_price_pro_790'>{product.price}</span> đ
                      </td>
                      <td className>
                        <input
                          className='txt_center cor3px space5px'
                          name='quantity_pro_790'
                          id='quantity_pro_790'
                          onChange={(e) => {
                            changeAmount(e.target.value, index);
                          }}
                          type='number'
                          value={product.amount}
                          style={{ width: '50px' }}
                        />
                      </td>
                      <td className='txt_red txt_b'>
                        <span id='price_pro_790'>
                          {product.price * product.amount}
                        </span>{' '}
                        đ
                      </td>
                      <td>
                        <span
                          className='i-del'
                          onClick={() => {
                            removeProduct(product.id);
                          }}
                        >
                          <i className='fa fa-remove' />
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr style={{ fontSize: '14px' }}>
                    <td colSpan={5} className='txt_right'>
                      <div style={{ lineHeight: '26px' }}>
                        <input
                          type='hidden'
                          name='send_order'
                          defaultValue='yes'
                        />
                        <input
                          type='hidden'
                          name='item_update_quantity'
                          id='item_update_quantity'
                          defaultValue=',pro-790,'
                        />
                        <input
                          type='hidden'
                          name='update_quantity'
                          defaultValue='yes'
                        />
                        <input
                          type='hidden'
                          name='total_cart_value'
                          id='total_cart_value'
                          defaultValue=''
                        />
                        <input type='hidden' id='discount_code' defaultValue />
                        Tổng cộng :{' '}
                        <span
                          className='sub1 txt_18 txt_red total_value_step txt_b'
                          id='total_value'
                        >
                          {summaryPrice()}
                        </span>
                        <span className='txt_red'> đ</span>
                        <br />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='txt_left'>
                      <span
                        className='txt_red txt_18 txt_b'
                        style={{ float: 'left', cursor: 'pointer' }}
                        onClick={showCart}
                      >
                        <i className='fa fa-angle-double-left' /> Tiếp tục mua
                        hàng
                      </span>
                    </td>
                    <td colSpan={4} className='txt_right'>
                      <div style={{ float: 'right' }}>
                        <a
                          className='btn btn-red txt_center txt_u addCart'
                          href='/gio-hang?step=2&show=online'
                          style={{ marginRight: '20px' }}
                        >
                          MUA HÀNG ONLINE
                        </a>
                        <a
                          className='btn btn-blue txt_center txt_u addCart'
                          href='/gio-hang?step=2&show=offline'
                          style={{ display: 'none' }}
                        >
                          ĐẶT ONLINE <br />
                          ĐẾN CỬA HÀNG NHẬN HÀNG
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '100%',
            background: '#000',
            opacity: '0.7',
            zIndex: '2',
          }}
          onClick={showCart}
        />
      </div>
    </div>
  );
}
