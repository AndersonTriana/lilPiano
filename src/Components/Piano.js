import React from 'react';
import Key from './Key';
import './Piano.css';

const Notes = [
    'nota 1' , 'nota 2', 'nota 3'
]

function Piano() {
    const keys = Notes.forEach( note =>
        {return <Key></Key>}
    );
    
    console.log(keys)
    return(
        <div className="piano">
            <Key></Key>
        </div>
    );
}

export default Piano;