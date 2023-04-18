import {AvForm, AvField} from "availity-reactstrap-validation"
import React, {useState} from 'react'
import Slider from 'react-slider-modal';
import {Label, Button} from 'reactstrap'
import Select from "react-select";
// import DropdownDeviceChooseList from "../../Settings/Phones/dropdown-feature-choose-list";

const CardType = [
    {
        options: [
            {label: "Сервисная", value: "Service"},
            {label: "Универсальная", value: "Universal"}
        ]
    }
]

const AdminAddUserForm = ({setModalScroll, modalScroll}) => {
    
    const [SelectedCardGroup, setSelectedCardGroup] = useState(null)
    const [selectedMulti, setselectedMulti] = useState(null)

    const handleSelectTag = (SelectedCardGroup) => {
        setSelectedCardGroup(SelectedCardGroup)
    }

    const handleMulti = (selectedMulti) => {
        setselectedMulti(selectedMulti)
    }


    return (
        <>
            <Slider id="demoID3" className="" direction="top"
                    size="large"
                    animation="slide"
                    closeModal={(e) => {
                        setModalScroll(e)
                    }}
                    toggle={modalScroll}
                    closeIcon={() => {
                        setModalScroll(false)
                    }}
                    sliderStyle={{
                        "zIndex": "5000",
                        "width": "300px",
                        "height": "100%",
                    }}
                    direction="right">
                <div className="slider-container">
                    <div className="sliderHeader">Общие данные</div>
                    <div className="sliderBody">
                        <AvForm className="right-sidebar-modal-form">

                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Код</Label>
                                <AvField
                                    name="code"
                                    placeholder="Код"
                                    type="text"
                                    className="form-control"
                                    validate={{
                                        required: {value: true, errorMessage: 'Пожалуйста, введите код!'},
                                        // pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
                                        minLength: {value: 10, errorMessage: 'Пожалуйста, используйте не менее 10 символов!'},
                                        // maxLength: {value: 16, errorMessage: 'Your name must be between 6 and 16 characters'}
                                    }} />
                            </div>


                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Номер</Label>
                                <AvField
                                    name="number"
                                    placeholder="Номер"
                                    type="text"
                                    errorMessage="Введите номер!"
                                    className="form-control"
                                    validate={{required: {value: true}}}
                                />
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom03">Тип</Label>
                                {/*<DropdownDeviceChooseList />*/}
                                <Select
                                    value={SelectedCardGroup}
                                    onChange={() => {
                                        handleSelectTag()
                                    }}
                                    options={CardType}
                                    classNamePrefix="select1-selection"
                                />
                            </div>


                            <Button id="right-sidebar-submit-btn" color="link" type="submit">
                                Сохранить
                            </Button>
                        </AvForm>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default AdminAddUserForm
