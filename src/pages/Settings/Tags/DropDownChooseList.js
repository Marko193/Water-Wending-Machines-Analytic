import React, { useState } from 'react';
import {
    Col,
    Row,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Container,
} from "reactstrap"
import InfiniteScrollForDrop from "./InfinityScroll";
import styles from "./Tags.module.css";



const DropDownChooseList = () => {
    const [btnsuccess1, setBtnsuccess1] = useState(false)

    return (

        <div>
            <div>
                <Container fluid={true}>

                    <Row>
                        <Col xl={6}>


                            <div>
                                <div className="btn-group me-1">
                                    <Dropdown
                                        isOpen={btnsuccess1}
                                        toggle={() => setBtnsuccess1(!btnsuccess1)}
                                    >
                                        <DropdownToggle tag="button" className="btn btn-success">
                                            Аппараты <i className="mdi mdi-chevron-down" />
                                        </DropdownToggle>
                                        <DropdownMenu className={styles.dropMenu}>
                                            <InfiniteScrollForDrop />
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>


                        </Col>
                    </Row>



                </Container>
            </div>

        </div>
    );
}
export default DropDownChooseList;