import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "Product", path: "/product" },
        { id: 3, name: "Orders", path: "/orders" },
        { id: 4, name: "About", path: "/about" },
        { id: 5, name: "Contact", path: "/contact" },
    ];
    return (
        <nav className='bg-purple-600'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>

            <ul className={`md:flex bg-purple-600 w-full justify-end absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {routes.map(route => <NavItem key={route.id} route={route}></NavItem>)}
            </ul>
        </nav>
    );
};

export default NavBar;