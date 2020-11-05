import React from 'react';
import * as Tone from 'tone';

function Key(props) {
    return (
        <div
            className="key"
            name={props.keyboard}
            tabIndex="0"
            
            onClick={() => {
                Tone.start();
                props.play(props.note);
            }}
            
        ></div>
    );
}

export default Key;