import {AvForm, AvField} from "availity-reactstrap-validation"
import React, {useState} from 'react'
import Slider from 'react-slider-modal';
import Select from "react-select"
import {Label, Button, Table, Row, Col} from 'reactstrap'
import DropdownFeatureChooseList from "../Phones/dropdown-feature-choose-list";
import DropdownDeviceChooseList from "../Phones/dropdown-device-choose-list";

const TagsGroup = [
    {
        label: "Picnic",
        options: [
            {label: "Mustard ", value: "Mustard"},
            {label: "Ketchup", value: "Ketchup"},
            {label: "Relish", value: "Relish"}
        ]
    },
    {
        label: "Camping",
        options: [
            {label: "Tent", value: "Tent"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Toilet Paper", value: "Toilet Paper"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"}
        ]
    }
];
const DevicesGroup = [
    {
        label: "Picnic",
        options: [
            {label: "Device1", value: "Mustard"},
            {label: "Device2", value: "Ketchup"},
            {label: "Device3", value: "Relish"}
        ]
    },
    {
        label: "Camping",
        options: [
            {label: "Tent", value: "Tent"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Toilet Paper", value: "Toilet Paper"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"},
            {label: "Flashlight", value: "Flashlight"}
        ]
    }
];

const AdminAddUserForm = ({setModalScroll, modalScroll}) => {

    const [selectedTags, setselectedTags] = useState(null)
    const [selectedDevice, setselectedDevice] = useState(null)

    const handleSelectTag = (selectedTags) => {
        setselectedTags(selectedTags)
    }

    const handleSelectDevice = (selectedDevice) => {
        setselectedDevice(selectedDevice)
    }

    //device name / location variables
    const device_telephone = `+380674728472`


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
                        "width": "315px",
                        "height": "100%",
                    }}
                    direction="right">
                <div className="slider-container">
                    <div className="sliderHeader">Редактировать телефон</div>
                    <div className="sliderBody">
                        <AvForm className="right-sidebar-modal-form">
                            <Label htmlFor="validationCustom03">Аппарат</Label>
                            <br/>
                            <DropdownDeviceChooseList/>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Имя</Label>
                                <AvField
                                    name="name"
                                    placeholder="Имя"
                                    type="text"
                                    errorMessage="Введите имя!"
                                    className="form-control"
                                    validate={{required: {value: true}}}
                                />
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Телефон</Label>
                                <AvField
                                    name="telephone"
                                    placeholder="Телефон"
                                    type="tel"
                                    errorMessage="Введите телефон!"
                                    validate={
                                        {required: {value: true}}
                                    }/>
                            </div>

                            <div className="mb-3">
                                <Button id="right-sidebar-submit-btn" color="link" type="submit">
                                    Сохранить
                                </Button>
                            </div>

                            <div className="mb-3">
                                <hr className="right-sidebar-form-delimiter"/>
                                <div id="edit-tag-connected-devices-block" className="table-responsive">
                                    <Table id="connected-devices-table" className="table mb-0">
                                        <thead id="edit-tag-connected-devices-thead">
                                        <tr>
                                            <th>Существующие телефоны:</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="device-telephone">
                                            <td>
                                                <span className="ng-binding ng-scope">{device_telephone}</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </AvForm>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default AdminAddUserForm
