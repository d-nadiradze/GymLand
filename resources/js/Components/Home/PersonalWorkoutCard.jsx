import React from 'react';

const PersonalWorkoutCard = ({src, header, text}) => {
    console.log(src)
    return (
        <div className='cursor-pointer lg:w-1/4 px-2 w-1/2 mt-4'>
            <div className="w-full relative group flex justify-center items-center overflow-hidden">
                <img className='group-hover:blur-[2px] group-hover:scale-110 duration-500' src={src} alt=""/>
                <div className="opacity-40 bg-gray-800 group-hover:opacity-80 w-full h-full absolute top-0 left-0 duration-500 ease-in-out"></div>
                <div className="group-hover:mb-16 absolute bottom-0 text-center duration-500">
                    <div className="max-w-[200px]">
                        <h6 className="text-white text-[24px] font-[600] uppercase px-6">
                            {header}
                        </h6>
                        <h6 className="mt-3 text-[#ffffffb3] uppercase 14px">
                            {text}
                        </h6>
                    </div>
                    <div className="px-10">
                        <div className="mt-10 opacity-0 group-hover:opacity-100 duration-500 text-center border-2 border-transparent bg-[#FF7A56] text-white uppercase px-[15px] py-[10px] text-xs font-[500] cursor-pointer hover:bg-transparent hover:border-[#FF7A56] hover:text-[#FF7A56] duration-300 ease-in-out">
                            explore more
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalWorkoutCard;
