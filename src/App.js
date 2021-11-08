import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ListItem from './components/ListItem';
import Navbar from './components/Navbar';
const nameDog = 'Shop cún cưng';
const nameCat = 'Shop mèo cưng';

const menuDog = [
  { title: 'Thức ăn cho chó', sort: '' },
  { title: 'Pate cho chó', sort: '' },
  { title: 'Thức ăn khô', sort: '' },
  { title: 'Quần áo cho chó', sort: '' },
  { title: 'Vòng cổ, dây dắt, rọ mõm chó mèo', sort: '' },
  { title: 'Vật dụng ăn uống cho chó', sort: '' },
  { title: 'Bát, chén ăn', sort: '' },
  { title: 'Bình nước ', sort: '' },
];

const menuCat = [
  { title: 'Thức ăn cho mèo', sort: '' },
  { title: 'Chuồng, giường, nhà, túi', sort: '' },
  { title: 'Nhà, nệm, giường cho mèo', sort: '' },
  { title: 'Vòng cổ, dây dắt, rọ mõm', sort: '' },
  { title: 'Vật dụng ăn uống', sort: '' },
  { title: 'Bát, chén ăn', sort: '' },
  { title: 'Bình nước', sort: '' },
  { title: 'Y tế và thuốc cho mèo', sort: '' },
];

const listDog = [
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/product/250_4760_b__nh_treo_chu___ng_v__t_500ml2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/product/250_4760_b__nh_treo_chu___ng_v__t_500ml2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/product/250_4760_b__nh_treo_chu___ng_v__t_500ml2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/product/250_4760_b__nh_treo_chu___ng_v__t_500ml2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Sữa tắm gội Tropiclean trị ve và bọ chét 592ml',
    img: 'https://www.petcity.vn/media/product/250_4760_b__nh_treo_chu___ng_v__t_500ml2.jpg',
    price: '395.000đ',
    link: '/',
  },
];

const listCat = [
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/banner/20_Maya16f779002f7bc582b44b7de773be4e2.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/product/250_4772_3.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/product/250_4772_3.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/product/250_4772_3.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/product/250_4772_3.jpg',
    price: '395.000đ',
    link: '/',
  },
  {
    title: 'Khăn siêu thấm nhỏ cho chó mèo',
    img: 'https://www.petcity.vn/media/product/250_4772_3.jpg',
    price: '395.000đ',
    link: '/',
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  function _showCart() {
    setShowCart(!showCart);
  }

  return (
    <div
      className='container homepage'
      style={{ overflow: showCart ? 'hidden' : 'auto', height: showCart ? '100vh' : 'auto' }}
    >
      <Navbar showCart={_showCart} />
      <ListItem name={nameDog} menu={menuDog} items={listDog} />
      <div className='clear' />
      <ListItem name={nameCat} menu={menuCat} items={listCat} />
      <div className='clear' />
      {showCart && <Cart showCart={_showCart} />}
    </div>
  );
}

export default App;
