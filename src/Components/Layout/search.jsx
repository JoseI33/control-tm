import { useState } from 'react';

const SearchSpare = (onSearch) => {
   const [query, setQuery] = useState("");

   const handleSearch = () => {
        onSearch(query);
    }

    return (
        <div className='d-flex justify-content-center mt-5 pt-5'>
            <input type="text" className='form-control w-50 me-2' 
            placeholder='Buscar por nombre...' value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button className='btn btn-primary' onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
}

export default SearchSpare;