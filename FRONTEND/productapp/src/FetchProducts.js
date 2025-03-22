import React, { useState } from 'react'
import Axios from "axios"
import "./output.css"

function FetchProducts() {

    const [ allProducts, setAllProducts ] = useState([])

    Axios.get("http://localhost:8000/fetch/products")
    .then(function(output){
        setAllProducts(output.data.data)
    })
    .catch(function(error){
        console.log(error)
    })

    
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        {
            allProducts.map(function(i){
                return <div class="card" style={{width: "18rem"}}>
                <img src={i.image_url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{i.name}</h5>
                  <h5 class="card-title">{i.category}</h5>
                  <h5 class="card-title">{i.price}</h5>
                </div>
              </div>
            })
        }

    </div>
  )
}

export default FetchProducts