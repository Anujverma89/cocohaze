import { Link } from "react-router";
import { useLocation } from "react-router";

const Header: React.FC<any> = () => {
    const linkStyle ="navigationButton";
    const highlightedLink = "navigationButton bordergradient"
    const location = useLocation();
    return (
        <>
            <div className="h-14 items-center  flex justify-center flex-row">
                <div className="rounded-4xl h-full md:w-[50%] lg:w-[40%] border-2 border-gray-500 flex min-w-fit max-w-fit px-1 items-center">
                    <ul className="headerbackground-color  rounded-4xl h-[90%] items-center justify-around min-w-fit flex">
                        <Link to="" id="home"  className={location.pathname === "/" ? highlightedLink : linkStyle}>Home</Link>
                        <Link to="/about"  id="about"  className={location.pathname ==="/about"  ? highlightedLink : linkStyle}>About</Link>
                        <Link to="/installation" id="installation"  className={location.pathname === "/installation" ? highlightedLink : linkStyle}>Installation</Link>
                        <Link to="/docs" id="docs"  className={location.pathname === "/docs" ? highlightedLink : linkStyle}>Docs</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;