import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Pagination,
    PaginationItem,
    PaginationLink,
    Collapse,
    Media,
    CardTitle,
    Modal,
    Row,
} from "reactstrap"


//modal window component
// import ModalWindow from '../../../components/Common/RightSidebarModal';

import { isEmpty, map } from "lodash"

// RangeSlider
import "nouislider/distribute/nouislider.css"

//Import Breadcrumb
// import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Import data
import { discountData, productsData, colorData } from "../../../common/data"

//Import actions
import { getProducts } from "../../../store/e-commerce/actions"

//import component - dropdown smart search
import DropdownSmartSearch from '../../../components/Devices/List/dropdown-search-devices-list'
import AllDevicesList from '../../../components/VerticalLayout/all-devices-list/all-devices-list'
import { MDBDataTable } from "mdbreact";

const EcommerceProducts = props => {
    const { products, history, onGetProducts } = props


    const [productList, setProductList] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [discountDataList, setDiscountDataList] = useState([])

    const [filters, setFilters] = useState({
        discount: [],
        color: [],
        price: { min: 0, max: 500 },
    })

    const [page, setPage] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [totalPage, setTotalPage] = useState(5)

    useEffect(() => {
        setProductList(products)
        onGetProducts()
        setDiscountDataList(discountData)
    }, [onGetProducts, products])

    useEffect(() => {
        if (!isEmpty(products)) setProductList(products)
    }, [products])

    const onUpdate = (render, handle, value) => {
        setProductList(
            productsData.filter(
                product => product.newPrice >= value[0] && product.newPrice <= value[1]
            )
        )
    }

    // modal window functions
    const [modal_scroll, setmodal_scroll] = useState(false)

    function removeBodyCss() {
        document.body.classList.add("no_padding")
    }

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
        removeBodyCss()
    }

    // modal window functions

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
                        data-toggle="modal"
                    >
                        Добавить аппарат
                    </Button>

                    {/*<ModalWindow className="test2"*/}
                    {/*    tog_scroll={tog_scroll}*/}
                    {/*    modal_scroll={modal_scroll}*/}
                    {/*    setmodal_scroll={modal_scroll}*/}
                    {/*/>*/}

                    {/* <Breadcrumbs title="Ecommerce" breadcrumbItem="Признаки"/> */}

                    {/*  here will be smart search with dropdown list*/}
                    <DropdownSmartSearch />

                    {/*main table with all devices*/}
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <h5>Список аппаратов</h5>
                                    <br />
                                    <AllDevicesList />

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