import { nanoid } from "nanoid"
import React, { useState } from "react"
import css from "./SearchInput.module.css"

export const SearchInput = ({onFilter}) => {
    const [filter, setFilter] = useState('');

    const finderInputId = nanoid();

    const handleSetState = (e) => {
        
        const { value } = e.currentTarget;
        e.preventDefault();
        setFilter(value);
        onFilter(value);
    }

    return (
        <>
            <label
                className={css.search_title}
                htmlFor={finderInputId}>
                Find contacts by name
            </label>
            <input
                className={css.search_input}
                type="text"
                name="filter"
                id={finderInputId}
                value={filter}
                onChange={handleSetState}
                required
            />
        </>
    )
}