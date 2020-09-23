import React from 'react';
import '../../styles/faq.scss';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    return (
        <div className="faq">
            <NavbarComponent />

            {/* Header */}
            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>frequently asked questions</h1>
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="body py-4 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Tab.Container id="left-tabs-example" defaultActiveKey="payment">
                                <Row className="px-3 px-sm-0">
                                    <Col md={4} lg={3} className="bg-white p-4">
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="payment">payment</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="delivery">delivery</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="order">order</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="refunds">refunds</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="product_stock">product & stock</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="account">account</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={8} lg={9} className="px-0 px-md-4 mt-3 mt-md-0">
                                        <Tab.Content className="bg-white p-3">
                                            <Tab.Pane eventKey="payment">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="delivery">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="order">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="refunds">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="product_stock">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account">
                                                <p>okkkkkkkk</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>

                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;