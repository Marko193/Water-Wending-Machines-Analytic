import PropTypes from 'prop-types'
import React, { Component } from "react"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
  pageTitleAction,
} from "../../store/actions"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import GoogleHeader from "./GoogleHeader"
import Rightbar from "../CommonForBoth/Rightbar"
import { withTranslation } from "react-i18next"


class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    }
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  componentDidMount() {

    switch (this.props.location.pathname) {
      case '/dashboard':
        this.props.pageTitleAction(this.props.t("Dashboard"))
        break;
      case '/devices/list':
        this.props.pageTitleAction(this.props.t("List"))
        break;
      case '/devices/detailed-state':
        this.props.pageTitleAction(this.props.t("Detailed state"))
        break;
      case '/statistic/devices':
        this.props.pageTitleAction(this.props.t("Apparatus"))
        break;
      case '/chartjs-charts':
        this.props.pageTitleAction(this.props.t("WaterSale"))
        break;
      case '/e-charts':
        this.props.pageTitleAction(this.props.t("CashCollection"))
        break;
      case '/charts-knob':
        this.props.pageTitleAction(this.props.t("Volume"))
        break;
      case '/sparkline-charts':
        this.props.pageTitleAction(this.props.t("Times of Day"))
        break;
      case '/report':
        this.props.pageTitleAction(this.props.t("Report"))
        break;
      case '/email-inbox':
        this.props.pageTitleAction(this.props.t("SMS"))
        break;
      case '/email-read':
        this.props.pageTitleAction(this.props.t("Logs"))
        break;
      case '/email-readd':
        this.props.pageTitleAction(this.props.t("Status and statistics"))
        break;
      case '/cards/list':
        this.props.pageTitleAction(this.props.t("List"))
        break;
      case '/invoices-detail':
        this.props.pageTitleAction(this.props.t("Statistics"))
        break;
      case '/cards/listt':
        this.props.pageTitleAction(this.props.t("Settings"))
        break;
      case '/invoices-detaill':
        this.props.pageTitleAction(this.props.t("Detailed state"))
        break;
      case '/settings/phones':
        this.props.pageTitleAction(this.props.t("Phones"))
        break;
      case '/settings/imei':
        this.props.pageTitleAction(this.props.t("IMEI"))
        break;
      case '/settings/tags':
        this.props.pageTitleAction(this.props.t("Tags"))
        break;
      case '/admin/affiliates':
        this.props.pageTitleAction(this.props.t("Affiliates"))
        break;
      case '/admin/users':
        this.props.pageTitleAction(this.props.t("Users"))
        break;
      default:
        this.props.pageTitleAction(this.props.t("Dashboard"))
        break;
    }

    if (this.props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }

    // Scroll Top to 0
    window.scrollTo(0, 0)
    let currentage = this.capitalizeFirstLetter(this.props.location.pathname)

    document.title =
      currentage + " | Minible - Responsive Bootstrap 5 Admin Dashboard"
    if (this.props.leftSideBarTheme) {
      this.props.changeSidebarTheme(this.props.leftSideBarTheme)
    }

    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }

    if (this.props.leftSideBarType) {
      this.props.changeSidebarType(this.props.leftSideBarType)
    }
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }
  }

  toggleMenuCallback = () => {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile)
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <i className="uil-shutter-alt spin-icon"></i>
            </div>
          </div>
        </div>
        <div id="layout-wrapper">
          <GoogleHeader />
          <Header toggleMenuCallback={this.toggleMenuCallback} />
          <Sidebar
            theme={this.props.leftSideBarTheme}
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
          />
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </div>
        {this.props.showRightSidebar ? <Rightbar /> : null}
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

const mapStatetoProps = state => {
  return {
    ...state.Layout,
  }
}
export default connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
  pageTitleAction
})(withRouter(withTranslation()(Layout)))
