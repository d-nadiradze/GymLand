import React, {useEffect, useState} from 'react';
import ApplicationLogo from "@/Components/ApplicationLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FacebookIcon, InstagramIcon, TweeterIcon} from "@/Components/svg";
import {Link} from "@inertiajs/inertia-react";

const Nav = () => {
   const [showNav,setShowNav] = useState();

    useEffect(() => {
       let scrollPosition

        const handleScroll = event => {

           if( window.scrollY === 0 ) {
               setShowNav('bg-transparent')
           } else if (scrollPosition > window.scrollY) {
                 setShowNav('bg-black')
            } else if (scrollPosition < window.scrollY && window.scrollY > 10){
                 setShowNav('top-[-80px]')
             }

            scrollPosition = window.scrollY
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={showNav + ' w-full fixed top-0 z-40 duration-300 easy-in-out'} >
            <div className="flex mx-auto justify-between items-center max-w-[1300px] px-2 ">
                <div className="">
                    <a href="" className="flex items-center">
                        <div className="w-[80px] h-[80px]">
                            <img src='./images/logo.png'/>
                        </div>
                        <div className="font-[500] text-white">GYMLAND</div>
                    </a>
                </div>
                <div className="flex space-x-6 font-[500]">
                    <Link href="#" className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">Home</Link>
                    <Link href="#" className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">pages</Link>
                    <Link href="#" className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">portfolio</Link>
                    <Link href="#" className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">elements</Link>
                    <Link href="#" className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">features</Link>
                    <Link href={route("register")} className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">register</Link>
                    <Link href={route("login")} className="uppercase text-white hover:text-[#FFFFFF99] duration-200 ease-in-out text-sm">login</Link>
                </div>
                <div className="flex space-x-6">
                    <div className="">
                        <FacebookIcon color={'white'} />
                    </div>
                    <div className="">
                        <InstagramIcon color={'white'} />
                    </div>
                    <div className="">
                        <TweeterIcon color={'white'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
