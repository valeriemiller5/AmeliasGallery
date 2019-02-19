import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "../../components/Grid";
import Piececard from "../../components/Piececard";

class Piece extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container className="artwork">
                    <Row>
                        <Col size="md-12">
                            <Piececard />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}


export default Piece;