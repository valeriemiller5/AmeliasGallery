import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import pieces from "../../pieces.json";
// import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";
import "./Home.css"


class Home extends Component {
    state = {
        pieces
    }

    // These are the elements this website needs:
    // 1) similar to https://www.tumblr.com/theme/39963
    // 2) Click on piece of artwork to go to dedicated page for the piece with information and pricing
    // 3) A Blog page that she can edit
    // 4) A Contact page to reach her by email
    // 5) allow payments via Paypal
    // 6) Pastel color scheme: #F7EBEC, #DDBDD5, #AC9FBB, #59656F, #1D1E2C
    
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <Container className="description">
                    <Row>
                        <Col size="md-12">
                            <h1>About the Artist</h1>
                            <p>Mauris semper tincidunt elementum. Aliquam cursus convallis porttitor. Vestibulum sodales enim nec elit consectetur viverra. Proin faucibus vitae quam non lobortis. Suspendisse leo ante, sodales vitae lectus ac, mollis eleifend tellus. Ut ut tortor nulla. Nullam vel tempor arcu. Quisque id tristique lectus. Vestibulum risus tellus, posuere non nibh rutrum, ornare euismod dolor. Duis vehicula, neque feugiat aliquet tincidunt, mi orci sodales tortor, vehicula iaculis lorem arcu eget diam. Donec ut ante ut est ultrices varius. Donec nec massa laoreet, convallis justo lacinia, molestie nibh. Etiam mi elit, varius a lobortis non, ultrices a dolor. Vestibulum in fringilla magna. Donec maximus, nulla ut feugiat tincidunt, orci neque rhoncus felis, a rhoncus ligula leo ac neque.</p>
                            <p>Etiam fermentum faucibus turpis in iaculis. Etiam nec venenatis dui. Cras suscipit eget libero vitae congue. Nunc faucibus commodo dolor a luctus. Praesent ac ultrices est. Praesent interdum enim eget risus feugiat, et finibus justo tincidunt. Nunc a arcu pulvinar, rhoncus velit in, maximus justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <p>Nullam consequat semper sapien sit amet cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut feugiat sagittis arcu, at elementum erat aliquet eget. Aenean ac pretium enim, quis vestibulum ipsum. Integer vestibulum porta massa, eget imperdiet purus condimentum lacinia. Fusce leo lacus, pretium vitae iaculis id, bibendum at tellus. Praesent sit amet auctor magna, sed rutrum ante. Quisque faucibus ultricies velit quis feugiat.</p>
                            <p>Fusce cursus mauris in lectus auctor, in rhoncus lectus luctus. Nullam facilisis porttitor massa, eu maximus orci. In sagittis odio ut dui lacinia euismod. Integer ut egestas sem. Donec vehicula viverra lacus, eu sollicitudin diam dapibus sed. Vestibulum at est accumsan purus imperdiet pharetra ut sollicitudin dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi pulvinar sapien eu risus venenatis congue. Vestibulum dignissim posuere mauris id vestibulum. Nullam sagittis pharetra mauris, et facilisis augue congue in. </p>
                        </Col>
                    </Row>
                </Container>
                <Wrapper>
                    {this.state.pieces.map(piece => (
                        <Card 
                            key={piece.id}
                            name={piece.name}
                            image={piece.image}
                        />
                    ))}
                </Wrapper>     
                <Footer /> 
            </div>
        ) 
    };
};

export default Home;