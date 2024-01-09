"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const Settings = () => {
    const { data: session }:any = useSession();
    return (
        <div>
            <p className="text-md"> Hey! <span className='tex-xl text-main'>{session?.user?.email}</span> </p>
            <p className="text-md "> we will upadate this section </p>
            <p className="text-md "> very soon!!! </p>
        </div>
    );
};

export default Settings;