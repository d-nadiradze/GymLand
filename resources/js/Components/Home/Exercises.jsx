import React from 'react';

const Exercises = (props) => {

    return (
        <div className='flex'>
            <div className="w-1/2 ">
                <div className="w-full">
                    <img className="bg-fixed bg-center bg-top bg-cover rounded-l" src={props.img} alt=""/>
                </div>
            </div>
            <div className="w-1/2 bg-white px-8 py-12 rounded-r">
                    <p className={'mt-6 font-[500] leading-[20px] px-8 uppercase'}>{ props.header }</p>
                    <p className={'mt-6 text-sm font-light leading-[30px] px-8'}>{ props.text }</p>
            </div>
        </div>
    );
};

export default Exercises;
