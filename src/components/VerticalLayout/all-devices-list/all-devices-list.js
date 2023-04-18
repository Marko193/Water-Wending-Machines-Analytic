import React from 'react';

const AllDevicesList = () => {
    return (
        <table id="all-devices-list-table"
            className="table table-sm table-p-10 table-bordered table-hover devices-list-table align-middle">
            <thead>
                <tr>
                    <th rowSpan="2" translate="labels.NUMBER" className="ng-scope">№</th>
                    <th rowSpan="2" translate="labels.DEVICE" className="ng-scope">Аппарат</th>
                    <th className="text-xs-right" rowSpan="2">
                        <span translate="labels.WATER" className="ng-scope">Кол-во воды</span>,
                    <small className="th-all-devices-description"> за сегодня </small>
                    </th>
                    <th className="text-xs-right" rowSpan="2">
                        <span translate="labels.MONEY" className="ng-scope">Доход</span>,
                    <small className="th-all-devices-description" translate="labels.DAILY"> за сегодня</small>
                    </th>
                    <th className="text-nowrap ng-scope" colSpan="3" translate="ng-scope">Состояние</th>
                    <th className="text-nowrap text-xs-right ng-scope" rowSpan="2" translate="labels.CASH">Купюры</th>
                    <th className="text-xs-right" rowSpan="2">
                        <span translate="labels.WATER" className="ng-scope">Кол-во воды</span>,
                    <small className="th-all-devices-description" translate="labels.MONTHLY"> за месяц </small>
                    </th>
                    <th className="text-xs-right" rowSpan="2">
                        <span translate="labels.MONEY" className="ng-scope">Доход</span>,
                    <small className="th-all-devices-description" translate="labels.MONTHLY"> за месяц</small>
                    </th>
                    <th className="text-nowrap text-xs-right ng-scope" rowSpan="2" translate="labels.PROGRESS">Прогресс</th>
                    <th className="text-xs-right" rowSpan="2">
                        <span translate="labels.TREND" className="ng-scope">Тренд</span>,
                    <small className="th-all-devices-description" translate="currency.UAH"> грн</small>
                    </th>
                </tr>
                <tr>
                    <th>GPRS</th>
                    <th>Sensor</th>
                    <th>System</th>
                </tr>
            </thead>
            <tbody>
                <tr className="all-devices-list-row">
                    <td className="record-id">1</td>
                    <td className="record-device-name">
                        <div className="text-nowrap">
                            <span className="badge">
                                <small className="all-devices-list-record-id">[id: 25] </small>
                                {/*<small className="all-devices-list-record-id-medium">[id: 25] </small>*/}
                                {/*<small className="all-devices-list-record-id-large">[id: 25] </small>*/}
                            </span>
                        </div>
                        <div className="text-nowrap">
                            <span className="badge">
                                <a
                                    className="all-devices-list-device-name" href="#/devices/item?id=25">КОЛО</a>
                            </span>
                        </div>
                        <span className="all-devices-list-device-location">Київ, вул. Каблукова, 21</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-daily">0.0</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-day-income">96.42</span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-on"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-off"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-inactive"></span>
                    </td>
                    <td className="record-device-bills">
                        <span className="record-water-small">280</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-monthly">1767.4</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-month-income">1301.33</span>
                    </td>
                    <td className="record-device-progress">
                        <span className="record-device-progress-percent">+3%</span>
                        <i id="progressUp-percent-arrow" className="uil-top-arrow-to-top"></i>
                        {/*<i id="progressDown-percent-arrow" className="uil-arrow-to-bottom"></i>*/}
                    </td>
                    <td className="record-device-progress">
                        <span className="">1301.33</span>
                    </td>
                </tr>
                <tr className="all-devices-list-row">
                    <td className="record-id">2</td>
                    <td className="record-device-name">
                        <div className="text-nowrap">
                            <span className="badge">
                                <small className="all-devices-list-record-id-medium">[id: 73] </small>
                            </span>
                        </div>
                        <div className="text-nowrap">
                            <span className="badge">
                                <a
                                    className="all-devices-list-device-name" href="#/devices/item?id=25">ЕКО Маркет</a>
                            </span>
                        </div>
                        <span className="all-devices-list-device-location">Київ, вул. Потєхіна, 12</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-daily">0.0</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-day-income">96.42</span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-on"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-off"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-inactive"></span>
                    </td>
                    <td className="record-device-bills">
                        <span className="record-water-medium">440</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-monthly">1767.4</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-month-income">1301.33</span>
                    </td>
                    <td className="record-device-progress">
                        <span className="record-device-progress-percent">-2%</span>
                        <i id="progressDown-percent-arrow" className="uil-arrow-to-bottom"></i>
                    </td>
                    <td className="record-device-progress">
                        <span className="">1301.33</span>
                    </td>
                </tr>
                <tr className="all-devices-list-row">
                    <td className="record-id">3</td>
                    <td className="record-device-name">
                        <div className="text-nowrap">
                            <span className="badge">
                                <small className="all-devices-list-record-id-large">[id: 102] </small>
                            </span>
                        </div>
                        <div className="text-nowrap">
                            <span className="badge">
                                <a
                                    className="all-devices-list-device-name" href="#/devices/item?id=25">ТЦ Полярний</a>
                            </span>
                        </div>
                        <span className="all-devices-list-device-location">Київ, вул. П. Калнишевського, 2</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-daily">0.0</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-day-income">96.42</span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-on"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-off"></span>
                    </td>
                    <td className="record-device-state">
                        <span className="record-device-state-inactive"></span>
                    </td>
                    <td className="record-device-bills">
                        <span className="record-water-large">652</span>
                    </td>
                    <td className="record-water-size">
                        <span className="record-water-size-monthly">1767.4</span>
                    </td>
                    <td className="record-device-income">
                        <span className="record-water-month-income">1301.33</span>
                    </td>
                    <td className="record-device-progress">
                        <span className="record-device-progress-percent">+4%</span>
                        <i id="progressUp-percent-arrow" className="uil-top-arrow-to-top"></i>
                        {/*<i id="progressDown-percent-arrow" className="uil-arrow-to-bottom"></i>*/}
                    </td>
                    <td className="record-device-progress">
                        <span className="">1301.33</span>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}

export default AllDevicesList;