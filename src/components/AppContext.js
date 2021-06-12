import React, { useState } from 'react';

export const AppContext = React.createContext();

const Context = ({ children }) => {
 const [navbarSelect, setNavbarSelect] = useState('counter');
  const [productsList, setProductsList] = useState([
    {
      id: '1',
      name: 'لیمو',
      imageURL: '#',
      weight: 10,
      weightPlus: 12,
      price: 10000,
      priceOff: 9000,
      stock: 12,
      status: 'coming soon'
    },
    {
      id: '2',
      name: 'سیب',
      imageURL: '#',
      weight: 5,
      weightPlus: 6,
      price: 50000,
      priceOff: 40000,
      stock: 25,
      status: 'available'
    },
    {
      id: '3',
      name: 'موز',
      imageURL: '#',
      weight: 2,
      weightPlus: 3,
      price: 100000,
      priceOff: 90000,
      stock: 18,
      status: 'stop'
    }
  ])

  const [searchText, setSearchText] = useState()

  const [editProduct, setEditProduct] = useState()

  return (
    <AppContext.Provider
      value={{
        navbarSelect,
        setNavbarSelect,
        productsList,
        setProductsList,
        searchText, 
        setSearchText,
        editProduct,
        setEditProduct
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
