"use client"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { CartIcon } from "./cart-icon"

interface CartCountProps {
    count: number;
}
const CartCount: React.FC<CartCountProps> = ({ count }) => {
    return (
        <div className="flex justify-middle items-center">
            <span className="text-sm ml-3 rounded-full pl-1 pb-3 w-4 h-4 text-white bg-delete fixed">{count}</span>
        </div>
    )
}
export function CartControl() {
    const { value } = useLocalStorage('cart-items', ['1']);
    console.log(value)
    return (
        <div className="">
            <CartIcon />
            <div>
                {value.length && <CartCount count={value.length} />}
            </div>
        </div>
    )
}