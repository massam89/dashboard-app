import React, {useState} from 'react'
import { Link } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState('')
    
    const submit = (e) => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div>
            <button><Link to='products'>بازگشت</Link></button>
            <h2>اضافه کردن محصول جدید</h2>

            <form onSubmit={submit}>
                <input placeholder='عنوان محصول' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>ثبت</button>
            </form>
        </div>
    )
}

export default AddProduct
