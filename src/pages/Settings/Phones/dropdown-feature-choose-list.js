import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';



const DropDownFeatureChooseList = () => {

        const [toggle, setToggle] = useState(false)


        return (
            <Dropdown onClick={() => setToggle(!toggle)}>
                {toggle &&
                <div>
                    <DropdownToggle className="dropdown-smart-search-button">
                         <i className="mdi mdi-chevron-down"/>
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-smart-search-list"
                                  modifiers={{
                                      setMaxHeight: {
                                          enabled: true,
                                          order: 890,
                                          fn: (data) => {
                                              return {
                                                  ...data,
                                                  styles: {
                                                      ...data.styles,
                                                      overflow: 'auto',
                                                      maxHeight: 315,
                                                  },
                                              };
                                          },
                                      },
                                  }}>
                        <div className="form-outline">
                            <input type="text" id="smart-search-input" className="form-control"/>
                        </div>
                        <DropdownItem>
                            <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                                <div className="ng-binding ng-scope">КОЛО
                                </div>
                                <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </div>
                }
            </Dropdown>
        );
}

export default DropDownFeatureChooseList