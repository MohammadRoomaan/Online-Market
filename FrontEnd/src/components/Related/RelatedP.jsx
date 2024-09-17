import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import SProducts from '../SpecialProducts/SProducts'

const RelatedP = (props) => {
    const { product } = props;
    const { items_list } = useContext(ShopContext);
    const relatedproducts = items_list.filter((e) => e.category === product.category);

    return (
        <div className='p-4'>
            <h2 className='text-lg font-semibold mb-4'>Related Products</h2>
            <div className='flex overflow-x-auto space-x-4 pb-4'>
                {relatedproducts.map((singleproduct, index) => (
                    <SProducts
                        id={singleproduct.id}
                        name={singleproduct.name}
                        img={singleproduct.image}
                        price={singleproduct.price}
                        description={singleproduct.description}
                        category={singleproduct.category}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedP;
