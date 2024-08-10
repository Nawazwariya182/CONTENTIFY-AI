'use client'
import React, { useState } from 'react'
import SideNav from './_component/SideNav';
import Header from './_component/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateContext } from '../(context)/UpdateContext';
function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [totalUsage, setTotalUsage]= useState<Number>()
    const [UpdateCredit, setupdatecredit]= useState<any>()
    return (
       <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
        <UpdateContext.Provider value={{UpdateCredit, setupdatecredit}}>
        <div className='bg-slate-100 h-screen'>
            {/* <div className='md:w-60 hidden md:block fixed'>
                <SideNav/>
            </div> */}
            <div >
                <Header/>
                {children}
            </div>
        </div>
        </UpdateContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout