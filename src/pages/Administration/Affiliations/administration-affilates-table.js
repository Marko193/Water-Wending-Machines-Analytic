import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
    Col,
    Container,
    Row,
} from "reactstrap"


// RangeSlider
import "nouislider/distribute/nouislider.css"


//Import actions
import { getProducts } from "../../../store/e-commerce/actions"

//import component - dropdown smart search
import { MDBDataTable } from "mdbreact";
import SettingsEditAffliatesForm from "./SettingsEditAffiliatesForm";

const EcommerceProducts = ({ data, affiliate_scroll, edit_affiliate_scroll, affiliateId }) => {
    // eslint-disable-next-line no-unused-vars

    return (
        <React.Fragment>
            <div className="psorting-content">
                <Container fluid>

                    <Row>
                        <Col className="col-12">

                            <MDBDataTable
                                searchLabel={'Поиск'}
                                entriesLabel={'Показывать рядов'}
                                infoLabel={["Показано", "от", "до", "строк"]}
                                paginationLabel={["Предыдущая", "Следущая"]}
                                responsive striped bordered data={data}
                            />


                            {affiliate_scroll && <SettingsEditAffliatesForm
                                setModalScroll={edit_affiliate_scroll}
                                modalScroll={affiliate_scroll}
                                id={affiliateId}
                            />}


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
