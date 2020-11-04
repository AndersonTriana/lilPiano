import React, { Component } from 'react';
import Key from './Key';
import Notes from '../Data/Notes';
import * as Tone from 'tone';
import './Piano.css';

class Piano extends Component {
    Play(name) {
        const synth = new Tone.Synth().toDestination();

        Tone.now();
        synth.triggerAttackRelease(name, "8n");
    }

    render() {
        const keys = Notes.map(note => {
            console.log(note);
            return <Key key={note.note} name={note.note} play={this.Play} keyboard={note.key}></Key>
        });

        return (
            <div className="piano">
                {keys}
            </div>
        );
    }

}

export default Piano;