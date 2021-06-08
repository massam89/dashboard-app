import React from 'react'
import { Link } from "react-router-dom";

const AddProductButton = () => {
    return (
        <div className='add-product'>
            <button><Link to='/add-product'>اضافه کردن محصول</Link></button>
        </div>
    )
}

export default AddProductButton
