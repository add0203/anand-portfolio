import React from 'react'
import Product from '../products/product'
import './productList.css'
import projects from '../data'


const ProductList = ()=> {
  return (
  
      <div className="prolist">
        <div className="prolist-text">
            <h1 className="prolist-title">Projects</h1>
            <p className="prolist-decs">All of the project mentioned are completed in my learning phase, and there is room for improvments.</p>
        </div>
      <div className="prolist-list">
        {projects.map((item)=>(
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}  
      </div>
      </div>

  )
}

export default ProductList
