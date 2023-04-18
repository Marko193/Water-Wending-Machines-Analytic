import { AvForm, AvField } from "availity-reactstrap-validation"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slider-modal';
import Select from "react-select"
import { Label, Button, Modal } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { getAffiliatesUsers, getAffliliates, userRefreshToken } from "../../../store/actions";
import { post } from "../../../helpers/api_helper";

const RoleGroup = [
    {
        options: [
            { label: "Владелец", value: 2 },
            { label: "Сервисный центр", value: 0 }
        ]
    }
]

const AdminAddUserForm = ({ setModalScroll, modalScroll }) => {

    const [selectedAffiliate, setselectedAffiliate] = useState(null)
    const [selectedMulti, setselectedMulti] = useState(null)
    const [newUserForm, setNewUserForm] = useState({
        login: "",
        password: "",
        name: "",
        branch_id: 1,
        role: 0,
        status: 1,
        description: ""
    })
    const [AffiliateGroup, setAffiliateGroup] = useState([{

    }])
    const [checkStatus, setCheckStatus] = useState(false)

    const statusHandler = () => {
        if (checkStatus) {
            console.log('TRUE', checkStatus);
            setNewUserForm(prev => ({ ...prev, status: 1 }))
        } else {
            console.log('FALSE', checkStatus);
            setNewUserForm(prev => ({ ...prev, status: 0 }))

        }
    }

    useEffect(() => {
        statusHandler()
    }, [checkStatus])

    const handleSelectAffiliate = (selectedAffiliate) => {
        setselectedAffiliate(selectedAffiliate)
        setNewUserForm(prev => ({ ...prev, branch_id: selectedAffiliate.value }))
    }

    const handleSelectRole = (selectedRole) => {
        console.log(selectedRole);
        setselectedMulti(selectedRole)
        console.log(newUserForm);
        setNewUserForm(prev => ({ ...prev, role: selectedRole.value }))
        console.log(newUserForm.role);
    }

    const dispatch = useDispatch()

    const userSignin = useSelector(state => state.Login)
    const allAffiliates = useSelector(state => state.Affiliates)

    const { accessToken } = userSignin
    const { affiliates } = allAffiliates

    useEffect(() => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            dispatch(getAffliliates())
            console.log(affiliates);
        }
    }, [])

    useEffect(async () => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            let options = affiliates.map(item => {
                return {
                    label: item.description, value: item.id
                }
            })
            setAffiliateGroup(([{ options }]))
        }
    }, [affiliates])

    const createUserHandler = async () => {
        const { login, password, name, branch_id, role, status, description } = newUserForm
        console.log(typeof branch_id);
        console.log(login, password, name, branch_id, role, status, description);
        try {
            const data = await post('https://testdms.ml/api/dms/users/', { login, password, name, branch_id, role, status, description }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, Accept: "*/*",
                    "Content-Type": "application/json",
                }
            })
            console.log(data);
            dispatch(getAffiliatesUsers())
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
                        Новый пользователь
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
                            <Label htmlFor="validationCustom01">Логин</Label>
                            <AvField
                                name="login"
                                placeholder="Логин"
                                type="text"
                                errorMessage="Введите логин!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                id="validationCustom01"
                                value={newUserForm.login}
                                onChange={(e) => setNewUserForm(prev => ({ ...prev, login: e.target.value }))}
                            />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="validationCustom02">Имя</Label>
                            <AvField
                                name="lastname"
                                placeholder="Имя"
                                type="text"
                                errorMessage="Введите имя!"
                                className="form-control"
                                validate={{ required: { value: true } }}
                                id="validationCustom02"
                                value={newUserForm.name}
                                onChange={(e) => setNewUserForm(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </div>

                        <div className="mb-3">
                            <AvField
                                className="mb-3"
                                type="textarea"
                                rows="3"
                                label="Примечание"
                                name="note"
                                id="note"
                                placeholder="Примечание"
                                // errorMessage="Введите примечание!"
                                validate={{
                                    required: { value: false },
                                    // pattern: {
                                    //     value: "^[0-9a-zA-Z]+$",
                                    //     errorMessage: "Only Alphanumeric",
                                    // },
                                }}
                                value={newUserForm.description}
                                onChange={(e) => setNewUserForm(prev => ({ ...prev, description: e.target.value }))}
                            />
                        </div>

                        <div className="mb-3">
                            <Label htmlFor="validationCustom03">Филиал</Label>
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
                            <label className="control-label">
                                Роль
                                        </label>
                            <Select
                                value={selectedMulti}
                                onChange={(e) => {
                                    handleSelectRole(e)
                                }}
                                options={RoleGroup}
                                classNamePrefix="select2-selection"
                            />
                        </div>

                        <div className="mb-3">
                            <div className="form-check form-check-right mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="right-sidebar-check-input"
                                    onChange={() => setCheckStatus(prev => !prev)}
                                />
                                <label
                                    id="right-sidebar-check-label"
                                    className="form-check-label"
                                >
                                    Активный
                                            </label>
                            </div>

                        </div>


                        <div className="mb-3">
                            <Label htmlFor="validationCustom05">Пароль</Label>
                            <AvField
                                name="password"
                                placeholder="Пароль"
                                type="text"
                                errorMessage="Введите пароль!"
                                className="form-control"
                                validate={{
                                    required: { value: true },
                                    pattern: {
                                        value: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
                                        errorMessage: "Минимум 8 символов, должны быть цифры и буквы обоих регистров!",
                                    },
                                }}
                                id="validationCustom05"
                                value={newUserForm.password}
                                onChange={(e) => setNewUserForm(prev => ({ ...prev, password: e.target.value }))}
                            />

                        </div>
                        <Button onClick={createUserHandler} id="right-sidebar-submit-btn" color="link" type="submit">
                            Сохранить
                                    </Button>
                    </AvForm>
                </div>
            </Modal>
        </>
    )
}

export default AdminAddUserForm
