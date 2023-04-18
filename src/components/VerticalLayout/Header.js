import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"

import { connect, useSelector } from "react-redux"


import { Link } from "react-router-dom"

// Reactstrap
import {
    Form,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu
} from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"

import DropdownBase from './dropdown-base'

import logoSm from "../../assets/images/water-image-logo.png"
import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
    showRightSidebarAction,
    toggleLeftmenu,
    changeSidebarType,
} from "../../store/actions"

const Header = props => {

    //default header hooks
    const [search, setsearch] = useState(false)
    const [socialDrp, setsocialDrp] = useState(false)
    const [role, setRoleId] = useState('')

    const userSignin = useSelector((state) => state.Login);
    const LayoutState = useSelector((state) => state.Layout);

    const { headerTitle } = LayoutState

    const { userData, remember } = userSignin

    useEffect(() => {
        // console.log(headerTitle);
        if (userData !== null) {
            const { roleId } = userData
            setRoleId(roleId)
        }

    }, [remember, userData])

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    function tToggle() {
        props.toggleLeftmenu(!props.leftMenu)
        if (props.leftSideBarType === "default") {
            props.changeSidebarType("condensed", isMobile)
        } else if (props.leftSideBarType === "condensed") {
            props.changeSidebarType("default", isMobile)
        }
    }

    return (
        <React.Fragment>

            <header id="page-topbar">

                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-dark">
                                <span id="logo-img-mobile" className="logo-sm">
                                    <img src={logoSm} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" height="20" />
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoSm} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" height="20" />
                                </span>
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                tToggle()
                            }}
                            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
                            id="vertical-menu-btn"
                        >
                            <i className="fa fa-fw fa-bars" />
                        </button>

                        <Form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <div className="form-control">{headerTitle}</div>
                            </div>
                        </Form>
                    </div>

                    <div className="d-flex">

                        <Dropdown
                            className="d-inline-block d-lg-none ms-2"
                            onClick={() => {
                                setsearch(!search)
                            }}
                            type="button"
                        >
                            <DropdownToggle
                                className="btn header-item noti-icon waves-effect"
                                id="page-header-search-dropdown"
                                tag="button"
                            > <i className="uil-search" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                                <Form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <Input type="text" className="form-control" placeholder="Search ..."
                                                aria-label="Recipient's username" />
                                            <div className="input-group-append">
                                                <Button className="btn btn-primary" type="submit"><i
                                                    className="mdi mdi-magnify"></i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown
                            className="d-none d-lg-inline-block ms-1"
                            isOpen={socialDrp}
                            toggle={() => {
                                setsocialDrp(!socialDrp)
                            }}
                        >

                        </Dropdown>

                        {/*Choose dropdown avtomat base*/}
                        {role === 1 && <DropdownBase />}


                        {/*choose lang*/}
                        <LanguageDropdown />

                    </div>

                </div>
            </header>
        </React.Fragment>
    )
}

Header.propTypes = {
    changeSidebarType: PropTypes.func,
    leftMenu: PropTypes.any,
    leftSideBarType: PropTypes.any,
    showRightSidebar: PropTypes.any,
    showRightSidebarAction: PropTypes.func,
    t: PropTypes.any,
    toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
    const {
        layoutType,
        showRightSidebar,
        leftMenu,
        leftSideBarType,
    } = state.Layout
    return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
    showRightSidebarAction,
    toggleLeftmenu,
    changeSidebarType,
})(withTranslation()(Header))
