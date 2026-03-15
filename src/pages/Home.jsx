import React from "react"
import SearchBar from "../components/SearchBar.jsx"

function Home() {

  const enableGravity = () => {

    const elements = document.querySelectorAll(".fall")

    elements.forEach(el => {

      el.style.position = "absolute"
      el.style.transition = "top 5s"

      el.style.top = "600px"

    })

  }

  return (

    <div style={{textAlign:"center", marginTop:"120px"}}>

      <h1 className="fall">Anti Gravity Search</h1>

      <SearchBar />

      <br/>

      <button style={{backgroundColor:"red",color:"white"}} className="fall" onClick={enableGravity}>
        Activate Anti Gravity
      </button>

    </div>

  )

}

export default Home