import React from "react";
import "./styles/SearchForm.css"

const SearchBar = () => {
   
    return (
        <>
            <div className="input-group input-group-rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" size="20%"/>
                <span className="input-group-text border-4" id="search-addon">
                    <i className="fa fa-search"></i>
                </span>
            </div>

        </>
    )
}

export default SearchBar  