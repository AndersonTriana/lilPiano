import React, { Component } from 'react';
import Key from './Key';
import Notes from '../Data/Notes';
import * as Tone from 'tone';
import VolumeIcon from '../Images/volume.svg';
import './Piano.css';

class Piano extends Component {
    Play(name) {
        const synth = new Tone.Synth().toDestination();

        Tone.now();
        synth.triggerAttackRelease(name, "8n");
    }

    render() {
        const keys = Notes.map(note => {
            return <Key key={note.note} note={note.note} play={this.Play} keyboard={note.key}></Key>
        });


        return (
            <div className="piano-container">
                <div className="piano-decoration">
                    <h2 className="title">lilPiano</h2>

                    <div class="modules">

                        <div class="slider">
                            <input type="range" id="lpf-freq" min="0" max="1" step=".05" value=".7" />
                        </div>

                        <div class="slider">
                            <input type="range" id="lpf-res" min="0" max="1" step=".01" value=".4" />
                        </div>

                    </div>
                </div>

                <div
                    className="piano"

                    onKeyDown={event => {
                        const indexOfKey = Notes.map(event => event.key).indexOf(event.key);

                        if (indexOfKey > -1) {
                            Tone.start();
                            this.Play(Notes[indexOfKey].note);
                        } else {
                            return null;
                        }
                    }}
                >
                    {keys}
                </div>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        );
    }

}

export default Piano;