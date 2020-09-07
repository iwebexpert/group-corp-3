import React from 'react';

export type HeaderProps = {
    title: string;
};

export const Header = ({title}: HeaderProps) => {
    return (
        <h1 className="h1">
            {title}
        </h1>
    );
};