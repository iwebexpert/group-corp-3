import React, { useState } from 'react';
import './layout.css';
import { HeaderComponent } from './components/HeaderComponent';
import { ChatListComponent } from './components/ChatListComponent';
import { ChatComponent } from './components/ChatComponent';

 
 function LayoutComponent(){

     return (
     <>
        <HeaderComponent />
        <div className="container-fluid">
            <div className="row">
                <div className="col-4"><ChatListComponent/></div>
                <div className="col-8"><ChatComponent/></div>
            </div>
        </div>
     </>
     );
 };
 export { LayoutComponent };