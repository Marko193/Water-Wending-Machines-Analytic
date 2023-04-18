import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect, useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

// users
import user4 from "../../../assets/images/users/avatar-4.jpg"
import { userLogout } from "../../../store/actions"

const ProfileMenu = props => {
    // Declare a new state variable, which we'll call "menu"
    const [menu, setMenu] = useState(false)

    const [username, setusername] = useState("alex_admin")

    const [role, setuserrole] = useState("Производитель")

    const dispatch = useDispatch()

    const userSignin = useSelector((state) => state.Login);

    const { userData, remember } = userSignin


    useEffect(() => {
        if (userData !== null) {
            if (userData.roleId === 0) {
                setuserrole('Сервисный центр')
            } else if (userData.roleId === 2) {
                setuserrole('Владелец')
            } else if (userData.roleId === 1) {
                setuserrole('Производитель')
            } else {
                setuserrole('')
            }
        }


    }, [userData, remember])

    useEffect(() => {
        if (userData !== null) {
            setusername(userData.login)
        }

    }, [userData, remember])



    const logout = () => {
        dispatch(userLogout(props.history))
    }

    // useEffect(() => {
    //     if (localStorage.getItem("authUser")) {
    //         if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //             const obj = JSON.parse(localStorage.getItem("authUser"))
    //             setusername(obj.displayName)
    //             setuserrole(obj.displayRole)
    //         } else if (
    //             process.env.REACT_APP_DEFAULTAUTH === "fake" ||
    //             process.env.REACT_APP_DEFAULTAUTH === "jwt"
    //         ) {
    //             const obj = JSON.parse(localStorage.getItem("authUser"))
    //             setusername(obj.username)
    //             setuserrole(obj.role)
    //         }
    //     }
    // }, [props.success])

    return (
        <React.Fragment>
            <Dropdown
                isOpen={menu}
                toggle={() => setMenu(!menu)}
                className="d-inline-block"
            >
                <DropdownToggle
                    className="d-flex btn header-item waves-effect"
                    id="page-header-user-dropdown"
                    tag="button"

                >
                    <img
                        className="rounded-circle header-profile-user"
                        src={user4}
                        alt="Header Avatar"
                    />
                    <span id="user-name-role" className="has-arrow d-xl-flex flex-column ms-1 fw-medium font-size-15">
                        <span className="d-flex">{username}</span>
                        <span className="d-flex">{role}</span>
                    </span>
                    <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                </DropdownToggle>
                <DropdownMenu id="dropdown-menu-width" className="dropdown-menu">
                    <DropdownItem tag="a" href="/profile">
                        {" "}
                        {/*<i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>*/}
                        {props.t("Мой профиль")}{" "}
                    </DropdownItem>
                    <div className="dropdown-divider" />
                    <div onClick={logout} className="dropdown-item">
                        {/*<i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>*/}
                        <span>{props.t("Выйти")}</span>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

ProfileMenu.propTypes = {
    success: PropTypes.any,
    t: PropTypes.any
}

const mapStatetoProps = state => {
    const { error, success } = state.Profile
    return { error, success }
}

export default withRouter(
    connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)