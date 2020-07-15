import React, {useEffect, useState} from "react";
import './PlayerView.css';
import { Pause, PlayArrow, SkipNext, SkipPrevious, Shuffle, Refresh, VolumeUp, List, VolumeOff } from '@material-ui/icons';
import {Howl} from "howler";

function PlayerView(props) {

    const [play, setPlay] = useState('play');
    const [volumeOn, setVolumeOn] = useState(true);
    const [playM, setPlayM] = useState('');
    const [audSeek, setAudSeek] = useState(0);


    //musicLib //full list


    useEffect(function () {
        let sound = new Howl({
            src: [props.audioObj.audio],
            html5: true,
        });

        setPlay('play');

        props.onSetAudio(sound);

        setPlayM(sound);

    }, [props.audioObj]);


    const playMusic = () => {

        setPlay('pause');

        playM.play();

        console.log(playM.duration());

    };

    const pauseMusic = () => {

        setPlay('play');

        playM.pause();
    };

    function volOn() {
        playM.mute(false);
        setVolumeOn(true);
    }

    function volOff() {
        playM.mute(true);
        setVolumeOn(false);
    }


    function stopAudio() {
        playM.stop();
        setAudSeek(0);
    }

    function updateWidth() {
        if (playM.playing()) {
            let width = (playM.seek()/playM.duration())*100;
            //console.log(width);
            setAudSeek(width);
        }
    }

    if (playM) {
        setInterval(() => {
            updateWidth();
        },300);
    }

    return (
        <div className="player">
            <div className="player__list" data-dismiss="modal" aria-label="Close" onClick={stopAudio}>
                <List style={{ fontSize: 45 }}/>
            </div>

            {
                volumeOn?<div className="player__volume" onClick={volOff}> <VolumeUp style={{ fontSize: 45 }}/> </div> : <div onClick={volOn} className="player__volume"> <VolumeOff style={{ fontSize: 45 }}/> </div>
            }

            <div className="player__meta">
                <div className="player__song">{props.audioObj.name}</div>
                <div className="player__artist">{props.audioObj.title}</div>
            </div>
            <div className="player__bg" style={{backgroundImage: 'url(assets/img/player/tune.jpg)'}} />
            <div className="player__controls">
                <div className="player__controls-bg" />
                <div className="player__repeat">
                    <Refresh style={{ fontSize: 45 }}/>
                </div>

                <div className="player_seek_bar">
                    <div className="player_seek_bar_progress" style={{width: `${audSeek}%`}}></div>
                </div>

                {
                    play === 'pause'?
                        <div className="player__play" onClick={pauseMusic}>
                            <Pause style={{ fontSize: 60 }}/>
                        </div> :
                        <div className="player__play" onClick={playMusic}>
                            <PlayArrow style={{ fontSize: 60 }}/>
                        </div>
                }

                <div className="player__shuffle">
                    <Shuffle style={{ fontSize: 45 }}/>
                </div>
            </div>
        </div>
    );
}

export default PlayerView;