import React, {useEffect, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, InertiaLink} from '@inertiajs/inertia-react';
import Trainers from "@/Components/UserDashboard/Trainers";
import Gyms from "@/Components/UserDashboard/gyms";
import SelectDateAndTime from "@/Components/UserDashboard/SelectDateAndTime";


export default function Dashboard(props) {
    const [isOpen, setIsOpen] = useState()
    const [gymId, setGymId] = useState()
    const [page, setPage] = useState()

    const getUrlParams = () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const gym = params.get('gym');
        const modal = params.get('modal');

        modal ? setIsOpen(true) : setIsOpen(false)
        setGymId(gym)
    }

    useEffect( () => {
      getUrlParams()
    },[setGymId])

    return (
        <>
            {
                isOpen &&
                // <Trainers/>
                <SelectDateAndTime gym = {props.gyms[gymId]} setIsOpen = {setIsOpen} />
            }
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-customOrange leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />


                <div className="py-12  h-full">
                    <div className="max-w-[1300px] px-4 mx-auto mt-1 h-full">
                        {
                            !props.auth.user.gym_id ?
                                <Gyms gyms={props.gyms} setIsOpen = {setIsOpen} setGymId = {setGymId} />
                                :
                                <>
                                <div className='text-center font-[400] text-[17px]'>We are happy for choosing our gym <span className={'uppercase text-customOrange'}>{props.gyms[props.auth.user.gym_id].name},</span> There you can see our activities</div>
                                </>
                        }
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
