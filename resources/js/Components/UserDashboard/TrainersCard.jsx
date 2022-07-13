import React from 'react';
import {FacebookIcon, InstagramIcon, TweeterIcon} from "@/Components/svg";

const TrainersCard = ({images, name, role, social = true}) => {
    return (
        <div className='flex flex-col shadow '>
            <div className="group overflow-hidden">
                <div className="group-hover:scale-110 duration-300 overflow-hidden">
                    {/*<img className='bg-center bg-top bg-cover' src={"./images/trainers/" + images} alt=""/>*/}
                    <img className='bg-center bg-top bg-cover rounded-t ' src={images} alt=""/>
                </div>
            </div>
            <div className="flex flex-col justify-center text-center bg-white py-12 rounded-b">
                <div className="uppercase text-customBlack text-[15px] font-[500]">{ name }</div>
                <div className="text-[#828282] text-[13px] mb-[20px] uppercase leading-[22px] mt-2">{ role }</div>
                {
                    social &&
                    <div className="flex justify-center space-x-4">
                        <div className='blackIcon p-3'>
                            <FacebookIcon />
                        </div>
                        <div className='blackIcon p-3'>
                            <InstagramIcon />
                        </div>
                        <div className='blackIcon p-3'>
                            <TweeterIcon />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default TrainersCard;
