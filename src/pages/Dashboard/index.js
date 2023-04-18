import React from "react"
import {Container, Row, Col, CardBody, Card} from "reactstrap"
import {Link} from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import MiniWidget from "./mini-widget"
import LineChart from "./linechart-chart"
import MainPageDataTable from "./main-page-data-table"

//Import Image

//values to create the chart
const series1 = [{
    // data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
}]

const options1 = {
    fill: {
        colors: ['#5b73e8']
    },
    chart: {
        width: 70,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: !1
        }
    }
};

const series2 = [70]

const options2 = {
    fill: {
        colors: ['#34c38f']
    },
    chart: {
        sparkline: {
            enabled: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: !1
            }
        }
    }
};

const series3 = [55]

const options3 = {
    fill: {
        colors: ['#5b73e8']
    },
    chart: {
        sparkline: {
            enabled: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: !1
            }
        }
    }
};

const Dashboard = () => {

    const reports = [
        {
            id: 1,
            icon: "mdi mdi-arrow-down-bold",
            title: "Сеансов за сегодня",
            value: 0,
            decimal: 0,
            // charttype: "radialBar",
            chartheight: 45,
            chartwidth: 45,
            prefix: "",
            suffix: "",
            badgeValue: "30.06.2021 14:15",
            color: "success",
            desc: "Данные обновлены:",
            series: series1,
            options: options1,
        },
        {
            id: 2,
            icon: "mdi mdi-arrow-down-bold",
            title: "Воды за сегодня",
            value: 5643,
            decimal: 0,
            // charttype: "radialBar",
            chartheight: 45,
            chartwidth: 45,
            prefix: "",
            suffix: " л",
            badgeValue: "30.06.2021 14:15",
            color: "success",
            desc: "Данные обновлены:",
            series: series2,
            options: options2,
        },
        {
            id: 3,
            icon: "mdi mdi-arrow-down-bold",
            title: "Доход за сегодня",
            value: 45254,
            decimal: 0,
            prefix: "",
            suffix: " грн",
            // charttype: "radialBar",
            chartheight: 45,
            chartwidth: 45,
            badgeValue: "30.06.2021 14:15",
            color: "danger",
            desc: "Данные обновлены:",
            series: series3,
            options: options3,
        }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <MiniWidget reports={reports}/>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <LineChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <MainPageDataTable/>
                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Dashboard