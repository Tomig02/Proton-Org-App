import React, {Fragment, useState} from 'react';
import NavBar from './components/NavBar';
import NoteView from './view/NoteView';
import WeekView from './view/WeekView';

export default function app(){

    const [route, setRoute] = useState('notes');

    const SwitchRoute = () => {
        switch (route) {
            case 'week':
                return <WeekView/>;
            default:
                return <NoteView/>;
        }
    }

    return(
        <Fragment>
            <NavBar route={route} setRoute={setRoute}/>

            <div className="view-container">
                <SwitchRoute/>
            </div>
            
        </Fragment>
    );
}