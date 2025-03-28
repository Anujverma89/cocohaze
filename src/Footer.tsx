import { Link } from "react-router";

const Footer:React.FC<any> =()=>{

    const year = new Date().getFullYear();

    return(
        <>
            <div className="w-full bg-gray-800 text-gray-200 bottom-0">
                <div className=""></div>
                <div className="text-gray-400 flex items-center justify-around px-20 flex-wrap">
                    <div>© {year} Ubntai. Licensed under GNU (GPL)</div>
                    <Link to="/terms">Terms of use</Link>
                    <Link to="/policy">Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}
export default Footer;