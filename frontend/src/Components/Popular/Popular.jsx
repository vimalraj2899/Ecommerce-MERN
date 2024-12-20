import React, { useEffect, useState, useContext } from 'react'
import './Popular.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item'

const Popular = () => {
   const [popularProducts, setPopularProducts] = useState([]);
   const {apiUrl} = useContext(ShopContext)

   useEffect(()=>{
         fetch(`${apiUrl}/popularinwomen`)
         .then((res)=> res.json())
         .then((data)=>setPopularProducts(data))
   }, [])

  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Popular