import React from 'react'
import { Outlet, OutletProps } from 'react-router-dom'

import Header from '../../components/components/header';

import StateProvider from '../../stores';
import combineReducers from '../../stores/reducers';
import { theamMode, userList } from '../../utils/initialState';

const initialState = {
    theamMode, userList
}

const Layout: React.FC<OutletProps> = () => {
    return (
            <StateProvider reducer={combineReducers} initialState={initialState}>
                <main className='layout dark:bg-black'>
                    <Header />
                    <div className='container sm:w-full sm:px-[1rem] md:px[2rem] lg:px-[5rem] py-1 dark:text-white'>
                    <Outlet />
                    </div>
                </main>
            </StateProvider>)
}

export default Layout