import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slider-modal';
import { Label, Button, Table, Row, Col, Modal } from 'reactstrap';
import Select from "react-select";
import { get, post, put } from "../../../helpers/api_helper";
import { useDispatch, useSelector } from "react-redux";
import TimezoneSelect from 'react-timezone-select'
import { getAffliliatesData } from "../../../store/actions";
import { isNumber } from "lodash";
import moment from 'moment'

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

    const [SelectedCurrencyGroup, setSelectedCurrencyGroup] = useState(null)
    const [SelectedUnits, setSelectedUnitsGroup] = useState(null)
    const [affiliate, setAffiliate] = useState({
        EDRPOU: "",
        currency: "",
        description: "",
        name: "",
        timezone: '',
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

    const userSignin = useSelector(state => state.Login)
    const allAffiliates = useSelector(state => state.Affiliates)

    const { accessToken } = userSignin
    const { affiliates } = allAffiliates


    const updateAffiliateHandler = async () => {
        const { name, description, timezone, currency, waterUnit, EDRPOU } = affiliate
        console.log(name, description, timezone, currency, waterUnit, EDRPOU);
        try {
            const data = await post('https://testdms.ml/api/dms/branches/', { name, description, timezone, currency, waterUnit, EDRPOU }, {
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
                        Новый филиал
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

                    </AvForm>
                </div>
            </Modal>
        </>
    )
}

export default AdminAddUserForm
