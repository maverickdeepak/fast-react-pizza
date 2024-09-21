import { useDispatch } from 'react-redux';
import { Button } from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { removeFromCart } from './cartSlice';

function CartItem({ item }) {
  const { pizzaid, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(pizzaid));
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={removeItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
