"use-client"
import { Saira_Stencil_One } from "next/font/google"
const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
})
interface HeaderProps {

}

export function Header(props: HeaderProps) {
    return (
        <header className="flex align-middle justify-between px-3 py-8 ">
            <div className={`${sairaStencil.className} leading-150 text-3xl text-logo-color`}>Capputeeno</div>
            <div></div>
        </header>
    )
}
