import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cart from './components/Cart';
import ListItem from './components/ListItem';
import Navbar from './components/Navbar';
import Login from './components/Login';

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



function App() {
  const [showCart, setShowCart] = useState(false);
  const [listProductDog, setListProductDog] = useState()
  const [listProductCat, setListProductCat] = useState()
  const [isHidden, setIsHidden] = useState(false)
  function _showCart() {
    setShowCart(!showCart);
  }

  useEffect(() => {
    getDataCategoryProducts(2, setListProductDog)
    getDataCategoryProducts(4, setListProductCat)
  }, [])

  function getDataCategoryProducts(categoryId, setFn) {
    axios.get(`http://localhost:8000/api/categories/get-products/${categoryId}`)
      .then(function (response) {
        const data = response.data.slice(0, 9)

        const listProduct = data.map(item => {
          return {
            title: item.name,
            price: item.price + ".000đ",
            link: '/',
            img: item.imageDTOs[0].url
          }
        })
        setFn(listProduct)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div
      className='container homepage'
      style={{ overflow: showCart ? 'hidden' : 'auto', height: showCart ? '100vh' : 'auto' }}
    >
      {isHidden && (
        <>
          <Login setIsHidden={setIsHidden}/>
          <div className="shadown-full"> </div>
        </>
      )}

      <Navbar setIsHidden={setIsHidden} showCart={_showCart} />
      <ListItem name={nameDog} menu={menuDog} items={listProductDog} />
      <div className='clear' />
      <ListItem name={nameCat} menu={menuCat} items={listProductCat} />
      <div className='clear' />
      {showCart && <Cart showCart={_showCart} />}
    </div>
  );
}

export default App;
