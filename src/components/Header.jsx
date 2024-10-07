const Header = () => {
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className=" flex items-center gap-8">
                <h1 className="text-3xl text-red-700 uppercase font-bold">Movie</h1>
                <nav className="">
                    <ul className="flex list-none space-x-4">
                        <li ><a className="text-white no-underline hover:text-red-700" href="">Home</a></li>
                        <li ><a className="text-white no-underline hover:text-red-700" href="">About</a></li>
                        <li ><a className="text-white no-underline hover:text-red-700" href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-2 border border-gray-300 text-black"/>
                <button className="text-white rounded-xl bg-red-700 p-2">Search</button>
            </div>
            
        </div>
    )
    
}

export default Header