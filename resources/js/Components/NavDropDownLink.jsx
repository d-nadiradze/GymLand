import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from '@inertiajs/inertia-react';


export const NavDropDownLink = ({ children, dropdownItems }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
        <>
            <div className="flex">
                <div className="w-full">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            className={
                                "text-black font-normal text-sm py-3 rounded outline-none hover:text-indigo-400 focus:outline-none ease-linear transition-all duration-150 "
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            {children}
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "bg-white text-black text-base z-50 float-left list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            {
                                dropdownItems.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={route('admin.'+item.href)}
                                            className={
                                                "text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 duration-200 ease-in"
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
