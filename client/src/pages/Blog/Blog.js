import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Input } from "../../components/Form";
import Footer from "../../components/Footer";
import "./Blog.css";

class Blog extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Input />
                <Footer />
            </div>
        )
    }
}

export default Blog;
