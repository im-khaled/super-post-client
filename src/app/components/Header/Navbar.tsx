"use client"
import MaxWithWrap from "../MaxWithWrapper/MaxWithWrap";
import Image from "next/image"
import logo from '../../../../public/fabicon_super.ico';
import LoginBtn from "../LoginHandle/LoginBtn";

const Navbar = () => {
    
    return (
        <div className="fixed w-full top-0 z-50 bg-base-100 bg-opacity-95 border-b">
        <MaxWithWrap>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Price</a></li>
                    <li>
                    <a>Features</a>
                    <ul className="p-2">
                        <li><a>LinkedIn Post</a></li>
                        <li><a>LinkedIn Carousel</a></li>
                    </ul>
                    </li>
                    <li><a>Wall of Love</a></li>
                </ul>
                </div>
                <a href="/" className=" text-2xl font-bold"><Image className="w-10 inline-block" src={logo} alt="logo of super post"/> Superpost</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Price</a></li>
                <li>
                    <details>
                    <summary>Features</summary>
                    <ul className="p-2">
                        <li><a>LinkedIn Post</a></li>
                        <li><a>LinkedIn Carousel</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Wall of Love</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <LoginBtn></LoginBtn>
            </div>
        </div>
        </MaxWithWrap>
        </div>
    );
};

export default Navbar;