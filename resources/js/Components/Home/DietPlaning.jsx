import React from 'react';

const DietPlaning = () => {
    return (
        <div className='max-w-[1300px] mx-auto px-8 py-32 bg-white'>
            <div className="flex text-[#262B35] items-center justify-between">
                <div className="w-[40%] text-[37px] uppercase font-[700] leading-[38px] tracking-tight">
                    WE BELIEVE THAT FITNESS IS NOT SIMPLY A DAILY ACTIVITY
                </div>
                <div className="w-[20%]">
                    <img src="./images/food.png" alt=""/>
                </div>
                <div className="w-[35%]">
                    <div className="uppercase text-[18px] font-[700]">
                        healthy diet planning
                    </div>
                    <div className="mt-3 text-[#828282] text-[15px] leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam dolorum expedita iste natus odio porro quas quis tempora.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietPlaning;
