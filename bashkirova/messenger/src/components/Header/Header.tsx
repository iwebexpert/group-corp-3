import React from 'react';

export type HeaderProps = {
    title: string;
};

export const Header = ({title}: HeaderProps) => {
    return (
        <div className='h1'>
            {title}
        </div>
    );
};