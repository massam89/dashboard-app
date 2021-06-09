import React, {useContext} from "react";
import {AppContext} from './AppContext'

const ProductsTable = () => {
  const {productsList, setProductsList} = useContext(AppContext)

  const removeItem = (e) => {
    const {id} = e.target.parentNode.parentNode; 
    setProductsList(productsList.filter(item => item.id !== id))
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
          <i className="fas fa-edit"></i>
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
