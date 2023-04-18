import React, {useEffect, useState} from "react"
import {
    Row,
    Col,
    Modal,
    Button,
    Label,
    Table,
} from "reactstrap"
import DropdownFeatureChooseList from "../Phones/dropdown-feature-choose-list";
import {AvField, AvForm} from "availity-reactstrap-validation";
import DropdownDeviceChooseList from "../Tags/DropDownChooseList";
import {getPhoneList, updatePhone, deletePhone, getPhoneByDeviceId} from "../../../store/phones/actions";
import {useDispatch, useSelector} from "react-redux";
import {userRefreshToken} from "../../../store/auth/login/actions";
import styles from "../Tags/Tags.module.css";




const ModalForEditPhone = ({phoneId}) => {
    const [modal_scroll, setmodal_scroll] = useState(false)
    const { devices }  = useSelector(state => state.Tags)

    const dispatch = useDispatch()
    const { phones } = useSelector(state => state.Phones)
    const { currentPhone } = useSelector(state => state.Phones)
    const userSignin = useSelector(state => state.Login)

    const [localPhone, setLocalPhone] = useState({
        // id: currentPhone.id,
        // deviceId: currentPhone.deviceId,
        // name: currentPhone.name,
        // phone: currentPhone.phone
    })
    const { accessToken } = userSignin


    useEffect(async () => {
        dispatch(userRefreshToken())
    }, [phones])

    useEffect(()=>{
        if(currentPhone){
            setLocalPhone(currentPhone
            )
        }
    },[currentPhone])

    const handlerEditPhone = (id) => {
        dispatch(getPhoneByDeviceId(id))
        dispatch(getPhoneList())
    }

    const handlerUpdatePhone = () => {
        dispatch(updatePhone(phoneId, localPhone))
        setmodal_scroll(false)
    }

    const handlerDeletePhone = (id) => {
        dispatch(deletePhone(id))
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
            <div>
                <Row>
                    <Col className="col-12">

                        <div>
                            <Row>

                                <Col>
                                    <div>
                                        <i id="editUser"
                                           className="uil-pen"
                                           onClick={() => {
                                               tog_scroll()
                                               handlerEditPhone(phoneId)
                                           }}
                                           data-toggle="modal"></i>
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
                                                Редактировать признак
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
                                                {/*<Label htmlFor="validationCustom03">Признак</Label>*/}
                                                {/*<br/>*/}
                                                {/*<DropdownFeatureChooseList />*/}

                                                <div>
                                                    {/*<div className="mb-3">*/}
                                                    {/*    <Label htmlFor="validationCustom01">Имя</Label>*/}
                                                    {/*    <AvField*/}
                                                    {/*        value={ localPhone.name }*/}
                                                    {/*        onChange={(e)=>setLocalPhone(prev=>({...prev,name: e.target.value}))}*/}
                                                    {/*        name="Type"*/}
                                                    {/*        placeholder="Тип"*/}
                                                    {/*        type="text"*/}
                                                    {/*        errorMessage="Введите тип!"*/}
                                                    {/*        className="form-control"*/}
                                                    {/*        validate={{required: {value: true}}}*/}
                                                    {/*    />*/}
                                                    {/*</div>*/}

                                                    <div className="mb-3">
                                                        <Label htmlFor="validationCustom02">Телефон</Label>
                                                        <AvField
                                                            value={ localPhone.phone }
                                                            onChange={(e)=>setLocalPhone(prev=>({...prev,phone: e.target.value}))}
                                                            name="value"
                                                            placeholder="Значение"
                                                            type="text"
                                                            errorMessage="Введите значение!"
                                                            className="form-control"
                                                            validate={{required: {value: true}}}
                                                            class="add-phone-form-value"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <Button
                                                        id="right-sidebar-submit-btn"
                                                        color="link"
                                                        type="submit"
                                                        onClick= { handlerUpdatePhone }
                                                    >
                                                        Сохранить
                                                    </Button>
                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="validationCustom03">Аппарат</Label>
                                                    <DropdownDeviceChooseList devices = {devices}/>
                                                </div>

                                                <div className="mb-3">
                                                    <hr className="right-sidebar-form-delimiter"/>
                                                    <div id="edit-phone-connected-devices-block" className="table-responsive">
                                                        <Table id="connected-devices-table" className="table mb-0">
                                                            <thead id="edit-phone-connected-devices-thead">
                                                            <tr>
                                                                <th>Привязанные телефоны</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {phones.map(item => <tr key={item.id}>
                                                                <td>
                                                                    <div className="select2-result-label ui-select-choices-row-inner"
                                                                         uis-transclude-append="">
                                                                        <div className="ng-binding ng-scope">{item.name}</div>
                                                                        <span
                                                                            className="all-devices-list-record-id">[id: {item.id} ] </span>
                                                                        <span
                                                                            className="all-devices-list-device-location">{item.phone}</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <i
                                                                        id="delete-connected-device"
                                                                        className="uil-multiply"
                                                                        onClick={() => {handlerDeletePhone(item)}}
                                                                    ></i>
                                                                </td>
                                                            </tr>)}




                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </AvForm>

                                        </div>
                                    </Modal>
                                </Col>

                            </Row>
                        </div>

                    </Col>
                </Row>

            </div>
        </React.Fragment>
    )
}

export default ModalForEditPhone;
