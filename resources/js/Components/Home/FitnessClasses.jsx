import React from 'react';
import PersonalWorkoutCard from "@/Components/Home/PersonalWorkoutCard";
import Slider from "@/Components/Home/Slider";
import fitnessClasses from "@/Components/Home/FitnessClasses.json";
import {SwiperSlide} from "swiper/react";
import Exercises from "@/Components/Home/Exercises";

const FitnessClasses = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='max-w-[1300px] mx-auto px-2 py-32'>
                <div className="">
                    <h4 className='text-center uppercase text-customOrange font-[600] text-[15px]'>
                        the fitness classes
                    </h4>
                    <h2 className='mt-3 text-[30px] text-customBlack font-bold text-center uppercase tracking-[-1px]'>
                        fitness classes
                    </h2>
                </div>
                <div className="mt-20">
                    <Slider slidePerPage={2}>
                        { fitnessClasses.map((customer, index) =>
                            <SwiperSlide key={index}>
                                <Exercises key={index}
                                           img={customer.img}
                                           header={customer.header}
                                           text={customer.text}/>
                            </SwiperSlide>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FitnessClasses;
