import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {PaginationArrow, PaginationDoubleArrow} from "@/Components/svg";

export default function Pagination({
                                       postsPerPage, totalPosts, paginateFront, paginateBack, currentPage, lastPage, paginateLink,
                                   }) {
    let length = paginateLink.length
    return (lastPage >= 2 ? (
            <div className='py-2'>
                <nav className='block'></nav>
                <div className='text-center'>
                    <nav className='relative z-0 flex justify-center items-center rounded-md space-x-4'
                         aria-label='Pagination'>
                        <div className="flex items-center space-x-2 ">
                            <a onClick={() => Inertia.get(paginateLink[1].url)}
                               href='#'
                               className= { paginateBack ? 'bg-[#F9F9FA] px-2.5 py-2 rounded-md hover:bg-[#714276] hover:bg-opacity-10 duration-300' : 'bg-[#F9F9FA] px-2.5 py-2 rounded-md cursor-not-allowed'  }
                            >
                                <div className= { paginateBack ? 'paginationArrow rotate-180' : 'paginationArrow disabled rotate-180'}>
                                    <PaginationDoubleArrow />
                                </div>
                            </a>

                            <a onClick={() => Inertia.get(paginateBack)}
                               href='#'
                               className= { paginateBack ? 'bg-[#F9F9FA] px-2.5 py-2 rounded-md hover:bg-[#714276] hover:bg-opacity-10 duration-300' : 'bg-[#F9F9FA] px-2.5 py-2 rounded-md cursor-not-allowed'  }
                            >
                                <div className= { paginateBack ? 'paginationArrow' : 'paginationArrow disabled'}>
                                    <PaginationArrow />
                                </div>
                            </a>
                        </div>

                        { paginateLink.map((link ,index) => {
                            if ( index > 0 && index < length - 1 ) {
                                if ( currentPage === index ){
                                    return (
                                        <div key={index} className='mx-4 w-full h-full font-medium'>
                                            <a className='px-3.5 py-2 rounded-md bg-[#714276] text-white' href={link.url}>{link.label}</a>
                                        </div>
                                    )}
                                else {
                                    return (
                                        <div key={index} className='mx-4 w-full h-full font-medium'>
                                            <a className='px-3.5 py-2 hover:bg-[#714276] hover:bg-opacity-10 duration-300 rounded-md text-[#606E79]' href={link.url}>{link.label}</a>
                                        </div>
                                    )
                                }}
                        })}
                        <div className="flex items-center space-x-2 ">
                            <a onClick={() => Inertia.get(paginateFront)}
                               href='#'
                               className= { paginateFront ? 'bg-[#F9F9FA] px-2.5 py-2 rounded-md hover:bg-[#714276] hover:bg-opacity-10 duration-300' : 'bg-[#F9F9FA] px-2.5 py-2 rounded-md cursor-not-allowed'  }
                            >
                                <div className= { paginateFront ? ' rotate-180 paginationArrow' : 'rotate-180 paginationArrow disabled'}>
                                    <PaginationArrow />
                                </div>
                            </a>

                            <a onClick={() => Inertia.get(paginateLink[lastPage].url)}
                               href='#'
                               className= { paginateFront ? 'bg-[#F9F9FA] px-2.5 py-2 rounded-md hover:bg-[#714276] hover:bg-opacity-10 duration-300' : 'bg-[#F9F9FA] px-2.5 py-2 rounded-md cursor-not-allowed'  }
                            >
                                <div className= { paginateFront ? 'paginationArrow' : 'paginationArrow disabled'}>
                                    <PaginationDoubleArrow />
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        ) : (
            <span></span>
        )
    );
}
