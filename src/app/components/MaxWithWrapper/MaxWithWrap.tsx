import React, { ReactNode } from 'react';

interface maxWith {
    className?:string,
    children: ReactNode
}

const MaxWithWrap = ({
    className,
    children
}: maxWith) => {
    return (
        <div className='mx-auto w-full max-w-screen-xl px-4 md:px-16'>
           {children} 
        </div>
    );
};

export default MaxWithWrap;