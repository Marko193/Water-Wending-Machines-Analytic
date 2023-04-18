import React from "react"
import {
    Col,
    Container,
    Row,
} from "reactstrap"

import "nouislider/distribute/nouislider.css"

import {MDBDataTable} from "mdbreact";

const SettingsImeiTable = ({data}) => {
    // console.log(data.rows);
    return (
        <React.Fragment>
            <div className="psorting-content">
                <Container fluid>
                    <Row>
                        <Col className="col-12">
                            {data.rows.length > 0 &&
                            <  MDBDataTable
                                searchLabel={'Поиск'}
                                entriesLabel={'Показывать рядов'}
                                infoLabel={["Показано", "от", "до", "строк"]}
                                paginationLabel={["Предыдущая", "Следущая"]}
                                striped
                                bordered
                                data={data}
                            />}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default SettingsImeiTable
