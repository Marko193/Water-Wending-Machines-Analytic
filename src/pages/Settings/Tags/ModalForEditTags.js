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
import DropdownDeviceChooseList from "../Phones/dropdown-device-choose-list";
import {getDevicesById, getTagById, deleteTagByID, putTag, getAllDevices} from "../../../store/tags/actions";
import {useDispatch, useSelector} from "react-redux";
import {userRefreshToken} from "../../../store/auth/login/actions";
import styles from "./Tags.module.css";




const ModalForEditTag = ({tagId}) => {
    const [modal_scroll, setmodal_scroll] = useState(false)
    const [localTag, setLocalTag] = useState({})
    const dispatch = useDispatch()
    const { devices }  = useSelector(state => state.Tags)
    const { allDevices } = useSelector(state => state.Tags)
    const { tags }  = useSelector(state => state.Tags)
    const  {currentTag}   = useSelector(state => state.Tags)
    const userSignin = useSelector(state => state.Login)
    const { accessToken } = userSignin



    useEffect(async () => {
        dispatch(userRefreshToken())
    }, [devices])

    useEffect(async () => {
        dispatch(userRefreshToken())
    }, [allDevices])

    useEffect(()=>{
       if(currentTag){
           setLocalTag(currentTag
           )
       }
    },[currentTag])

    const handlerEditTag = (id) => {
        dispatch(getTagById(id))
        dispatch(getDevicesById(id))
        dispatch(getAllDevices())
    }

    const handlerUpdateTag = () => {
        dispatch(putTag(tagId, localTag))
        setmodal_scroll(false)
    }

    const handlerDeleteTag = (id) => {
        dispatch(deleteTagByID(id))
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
                                                   handlerEditTag(tagId)
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
                                                    <Label htmlFor="validationCustom03">Признак</Label>
                                                    <br/>
                                                    <DropdownFeatureChooseList />

                                                    <div>
                                                        <div className="mb-3">
                                                            <Label htmlFor="validationCustom01">Тип</Label>
                                                            <AvField
                                                                value={ localTag.tagType}
                                                                onChange={(e)=>setLocalTag(prev=>({...prev,tagType: e.target.value}))}
                                                                name="Type"
                                                                placeholder="Тип"
                                                                type="text"
                                                                errorMessage="Введите тип!"
                                                                className="form-control"
                                                                validate={{required: {value: true}}}
                                                                // class="add-tag-form-type"
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <Label htmlFor="validationCustom02">Значение</Label>
                                                            <AvField
                                                                value={ localTag.value }
                                                                onChange={(e)=>setLocalTag(prev=>({...prev,value: e.target.value}))}
                                                                name="value"
                                                                placeholder="Значение"
                                                                type="text"
                                                                errorMessage="Введите значение!"
                                                                className="form-control"
                                                                validate={{required: {value: true}}}
                                                                class="add-tag-form-value"
                                                            />
                                                    </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <Button
                                                            id="right-sidebar-submit-btn"
                                                            color="link"
                                                            type="submit"
                                                            onClick= { handlerUpdateTag }
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
                                                        <div id="edit-tag-connected-devices-block" className="table-responsive">
                                                            <Table id="connected-devices-table" className="table mb-0">
                                                                <thead id="edit-tag-connected-devices-thead">
                                                                <tr>
                                                                    <th>Привязанные аппараты</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {devices.map(item => <tr key={item.id}>
                                                                        <td>
                                                                        <div className="select2-result-label ui-select-choices-row-inner"
                                                                             uis-transclude-append="">
                                                                            <div className="ng-binding ng-scope">{item.name}</div>
                                                                            <span
                                                                                className="all-devices-list-record-id">[id: {item.id} ] </span>
                                                                            <span
                                                                                className="all-devices-list-device-location">{item.address}</span>
                                                                        </div>
                                                                    </td>
                                                                        <td>
                                                                        <i
                                                                            id="delete-connected-device"
                                                                            className="uil-multiply"
                                                                            onClick={() => {handlerDeleteTag(item)}}
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

export default ModalForEditTag
