import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({ cat, setCat }) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim().length > 2) {
            setCat([input, ...cat])
            setInput('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInputChange} name="SearchBar" placeholder='Search something...' id="SearchBar" className='search-input' />
        </form>
    )
}


AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired
}