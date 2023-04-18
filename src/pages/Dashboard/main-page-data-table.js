import React from "react"
import {
    Card,
    CardBody,
    Table,
    CardTitle,
} from "reactstrap"

const TopUser = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="h4">Данные за последние 30 дней</CardTitle>
                    <div className="table-responsive">
                        <Table className="table table-striped mb-0">
                            <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сеансы</th>
                                <th>Кол-во воды, л</th>
                                <th>Доход, грн</th>
                            </tr>
                            <tr>
                                <th>Всего</th>
                                <th>14630</th>
                                <th>97298.8</th>
                                <th>102814.28</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>30.06.2021</th>
                                <td>0</td>
                                <td>0,0</td>
                                <td>0,00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopUser