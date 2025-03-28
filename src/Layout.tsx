import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect,useState } from "react";

const Layout: React.FC<any> = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 40);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`${isSticky ? "sticky top-0 z-3" : "absolute z-3 w-full mt-10"} transition-all duration-300`}>
                <Header />
            </div>
            <div className="relative z-1">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;