import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import Note from '../components/Note';
import { DataContext } from '../context/DataContext';

/**
 * ruta donde el usuario puede ver y crear notas
 * @returns {JSX.Element} vista de las notas
 */
export default function NoteView(){
    const data = useContext(DataContext);

    const [newNote, setNewNote] = useState(-1);

    /**
     * muestra las notas del usuario en tarjetas 
     * utilizando los datos guardados
     * 
     * @returns {[JSX.Element]} arreglo de notas 
     */
    const showNotes = () => {
        const comps = data.notes.value.map( (note, index) => {
            return (
                <Note 
                    id={index} 
                    {...note}
                    startEdit={newNote === index? true: false}    
                />      
            ); 
        });
        return comps.length > 0? comps: <h3>You dont have any notes</h3>
    }

    /**
     * funcion para crear una nueva nota y guardarla en el contexto de datos
     */
    const createNewNote = () => {
        const newNote = {title: "New note", content: "Content", color: null};
        data.notes.set([...data.notes.value, newNote]);
        setNewNote(data.notes.value.length);
    }

    return(
        <div className="notes-grid">
            {showNotes()}
            <Button 
                className="floating-btn" 
                btnText="Add note" 
                imgSrc="bx bxs-plus-square" 
                action={createNewNote}
            />
        </div>
    );  
}