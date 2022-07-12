import React from 'react';

const GymsCard = (props) => {

    return (
        <div className='flex max-h-[240px] min-h-[240px]'>
            <div className="w-3/5 shrink-0">
                <img className="border-none w-full h-full overflow-hidden shrink-0 bg-center bg-top bg-cover rounded-l" src={props.images} alt=""/>
            </div>
            <div className="w-2/5 bg-white px-8 py-6 rounded-r">
                <p className={'mt-6 font-[500] leading-[20px] px-8 uppercase'}>{ props.name }</p>
                <p className={'mt-6 text-sm font-light leading-[30px] px-8'}>{ props.location }</p>
            </div>
        </div>
    );
};

export default GymsCard;
