import React, {useState} from "react";
import ThumbnailRender from "../component/ThumbnailRender";
import PlayerModal from "../../playerModal/pages/PlayerModal";

function Thumbnail()
{
    const musicLib = [
        {
            id: 1,
            name: 'a1',
            title: 'Bantry-Lament',
            img: 'cabin.png',
            audio: 'audio/Bantry-Lament.mp3'
        },
        {
            id: 2,
            name: 'a2',
            title: 'Celtic-Quest',
            img: 'cake.png',
            audio: 'audio/Celtic-Quest.mp3'
        },
        {
            id: 3,
            name: 'a3',
            title: 'Daisy-Chain',
            img: 'circus.png',
            audio: 'audio/Daisy-Chain.mp3'
        },
        {
            id: 4,
            name: 'a4',
            title: 'Epiphany',
            img: 'game.png',
            audio: 'audio/Epiphany.mp3'
        },
        {
            id: 5,
            name: 'a5',
            title: 'Minuet-Boccherini',
            img: 'safe.png',
            audio: 'audio/Minuet-Boccherini.mp3'
        },
        {
            id: 6,
            name: 'a6',
            title: 'Sunrise-Serenade',
            img: 'submarine.png',
            audio: 'audio/Sunrise-Serenade.mp3'
        }
    ];

    const [audioObj, setAudioObj] = useState({});

    function clickedThumb(data) {
        //console.log(data);
        setAudioObj(data);
    }

    return (
        <div className="row">
            {musicLib.map((music)=>{
                return <ThumbnailRender key={music.id} musicData={music} onClickedThumb={clickedThumb}/>
            })}

            <PlayerModal musicLib={musicLib} audioObj={audioObj}/>
        </div>
    );
}

export default Thumbnail;