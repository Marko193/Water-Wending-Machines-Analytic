import React, {useState} from 'react'
import {deletePhone} from "../../../store/phones/actions";
import {useDispatch} from "react-redux";
import styles from '../Tags/Tags.module.css';
import {Button, Col} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

const DeleteButton = ({phoneId}) => {

    const dispatch = useDispatch();
    const [confirm_alert, setconfirm_alert ] = useState(false)
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")

    const handlerDeletePhone = () => {
        dispatch(deletePhone(phoneId))
    }

    return (
        <div>
            {/*<button*/}
            {/*    type="button"*/}
            {/*    onClick={handlerDeleteTag}*/}
            {/*    className={styles.customButton}*/}
            {/*>x</button>*/}
            <Col xl={3} lg={4} sm={6} className="mb-2">
                <div>
                    <Button
                        color="danger"
                        onClick={() => {
                            setconfirm_alert(true)
                        }}
                        id="sa-success"
                        className={styles.customButton}
                    >
                        X
                    </Button>
                </div>
                {confirm_alert ? (
                    <SweetAlert
                        title="Are you sure?"
                        warning
                        showCancel
                        confirmButtonText="Yes, delete it!"
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() => {
                            setconfirm_alert(false)
                            setsuccess_dlg(true)
                            setdynamic_title("Deleted")
                            setdynamic_description("Your file has been deleted.")
                            handlerDeletePhone()
                            console.log('Confirm')
                        }}
                        onCancel={() => setconfirm_alert(false)}
                    >
                        You won't be able to revert this!
                    </SweetAlert>
                ) : null}
            </Col>
        </div>
    )
};

export default DeleteButton;