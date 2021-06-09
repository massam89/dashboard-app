import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {AppContext} from './AppContext'

const Search = () => {
    const {searchText, setSearchText} = useContext(AppContext)
  
    return (
        <div className='search'>
            <input onChange={(e) => setSearchText(e.target.value)} value={searchText} type='text' placeholder='جستجو در عنوان' />
            <button><Link to='/search'>جستجو</Link></button>
        </div>
    )
}

export default Search
