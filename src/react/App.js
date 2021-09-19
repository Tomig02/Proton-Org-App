import React, {Fragment, useState} from 'react';
import NavBar from './components/NavBar';
import NoteView from './view/NoteView';
export default function app(){

    const [route, setRoute] = useState('notes');

    const SwitchRoute = () => {
        switch (route) {
            case 'week':
                return <h1>ABC</h1>//<WeekView/>;
            default:
                return <NoteView/>;
        }
    }

    return(
        <Fragment>
            <NavBar route={route} setRoute={setRoute}/>

            <div className="view-container">
                <h1>{route}</h1>
                <SwitchRoute/>
            </div>
            
        </Fragment>
    );
}