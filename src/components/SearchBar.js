import { useState, createContext } from "react";

export default function SearchBar(){
    const [search, setSearch] = useState("");

    const LatitudeContext = createContext(null);
    const LongitudeContext = createContext(null);

    function handleSearch(e){
        e.preventDefault();
        console.log(search)
    }

    return (
        <form>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit" onClick={handleSearch}>Search</button>
        </form>
    )
}