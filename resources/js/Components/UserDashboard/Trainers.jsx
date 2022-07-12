import React from 'react';
import {FacebookIcon, InstagramIcon, TweeterIcon} from "@/Components/svg";
import Slider from "@/Components/Home/Slider";
import trainers from "@/Components/UserDashboard/trainers.json";
import {SwiperSlide} from "swiper/react";
import TrainersCard from "@/Components/UserDashboard/TrainersCard";

const Trainers = () => {
    return (
        <div className="">
            <div>
                <h4 className='text-center uppercase text-customOrange font-[600] text-[15px]'>
                    MEET OUR TRAINERS
                </h4>
                <h2 className='mt-3 text-[30px] text-customBlack font-bold text-center uppercase tracking-[-1px]'>
                    EXPERT TRAINERS
                </h2>
            </div>
            <div className="flex">
                <Slider  slidePerPage={3}>
                    { trainers.map((customer, index) =>
                        <SwiperSlide key={index}>
                            <TrainersCard key={index}
                                      images={customer.img}
                                      name={customer.name}
                                      role={customer.role}/>
                        </SwiperSlide>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default Trainers;
