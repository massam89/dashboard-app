import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'

const EditPage = () => {
const {editProduct, productsList, setProductsList} = useContext(AppContext)

const [name, setName] = useState('');
const [imageURL, setImageURL] = useState('');
const [weight, setWeight] = useState();
const [weightPlus, setWeightPlus] = useState();
const [price, setPrice] = useState()
const [priceOff, setPriceOff] = useState();
const [stock, setStock] = useState();
const [status, setStatus] = useState('coming soon');

useEffect(() => {
  const data = productsList.filter(item => item.id === editProduct)
  setName(data[0].name)
  setImageURL(data[0].imageURL)
  setWeight(data[0].weight)
  setWeightPlus(data[0].weightPlus)
  setPrice(data[0].price)
  setPriceOff(data[0].priceOff)
  setStock(data[0].stock)
  setStatus(data[0].status)
  // eslint-disable-next-line
}, [editProduct])

const submit = (e) => {
  e.preventDefault();
  const data1 = productsList.filter(item => item.id !== editProduct);
  const data2 = {
    id: editProduct,
    name,
    imageURL,
    weight,
    weightPlus,
    price,
    priceOff,
    stock,
    status
  }

  setProductsList([data2, ...data1])
}
  return (
    <div>
      <button>
        <Link to="products">بازگشت</Link>
      </button>
          <div className='add-product-page'>
            <form onSubmit={submit}>
              <input placeholder='عنوان محصول' type='text' value={name} onChange={(e) => setName(e.target.value)} />
              <input placeholder='لینک تصویر محصول' type='url' value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
              <input placeholder='وزن' type='number' value={weight} onChange={(e) => setWeight(e.target.value)}/>
              <input placeholder='وزن با بسته بندی' type='number' value={weightPlus} onChange={(e) => setWeightPlus(e.target.value)}/>
              <input placeholder='قیمت' type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
              <input placeholder='قیمت با تخفیف' type='number' value={priceOff} onChange={(e) => setPriceOff(e.target.value)}/>
              <input placeholder='موجودی' type='number' value={stock} onChange={(e) => setStock(e.target.value)}/>
              <select value={status} onChange = {(e) => setStatus(e.target.value)}>
                  <option value="coming soon">بزودی</option>
                  <option value="available">در دسترس</option>
                  <option value="stop">توقف تولید</option>
              </select>
              <button type='submit'>ثبت</button>
            </form>
          </div>
    </div>
  );
};

export default EditPage;
