import "./Header.css"

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex flex-row items-center justify-between bg-white p-4 pt-2 px-[8rem] z-50">
            {/* nav bar */}
            <div className="flex flex-row items-center">
                <h1 className="mr-[5rem] text-(--color-green) text-3xl font-semibold">Ascone</h1>
                <div className="flex gap-6">
                    <a href="#">Features</a>
                    <a href="#">Accounts</a>
                    <a href="#">Company</a>
                    <a href="#">Insight</a>
                </div>
            </div>

            {/* login */}
            <div>
                <a href="#">Login</a>
                <button className="bg-(--color-green) text-white ml-2 p-2 px-6 rounded-3xl">
                    Sign Up
                </button>
            </div>
        </div>

    )
}

export default Header