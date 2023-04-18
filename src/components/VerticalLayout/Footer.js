import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            {/* <Col sm={6}>{new Date().getFullYear()} © Minible.</Col> */}
            <Col sm={12}>
              <div className="text-sm-end d-none d-sm-block">
                Авторские права © 2016 Ecosoft DMS
                  </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
