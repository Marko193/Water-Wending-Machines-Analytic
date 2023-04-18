import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slider-modal';
import Select from "react-select"
import DropdownDeviceChooseList from "../Phones/dropdown-device-choose-list";
import { Label, Button, Table, Modal } from 'reactstrap'
import { getAffiliatesUsers, getAffliliates, getIMEI, getIMEIs } from "../../../store/actions";
import { get, put } from "../../../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";

const RoleGroup = [
    {
        options: [
            { label: "Владелец", value: 2 },
            { label: "Сервисный центр", value: 0 }
        ]
    }
]

const AdminAddUserForm = ({ setEditModal, editModal, id }) => {

    //check if the imei code has already got
    const [imeiValue, setImei] = useState(null)

    //add new imei (put exist value from null to value
    const [newUserForm, setNewUserForm] = useState({
        imei: "",
        deviceId: ''
    });

    const dispatch = useDispatch()

    //get Login and IMEI states from Redux
    const userSignin = useSelector(state => state.Login)
    const allImeis = useSelector(state => state.Imei)

    //get access token and imeis array
    const { accessToken } = userSignin
    const { imeis } = allImeis


    useEffect(() => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            dispatch(getIMEIs())
            console.log('all imeis from add Imei form')
            console.log(imeis);
        }
    }, [])

    useEffect(() => {
        let match = imeis.find(item => item.deviceId === id)
        console.log(match)
        setImei(match)
    }, [id])

    const createImeiHandler = async () => {
        const { deviceImei, deviceId } = imeiValue
        console.log(deviceImei, deviceId);
        try {
            const data = await put('https://testdms.ml/api/dms/settings/imei', { imei: deviceImei, deviceId }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, Accept: "*/*",
                    "Content-Type": "application/json",
                }
            })
            console.log(data);
            dispatch(getIMEIs())
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>
            <Modal
                isOpen={editModal}
                toggle={() => {
                    setEditModal(!editModal)
                }}
                scrollable={false} >
                <div className="modal-header">
                    <h5 className="modal-title mt-0">
                        Новый IMEI
                    </h5>
                    <button
                        type="button"
                        onClick={() =>
                            setEditModal(false)
                        }
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <AvForm className="right-sidebar-modal-form">
                        <div className="mb-3">
                            <Label htmlFor="validationCustom01">Аппарат</Label>
                            <AvField
                                name="name"
                                type="text"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                value={imeiValue ? imeiValue.deviceName : ''}
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom01">IMEI</Label>
                            <AvField
                                name="name"
                                placeholder="IMEI"
                                type="text"
                                errorMessage="Введите IMEI!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                value={imeiValue ? imeiValue.deviceImei : ''}
                                onChange={(e) => setImei(prev => ({ ...prev, deviceImei: e.target.value }))}
                            />
                        </div>


                        <div className="mb-3">
                            <Button onClick={createImeiHandler} id="right-sidebar-submit-btn" color="link" type="submit">
                                Сохранить
                                </Button>
                        </div>

                    </AvForm>
                </div>

            </Modal>
        </>
    )
}

export default AdminAddUserForm
