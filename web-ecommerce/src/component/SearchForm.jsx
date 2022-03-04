import React from "react";
import "./styles/SearchForm.css"

const SearchBar = () => {
   
    return (
        <>
            <div class="input-group input-group-rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" size="20%"/>
                <span class="input-group-text border-4" id="search-addon">
                    <i class="fa fa-search"></i>
                </span>
            </div>

        </>
    )
}

export default SearchBar  