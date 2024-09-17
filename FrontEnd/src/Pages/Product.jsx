import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import RelatedP from '../components/Related/RelatedP'
const Product = () => {

    const {items_list}=useContext(ShopContext)
    const {productId}=useParams();
    const product=items_list.find((e)=>e.id===productId)
    return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay  product={product}/>
        <RelatedP  product={product}/>
    </div>
  )
}

export default Product