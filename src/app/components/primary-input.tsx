import { SearchIcon } from "./search-icon"
import { CartIcon } from "./cart-icon"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}
export function PrimaryInputWithIcons(props: InputProps) {
    return (
        <>
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center bg-bgSecondary">
                    <input className={`w-96 pl-2 h-10 text-dark rounded-md bg-bgSecondary text-base`}
                        placeholder="Procurando por algo específico?" />
                    <div className="pr-2">
                        <SearchIcon />
                    </div>
                </div>
                <div className=" ml-2">
                    <CartIcon />
                </div>
            </div>
        </>
    )
}