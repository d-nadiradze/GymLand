import React from 'react';
import {Link} from "@inertiajs/inertia-react";

const IntroSection = () => {
    return (
        <div className='h-screen w-screen bg-introSectionBg bg-fixed bg-center bg-top bg-cover'>
            <div className="h-full w-full absolute top-0 left-0 bg-[#262B35] opacity-50 duration-300"></div>
            <div className="max-w-[1300px] px-2 flex justify-center items-center justify-items-center h-full mx-auto">
                <div className="z-10 flex flex-col items-center">
                    <div className="max-w-[550px] ml-12 text-center px-2 text-white text-[100px] font-[700] leading-[90px] ">
                        CROSSFIT EXERCISES
                    </div>
                    <Link href={route("login")} className="mt-16 text-center border-2 border-transparent bg-[#FF7A56] text-white uppercase px-[35px] py-[15px] rounded text-sm font-[500] cursor-pointer hover:bg-transparent hover:border-[#FF7A56] hover:text-[#FF7A56] duration-300 ease-in-out">
                        get started now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
