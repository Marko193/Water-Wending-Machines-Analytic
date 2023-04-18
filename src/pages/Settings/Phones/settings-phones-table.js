import React, {useEffect, useState} from "react"
import { useDispatch, useSelector} from "react-redux"

import {
    Col,
    Container,
    Row,
} from "reactstrap"


// RangeSlider
import "nouislider/distribute/nouislider.css"

import {MDBDataTable} from "mdbreact";
import DeleteButton from "../Phones/DeleteButton";
import ModalForEditPhone from "./ModalForEditPhones";

const SettingsPhoneTable = props => {

    const { phones }  = useSelector(state => state.Phones)
    const userSignin = useSelector(state => state.Login)
    const { accessToken } = userSignin
    const dispatch = useDispatch()

    const [data, setData] = useState({
        columns: [
            {
                label: "Аппарат",
                field: "device_location",
                sort: "asc",
                width: 150,
            },
            {
                label: "Имя",
                field: "user_name",
                sort: "asc",
                width: 150,
            },
            {
                label: "Телефон",
                field: "phone",
                sort: "asc",
                width: 200,
            },
            {
                label: "",
                field: "edit",
                sort: "asc",
                width: 50,
            },
            {
                label: "",
                field: "delete",
                sort: "asc",
                width: 200,
            },
        ],
        rows: [],
    });

    useEffect(async () => {
        // dispatch(userRefreshToken())
        if (accessToken && phones) {
            let rows = phones.map(item => {
                return {
                    device_location: item.deviceAddress,
                    user_name: item.deviceName,
                    phone: item.phone,
                    edit: <ModalForEditPhone phoneId = {item.deviceId}/>,
                    delete: <DeleteButton phoneId = {item.id}/>
                }
            })
            setData(prev => ({ ...prev, rows }))
        }
    }, [phones])


    //ACTUAL

    // define slider
    const [phones_scroll, edit_phones_scroll] = useState(false)

    function editPhones_scroll() {
        edit_phones_scroll(!phones_scroll)
    }
    
    return (
        <React.Fragment>
            <div className="psorting-content">
                <Container fluid>

                    <Row>
                        <Col className="col-12">


                            <MDBDataTable
                                searchLabel={'Поиск'}
                                entriesLabel={'Показывать рядов'}
                                infoLabel={["Показано", "от", "до", "строк"]}
                                paginationLabel={["Предыдущая", "Следущая"]}
                                responsive striped bordered data={data}
                            />

                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default SettingsPhoneTable;
