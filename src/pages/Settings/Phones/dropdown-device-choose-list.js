import React, { useState } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    ButtonDropdown,
    CardTitle,
    Container,
} from "reactstrap"



const DropDownChooseList = ({devices}) => {
    const [singlebtn, setSinglebtn] = useState(false)
    const [singlebtn1, setSinglebtn1] = useState(false)
    const [btnprimary1, setBtnprimary1] = useState(false)
    const [btnsecondary1, setBtnsecondary1] = useState(false)
    const [btnsuccess1, setBtnsuccess1] = useState(false)
    const [btnInfo1, setBtnInfo1] = useState(false)
    const [btnWarning1, setBtnWarning1] = useState(false)
    const [btnDanger1, setBtnDanger1] = useState(false)
    const [drp_primary1, setDrp_primary1] = useState(false)
    const [drp_secondary1, setDrp_secondary1] = useState(false)
    const [drp_success1, setDrp_success1] = useState(false)
    const [drp_info1, setDrp_info1] = useState(false)
    const [drp_warning1, setDrp_warning1] = useState(false)
    const [drp_danger1, setDrp_danger1] = useState(false)
    const [drp_secondary, setDrp_secondary] = useState(false)
    const [drp_secondary_lg, setDrp_secondary_lg] = useState(false)
    const [drp_secondary_sm, setDrp_secondary_sm] = useState(false)
    const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false)
    const [dropup1, setDropup1] = useState(false)
    const [drp_up11, setDrp_up11] = useState(false)
    const [drop_align, setDrop_align] = useState(false)
    const [info_dropup1, setInfo_dropup1] = useState(false)
    const [infodrp_up11, setInfodrp_up11] = useState(false)
    const [info_dropup111, setInfo_dropup111] = useState(false)
    const [infodrp_up1111, setInfodrp_up1111] = useState(false)

        return (

            <div>
                <div>
                    <Container fluid={true}>

                        <Row>
                            <Col xl={6}>


                                        <div className="">
                                            <div className="btn-group me-1">
                                                <Dropdown
                                                    isOpen={btnsuccess1}
                                                    toggle={() => setBtnsuccess1(!btnsuccess1)}
                                                >
                                                    <DropdownToggle tag="button" className="btn btn-success">
                                                        Аппараты <i className="mdi mdi-chevron-down" />
                                                    </DropdownToggle>
                                                    {/*<DropdownMenu>{devices.map(item =>*/}
                                                    {/*    <DropdownItem>{item.address}</DropdownItem>*/}
                                                    {/*)}*/}
                                                    {/*</DropdownMenu>*/}
                                                </Dropdown>
                                            </div>
                                        </div>


                            </Col>
                        </Row>



                    </Container>
                </div>

            </div>
            // <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            //     <DropdownToggle className="dropdown-smart-search-button">
            //         {this.state.current_device} <i className="mdi mdi-chevron-down"/>
            //     </DropdownToggle>
            //
            //     <DropdownMenu className="dropdown-smart-search-list"
            //                   modifiers={{
            //                       setMaxHeight: {
            //                           enabled: true,
            //                           order: 890,
            //                           fn: (data) => {
            //                               return {
            //                                   ...data,
            //                                   styles: {
            //                                       ...data.styles,
            //                                       overflow: 'auto',
            //                                       maxHeight: 315,
            //                                   },
            //                               };
            //                           },
            //                       },
            //                   }}>
            //         <div className="form-outline">
            //             <p>
            //                 Props:
            //                 {this.props.allDevices}
            //             </p>
            //             {/*<input type="text" id="smart-search-input" className="form-control"/>*/}
            //         </div>
            //         <DropdownItem>
            //             <p>Place for massive</p>
            //         </DropdownItem>
            //     </DropdownMenu>
            // </Dropdown>
        );
}
export default DropDownChooseList;