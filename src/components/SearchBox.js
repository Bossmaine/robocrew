import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                type='search' 
                placeholder="Search Crew"
                className="pa2 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;