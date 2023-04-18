import React, {useEffect, useState} from "react"

import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Row,
} from "reactstrap"

import {useDispatch, useSelector} from "react-redux";
import { getTags } from '../../../store/actions';

// RangeSlider
import "nouislider/distribute/nouislider.css"

//Import data
import {discountData, productsData} from "../../../common/data"


import SettingsTagsTable from './settings-tags-table'
import ModalForTag from "./ModalForTag";

//select form items

const SettingsTags = props => {
    const {products, history, onGetProducts} = props
    // eslint-disable-next-line no-unused-vars
    const [FilterClothes, setFilterClothes] = useState([
        {id: 1, name: "T-shirts", link: "#"},
        {id: 2, name: "Shirts", link: "#"},
        {id: 3, name: "Jeans", link: "#"},
        {id: 4, name: "Jackets", link: "#"},
    ]);

    const dispatch = useDispatch()
    // const tagsignin = useSelector(state => state.Login)
    // const { tags }  = useSelector(state => state.Tags)


    const [productList, setProductList] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [discountDataList, setDiscountDataList] = useState([])

    const [filters, setFilters] = useState({
        discount: [],
        color: [],
        price: {min: 0, max: 500},
    })

    const [page, setPage] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [totalPage, setTotalPage] = useState(5)


    useEffect(() => {
        dispatch(getTags())
    }, []);

    const onUpdate = (render, handle, value) => {
        setProductList(
            productsData.filter(
                product => product.newPrice >= value[0] && product.newPrice <= value[1]
            )
        )
    }

    //-------------------------------------------------------

    //ACTUAL

    // define slider
    const [modal_scroll, setmodal_scroll] = useState(false)

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
    }

    return (
        <React.Fragment>
            <div>
                <Container fluid>
                        <ModalForTag />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <SettingsTagsTable  />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>
        </React.Fragment>
    )
}



export default SettingsTags;
