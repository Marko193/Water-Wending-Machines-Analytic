import React from "react"
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


import { MDBDataTable } from "mdbreact";


const CardNumInfo = props => {

    let card_num_id = "1601001109";
    let card_num_code = "450035E63F";

    return (
        <div className="card-num-full-info">
            <span id="cards-list-id">{card_num_id}</span>
            <br/>
            <small id="cards-list-code">Код: {card_num_code}</small>
        </div>
    )
};

const EcommerceProducts = props => {

    const data = {
        columns: [
            {
                label: "Id",
                field: "card_num_id",
                sort: "asc",
                width: 150,
            },
            {
                label: "Номер",
                field: "card_number",
                sort: "asc",
                width: 150,
            },
            {
                label: "Тип",
                field: "card_type",
                sort: "asc",
                width: 150,
            },
            {
                label: "Бонусы, л",
                field: "card_bonuses",
                sort: "asc",
                width: 150,
            },
            {
                label: "Активные",
                field: "isActive",
                sort: "asc",
                width: 200,
            },
            {
                label: "",
                field: "watch",
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
        rows: [
            {
                card_num_id: 3451,
                card_number: [
                    <CardNumInfo/>
                ],
                card_type: "Сервисная",
                card_bonuses: "17.1",
                isActive: <i id="isActive" className="uil-check"></i>,
                watch: <i id="watchRecord" className="uil-eye"></i>,
                delete: <i id="deleteRecord" className="uil-multiply"></i>
            },
            {
                card_num_id: 37870,
                card_number: <CardNumInfo/>,
                card_type: "Универсальная",
                card_bonuses: "115.0",
                isActive: <i id="isActive" className="uil-check"></i>,
                watch: <i id="watchRecord" className="uil-eye"></i>,
                delete: <i id="deleteRecord" className="uil-multiply"></i>
            },

        ],
    }


    //total-cards-info-vars
    let total_cards_sum = 8505;
    let total_pages_sum = 426;
    let total_cards_page = 20;


    return (
        <React.Fragment>
            <div className="psorting-content">
                <Container fluid>

                    <Row>
                        <Col className="col-12">

                            <div className="total-cards-info">
                                <div>
                                    <span className="ng-scope">Всего карт : {total_cards_sum}</span>
                                </div>
                                <div>
                                    <span className="ng-scope">Всего страниц : {total_pages_sum} </span>
                                </div>
                                <div>
                                    <span className="ng-scope">Карт на странице : {total_cards_page} </span>
                                </div>
                            </div>

                            <MDBDataTable
                                searchLabel={'Поиск'}
                                entriesLabel={'Показывать рядов'}
                                infoLabel={["Показано", "от", "до", "строк"]}
                                paginationLabel={["Предыдущая", "Следущая"]}
                                responsive striped bordered data={data}
                                id="lists-cards-table"
                            />

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
