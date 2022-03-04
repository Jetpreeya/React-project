import React, { useState } from "react";
import "./styles/SearchForm.css"
import DATA from "../Data";

const SearchBar = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = DATA.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    return (
            <div className="input-group input-group-rounded py-4">
                  <input type="text" className="from-control" value={filter} onChange={searchText.bind(this)}/>
                <span className="input-group-text border-4" id="search-addon">
                    <i className="fa fa-search"></i>
                </span>
             </div>
            )
    }


export default SearchBar  