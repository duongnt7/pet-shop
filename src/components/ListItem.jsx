import React from 'react';

export default function ListItem({ name, menu, items }) {
  return (
    <div className='box-pro-home floor-1' id='box-pro-home131'>
      <div className='pro-home-left'>
        <div className='title-product-list-2'>
          <h2>{name}</h2>
        </div>
        <div
          className='title-pro-home'
          id='title-pro-home131'
          style={{ marginTop: '-32px' }}
        />
        <div className='sub-cat-pro-home'>
          {menu.map((men, index) => (
            <div className='subcat1' key={index}>
              <h2>{men.title}</h2>
            </div>
          ))}
        </div>
        <div className='banner-left-cat-pro-home'>
          <ul id='banner-left-cat-pro-home131' className='ul hover-1'>
            <li>
              <a href='https://www.petcity.vn/cho-131.html'>
                <img
                  src='https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg'
                  alt=''
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='pro-home-right'>
        <div className='product-list-home'>
          <ul className='ul' id='row_131'>
            {items?.map((item, index) => (
              <li key={index}>
                <div className='p_container'>
                  <div className='type' />
                  <div className='newp-img'>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className='newp-name'>{item.title}</div>
                  <div className='p-price'>{item.price}</div>
                  <div className='btn-violet add home'>CHỌN MUA</div>
                </div>
              </li>
            ))}
          </ul>
          <a
            href='https://www.petcity.vn/cho-131.html'
            className='hn-more transition'
          >
            Xem tất cả <i className='fa fa-caret-right' />
          </a>
        </div>
      </div>
      <div className='clear' />
    </div>
  );
}
