import React, {useState} from "react";

function ThumbnailRender(props) {

    const [sound, setSound] = useState({});

    function clickThumb(obj) {
        props.onClickedThumb(obj);
    }



    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-backdrop={`static`} data-keyboard={`false`} data-target={`#portfolioModal`} onClick={()=>{clickThumb(props.musicData)}}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={`assets/img/portfolio/${props.musicData.img}`} alt="" />
            </div>
        </div>
    );
}

export default ThumbnailRender;