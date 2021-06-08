import React from 'react'
import Search from './Search'
import AddProductButton from './AddProductButton'
import ProductsTable from './ProductsTable'

const Products = () => {
    return (
        <div className='products'>
            <Search />
            <AddProductButton />
            <ProductsTable />
        </div>
    )
}

export default Products
