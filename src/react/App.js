import React, {Fragment, useState} from 'react';
import NavBar from './components/NavBar';

export default function app(){

    const [route, setRoute] = useState('notes');

    // const switchRoute = () => {
    //     switch (route) {
    //         case 'week':
    //             return <WeekView/>;
    //         default:
    //             return <NoteView/>;
    //     }
    // }

    return(
        <Fragment>
            <NavBar route={route} setRoute={setRoute}/>

            <div className="view-container">
                <h1>{route}</h1>
            </div>
            {/* {switchRoute()} */}
        </Fragment>
    );
}