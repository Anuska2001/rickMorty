import Styles from './Search.module.scss';
import React from 'react'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex flex-sm-row flex-column allign-items-center justify-content-center gap-4 mb-5'>
        <input onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }} 
        placeholder='Search for a Character' type="text" className={Styles.input} />
        <button onClick={e=>{
            e.preventDefault()
        }} className={`${Styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search