import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'

const AddProduct = () => {
    const {productsList, setProductsList} = useContext(AppContext);
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [weight, setWeight] = useState();
    const [weightPlus, setWeightPlus] = useState();
    const [price, setPrice] = useState()
    const [priceOff, setPriceOff] = useState();
    const [stock, setStock] = useState();
    const [status, setStatus] = useState('coming soon');

    const submit = (e) => {
        e.preventDefault();
        const data = {name, imageURL, weight, weightPlus, price, priceOff, stock, status }
        setProductsList([ data, ...productsList]);
        setName('');
        setImageURL('');
        setWeight('');
        setWeightPlus('');
        setPrice('');
        setPriceOff('');
        setStock('');
        setStatus('coming soon')
    }



    return (
        <div className='add-product-page'>
            <button><Link to='products'>بازگشت</Link></button>
            <h2>اضافه کردن محصول جدید</h2>

            <form onSubmit={submit}>
                <input placeholder='عنوان محصول' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='لینک تصویر محصول' type='url' value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                <input placeholder='وزن' type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
                <input placeholder='وزن با بسته بندی' type='number' value={weightPlus} onChange={(e) => setWeightPlus(e.target.value)} />
                <input placeholder='قیمت' type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                <input placeholder='قیمت با تخفیف' type='number' value={priceOff} onChange={(e) => setPriceOff(e.target.value)} />
                <input placeholder='موجودی' type='number' value={stock} onChange={(e) => setStock(e.target.value)} />
                <select value={status} onChange = {(e) => setStatus(e.target.value)}>
                    <option value="coming soon">بزودی</option>
                    <option value="available">در دسترس</option>
                    <option value="stop">توقف تولید</option>
                </select>
                <button type='submit'>ثبت</button>
            </form>
        </div>
    )
}

export default AddProduct
