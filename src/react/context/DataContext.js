import React, {createContext, useEffect, useState} from 'react';
import Store from 'electron-store';

export const DataContext = createContext(null);

/**
 * es un elemento que provee los datos de la aplicacion
 * 
 * @param {[JSX.Element]} param0 hijos del proveedor 
 * @returns {JSX.Element} proveedor
 */
export function DataProvider({children}){
    const store = new Store();

    // datos de la aplicacion
    const [notes, setNotes] = useState([]);
    const [week, setWeek] = useState({});
    const [user, setUser] = useState(undefined);

    // carga los datos al iniciar la app y los guarda al cerrar
    useEffect(() => {
        

        try{
            setWeek(store.get("week") || {});
            setNotes(store.get("notes") || []);
        }
        catch(err){
            console.log(err);
        }
    }, []);

    useEffect(() => {
        console.log(store.store);
    }, [store.store] );
    useEffect(() => {
        if(notes.length > 0) store.set("notes", notes);
    }, [notes])
    useEffect(() => {
        if(Object.keys(week).length > 0) store.set("week", week);
    }, [week])

    return(
        <DataContext.Provider value={{
            notes: {
                set: setNotes,
                value: notes
            },
            user: {
                set: setUser,
                value: user
            },
            week: {
                set: setWeek,
                value: week
            }
        }}>
            {children}
        </DataContext.Provider>
    ); 
}