import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from './../Assets/cart_cross_icon.png'
import { ShopContext } from "../../Context/Shopcatagorycontext";


const CartItems = () => {
  const { getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="carticon-remove-button"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart();
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount}</h3>
            </div>
          </div>
          <button>proceed to checkout</button>
        </div>
        <div className="cartitem-promocode">
          <p>if you have a promocode enter it here.</p>
          <div>
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItems;
