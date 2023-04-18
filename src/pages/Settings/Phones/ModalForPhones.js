import React, { useState } from "react"
import {
    Row,
    Col,
    Modal,
    Container, Button, Label,
} from "reactstrap"
import DropdownFeatureChooseList from "../Phones/dropdown-feature-choose-list";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {createPhone} from "../../../store/phones/actions";
import {useDispatch, connect, useSelector} from "react-redux";
import styles from '../Tags/Tags.module.css';



const ModalForPhones = () => {
    const [deviceName, setPhoneDeviceName] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [modal_scroll, setmodal_scroll] = useState(false);

    const dispatch = useDispatch();
    const { deviceId }   =  useSelector(state => state.Phones);
    console.log('deviceId:', deviceId)

    const onChangeHandlerName = event => {
        setPhoneDeviceName(event.target.value);
    };
    const onChangeHandlerPhone = event => {
        setPhoneNumber(event.target.value);
    };

    const handlerCreatePhone = () => {
        const requestBody = {deviceName, phone, deviceId}
        dispatch(createPhone(requestBody))
        setmodal_scroll(false)
    }

    function removeBodyCss() {
        document.body.classList.add("no_padding")
    }

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
        removeBodyCss()
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Row>
                        <Col className="col-12">




                            <div className="mt-4">
                                <Row>

                                    <Col xl={4} md={6}>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-success waves-effect waves-light"
                                                onClick={() => {
                                                    tog_scroll()
                                                }}
                                                data-toggle="modal"
                                            >
                                                Добавить новый телефон
                                            </button>
                                        </div>

                                        <Modal
                                            isOpen={modal_scroll}
                                            toggle={() => {
                                                tog_scroll()
                                            }}
                                            scrollable={true}
                                            className={styles.customModals}
                                        >
                                            <div className="modal-header">
                                                <h5 className="modal-title mt-0">
                                                    Добавить новый телефон
                                                </h5>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setmodal_scroll(false)
                                                    }
                                                    className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/*body-place*/}
                                                <AvForm className="right-sidebar-modal-form">

                                                    <Label htmlFor="validationCustom03">Телефон</Label>
                                                    <DropdownFeatureChooseList />

                                                    <div className="mb-3">
                                                        <Label htmlFor="validationCustom01">Имя</Label>
                                                        <AvField
                                                            value={deviceName}
                                                            onChange={onChangeHandlerName}
                                                            name="Type"
                                                            placeholder="Тип"
                                                            type="text"
                                                            errorMessage="Введите тип!"
                                                            className="form-control"
                                                            validate={{ required: { value: true } }}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <Label htmlFor="validationCustom02">Телефон</Label>
                                                        <AvField
                                                            value={phone}
                                                            onChange={onChangeHandlerPhone}
                                                            name="value"
                                                            placeholder="Значение"
                                                            type="text"
                                                            errorMessage="Введите значение!"
                                                            className="form-control"
                                                            validate={{ required: { value: true } }}
                                                            id="add-phone-form-value"
                                                        />
                                                    </div>

                                                </AvForm>

                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={() =>
                                                            setmodal_scroll(false)
                                                        }
                                                    >
                                                        Закрыть
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={ handlerCreatePhone }>
                                                        Сохранить
                                                    </button>
                                                </div>
                                            </div>
                                        </Modal>
                                    </Col>

                                </Row>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default connect(null, {createPhone})(ModalForPhones)
