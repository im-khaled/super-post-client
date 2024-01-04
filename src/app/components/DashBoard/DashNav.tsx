"use client"
import logo from '../../../../public/fabicon_super.ico';
import Image from "next/image";
import LoginBtn from "../LoginHandle/LoginBtn";


const DashNav = () => {
    return (
            <div className="fixed w-full top-0 z-50 bg-base-100  border-b ">
                    <div className="navbar ">
                            <div className="navbar-start ms-5">
                                <a href="/" className=" text-2xl font-bold"><Image className="w-10 inline-block" src={logo} alt="logo of super post"/> Superpost</a>
                            </div>
                        <div className="navbar-end me-5">
                        <LoginBtn></LoginBtn>
                        </div>
                    </div>
            
            </div>
    );
};

export default DashNav;