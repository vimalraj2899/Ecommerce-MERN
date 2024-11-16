import React, { useEffect, useState, useContext } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import { ShopContext} from '../../Context/ShopContext'

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);
  const {apiUrl} = useContext(ShopContext)

  useEffect(()=>{
    fetch(`${apiUrl}/newcollections`)
    .then((res)=>res.json())
    .then((data)=>{
      setNew_Collection(data)
    })

  }, [])

  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections