import React, {useEffect, useState} from 'react';
import SelectDateAndTime from "@/Components/UserDashboard/SelectDateAndTime";
import Authenticated from "@/Layouts/Authenticated";
import {Head, Link} from "@inertiajs/inertia-react";
import Gyms from "@/Components/UserDashboard/gyms";
import Trainers from "@/Components/UserDashboard/Trainers";
import TrainersCard from "@/Components/UserDashboard/TrainersCard";
import {Inertia} from "@inertiajs/inertia";

const SelectTrainer = (props) => {

    const [select, setSelect] = useState()

    const selectTrainer = (id) => {
        select !== id ? setSelect(id) : setSelect(false)
    }

    const submit = () => {
        select ?
            Inertia.visit(route('set_trainer'), {
            method: 'post',
            data: {trainer:select},
            replace: false,
            preserveState: false,
            preserveScroll: false,
            only: [],
            headers: {},
            errorBag: 'setTrainer',
            forceFormData: false,
            onFinish: visit => {  },
        }) : console.log('error');
    }

    useEffect( () => {
        console.log(props)
    },[select])

    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-customOrange leading-tight">Choose trainer</h2>}
            >
                <Head title="Dashboard" />

                <div className="py-12  h-full">
                    <div className="max-w-[1300px] px-4 mx-auto mt-1 h-full">
                        <div className={'mx-auto grid items-center grid-cols-4 gap-x-4 justify-center' }>
                            {
                                props.trainers.map( (trainer, index) => {
                                    return(
                                        <div key={index} className={ `${ select === trainer.id  ?  'border-customOrange' : '' } ' cursor-pointer mx-auto border-2 border-transparent rounded duration-300` }  onClick={ () => selectTrainer(trainer.id) }>
                                            <TrainersCard key = { index } name={ trainer.first_name + ' ' + trainer.last_name} role = { trainer.profession_info } images={ '../images/trainers/' + trainer.image } />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div onClick={ submit }  className="mx-auto mt-10 mb-6 w-2/3 text-center rounded-full px-4 py-2 cursor-pointer shadow-lg uppercase bg-customOrange duration-300 text-white hover:bg-[#E76F4FFF] ">
                             Continue
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
};

export default SelectTrainer;
