import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

const SearchPage = () => {
  const { searchText, productsList, setProductsList } = useContext(AppContext);
    const [searchedList, setSearchedList] = useState([])

  const removeItem = (e) => {
    const {id} = e.target.parentNode.parentNode; 
    setProductsList(productsList.filter(item => item.id !== id))
  }

  useEffect(() => {
        setSearchedList(productsList.filter(item => item.name === searchText))
        // eslint-disable-next-line 
  },[searchedList])
  

  return (
    <div>
      <button>
        <Link to="products">بازگشت</Link>
      </button>

      <div className="products-table">
        <table>
          <tr>
            <th>ویراش/حذف</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>عنوان محصول</th>
            <th>ردیف</th>
          </tr>

          {searchedList.map((item, index) => 
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
    </div>
  );
};

export default SearchPage;
