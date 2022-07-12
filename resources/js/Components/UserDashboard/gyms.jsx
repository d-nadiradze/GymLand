import React from 'react';
import Slider from "@/Components/Home/Slider";
import {SwiperSlide} from "swiper/react";
import GymsCard from "@/Components/UserDashboard/gymsCard";
import {Link} from "@inertiajs/inertia-react";

const Gyms = (props) => {
    return (
        <div className="">
            <div>
                <h4 className='text-center uppercase text-customOrange font-[600] text-[15px]'>
                    There you can choose gym
                </h4>
                <h2 className='mt-3 text-[30px] text-customBlack font-bold text-center uppercase tracking-[-1px]'>
                    best gym's for you
                </h2>
            </div>
            <div className="">
                <Slider slidePerPage={2}>
                    { props.gyms.map((gym, index) =>
                        <SwiperSlide key={gym.id} onClick={e => [props.setGymId(gym.id - 1), props.setIsOpen(true)]}>
                            <Link replace preserveState href={'/dashboard' } data={{  gym:gym.id - 1, modal: 'true' }}>
                                <GymsCard key={gym.id}
                                          images={gym.image}
                                          name={gym.name}
                                          location={gym.location}
                                />
                            </Link>
                        </SwiperSlide>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default Gyms;
