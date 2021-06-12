import React, {useState, useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'
import { v4 as uuidv4 } from 'uuid';

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
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)
    const [checkbox, setCheckbox] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if(name && imageURL && weightPlus && weight && price && stock && status){
            const data = {id: uuidv4(), name, imageURL, weight, weightPlus, price, priceOff, stock, status }
            setProductsList([ data, ...productsList]);
            setName('');
            setImageURL('');
            setWeight('');
            setWeightPlus('');
            setPrice('');
            setPriceOff('');
            setStock('');
            setStatus('coming soon')
            setMessage(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    useEffect(() => {
      setTimeout(() => {setMessage(false)}, 3000)
    }, [message])


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
                <label for='checkbox'>قیمت محصول با تخفیف</label>
                <input id='checkbox' placeholder='قیمت' type='checkbox' value={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
                {checkbox && <input placeholder='قیمت با تخفیف' type='number' value={priceOff} onChange={(e) => setPriceOff(e.target.value)} />}
                <input placeholder='موجودی' type='number' value={stock} onChange={(e) => setStock(e.target.value)} />
                <select value={status} onChange = {(e) => setStatus(e.target.value)}>
                    <option value="coming soon">بزودی</option>
                    <option value="available">در دسترس</option>
                    <option value="stop">توقف تولید</option>
                </select>
                <button type='submit'>ثبت</button>
                {message && <p>محصول ثبت شد</p>}
                {error && <p>لطفا تمامی فیلدها را پر کنید</p>}
            </form>
        </div>
    )
}

export default AddProduct