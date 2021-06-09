import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'

const EditPage = () => {
const {editProduct, productsList} = useContext(AppContext)
const [editProfileDetail, setEditProfileDetail] = useState()
console.log(editProfileDetail)
useEffect(() => {
  setEditProfileDetail(productsList.filter(item => item.id === editProduct))
}, [])

const submit = () => {

}
  return (
    <div>
      <button>
        <Link to="products">بازگشت</Link>
      </button>
        {editProfileDetail &&
            <form onSubmit={submit}>
            <input placeholder='عنوان محصول' type='text' value={editProfileDetail[0].name} />
            <input placeholder='لینک تصویر محصول' type='url' value={editProfileDetail[0].imageURL} />
            <input placeholder='وزن' type='number' value={editProfileDetail[0].imageURL} />
            <input placeholder='وزن با بسته بندی' type='number' value={editProfileDetail[0].weightPlus} />
            <input placeholder='قیمت' type='number' value={editProfileDetail[0].price} />
            <label for='checkbox'>قیمت محصول با تخفیف</label>
            <input id='checkbox' placeholder='قیمت' type='checkbox' />
            <input placeholder='قیمت با تخفیف' type='number' value={editProfileDetail[0].priceOff} />
            <input placeholder='موجودی' type='number' value={editProfileDetail[0].stock} />
            <select value={editProfileDetail[0].status} >
                <option value="coming soon">بزودی</option>
                <option value="available">در دسترس</option>
                <option value="stop">توقف تولید</option>
            </select>
            <button type='submit'>ثبت</button>
            
            </form>

        }
    
     
    </div>
  );
};

export default EditPage;
