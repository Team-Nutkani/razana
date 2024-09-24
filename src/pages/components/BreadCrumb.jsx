import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export default function ITSupportHeader() {
  return (
    <div className="position-relative text-white" style={{ height: '350px' }}>
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      ></div>
      <Container className="h-100 position-relative custom-margin">
        <Row className="h-100 align-items-center">
          <Col className='brd-edit' >
            <h1 className="display-4 text-center">IT SUPPORT</h1>
            <Breadcrumb className="justify-content-center text-center bg-transparent">
              <Breadcrumb.Item href="/" className="text-light brd-home">HOME</Breadcrumb.Item>
              <Breadcrumb.Item active className="text-light">IT SUPPORT</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  )
}