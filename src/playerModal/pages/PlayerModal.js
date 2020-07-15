import React, {useState} from "react";
import PlayerView from "../../player/pages/PlayerView";
import {Close, Star} from '@material-ui/icons';

function PlayerModal(props) {

    const [aud, setAud] = useState('');

    function setedAudio(audio) {
        setAud(audio);
        //console.log(audio);
    }

    function stopAudio() {
        //alert('dsa');
        aud.stop();
    }


    return (
        <div className="portfolio-modal modal fade" id="portfolioModal" tabIndex={-1} role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={stopAudio}>
                        <Close style={{fontSize: 60}}/>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Music Player</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line" />
                                        <div className="divider-custom-icon">
                                            <Star style={{fontSize: 60}}/>
                                        </div>
                                        <div className="divider-custom-line" />
                                    </div>
                                    {/* Portfolio Modal - Image*/}







                                    <PlayerView audioObj={props.audioObj} musicLib={props.musicLib} audPlayIcon={`play`} onSetAudio={setedAudio}/>
                                    {/************************/}







                                    {/* Portfolio Modal - Text*/}

                                    <button className="btn btn-primary" data-dismiss="modal" onClick={stopAudio}>
                                        <i className="fas fa-times fa-fw" />
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerModal;