import './Header.scss'
import React from 'react'


export const Header = () => {
    const cssImage = {'background-image': `url('./logo.svg')`} as React.CSSProperties;


    return (
        <div className="page-header" >
            <div className="page-header-logo" >
                <div className="page-header-logo-img" style={cssImage}> </div>
                <div className="page-header-logo-text"> Answering machine </div>
            </div>
        </div> 
)}