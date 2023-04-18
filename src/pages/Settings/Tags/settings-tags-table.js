import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {
    Col,
    Container,
    Row,
} from "reactstrap"



// RangeSlider
import "nouislider/distribute/nouislider.css"


//Import data
import {discountData, productsData, colorData} from "../../../common/data"

//Import actions
import { useSelector } from "react-redux";

//--------------------------------------------

//import components
import {MDBDataTable} from "mdbreact";
import {userRefreshToken} from "../../../store/auth/login/actions";
import ModalForEditTag from "./ModalForEditTags";
import DeleteButton from "./DeleteButton";

//----------------------------------------------
const SettingsTagsTable = props => {
    const {products, history, onGetProducts} = props
    // eslint-disable-next-line no-unused-vars

    // const { devices }  = useSelector(state => state.Tags)
    const { tags }  = useSelector(state => state.Tags)
    const userSignin = useSelector(state => state.Login)
    const { accessToken } = userSignin
    const dispatch = useDispatch()


    const [data, setData] = useState({
        columns: [
            {
                label: "Тип",
                field: "type",
                sort: "asc",
                width: 150,
            },
            {
                label: "Значение",
                field: "value",
                sort: "asc",
                width: 150,
            },
            {
                label: "Привязанные аппараты",
                field: "connected_devices",
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
        if (accessToken && tags) {
            let rows = tags.map(item => {
                return {
                    type: item.tagType,
                    value: item.value,
                    connected_devices: item.devicesCount,
                    edit: <ModalForEditTag tagId = {item.id}/>,
                    delete: <DeleteButton tagId = {item.id}/>
                }
            })
            setData(prev => ({ ...prev, rows }))
        }
    }, [tags])
    const [productList, setProductList] = useState([])


    //ACTUAL

    // define slider
    const [tag_scroll, edit_tag_scroll] = useState(false)

    function editTag_scroll() {
        edit_tag_scroll(!tag_scroll)
    }


    return (
        <React.Fragment>
            <div className="psorting-content">
                <Container fluid>

                    <Row>
                        <Col className="col-12">

                            {/*connect table with data*/}
                            <MDBDataTable
                                searchLabel={'Поиск'}
                                entriesLabel={'Показывать рядов'}
                                infoLabel={["Показано", "от", "до", "строк"]}
                                paginationLabel={["Предыдущая", "Следущая"]}
                                responsive striped bordered data={data}
                            />

                            {/*Add right sidebar form component*/}



                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default SettingsTagsTable;

