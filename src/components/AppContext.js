import React, { useState } from 'react';

export const AppContext = React.createContext();

const Context = ({ children }) => {
 const [navbarSelect, setNavbarSelect] = useState('');
  const [productsList, setProductsList] = useState([
    {
      name: 'lemon',
      imageURL: '#',
      weight: 10,
      weightPlus: 12,
      price: 10000,
      priceOff: 9000,
      stock: 12,
      status: 'coming soon'
    },
    {
      name: 'apple',
      imageURL: '#',
      weight: 5,
      weightPlus: 6,
      price: 50000,
      priceOff: 40000,
      stock: 25,
      status: 'available'
    },
    {
      name: 'banana',
      imageURL: '#',
      weight: 2,
      weightPlus: 3,
      price: 100000,
      priceOff: 90000,
      stock: 18,
      status: 'stop'
    }
  ])


  return (
    <AppContext.Provider
      value={{
        navbarSelect,
        setNavbarSelect,
        productsList,
        setProductsList
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
