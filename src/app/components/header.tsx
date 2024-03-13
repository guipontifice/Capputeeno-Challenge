"use-client"
import { Saira_Stencil_One } from "next/font/google"
import { SearchIcon } from "./search-icon"
import { CartIcon } from "./cart-icon"
import { PrimaryInputWithIcons } from "./primary-input"
const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
})
interface HeaderProps {

}

export function Header(props: HeaderProps) {
    return (
        <header className="flex items-center justify-center mx-10 my-8">
            <div className={`${sairaStencil.className} px-3 md:mr-32 2xl:mr-96 mt-6 leading-150 text-3xl text-logo-color`}>Capputeeno</div>
            <div className="md:ml-32 2xl:ml-96 mt-6 leading-150">
                <PrimaryInputWithIcons />
            </div>
        </header>
    )
}
