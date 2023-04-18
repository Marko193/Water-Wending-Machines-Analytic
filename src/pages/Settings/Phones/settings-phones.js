import React, {useEffect} from "react";

import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
} from "reactstrap"

import {useDispatch, useSelector} from "react-redux";
import { getPhoneList } from '../../../store/actions';

import "nouislider/distribute/nouislider.css"
import PhonesTable from './settings-phones-table';
import ModalForPhones from "./ModalForPhones";

const SettingsPhones = props => {

    const dispatch = useDispatch()
    const { phones }  = useSelector(state => state.Phones)
    console.log('phones:', phones)


    useEffect(() => {
        dispatch(getPhoneList())
    }, []);

    return (
        <React.Fragment>
            <div>
                <Container fluid>

                    <ModalForPhones />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <PhonesTable  />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default SettingsPhones;
