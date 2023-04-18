import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
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
import AdminAffilatesTable from './administration-affilates-table'
import SettingsAddAffiliatesForm from "./SettingsAddAffiliatesForm";
import { get } from "../../../helpers/api_helper"
import { useDispatch, useSelector } from "react-redux"
import { getAffliliatesData, userRefreshToken } from "../../../store/actions"


const EcommerceProducts = (props) => {

    const [data, setData] = useState({
        columns: [
            {
                label: "#",
                field: "record_number",
                sort: "asc",
                width: 150,
            },
            {
                label: "Id",
                field: "table_record_id",
                sort: "asc",
                width: 150,
            },
            {
                label: "Название",
                field: "affiliate_name",
                sort: "asc",
                width: 150,
            },
            {
                label: "Кол-во аппаратов",
                field: "affiliatesNumber",
                sort: "asc",
                width: 270,
            },
            {
                label: "Кол-во пользователей",
                field: "usersNumber",
                sort: "asc",
                width: 200,
            },
            {
                label: "",
                field: "edit",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [

        ],
    })

    const [affiliateId, setAffiliateId] = useState(null)

    const dispatch = useDispatch()

    const userSignin = useSelector(state => state.Login)
    const { accessToken } = userSignin

    const getAffiliates = useSelector(state => state.Affiliates)
    const { affiliatesData } = getAffiliates

    const [affiliate_scroll, edit_affiliate_scroll] = useState(false)

    function editAffiliate_scroll() {
        edit_affiliate_scroll(!affiliate_scroll)
    }

    const editAffiliateHandler = id => {
        console.log(id)
        setAffiliateId(id)
        editAffiliate_scroll()
    }


    useEffect(async () => {
        if (accessToken) {
            dispatch(getAffliliatesData())
            console.log(affiliatesData);
        }
    }, [])

    useEffect(async () => {
        dispatch(userRefreshToken())
        console.log(affiliatesData);
        if (accessToken && affiliatesData) {
            let rows = affiliatesData.map(item => {
                return {
                    record_number: affiliatesData.indexOf(item) + 1,
                    table_record_id: item.id,
                    affiliate_name: item.name,
                    affiliatesNumber: item.devicesCount,
                    usersNumber: item.usersCount,
                    edit: <i id="editUser" className="uil-pen" onClick={() => editAffiliateHandler(item.id)}></i>
                }
            })
            setData(prev => ({ ...prev, rows }))
        }
    }, [affiliatesData])

    // define slider
    const [modal_scroll, setmodal_scroll] = useState(false)

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
    }

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
                        Добавить филиал
                    </Button>


                    {modal_scroll && <SettingsAddAffiliatesForm
                        setModalScroll={setmodal_scroll}
                        modalScroll={modal_scroll}
                    />}

                    {/*main table with all devices*/}
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>

                                    <AdminAffilatesTable data={data} affiliateId={affiliateId} affiliate_scroll={affiliate_scroll} edit_affiliate_scroll={edit_affiliate_scroll} />

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
