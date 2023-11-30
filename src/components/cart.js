import {useSelector, useDispatch} from "react-redux"
import { handleDecrement, handleIncrement, removeProduct, selectTotalCost } from "../store/slices/cartSlice";
import "./cart.css"
import { useEffect } from "react";


const Cart = () => {
    const dispatch = useDispatch();
    const myProducts = useSelector((store)=> store.cart)

useEffect(()=>{
  dispatch(selectTotalCost(myProducts.Products))
})


    return(
        <div className="cart-wrapper">
            {myProducts.Products.map((product,index)=>(
            <>
            <div className="cart-container">
            <div className="img-container">
                <img className="product-image" src={product.thumbnail} alt="product" />
            </div>
            <div className="detail-container">
                <div className="title-container">
                    <h1 className="inline-block">{product.title}</h1>
                </div>
                <div className="description-container">
                    <p className="inline-blocks">{product.description}</p>
                </div>
            </div>
            <div className="price-quantity-container">
                <div className="price-container">
                  <div>
                    <button className="decrement-btn" onClick={()=> dispatch(handleDecrement(product.id))}>-</button>
                    <span>{product.count}</span>
                    <button className="increment-btn" onClick={()=> dispatch(handleIncrement(product.id))}>+</button>
                  </div>
                  <div>
                    <strong className="price">
                        Price: {product.price}
                    </strong>
                  </div>
                </div>
                <div className="btn-container">
                    <button className="remove-btn" onClick={()=> dispatch(removeProduct(product.id))}>
                        REMOVE
                    </button>
                </div>
                </div>
                </div>
                <div className="sub-total">
                    <h3>Subtotal</h3>
                    <h3>${product.price * product.count}</h3>
                </div>
                <hr className="line"></hr>
            </>
            ))}
            <div className='bottom-container'>
            <div className='last-line'>
                <h3>Shipping</h3>
                <h5>FREE</h5>
            </div>
            <div className='last-line'>
                <h3>Total</h3>
                <h3>${myProducts.total}</h3>
            </div>
        </div>
        </div>
    )
}

export default Cart;