import React, {Component, useState} from "react"

import {
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    Card,
    Row,
    Col,
    CardBody,
    CardTitle,
    Container,
    Modal
} from "reactstrap"

import {Table, Thead, Tbody, Tr, Th, Td} from "react-super-responsive-table"

import Select from "react-select"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import classnames from "classnames"

const UiTabsAccordions = () => {

    const [activeTabJustify, setactiveTabJustify] = useState("5")

    function toggleCustomJustified(tab) {
        if (activeTabJustify !== tab) {
            setactiveTabJustify(tab)
        }
    }


    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <Breadcrumbs title="Device" breadcrumbItem="Аппарат"/>
                    <Select
                        // value={selectedAffiliate}
                        // onChange={(e) => {
                        //     handleSelectAffiliate(e)
                        // }}
                        // options={AffiliateGroup}
                        className="detailed-state-device-list"
                    />
                    <Row>
                        <Col xl={8}>
                            <Card>
                                <CardBody>
                                    <Nav tabs className="nav-tabs-custom nav-devices-detailed-info">
                                        <NavItem>
                                            <NavLink
                                                style={{cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTabJustify === "5",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("5")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Подробное состояние</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTabJustify === "settings",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("settings")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block">Настройки</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTabJustify === "prices",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("prices")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Цены</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTabJustify === "promotions",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("promotions")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Акции</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTabJustify === "firmware",
                                                })}
                                                onClick={() => {
                                                    toggleCustomJustified("firmware")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Прошивка</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTabJustify}>
                                        <TabPane tabId="5" className="p-3">

                                            <h5 id="detailed-state-title-water">Вода</h5>
                                            <Table id="detailed-state-water-table" className="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <td>Цена 1 л</td>
                                                    <td>1.50 грн/л</td>
                                                </tr>
                                                <tr>
                                                    <td>Всего продано воды со дня запуска</td>
                                                    <td>65 968.4 л</td>
                                                </tr>
                                                <tr>
                                                    <td>Всего выручено денег со дня запуска</td>
                                                    <td>82 641.20 грн</td>
                                                </tr>
                                                </tbody>
                                            </Table>

                                            <h5 id="detailed-state-title-connection">Связь</h5>
                                            <Table id="detailed-state-water-table-connection" className="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <td>Оператор связи</td>
                                                    <td>Kyivstar</td>
                                                </tr>
                                                <tr>
                                                    <td>Баланс SIM-карты</td>
                                                    <td>Здесь будет/ не будет баланс</td>
                                                </tr>
                                                <tr>
                                                    <td>Последний выход на связь</td>
                                                    <td>2021.07.19 03:29</td>
                                                </tr>
                                                </tbody>
                                            </Table>

                                            <h5 id="detailed-state-title-device">Аппарат</h5>
                                            <Table id="detailed-state-water-table-device" className="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <td>Версия прошивки</td>
                                                    <td>9.25</td>
                                                </tr>
                                                <tr>
                                                    <td>Дата создания</td>
                                                    <td>2020.04.30 15:17</td>
                                                </tr>
                                                </tbody>
                                            </Table>

                                        </TabPane>
                                        <TabPane tabId="settings" className="p-3">

                                            {/*<h5 id="detailed-state-title-water">Точность налива</h5>*/}
                                            <Table id="settings-water-table" className="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <td>Точность налива</td>
                                                    <td>
                                                            {/*checkbox*/}
                                                            <div className="toggle-switch">
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-checkbox"
                                                                    name="toggleSwitch"
                                                                    id="toggleSwitch"
                                                                />
                                                                <label className="toggle-switch-label" htmlFor="toggleSwitch">
                                                                    <span className="toggle-switch-inner" />
                                                                    {/*<span className="toggle-switch-switch" />*/}
                                                                </label>
                                                            </div>

                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td>65 968.4 л</td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </Table>

                                        </TabPane>
                                        <TabPane tabId="prices" className="p-3">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                aesthetic magna delectus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="promotions" className="p-3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                farm-to-table readymade. Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard locavore carles etsy
                                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                mi whatever gluten-free carles.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="firmware" className="p-3">
                                            <p className="mb-0">
                                                Таб 9 Данные
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <CardBody>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
)
}

export default UiTabsAccordions
