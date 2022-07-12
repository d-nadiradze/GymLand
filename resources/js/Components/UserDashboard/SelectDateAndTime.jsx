import React, {useEffect, useState} from 'react';
import weekdays from './weekDays.json'
import {CloseModalIcon} from "@/Components/svg";
import GymsCard from "@/Components/UserDashboard/gymsCard";
import {Link} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

const SelectDateAndTime = ({setIsOpen, gym}) => {
    const [active, setActive] = useState( JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data'))[0] : {1: 'monday'})
    const [animation, setAnimation] = useState('animate-appear')
    const [page, setPage] = useState(1)

    const activateButton = (id,e) => {
        let item = { [id]:e }

        setActive(prevState => {
            return {...prevState, ...item };
        });

        if (active[id]){
            let copyOfObject = { ...active }
            delete copyOfObject[id]

            setActive( shopCart => ({
                ...copyOfObject
            }));
        }

    }

    const closeModal = () => {
        setAnimation('animate-dissepear')
        setTimeout( () => {
            setIsOpen(false)
            Inertia.visit('/dashboard', {
                method: 'get',
                data: {},
                replace: true,
                preserveState: true,
                preserveScroll: true,
                errorBag: null,
                forceFormData: false,
            })
        },200)
    }

    const selectGymAndTrainer = () => {
        const data = JSON.parse(localStorage.getItem('data'))

        Inertia.visit(route('select_gym'), {
            method: 'post',
            data: {data},
            replace: false,
            preserveState: false,
            preserveScroll: false,
            only: [],
            headers: {},
            errorBag: null,
            forceFormData: false,
            onCancelToken: cancelToken => {},
            onCancel: () => {},
            onBefore: visit => {},
            onStart: visit => {},
            onProgress: progress => {},
            onSuccess: page => { },
            onError: errors => {},
            onFinish: visit => { Inertia.visit('/selectTrainer/' + gym.id) },
        })
    }

    const selectGym = () => {
        const data = JSON.parse(localStorage.getItem('data'))

        Inertia.visit(route('select_gym'), {
            method: 'post',
            data: {data},
            replace: false,
            preserveState: false,
            preserveScroll: false,
            only: [],
            headers: {},
            errorBag: null,
            forceFormData: false,
            onCancelToken: cancelToken => {},
            onCancel: () => {},
            onBefore: visit => {},
            onStart: visit => {},
            onProgress: progress => {},
            onSuccess: page => { },
            onError: errors => {},
            onFinish: visit => { Inertia.visit('/dashboard' ) },
        })
    }



    const getPage = () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const pageURL = params.get('page');

        pageURL ? setPage(pageURL) : setPage(1)
    }

    useEffect( () => {
        getPage()
        localStorage.setItem('data', JSON.stringify([active,gym]))
    },[page,active])

    const Page1 = () => {
        return(
            <>
                <div className="uppercase text-customOrange text-center font-[500] mt-10">
                    select day's
                </div>
                <div className="mt-8 flex space-x-4">
                    {
                        weekdays.map((day, index) =>
                            <div key={day.id} onClick={ event => activateButton(day.id, day.name)}
                                 className={ active[day.id] ?
                                     "text-center rounded-full full px-4 py-2 cursor-pointer shadow-lg uppercase bg-customOrange duration-300 text-white" :
                                     "text-center rounded-full full px-4 py-2 cursor-pointer uppercase text-gray-400 hover:text-customBlack duration-300"
                                 }
                            >
                                {day.name}
                            </div>
                        )
                    }
                </div>
                <div className="mt-8 shadow-md w-3/4 mx-auto">
                    <GymsCard images={gym.image}
                              name={gym.name}
                              location={gym.location}/>
                </div>

                <Link  replace  href={ window.location.href } data={{ page: 2 }} className="mx-auto mt-10 mb-6 w-2/3 text-center rounded-full px-4 py-2 cursor-pointer shadow-lg uppercase bg-customOrange duration-300 text-white hover:bg-[#E76F4FFF] ">
                    <div onClick={ () => setPage(page + 1) }> Continue </div>
                </Link>
            </>
        )
    }

    const Page2 = () => {
        return(
            <>
                <div className="uppercase text-customOrange text-center font-[500] mt-10">
                    Do you wanna hire Trainer ?
                </div>
                <div className="mt-4 flex space-x-4 justify-center">
                    <div onClick={ selectGym } className={ "text-center rounded-full full px-4 py-2 cursor-pointer uppercase text-gray-400 hover:text-white hover:bg-customOrange bg-gray-200 duration-300"}>
                        no
                    </div>
                    <div className="mx-auto w-2/3 text-center rounded-full px-4 py-2 cursor-pointer shadow-lg uppercase bg-customOrange duration-300 text-white hover:bg-[#E76F4FFF] "
                         onClick={ selectGymAndTrainer }
                    >
                        Continue
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className={'w-screen h-screen flex justify-center items-center absolute left-0 z-40 ' + animation} >
            <div className="bg-customBlack bg-opacity-30 w-full h-full absolute duration-500" onClick={closeModal}/>
            <div className="flex flex-col rounded-md shadow-xl bg-[#F7F7F7] z-50 px-12 py-4 relative animate-slide">
                <div className="absolute right-5 top-5 blackIcon" onClick={ closeModal }>
                    <CloseModalIcon/>
                </div>

                {
                    page === 1 ?  <Page1/> : <Page2/>
                }

            </div>
        </div>
    );
};

export default SelectDateAndTime;
