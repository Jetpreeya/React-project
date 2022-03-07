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
            <section className="py-4 container">
                <div className = "row justify-content-center">
                    <div className="col-12 mb-5">
                        <div className ="mb-3 col-4 mx-auto text-center">
                            <h2 className ="form-label h4"> Search</h2>
                            <input type ="text" className ="from-control" value={filter} onChange = {searchText.bind(this)}/>

                        </div>
                    </div>

                    


                   
                    </div>
            </section>
        )
            
    
}

export default SearchBar  