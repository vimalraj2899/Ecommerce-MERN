import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
             <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>
             <p>The standard definition of E-commerce is a commercial transaction which is happened over the internet. Online stores like Amazon, Flipkart, Shopify, Myntra, Ebay, Quikr, Olx are examples of E-commerce websites.</p> 
        </div>
    </div>
  )
}

export default DescriptionBox