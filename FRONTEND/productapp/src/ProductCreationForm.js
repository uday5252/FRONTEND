import Axios from 'axios'
import React, { useState } from 'react'

function ProductCreationForm() {

    const [ name, setName ] = useState("")
    const [ price, setPrice ] = useState(0)
    const [ category, setCategory ] = useState("")
    const [ imageUrl, setImageUrl ] = useState("")

    function collectName(event){
        setName(event.target.value)
    }

    function collectPrice(event){
        setPrice(event.target.value)
    }

    function collectCategory(event){
        setCategory(event.target.value)
    }

    function collectImageUrl(event){
        setImageUrl(event.target.value)
    }

    function sendData(){
        // Logic to send all the form details to the backend
        Axios.post("https://mern-backend-gxnq.onrender.com/collect/product", {
            name: name,
            price: price,
            category: category,
            image_url: imageUrl
        })

    }

    return (
        <div className="container mt-5">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Add New Product</h2>
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter product name"
                  onChange={collectName}
                  required
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Enter price"
                  onChange={collectPrice}
                  required
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  placeholder="Enter category"
                  onChange={collectCategory}
                  required
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  className="form-control"
                  placeholder="Enter image URL"
                  onChange={collectImageUrl}
                  required
                />
              </div>
    
              <button type="submit" className="btn btn-primary w-100">
                Add Product
              </button>
            </form>
          </div>
        </div>
    )
}

export default ProductCreationForm
