import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slider-modal';
import { Label, Button, Table, Row, Col, Modal } from 'reactstrap';
import Select from "react-select";
import { get, put } from "../../../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";
import TimezoneSelect from 'react-timezone-select'
import { getAffliliatesData } from "../../../store/actions";
import { isNumber } from "lodash";
import moment from 'moment'

// merge

const CurrencyType = [
    {
        options: [
            { label: "UAH", value: "uah" },
            { label: "USD", value: "usd" },
            { label: "EUR", value: "eur" }
        ]
    }
];

const UnitsType = [
    {
        options: [
            { label: "Галлоны", value: "g" },
            { label: "Литры", value: "l" }
        ]
    }
]

const AdminAddUserForm = ({ setModalScroll, modalScroll, id }) => {


    const [roleId, setRoleId] = useState('')

    const userSignin = useSelector((state) => state.Login);

    const { userData, remember, accessToken } = userSignin

    useEffect(() => {
        // console.log(props);
        if (userData !== null) {
            const { roleId } = userData
            setRoleId(roleId)
        }

    }, [userData, remember])

    const [SelectedCurrencyGroup, setSelectedCurrencyGroup] = useState(null)
    const [SelectedUnits, setSelectedUnitsGroup] = useState(null)
    const [affiliate, setAffiliate] = useState({
        EDRPOU: null,
        currency: "",
        description: "",
        devicesCount: 3,
        email: null,
        id: 14,
        name: "",
        paidDevicesQty: null,
        paidTill: null,
        phone: null,
        timezone: null,
        waterUnit: "l"
    })
    const [selectedTimezone, setSelectedTimezone] = useState({})

    const handleSelectCurrency = (SelectedCurrency) => {
        setSelectedCurrencyGroup(SelectedCurrency)
        setAffiliate(prev => ({ ...prev, currency: SelectedCurrency.value }))
    }

    const handleSelectTimezone = (selectTimezone) => {
        setSelectedTimezone(selectTimezone)
        setAffiliate(prev => ({ ...prev, timezone: selectTimezone.value }))
    }

    const handleUnits = (SelectedUnits) => {
        setSelectedUnitsGroup(SelectedUnits)
        setAffiliate(prev => ({ ...prev, waterUnit: SelectedUnits.value }))

    }

    const dispatch = useDispatch()

    // const userSignin = useSelector(state => state.Login)
    const allAffiliates = useSelector(state => state.Affiliates)

    // const { accessToken } = userSignin
    const { affiliates } = allAffiliates

    useEffect(async () => {
        if (accessToken) {
            const data = await get(`https://testdms.ml/api/dms/branches/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            console.log(data);
            if (data) {
                setAffiliate({
                    EDRPOU: data.EDRPOU !== null ? data.EDRPOU : '000',
                    currency: data.currency,
                    description: data.description !== null ? data.description : '000',
                    devicesCount: data.devicesCount,
                    email: data.email !== null ? data.email : '000',
                    id: data.id,
                    name: data.name,
                    paidDevicesQty: data.paidDevicesQty !== null ? data.paidDevicesQty : 0,
                    paidTill: data.paidTill !== null ? data.paidTill : '2021-07-14T13:08:25.506Z',
                    phone: data.phone !== null ? data.phone : '',
                    timezone: data.timezone !== null ? data.timezone : '',
                    waterUnit: data.waterUnit !== null ? data.waterUnit : ''
                })
            }
        }
    }, [id])

    const updateAffiliateHandler = async () => {
        const { name, description, timezone, currency, waterUnit, id, email, phone, paidDevicesQty, paidTill, EDRPOU } = affiliate
        console.log(name, description, timezone, currency, waterUnit, id, email, phone, paidDevicesQty, paidTill, EDRPOU);
        try {
            const data = await put('https://testdms.ml/api/dms/branches', { name, description, timezone, currency, waterUnit, id, email, phone, paidDevicesQty, paidTill, EDRPOU }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, Accept: "*/*",
                    "Content-Type": "application/json",
                }
            })
            console.log(data);
            dispatch(getAffliliatesData())
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(async () => {
        console.log('ID', id);
        if (accessToken) {
            const data = await get(`https://testdms.ml/api/dms/branches/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            console.log(data);
        }
        // setUser({
        //     branch_id: data.branch_id,
        //     createdAt: data.createdAt,
        //     description: data.description,
        //     id: data.id,
        //     last_selected_branch_id: data.last_selected_branch_id,
        //     locale: data.locale,
        //     login: data.login,
        //     name: data.name,
        //     role: data.role,
        //     status: data.status,
        //     uid: data.uid,
        //     updatedAt: data.updatedAt,
        // })
        // console.log(user);
    }, [id])

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
                        Редактировать филиал
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
                            <Label htmlFor="validationCustom01">Название</Label>
                            <AvField
                                name="name"
                                placeholder="Название"
                                type="text"
                                errorMessage="Введите название!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                value={affiliate.name}
                                onChange={(e) => setAffiliate(prev => ({ ...prev, name: e.target.value }))}
                                disabled={roleId == 2 ? true : false}
                            // class="add-tag-form-type"
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom01">ЕГРПОУ</Label>
                            <AvField
                                name="EGRPOU"
                                placeholder="ЕГРПОУ"
                                type="text"
                                errorMessage="Введите ЕГРПОУ!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                value={affiliate.EDRPOU ? affiliate.EDRPOU : ''}
                                onChange={(e) => setAffiliate(prev => ({ ...prev, EDRPOU: e.target.value }))}
                                disabled={roleId == 2 ? true : false}

                            // class="add-tag-form-type"
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom01">Тайм зона</Label>
                            {/* <input className="form-control" list="datalistOptions" id="exampleDataList"
                                    placeholder="Type to search..." />
                                <datalist id="datalistOptions">
                                    <option value="(GMT-11:00) American Samoa" />
                                    <option value="(GMT+01:00) Berlin" />
                                </datalist> */}
                            <TimezoneSelect
                                value={selectedTimezone}
                                onChange={handleSelectTimezone}
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom03">Валюта</Label>
                            <Select
                                value={SelectedCurrencyGroup}
                                onChange={(e) => {
                                    handleSelectCurrency(e)
                                }}
                                options={CurrencyType}
                                classNamePrefix="select1-selection"
                                // value={affiliate.currency}
                                placeholder={affiliate.currency.toUpperCase()}
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom03">header.UNITS</Label>
                            <Select
                                value={SelectedUnits}
                                onChange={(e) => {
                                    handleUnits(e)
                                }}
                                options={UnitsType}
                                classNamePrefix="select1-selection"
                                placeholder={affiliate.waterUnit === 'l' ? 'Литры' : 'Галлоны'}
                            />
                        </div>

                        <Button onClick={updateAffiliateHandler} id="right-sidebar-submit-btn" color="link" type="submit">
                            Сохранить
                            </Button>

                        <div className="mb-3">
                            <hr className="right-sidebar-form-delimiter" />
                            <div id="edit-tag-connected-devices-block" className="table-responsive">
                                <Table id="connected-devices-table" className="table mb-0">
                                    <thead id="edit-tag-connected-devices-thead">
                                        <tr>
                                            <th className="settings-affiliates-thead">В филиале</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">Аппаратов:</span>
                                                <span className="affiliate_devices_info">{affiliate.devicesCount}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="settings-affiliates-label">Пользователей:</span>
                                                <span className="affiliate_devices_info">{affiliate.usersCount}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div id="edit-tag-connected-devices-block" className="table-responsive">
                                <Table id="connected-devices-table" className="table mb-0">
                                    <thead id="edit-tag-connected-devices-thead">
                                        <tr>
                                            <th className="settings-affiliates-thead">Информация</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">ЕГРПОУ:</span>
                                                <span className="affiliate_devices_info">{affiliate.EDRPOU}</span>
                                            </td>
                                        </tr>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">Электронный адрес:</span>
                                                <span className="affiliate_devices_info">{affiliate.email}</span>
                                            </td>
                                        </tr>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">Номер телефона:</span>
                                                <span className="affiliate_devices_info">{affiliate.phone}</span>
                                            </td>
                                        </tr>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">Количество оплаченых апаратов:</span>
                                                <span className="affiliate_devices_info">{affiliate.paidDevicesQty}</span>
                                            </td>
                                        </tr>
                                        <tr className="settings-affiliates">
                                            <td>
                                                <span className="settings-affiliates-label">Оплачено до:</span>
                                                <span className="affiliate_devices_info">{affiliate.paidTill ? moment(affiliate.paidTill).format('DD MM YYYY HH:SS') : ''}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </AvForm>
                </div>
            </Modal>
        </>
    )
}

export default AdminAddUserForm
