import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import { useSelector } from "react-redux"

const SidebarContent = props => {
    const ref = useRef();

    const [roleId, setRoleId] = useState('')

    const userSignin = useSelector((state) => state.Login);

    const { userData, remember } = userSignin

    useEffect(() => {
        // console.log(props);

        if (userData !== null) {
            const { roleId } = userData
            setRoleId(roleId)
        }


    }, [userData, remember])

    const activateParentDropdown = useCallback((item) => {
        item.classList.add("active")
        const parent = item.parentElement
        const parent2El = parent.childNodes[1]
        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show")
        }

        if (parent) {
            parent.classList.add("mm-active")
            const parent2 = parent.parentElement

            if (parent2) {
                parent2.classList.add("mm-show") // ul tag

                const parent3 = parent2.parentElement // li tag

                if (parent3) {
                    parent3.classList.add("mm-active") // li
                    parent3.childNodes[0].classList.add("mm-active") //a
                    const parent4 = parent3.parentElement // ul
                    if (parent4) {
                        parent4.classList.add("mm-show") // ul
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show") // li
                            parent5.childNodes[0].classList.add("mm-active") // a tag
                        }
                    }
                }
            }
            scrollElement(item);
            return false
        }
        scrollElement(item);
        return false
    }, []);

    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
    useEffect(() => {
        const pathName = props.location.pathname

        new MetisMenu("#side-menu")
        let matchingMenuItem = null
        const ul = document.getElementById("side-menu")
        const items = ul.getElementsByTagName("a")
        for (let i = 0; i < items.length; ++i) {
            if (pathName === items[i].pathname) {
                matchingMenuItem = items[i]
                break
            }
        }
        if (matchingMenuItem) {
            activateParentDropdown(matchingMenuItem);
        }

    }, [props.location.pathname, activateParentDropdown])

    useEffect(() => {
        ref.current.recalculate()
    })

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300
            }
        }
    }

    return (
        <React.Fragment>

            <SimpleBar style={{ maxHeight: "100%" }} ref={ref} className="sidebar-menu-scroll">

                <div className="profile-user-sidebar">
                    <ProfileMenu />
                </div>

                <div id="sidebar-menu">

                    <ul className="metismenu list-unstyled" id="side-menu">

                        <li className="menu-title">{props.t("Navigation")}</li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <i className="uil-apps"></i>
                                <span>{props.t("Dashboard")}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="uil-wifi-router"></i>
                                <span>{props.t("Devices")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/devices/list">{props.t("List")}</Link>
                                </li>
                                <li>
                                    <Link to="/devices/detailed-state">
                                        {props.t("Detailed state")}
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {roleId !== 0 && <li>
                            <Link to="/#" className='has-arrow waves-effect'>
                                <i className="uil-chart"></i>
                                <span>{props.t("Charts")}</span>
                            </Link>

                            <ul className="sub-menu">
                                <li>
                                    <Link to="/statistic/devices">{props.t("Apparatus")}</Link>
                                </li>
                                <li>
                                    <Link to="/chartjs-charts">{props.t("WaterSale")}</Link>
                                </li>
                                <li>
                                    <Link to="/e-charts">{props.t("CashCollection")}</Link>
                                </li>
                                <li>
                                    <Link to="/charts-knob">{props.t("Volume")}</Link>
                                </li>
                                <li>
                                    <Link to="/sparkline-charts">
                                        {props.t("Times of Day")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/report">
                                        {props.t("Report")}
                                    </Link>
                                </li>
                            </ul>
                        </li>}

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="uil-clapper-board"></i>
                                <span>{props.t("Sensors")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/email-inbox">{props.t("SMS")}</Link>
                                </li>
                                <li>
                                    <Link to="/email-read">{props.t("Logs")} </Link>
                                </li>
                                <li>
                                    <Link to="/email-readd">{props.t("Status and statistics")} </Link>
                                </li>
                            </ul>
                        </li>

                        {roleId !== 0 && <li>
                            <Link to="/#" className='has-arrow waves-effect'>
                                <i className="uil-credit-card"></i>
                                <span>{props.t("Cards")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/cards/list">{props.t("List")}</Link>
                                </li>
                                <li>
                                    <Link to="/invoices-detail">{props.t("Statistics")}</Link>
                                </li>
                                <li>
                                    <Link to="/cards/listt">{props.t("Settings")}</Link>
                                </li>
                                <li>
                                    <Link to="/invoices-detaill">{props.t("Detailed state")}</Link>
                                </li>
                            </ul>
                        </li>}

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="uil-setting"></i>
                                <span>{props.t("Settings")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/settings/phones">{props.t("Phones")}</Link>
                                </li>
                                <li>
                                    <Link to="/settings/imei">{props.t("IMEI")}</Link>
                                </li>
                                <li>
                                    <Link to="/settings/tags">{props.t("Tags")}</Link>
                                </li>
                            </ul>
                        </li>

                        {roleId !== 0 && <li>
                            <Link to="/#" className='has-arrow waves-effect'>
                                <i className="uil-star"></i>
                                <span>{props.t("Administration")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/admin/affiliates">{props.t("Affiliates")}</Link>
                                </li>
                                <li>
                                    <Link to="/admin/users">{props.t("Users")}</Link>
                                </li>
                            </ul>
                        </li>}
                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment>
    )


}

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))