import { useLocalStorage } from "../hooks/useLocalStorage"
import { CartIcon } from "./cart-icon"

const CartCount = () => {
    <div className="w-4 h-4 text-white bg-delete"></div>
}
export function CartControl() {
    const { value } = useLocalStorage('cart-items');

    return (
        <div>
            <CartIcon />
            {value.length && <CartCount>{value.length}</CartCount>}
        </div>
    )
}