import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Input } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

class Contact extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Input />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Contact;
