import React, { useState } from "react"
import { saveSearch } from "../api/api"

function SearchBar() {

  const [query, setQuery] = useState("")

  const handleSearch = async () => {

    if(!query) return

    await saveSearch(query)

    alert("Search saved")

  }

  return (

    <div className="fall">

      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search here..."
      />

      <button style={{color:"white",backgroundColor:"orange"}} onClick={handleSearch}>
        Search
      </button>

    </div>

  )

}

export default SearchBar