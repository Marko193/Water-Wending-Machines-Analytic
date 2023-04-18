import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap"
import {getAffiliatesUsers, getAffliliates, setBranchId} from "../../store/actions";


const DropdownBase = () => {
    const [btnsecondary1, setBtnsecondary1] = useState(false);
    const [checkFilial, setCheckfilial] = useState('')

    const dispatch = useDispatch()

    const userSignin = useSelector(state => state.Login)

    const allAffiliates = useSelector(state => state.Affiliates)

    const {accessToken} = userSignin
    const {affiliates} = allAffiliates
    console.log(affiliates);


    const affiliatesHandler = (desc, id) => {
        setCheckfilial(desc)
        dispatch(setBranchId(id))
        dispatch(getAffiliatesUsers())
    }

    useEffect(() => {
        // dispatch(userRefreshToken())
        if (accessToken) {
            dispatch(getAffliliates())
            setCheckfilial(affiliates[0].description)
        }
    }, [])

    //-------------------
    const options = ["banana", "tomato", "apple"];
    console.log(options)
    const [input, setInput] = useState(options[1]);
    console.log(input);

    return (
        <>

            <div id="dropdown-base-names-list">
                <div className="btn-group me-1 mt-2">

                    {/*<input*/}
                    {/*    onChange={e => {*/}
                    {/*        this.setState({ input: e.target.value });*/}
                    {/*    }}*/}
                    {/*    value={this.state.input}*/}
                    {/*    list="stuff"*/}
                    {/*/>*/}
                    {/*<datalist id="stuff">*/}
                    {/*    {options.map(opt => (*/}
                    {/*        <option value={opt} />*/}
                    {/*    ))}*/}
                    {/*</datalist>*/}

                    {/*Default choose location*/}

                    <Dropdown isOpen={btnsecondary1} toggle={() => setBtnsecondary1(!btnsecondary1)}
                              className="d-inline-block language-switch dropdown-custom">
                        <DropdownToggle tag="button"
                                        className="d-flex justify-content-between btn btn-light dropdown-custom">
                            <div>{checkFilial}</div>
                            <i className="mdi mdi-chevron-down"/>
                        </DropdownToggle>

                        <DropdownMenu className="dropdown-menu-affiliates">
                            {affiliates !== null && affiliates.length > 0 && affiliates.map(item => {
                                return (
                                    <DropdownItem onClick={() => affiliatesHandler(item.description, item.id)}
                                                  key={item.id}>{item.description}</DropdownItem>

                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default DropdownBase