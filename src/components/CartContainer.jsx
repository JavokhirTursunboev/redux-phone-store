import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartContainer() {

const {amount, total, cartItems}=useSelector((store) =>   store.cart)

if(amount < 1){
    return <section className="cart">
        <header>
            <h2>you bag</h2>
            <h4 className="empty-cart"> is currently empty</h4>
        </header>
    </section>
}

  return <section className="cart">
    <header>
        <h2>Your bag</h2>
        <div>
            {
                cartItems.map((item) => {
                  return <CartItem key={item.id} {...item} />
                })
            }
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button className="btn clear-btn">clear</button>
        </footer>
    </header>
  
  </section>
}

export default CartContainer;
