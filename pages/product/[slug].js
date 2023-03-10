import {React, useState} from 'react'

import { urlFor, client } from '@/lib/client'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import {Products} from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product, products}) => {
  const {image, name, details, price } = product;
  const {incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  console.log(incQty)

  const handleBuy = () => {
    onAdd(product, qty)
    setShowCart(true)
  }

  const [index, setIndex] = useState(0);
  return (
    
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} alt="" className='product-detail-image'/>
          </div>

          <div className="small-images-container">
            {image?.map((item, i) => (
              <img src={urlFor(item)} key={i} className={i === index ? 'small-image selected-image': 'small-image'} onMouseEnter={()=>setIndex(i)}/>
            ))}
          </div>
        </div>

          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                </div>
                <p>20</p>
            </div>
            <h4>Details:</h4>
            <p>{details}</p>
            <p className="price">$ {price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>

              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="minus">{qty}</span>
                <span className="minus" onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>

            <div className="buttons">
            <button type='button' className='add-to-cart' onClick = {()=>onAdd(product, qty)}>Add to Cart</button>
              <button type='button' className='buy-now' onClick={handleBuy}>Buy Now</button>
            </div>
          </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>

        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Products key={item._id} product={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export const getServerSideProps = async({params: {slug}}) =>{
    const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
    const productQuery = "*[_type == 'product']";

    const product = await client.fetch(query)
    const products = await client.fetch(productQuery)

    return{
        props: {product, products}
    }
}
export default ProductDetails