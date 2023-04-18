import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const arr = [
    {
        title: 'dfsgdefsag', desc: 'dsgwfeasg'
    },
    {
        title: 'dfsgdefsag', desc: 'dsgwfeasg'
    },
    {
        title: 'dfsgdefsag', desc: 'dsgwfeasg'
    },
    {
        title: 'dfsgdefsag', desc: 'dsgwfeasg'
    },
    {
        title: 'dfsgdefsag', desc: 'dsgwfeasg'
    }
]

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            input: ''
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
                    All tags <i className="mdi mdi-chevron-down" />
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
                        <input value={this.state.input} onChange={this.inputHandler} type="text" id="smart-search-input" className="form-control" />
                    </div>
                    {arr.map(item => {
                        return (
                            <DropdownItem>
                                <div className="select2-result-label ui-select-choices-row-inner" uis-transclude-append="">
                                    <div className="ng-binding ng-scope">{item.title}
                                    </div>
                                    <small className="ng-binding ng-scope">{item.desc}т</small>
                                </div>
                            </DropdownItem>
                        )
                    })}
                    {/* <DropdownItem>
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
                    </DropdownItem> */}
                </DropdownMenu>
            </Dropdown>
        );
    }
}