import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class DropdownSmartSearch extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));

    }

    render() {
        return (

            <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle className="dropdown-smart-search-button">
                    All tags <i className="mdi mdi-chevron-down"/>
                </DropdownToggle>
                <DropdownMenu className="dropdown-smart-search-list">
                    <div className="form-outline">

                    </div>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">КОЛО111
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">Общежитие
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">Общежитие
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">Общежитие
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">Общежитие
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">Сильпо
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                            <div className="ng-binding ng-scope">ЕКО Маркет
                            </div>
                            <small className="ng-binding ng-scope">Ключевой аккаунт</small>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}