import React, {useContext} from "react";
import {AppContext} from './AppContext'

const ProductsTable = () => {
  const {productsList} = useContext(AppContext)

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
        <tr key={index}>
          
          <td>ویرایش</td>
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
