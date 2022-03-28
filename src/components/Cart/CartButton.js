import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button onClick={() => cartToggleHandler()} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
