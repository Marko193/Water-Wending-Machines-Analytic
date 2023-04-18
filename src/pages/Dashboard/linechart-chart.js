import React from "react"
import ReactApexChart  from "../AllCharts/chartjs/linechart"
import {Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardTitle} from "reactstrap"
import CountUp from 'react-countup';

const LineChartjs  = () => {

    const series = [{
        name: 'Desktops',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Laptops',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Tablets',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }]

    const options = {
        chart: {
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [0, 2, 4],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },
        colors: ['#5b73e8', 'red', '#f1b44c'],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        },
        grid: {
            borderColor: '#f1f1f1'
        }
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4 h4">Данные за последние 30 дней</CardTitle>
                    <div className="mt-3">
                        <ReactApexChart
                            options={options}
                            series={series}
                            height="339"
                            type="line"
                            className="apex-charts"
                        />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default LineChartjs