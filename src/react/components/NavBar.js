import React from 'react';

export default function NavBar({route, setRoute}){

    const NavBtn = ({icon, routeStr}) => {

        const action = () => {setRoute(routeStr)}
        const classes = `nav-btn ${route === routeStr? "active": ""}`;

        return(
            <button disabled={route === routeStr} 
            onClick={action} 
            className={classes}>
                <i className={icon}></i>
                <p>{routeStr}</p>
            </button>
        );
    }


    return(
        <nav>
            <i className='bx bx-medal' ></i>
            
            <div className="btn-container">
                <NavBtn icon="bx bx-notepad" routeStr="notes"/>
                <NavBtn icon="bx bx-calendar"routeStr="week"/>
            </div>
        </nav>
    );
}