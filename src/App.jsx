import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
