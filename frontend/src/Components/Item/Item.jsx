import React ,{useContext} from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
  const {apiUrl} = useContext(ShopContext)
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)}src={`${apiUrl}${props.image}`} alt=""/>
        </Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
            ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item