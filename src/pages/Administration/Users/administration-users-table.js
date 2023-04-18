import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// RangeSlider
import 'nouislider/distribute/nouislider.css';

//import component - dropdown smart search
import { MDBDataTable } from 'mdbreact';
import { getAffiliatesUsers } from '../../../store/actions';
import { get } from '../../../helpers/api_helper';
import AdminEditUserForm from '../Users/AdminEditUserForm';

const EcommerceProducts = ({ data, setEditModal, editModal, id }) => {
  return (
    <React.Fragment>
      <div className="paffiliation-content">
        <Container fluid>
          <Row>
            <Col className="col-12">
              {data.rows.length > 0 && (
                <MDBDataTable
                  searchLabel={'Поиск'}
                  entriesLabel={'Показывать рядов'}
                  infoLabel={['Показано', 'от', 'до', 'строк']}
                  paginationLabel={['Предыдущая', 'Следущая']}
                  striped
                  bordered
                  data={data}
                />
              )}

              {editModal && <AdminEditUserForm setEditModal={setEditModal} editModal={editModal} id={id} />}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(EcommerceProducts);
