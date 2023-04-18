import React, { useState } from "react"
import {
    Row,
    Col,
    Modal,
    Container, Button, Label,
} from "reactstrap"
import DropdownFeatureChooseList from "../Phones/dropdown-feature-choose-list";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {addTag} from "../../../store/tags/actions";
import {useDispatch, connect, useSelector} from "react-redux";
import styles from './Tags.module.css';



const ModalForTag = () => {
    const [tagType, setTagType] = useState("");
    const [tagValue, setTagValue] = useState("");
    const [modal_scroll, setmodal_scroll] = useState(false);

    const dispatch = useDispatch();

    const { branchId } = useSelector(state => state.Affiliates);

    const onChangeHandlerType = event => {
        setTagType(event.target.value);
    };
    const onChangeHandlerValue = event => {
        setTagValue(event.target.value);
    };

    const handlerCreateTag = () => {
        const requestBody = {tagType, tagValue, branchId}
        dispatch(addTag(requestBody))
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
                                                         Добавить новый признак
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
                                                            Добавить новый признак
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

                                                            <Label htmlFor="validationCustom03">Признак</Label>
                                                            <DropdownFeatureChooseList />

                                                            <div className="mb-3">
                                                                <Label htmlFor="validationCustom01">Тип</Label>
                                                                <AvField
                                                                    value={tagType}
                                                                    onChange={onChangeHandlerType}
                                                                    name="Type"
                                                                    placeholder="Тип"
                                                                    type="text"
                                                                    errorMessage="Введите тип!"
                                                                    className="form-control"
                                                                    validate={{ required: { value: true } }}
                                                                    // class="add-tag-form-type"
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Label htmlFor="validationCustom02">Значение</Label>
                                                                <AvField
                                                                    value={tagValue}
                                                                    onChange={onChangeHandlerValue}
                                                                    name="value"
                                                                    placeholder="Значение"
                                                                    type="text"
                                                                    errorMessage="Введите значение!"
                                                                    className="form-control"
                                                                    validate={{ required: { value: true } }}
                                                                    id="add-tag-form-value"
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
                                                                onClick={ handlerCreateTag }>
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

export default connect(null, {addTag})(ModalForTag)
