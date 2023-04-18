import React, { useEffect, useState } from "react"

import { withRouter } from "react-router-dom"

//connect slider with form validation

import 'animate.css/animate.min.css'

import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Row,

} from "reactstrap"

// RangeSlider
import "nouislider/distribute/nouislider.css"

//import component - dropdown smart search

import AdminUsersTable from './administration-users-table'
import AdminAddUserForm from "./AdminAddUserForm";
import AdminEditUserForm from "./AdminEditUserForm";
import { useDispatch, useSelector } from "react-redux"
import { getAffiliatesUsers, userRefreshToken } from "../../../store/actions"

import Moment from 'react-moment';
import moment from 'moment';

const EcommerceProducts = props => {

    const [modal_scroll, setmodal_scroll] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [userId, serUserId] = useState(false)

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
    }

    function editButton() {
        setEditModal(!editModal)
    }

    const [data, setData] = useState({
        columns: [
            {
                label: "Id",
                field: "table_record_id",
                sort: "asc",
                width: 150,
            },
            {
                label: "Пользователь",
                field: "nickname",
                sort: "asc",
                width: 150,
            },
            {
                label: "Имя",
                field: "name",
                sort: "asc",
                width: 270,
            },
            {
                label: "Роль",
                field: "role",
                sort: "asc",
                width: 100,
            },
            {
                label: "Филиал",
                field: "affiliation",
                sort: "asc",
                width: 100,
            },
            {
                label: "Активные",
                field: "isActive",
                sort: "asc",
                width: 100,
            },
            {
                label: "Последняя активность",
                field: "last_activity_date",
                sort: "asc",
                width: 150,
            },
            {
                label: "",
                field: "edit",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [],
    })

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.Login)
    const allUsers = useSelector(state => state.Users)
    const { accessToken } = userSignin
    const { users } = allUsers

    const editUserHandler = id => {
        console.log(id)
        serUserId(id)
        editButton()
    }

    useEffect(() => {
        if (accessToken) {
            dispatch(getAffiliatesUsers())
        }
    }, [])

    useEffect(async () => {
        dispatch(userRefreshToken())
        if (accessToken && users) {
            console.log(allUsers);
            console.log(users);
            let rows = users.map(item => {
                return {
                    table_record_id: item.id,
                    nickname: item.login,
                    name: item.name,
                    role: item.role === 1 ? 'Производитель' : item.role === 0 ? 'Сервисный центр' : item.role === 2 ? 'Владелец' : '',
                    affiliation: item.branchName,
                    isActive: item.status == 1 ? <i id="isActive" className="uil-check"></i> : '',
                    last_activity_date: item.lastSignInAt ? moment(item.lastSignInAt).format("DD MM YYYY hh:ss") : '',
                    edit: <i onClick={() => editUserHandler(item.id)} id="editUser" className="uil-pen"></i>
                }
            })
            setData(prev => ({ ...prev, rows }))
        }
    }, [users])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <Button
                        type="button"
                        color="success"
                        id="add-device-btn"
                        className="btn btn-success w-lg waves-effect waves-light"
                        onClick={tog_scroll}
                    >
                        Добавить пользователя
                    </Button>

                    {modal_scroll && <AdminAddUserForm setModalScroll={setmodal_scroll} modalScroll={modal_scroll} />}
                    {/* <AdminEditUserForm setEditModal={setEditModal} editModal={editModal} id={userId} /> */}


                    {/*main table with all devices*/}
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <AdminUsersTable data={data} editUserHandler={editUserHandler} setEditModal={setEditModal} editModal={editModal} id={userId} />


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default (withRouter(EcommerceProducts))
