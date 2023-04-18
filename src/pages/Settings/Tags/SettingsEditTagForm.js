import {AvForm, AvField} from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
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

const SettingsEditTagForm = ({setModalScroll, modalScroll}) => {

    const [selectedTags, setselectedTags] = useState(null)
    const [selectedDevice, setselectedDevice] = useState(null)

    const handleSelectTag = (selectedTags) => {
        setselectedTags(selectedTags)
    }

    const handleSelectDevice = (selectedDevice) => {
        setselectedDevice(selectedDevice)
    }

    //device name / location variables
    const first = ``;
    const device_name = `КОЛО`
    const device_id = `25`;
    const device_location = `Київ, вул. Каблукова, 21`;

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
                    <div className="sliderHeader">Редактировать признак</div>
                    <div className="sliderBody">
                        <AvForm className="right-sidebar-modal-form">
                            <Label htmlFor="validationCustom03">Признак</Label>
                            <br/>
                            <DropdownFeatureChooseList/>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom01">Тип</Label>
                                <AvField
                                    value=""
                                    name="Type"
                                    placeholder="Тип"
                                    type="text"
                                    errorMessage="Введите тип!"
                                    className="form-control"
                                    validate={{required: {value: true}}}
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
                                    validate={{required: {value: true}}}
                                    class="add-tag-form-value"
                                />
                            </div>

                            <div className="mb-3">
                                <Button id="right-sidebar-submit-btn" color="link" type="submit">
                                    Сохранить
                                </Button>
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="validationCustom03">Аппарат</Label>
                                <DropdownDeviceChooseList/>

                            </div>

                            <div className="mb-3">
                                <hr className="right-sidebar-form-delimiter"/>
                                <div id="edit-tag-connected-devices-block" className="table-responsive">
                                    <Table id="connected-devices-table" className="table mb-0">
                                        <thead id="edit-tag-connected-devices-thead">
                                        <tr>
                                            <th>Привязанные аппараты</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">{device_name}</div>
                                                    <span
                                                        className="all-devices-list-record-id">[id: {device_id} ] </span>
                                                    <span
                                                        className="all-devices-list-device-location">{device_location}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="select2-result-label ui-select-choices-row-inner"
                                                     uis-transclude-append="">
                                                    <div className="ng-binding ng-scope">КОЛО</div>
                                                    <span className="all-devices-list-record-id">[id: 25] </span>
                                                    <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                                                </div>
                                            </td>
                                            <td>
                                                <i id="delete-connected-device" className="uil-multiply"></i>
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

export default SettingsEditTagForm;
