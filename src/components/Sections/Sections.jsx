const Sections = ({ title, links }) => {
    return (
        <div>
            <h1 className="font-bold text-xl mb-5">{title}</h1>
            <ul>
                {links.map((link) => {
                    return <li className="mb-3 mr-12 text-gray-500">{link}</li>
                })}
            </ul>
        </div>
    )
}

export default Sections