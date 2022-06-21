import React, {useRef, useState} from 'react';
// import Authenticated from '@/Layouts/Authenticated';
import {Head} from '@inertiajs/inertia-react';
// import {Inertia} from "@inertiajs/inertia";
// import Pagination from "@/Components/Nav/Pagination";
// import moment from 'moment'
// import DatePicker from "react-datepicker";
// import {DataPickerIcon, GreenCheckIcon, RedUnCheckIcon} from "@/Components/svg";
// import InputSwitch from "@/Components/InputSwitch";
// import FeedbackModal from "@/Components/MatchOverview/FeedbackModal";
// import BlockUserModal from "@/Components/Overview/BlockUserModal";
import AuthAdmin from "@/Layouts/AuthAdmin";

export default function Dashboard(props) {
    const [filter, setFilter] = useState(props?.filter ?? {})
    const [sort, setSort] = useState(props?.sort ?? null)
    const [isOpen, setIsOpen] = useState(false)
    const [blockedUsers, setBlockedUsers] = useState({})
    const [switchButton, setSwitchButton] = useState({})

/*    const blockUser = (e,id,feedback) => {
        let item = { [id]:e }

        if(e === true){
            setIsOpen(id)
        }

        setBlockedUsers(prevState => {
            return {...prevState, ...item };
        });
    }


    const handleSort = (value) => {
        let newValue;
        if (sort === value) {
            newValue = `-${value}`
        } else if (sort === `-${value}`) {
            newValue = null;
        } else {
            newValue = value;
        }

        setSort(newValue)
        useFilters(newValue, filter);
    }*/

/*
    const handleFilter = (key, value) => {

        if (key === 'created_from' || key === 'created_till') {
            if (value) {
                value = filter[key] = moment(value.toISOString()).format('YYYY/MM/DD')
            } else {
                delete filter[key]
            }
        } else if(key === 'matched' || key === 'matched_history'){
            let item = {[key]:value}
            setSwitchButton(prevState => {
                return {...prevState, ...item };
            });
            filter[key] = value
        } else{
            filter[key] = value
        }

        setFilter(prevState => {
            return {...prevState, ...filter};
        });

        if (!value || value.length >= 3) {
            useFilters(sort, filter);
        }
    }
*/
/*
    const [startDate, setStartDate] = useState(new Date());

    const useFilters = (sort, filter) => {
        Inertia.get(route('admin.table'), {sort, filter})
    }*/


    return (
        <AuthAdmin
            props={props}
            errors={props.errors}
        >
            <Head title="Overview"/>
            <div className="row dashboard">
                <div className="col-12 max-w-[calc(100vw-300px)] overflow-y-scroll">
                    <div className="row">
                        {props?.users?.data?.length > 0 ? (
                            <div className="col-12 ">
                                <table className="table-auto w-full mt-3">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>City</th>
                                        <th>Registr Date</th>
                                        <th>Membership</th>
                                        <th>Membership End</th>
                                        <th>Verification</th>
                                        <th>Match</th>
                                        <th>MatchHistory</th>
                                        <th>Last date Online</th>
                                        <th>Active</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props?.users?.data?.map((item, index) => {
                                        return (
                                            <tr className={ blockedUsers[item.id] ? 'blockedUser' : 'tr' } key={`user-${item.id}`}>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.name}</td>
                                                <td>{item.surname}</td>
                                                <td>{item.city}</td>
                                                {/*<td>{moment(item.created_at).format('YYYY/MM/DD')}</td>*/}
                                                <td>Membership</td>
                                                <td>Membership End</td>
                                                {/*<td className=' '> /!*{ item.Match === '1' ? *!/  <div className='flex justify-center'><GreenCheckIcon/></div> /!* : <div className='flex justify-center'><RedUnCheckIcon/></div>  }*!/ </td>*/}
                                                <td>MatchHistory</td>
                                                <td>Last date Online</td>
                                             {/*   <td>
                                                    <div className="flex justify-center">
                                                        <InputSwitch onChange={(e) => blockUser(e,item.id,'feedback')} checked={blockedUsers[item.id]} className={blockedUsers[item.id] ? 'bg-[#FF2D78]' : 'bg-gray-300'}/>
                                                    </div>
                                                </td>*/}
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="alert alert-info">No users</div>
                        )
                        }
                    </div>
                </div>
                {/*<div className="flex justify-center w-full py-6 relative">*/}
                {/*    <div className="fixed bottom-[5px]">*/}
                {/*        <Pagination*/}
                {/*            postsPerPage={props?.users?.meta?.per_page}*/}
                {/*            totalPosts={props?.users?.meta?.total}*/}
                {/*            currentPage={props?.users?.meta?.current_page}*/}
                {/*            lastPage={props?.users?.meta?.last_page}*/}
                {/*            paginateBack={props?.users?.links?.prev}*/}
                {/*            paginateFront={props?.users?.links?.next}*/}
                {/*            paginateLink={props?.users?.meta?.links}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </AuthAdmin>
    );
}
