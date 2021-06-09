import React, {useContext} from "react";
import {AppContext} from './AppContext'
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const {productsList, setProductsList, setEditProduct} = useContext(AppContext)

  const removeItem = (e) => {
    const {id} = e.target.parentNode.parentNode; 
    setProductsList(productsList.filter(item => item.id !== id))
  }

  const editClick = (e) => {
    const {id} = e.target.parentNode.parentNode.parentNode
    setEditProduct(id)
  }

  return (
    <div className="products-table">
      <table>
        <tr>
          <th>ویراش/حذف</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>عنوان محصول</th>
          <th>ردیف</th>
        </tr>

        {productsList.map((item, index) => 
        <tr key={index} id= {item.id}>
          <td>
          <Link to='edit-product' onClick= {editClick}><i className="fas fa-edit"></i></Link>
          <i className="fas fa-trash-alt" onClick={removeItem}></i>
          </td>
          <td>{item.price}</td>
          <td>{item.stock}</td>
          <td>{item.name}</td>
          <td>{index+1}</td>
        </tr>
        )}
        
      </table>
    </div>
  );
};

export default ProductsTable;
