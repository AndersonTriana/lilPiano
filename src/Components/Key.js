import React from 'react';
import * as Tone from 'tone';

function Key(props) {
    return (
        <button
            className="key"
            name={props.keyboard}
            
            onClick={() => {
                Tone.start();
                props.play(props.name);
            }}

            onKeyPress={event => {
                if (event.key === event.target.name) {
                    Tone.start();
                    props.play(props.name);
                }
            }}
        ></button>
    );
}

export default Key;