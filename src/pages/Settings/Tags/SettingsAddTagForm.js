import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useState } from 'react'
import Slider from 'react-slider-modal';
import Select from "react-select"
import { Label, Button } from 'reactstrap'
import DropdownFeatureChooseList from "../Phones/dropdown-feature-choose-list";

const TagsGroup = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Flashlight", value: "Flashlight" }
        ]
    }
]

const AdminAddUserForm = ({ setModalScroll, modalScroll }) => {


    const [selectedTags, setselectedTags] = useState(null)
    const [selectedMulti, setselectedMulti] = useState(null)

    const handleSelectTag = (selectedTags) => {
        setselectedTags(selectedTags)
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
                    <div className="sliderHeader">Добавить новый признак</div>
                    <div className="sliderBody">
                        <AvForm className="right-sidebar-modal-form">

                            <Label htmlFor="validationCustom03">Признак</Label>
                            <DropdownFeatureChooseList />

                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Тип</Label>
                                <AvField
                                    name="Type"
                                    placeholder="Тип"
                                    type="text"
                                    errorMessage="Введите тип!"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    // class="add-tag-form-type"
                                />
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom02">Значение</Label>
                                <AvField
                                    name="value"
                                    placeholder="Значение"
                                    type="text"
                                    errorMessage="Введите значение!"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="add-tag-form-value"
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
