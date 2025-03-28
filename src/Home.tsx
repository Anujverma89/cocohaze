import { Link } from "react-router";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import How from "./How";
const Home: React.FC<any> = () => {

    return (
        <>
            {/* this is Hero section  */}
            <div className="h-dvh flex relative  justify-center flex-col items-center">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="introdivText flex items-baseline">
                        <span className="text-[#444140]">Ubnt</span>
                        ai
                        <p className="text-sm mt-2 text-gray-400 mx-2">v1.0.0</p>
                    </h1>
                    <h4 className="tracking-wide">Ai Asistant for your Ubuntu(OS)</h4>
                </div>

                <div className="getitnow flex gap-5 mt-10">
                    <Link to="/installation"><button className="bg-white text-black px-4 py-2 rounded-sm cursor-pointer flex-row flex items-center justify-between gap-2"><p className="font-normal">Install now</p> <FaArrowRight size={15} color="black" /></button></Link>
                    <Link to="/docs"><button className="bg-blue-400 text-white px-4 py-2 rounded-sm cursor-pointer flex-row flex items-center justify-between gap-2"><p className="font-normal">Docs</p> <FaArrowRight size={15} color="white" /></button></Link>
                </div>



                <div className="absolute w-full bottom-10 flex font-bold  items-center flex-col mt-5">
                    <ul className="relative w-[50%] flex gap-5 flex-wrap items-center justify-around ">
                        <div className="rounded-sm  h-15 w-[230px] p-1 flex items-center justify-center">
                            <li className="featureCard featurecontainer px-4 rounded-sm flex h-[100%] w-full">Learn Ubuntu</li>
                        </div>
                        <div className="rounded-sm h-15 flex p-1 w-[230px] flex-1/3 items-center justify-center">
                            <li className="featureCard featurecontainer rounded-sm flex px-7 w-full h-full">Troubleshoot Errors</li>
                        </div>
                        <div className="rounded-sm h-15  flex p-1 w-[230px] items-center justify-center">
                            <li className="featureCard featurecontainer rounded-sm flex h-full px-4 w-full">Manage Dependencies</li>
                        </div>
                    </ul>
                </div>

            </div>

            {/* how section */}

            <How />








            {/* this is contribution  section  */}
            <div className="h-dvh w-full flex items-center justify-center">
                <div className="w-[80%] installation mt-14">
                    <div className="w-full flex items-center justify-center ">
                        <h3>Contribute to Ubntai</h3>
                    </div>
                    <div className="mainStepsLine flex gap-10 mt-10  items-center justify-center flex-wrap">
                        <div className="ubntai_rep h-15 w-[200px] gap-4 flex flex-nowrap featureCard rounded-sm featurecontainer" title="Sweet Malt is a codename given to desktop application.">
                            <a href="https://github.com/Anujverma89/ubntai" target="_blank"><FaGithub size={30} color="white"></FaGithub></a>
                            <a href="https://github.com/Anujverma89/ubntai" target="_blank">  <p className="font-normal">Sweet Malt</p></a>
                        </div>
                        <div className="frontend_repo h-15 w-[200px] gap-4 flex flex-nowrap featureCard rounded-sm featurecontainer" title="Cocohaze is a codename given to web application of ubntai.">
                            <a href="https://github.com/Anujverma89/cocohaze" target="_blank"><FaGithub size={30} color="white"></FaGithub></a>
                            <a href="https://github.com/Anujverma89/cocohaze" target="_blank">  <p className="font-normal">Cocohaze</p></a>
                        </div>
                        <div className="model h-15 w-[200px] gap-4 flex flex-nowrap featureCard rounded-sm featurecontainer" title="Mocha Brew is a codename given to Ml model of Ubntai">
                            <a href="https://github.com/Anujverma89/ubntaimodel" target="_blank"><FaGithub size={30} color="white"></FaGithub></a>
                            <a href="https://github.com/Anujverma89/ubntaimodel" target="_blank">  <p className="font-normal">Mocha Brew</p></a>
                        </div>

                        <div className="backendrepo h-15 w-[200px] gap-4 flex flex-nowrap featureCard rounded-sm featurecontainer" title="Roast Bean is a codename given to backend of Ubntai">
                            <a href="https://github.com/Anujverma89/ubntaibackend" target="_blank"><FaGithub size={30} color="white"></FaGithub></a>
                            <a href="https://github.com/Anujverma89/ubntaibackend" target="_blank">  <p className="font-normal">Roast Bean</p></a>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Home;