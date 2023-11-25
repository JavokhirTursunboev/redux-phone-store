import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
