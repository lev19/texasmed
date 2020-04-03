import React from 'react';
import { Button } from 'semantic-ui-react'

const AudioPlayer = ({ data,...rest }) => {
    const audioUrl = 'music/' + data["audioFileName"];
    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    const stopAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.pause()
    }

    return (
        <span  >
            <Button content='Play' icon='play' labelPosition='right' onClick={playAudio} />
            <Button content='Pause' icon='pause' labelPosition='left'  onClick={stopAudio} />

            <audio className="audio-element" {...rest} >
                <source src={audioUrl}></source>
            </audio>
        </span>
    )
}

export default AudioPlayer;