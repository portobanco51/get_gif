import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({ cat, setCat }) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input !== '') {
            setCat([...cat, input])
            setInput('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="SearchBar" className='searchbar-title'>Search: </label>
            <input type="text" value={input} onChange={handleInputChange} name="SearchBar" placeholder='Type something...' id="SearchBar" className='search-input' />
        </form>
    )
}


AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired
}