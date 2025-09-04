import "./Header.css"

import { ChevronRight } from "lucide-react" 

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex flex-row justify-between bg-white p-1 px-[8rem] z-50">

            {/* nav bar */}
            <div className="flex flex-row items-center">
                <h1 className="mr-[5rem] text-(--color-green) text-3xl font-semibold">Ascone</h1>
                <div className="flex gap-4">
                    <a id="item" href="#">Features</a>
                    <a id="item" href="#">Accounts</a>
                    <a id="item" href="#">Company</a>
                    <a id="item" href="#">Insight</a>
                </div>
            </div>

            {/* login */}
            <div className="flex flex-row items-center">
                <a href="#">Login</a>
                <button className="flex flex-row gap-2 bg-(--color-green) text-white ml-8 p-2 px-6 rounded-3xl cursor-pointer">
                    Sign Up
                    <ChevronRight />
                </button>   
            </div>
        </div>
    )
}

export default Header