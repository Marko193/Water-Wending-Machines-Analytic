import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
import Select from "react-select"
import { Label, Button, Table, Modal } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { getAffiliatesUsers, getAffliliates, getIMEI, getIMEIs } from "../../../store/actions";
import { put } from "../../../helpers/api_helper";

const SettingsAddIMEIForm = ({ setModalScroll, modalScroll }) => {

    const [selectedAffiliate, setselectedAffiliate] = useState(null);
    const [AffiliateGroup, setAffiliateGroup] = useState([{}])

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

    const handleSelectAffiliate = (selectedAffiliate) => {
        let match = imeis.find(item => item.deviceId === selectedAffiliate.value)
        console.log(match)
        setImei(match.deviceImei)
        setselectedAffiliate(selectedAffiliate)
        setNewUserForm(prev => ({ ...prev, deviceId: selectedAffiliate.value }))
    }

    useEffect(() => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            dispatch(getIMEIs())
            console.log('all imeis from add Imei form')
            console.log(imeis);
        }
    }, [])

    useEffect(async () => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            let options = imeis.map(item => {
                return {
                    label: item.deviceName + " [id: " + item.deviceId + "] " + item.deviceAddress, value: item.deviceId
                }
            })
            setAffiliateGroup(([{ options }]))
        }
    }, [imeis])

    const createImeiHandler = async () => {
        const { imei, deviceId } = newUserForm
        console.log(imei, deviceId);
        try {
            const data = await put('https://testdms.ml/api/dms/settings/imei', { imei, deviceId }, {
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
                isOpen={modalScroll}
                toggle={() => {
                    setModalScroll(!modalScroll)
                }}
                scrollable={false} >
                <div className="modal-header">
                    <h5 className="modal-title mt-0">
                        Новый IMEI
                    </h5>
                    <button
                        type="button"
                        onClick={() =>
                            setModalScroll(false)
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
                            <Label htmlFor="validationCustom03">Выберите аппарат</Label>
                            <Select
                                value={selectedAffiliate}
                                onChange={(e) => {
                                    handleSelectAffiliate(e)
                                }}
                                options={AffiliateGroup}
                                classNamePrefix="select1-selection"
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom01">IMEI</Label>
                            <AvField
                                name="IMEI"
                                placeholder="IMEI"
                                type="text"
                                errorMessage="Введите IMEI!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                value={newUserForm.imei}
                                onChange={(e) => setNewUserForm(prev => ({ ...prev, imei: e.target.value }))}
                            />
                        </div>

                        <Button onClick={createImeiHandler} id="right-sidebar-submit-btn" color="link" type="submit">
                            Сохранить
                            </Button>

                        {imeiValue !== null && <Table id="connected-devices-table" className="table mb-0">
                            <thead id="edit-tag-connected-devices-thead">
                                <tr>
                                    <th>У аппарата уже есть IMEI:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="device-imei">
                                    <td>
                                        <span className="ng-binding ng-scope">{imeiValue}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>}

                    </AvForm>
                </div>
            </Modal>
        </>
    )
}

export default SettingsAddIMEIForm
