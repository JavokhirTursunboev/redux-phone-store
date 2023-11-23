import { useSelector } from "react-redux";
import { CartIcon } from "../icon";
const Navbar = () => {
  const {amount }= useSelector((store) => store.cart )
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
         <div className="amount-container">
          <p className="total-amount">{amount}</p>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
