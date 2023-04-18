import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

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

//Import actions
import { getProducts } from "../../../store/e-commerce/actions"

//import component - dropdown smart search

import SettingsIMEITable from './settings-imei-table'
import SettingsAddIMEIForm from './SettingsAddIMEIForm'
import SettingsEditIMEIForm from "./SettingsEditIMEIForm";
import { useDispatch, useSelector } from "react-redux";
import { getIMEIs } from "../../../store/actions";
import { del } from "../../../helpers/api_helper";

//--------------------------------



const EcommerceProducts = props => {

    // open add imei form
    const [modal_scroll, setmodal_scroll] = useState(false);

    //open edit imei form
    const [editModal, setEditModal] = useState(false);
    const [imeiId, setImeiId] = useState(false)

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
    }

    function editButton() {
        setEditModal(true)
    }

    const [data, setData] = useState({
        columns: [
            {
                label: "Название аппарата",
                field: "device_name",
                sort: "asc",
                width: 100,

            },
            {
                label: "Местоположение",
                field: "device_location",
                sort: "asc",
                width: 100,

            },
            {
                label: "Состояние",
                field: "device_state",
                sort: "asc",
                width: 270,
            },
            {
                label: "IMEI",
                field: "device_imei",
                sort: "asc",
                width: 200,
                className: "testClass"
            },
            {
                label: "",
                field: "edit",
                sort: "asc",
                width: 50,
            }
        ],
        rows: [],
    });

    const dispatch = useDispatch()
    const imeisignin = useSelector(state => state.Login)
    const allIMEI = useSelector(state => state.Imei)
    const { accessToken } = imeisignin;
    const { imeis } = allIMEI;

    const editIMEIHandler = id => {
        console.log('This is imei Id')
        console.log(id)
        setImeiId(id)
        editButton()
    };

    useEffect(() => {
        if (accessToken) {
            dispatch(getIMEIs())
        }
    }, []);

    const deleteImeiHandler = async (id) => {

        try {
            const data = await del(`https://testdms.ml/api/dms/settings/imei?deviceId=${id}`, {
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

    useEffect(async () => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            // console.log('Here should be All IMEI data, which we get from settings-IMEI component')
            // console.log(allIMEI);
            // console.log(imeis);
            let rows = imeis.map(item => {
                return {
                    device_id: item.deviceId,
                    // device_name: item.deviceName + " " + item.deviceAddress,
                    device_name: item.deviceName,
                    device_location: item.deviceAddress,
                    device_imei: item.deviceImei,
                    device_state: item.deviceStatus,
                    edit: <div><i onClick={() => editIMEIHandler(item.deviceId)} id="editUser" className="uil-pen"></i> <i onClick={() => deleteImeiHandler(item.deviceId)} id="deleteRecord" className="uil-multiply"></i></div>,
                }
            })
            setData(prev => ({ ...prev, rows }))
        }
    }, [imeis])


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
                        Добавить IMEI
                    </Button>

                    {modal_scroll && <SettingsAddIMEIForm setModalScroll={setmodal_scroll} modalScroll={modal_scroll} />}
                    {editModal && <SettingsEditIMEIForm setEditModal={setEditModal} editModal={editModal} id={imeiId} />}

                    {/*main table with all devices*/}
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <SettingsIMEITable data={data} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

EcommerceProducts.propTypes = {
    products: PropTypes.array,
    history: PropTypes.object,
    onGetProducts: PropTypes.func,
}

const mapStateToProps = state => ({
    products: state.ecommerce.products,
})

const mapDispatchToProps = dispatch => ({
    onGetProducts: () => dispatch(getProducts()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EcommerceProducts))
