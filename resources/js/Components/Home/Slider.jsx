import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation} from "swiper";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Exercises from "@/Components/Home/Exercises";

export default function Slider({children, slidePerPage}) {
    return (
        <div className="mt-10 max-w-[1300px] px-6">
            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={slidePerPage}
                spaceBetween={30}
                freeMode={false}
                modules={[FreeMode,Autoplay,Navigation]}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {children}

            </Swiper>
        </div>
    );
}
