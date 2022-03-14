import React from "react";
import {useState} from "react";
import "./styles/SearchForm.css"


const SearchBar = () => {
    const [ setSearchTerm] = useState("");
    return (
        <>
        <form class="form-inline my-2 my-lg-0">
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
      </form>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a className="navbar-brand" href="/Search"> Search</a></button>
        </>
        
    )
}

export default SearchBar  