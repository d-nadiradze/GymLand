import React, {useRef, useState} from 'react';
// import Authenticated from '@/Layouts/Authenticated';
import {Head} from '@inertiajs/inertia-react';
// import Pagination from "@/Components/Nav/Pagination";
// import moment from 'moment'
import AuthAdmin from "@/Layouts/AuthAdmin";
import {Inertia} from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination";

export default function Dashboard(props) {
    const [filter, setFilter] = useState(props?.filter ?? {})
    const [sort, setSort] = useState(props?.sort ?? null)

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
    }


    const handleFilter = (key, value) => {

        filter[key] = value

        setFilter(prevState => {
            return {...prevState, ...filter};
        });

        if (!value || value.length >= 3) {
            useFilters(sort, filter);
        }
    }

    const useFilters = (sort, filter) => {
        Inertia.get(route('admin.admin.table'), {sort, filter})
    }


    return (
        <AuthAdmin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Overview"/>
            <div className="row dashboard ">
                <div className="mx-auto col-12 max-w-[calc(100vw-40px)] overflow-y-scroll">
                    <div className="row">
                        { props?.users?.data?.length > 0 ? (
                            <div className="col-12 ">
                                <table className="table-auto w-full mt-3">
                                    <thead>
                                    <tr>
                                        <th onClick={() => handleSort('id')}>ID</th>
                                        <th onClick={() => handleSort('first_name')}>First Name</th>
                                        <th onClick={() => handleSort('last_name')}>Last Name</th>
                                        <th onClick={() => handleSort('email')}>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { props?.users?.data?.map((item, index) => {
                                        return (
                                            <tr key={`user-${item.id}`}>
                                                <td>{item.id}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                                <td>{item.email}</td>
                                                {/*<td>{moment(item.created_at).format('YYYY/MM/DD')}</td>*/}
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
                            <div className="alert alert-info text-center py-6">No users</div>
                        )
                        }
                    </div>
                </div>
                <div className="flex justify-center w-full py-6 relative">
                    <div className="fixed bottom-[5px]">
                        <Pagination
                            postsPerPage={props?.users?.meta?.per_page}
                            totalPosts={props?.users?.meta?.total}
                            currentPage={props?.users?.meta?.current_page}
                            lastPage={props?.users?.meta?.last_page}
                            paginateBack={props?.users?.links?.prev}
                            paginateFront={props?.users?.links?.next}
                            paginateLink={props?.users?.meta?.links}
                        />
                    </div>
                </div>
            </div>
        </AuthAdmin>
    );
}
