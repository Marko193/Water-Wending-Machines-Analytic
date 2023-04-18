import React from "react"
import Slider from 'react-slider-modal';
import 'animate.css/animate.min.css'


// RangeSlider
import "nouislider/distribute/nouislider.css"

const ModalWindow = ({ tog_scroll, modal_scroll, setmodal_scroll }) => {

    // modal window functions
    return (
        <div >
            <Slider id="demoID3" className=""
                size="large"
                animation="slide"
                isOpen={modal_scroll}
                toggle={tog_scroll}
                scrollable={true}
                closeModal={(e) => {
                    setmodal_scroll(e)
                }}
                closeIcon={() => {
                    setmodal_scroll(false)
                }}
                sliderStyle={{
                    "z-index": "5000",
                    "width": "300px",
                    "height": "100%",
                }}
                direction="right">
                <div className="slider-container">
                    <div className="sliderHeader">Новый пользователь</div>
                    <div className="sliderBody">
                        <div className="sliderLeftBox">
                            Hello World
                       </div>
                        <div className="sliderRightBox">
                            Right Box
                       </div>
                    </div>
                    <div className="sliderFooter">

                        <button id="right-sidebar-modal-success-btn" className="btn btn-success">Сохранить
                       </button>
                        <button className="btn btn-primary"
                            onClick={() => setmodal_scroll(false)}>Отмена
                       </button>
                    </div>
                </div>
            </Slider>

        </div>
    )
}

export default ModalWindow;