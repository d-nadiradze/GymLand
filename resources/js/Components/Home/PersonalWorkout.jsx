import React from 'react';
import PersonalWorkoutCard from "@/Components/Home/PersonalWorkoutCard";

const PersonalWorkout = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='max-w-[1300px] mx-auto px-2 py-32'>
                <div className="">
                    <h4 className='text-center uppercase text-customOrange font-[600] text-[15px]'>
                        the fitness classes
                    </h4>
                    <h2 className='mt-3 text-[30px] text-customBlack font-bold text-center uppercase tracking-[-1px]'>
                        personal workout
                    </h2>
                </div>
                <div className="flex px-10 py-10 justify-between flex-wrap">
                    <PersonalWorkoutCard src={'./images/mansBack.png'} header={'running happiness'} text={'created to suppport'}/>
                    <PersonalWorkoutCard src={'./images/run.png'} header={'fitness journey'} text={'created to suppport'}/>
                    <PersonalWorkoutCard src={'./images/womanBiceps.png'} header={'maintain fitness'} text={'created to suppport'}/>
                    <PersonalWorkoutCard src={'./images/womanWithGantels.png'} header={'possible exercise'} text={'created to suppport'}/>
                </div>
            </div>
        </div>
    );
};

export default PersonalWorkout;
