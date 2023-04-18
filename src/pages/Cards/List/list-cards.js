import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
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
import CardsAddСardForm from './CardsAddCardForm'

import CardsList from './list-cards-table'
import SettingsAddIMEIForm from "../../Settings/IMEI/SettingsAddIMEIForm";

const EcommerceProducts = props => {

    //-------------------------------------------------------

    //ACTUAL

    // define slider
    const [modal_scroll, setmodal_scroll] = useState(false)

    function tog_scroll() {
        setmodal_scroll(!modal_scroll)
    }

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
                        Добавить карточку
                    </Button>

                    <CardsAddСardForm
                        setModalScroll={setmodal_scroll}
                        modalScroll={modal_scroll}
                    />

                    {/*main table with all devices*/}
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <CardsList />
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
