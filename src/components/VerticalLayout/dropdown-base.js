
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap"
import { getAffiliatesUsers, getAffliliates, setBranchId, userRefreshToken } from "../../store/actions";

//stage1

const DropdownBase = () => {
    const [btnsecondary1, setBtnsecondary1] = useState(false);
    const [checkFilial, setCheckfilial] = useState(null)

    const dispatch = useDispatch()

    const userSignin = useSelector(state => state.Login)

    const allAffiliates = useSelector(state => state.Affiliates)

    const { accessToken } = userSignin
    const { affiliates, branchId } = allAffiliates


    const affiliatesHandler = (desc, id) => {
        setCheckfilial(desc)
        dispatch(setBranchId(id))
        dispatch(getAffiliatesUsers())
    }

    useEffect(() => {
        dispatch(userRefreshToken())
        if (accessToken) {
            dispatch(getAffliliates())
            if (affiliates) {
                if (branchId) {
                    let currentAffiliate = affiliates.find(item => item.id == branchId)
                    setCheckfilial(currentAffiliate.description)
                } else {
                    let currentAffiliate = affiliates.find(item => item.id == 1)
                    setCheckfilial(currentAffiliate.description)
                }
            }
        }
    }, [branchId])


    return (
        <React.Fragment>

            <div id="dropdown-base-names-list">
                <div className="btn-group me-1 mt-2">
                    <Dropdown
                        isOpen={btnsecondary1}
                        toggle={() => setBtnsecondary1(!btnsecondary1)}

                        className="d-inline-block language-switch dropdown-custom">
                        <DropdownToggle tag="button" className="d-flex justify-content-between btn btn-light dropdown-custom">
                            <div>{checkFilial}</div> <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>

                        <DropdownMenu className="dropdown-menu-affiliates">
                            {affiliates !== null && affiliates.length > 0 && affiliates.map(item => {
                                return (
                                    <DropdownItem onClick={() => affiliatesHandler(item.description, item.id)} key={item.id}>{item.description}</DropdownItem>

                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DropdownBase