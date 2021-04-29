import React from 'react';
import { 
    Navbar,
    Nav,
    Container,
    Button
} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import MyLogo from '../Images/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar className="navbar" 
                        collapseOnSelect expand="lg" 
                        data-aos="fade-down"
                        data-aos-duration="1000"> 
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={MyLogo}
                                height="40"
                                width="40"
                                alt="My logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/skills">Skills</Nav.Link>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <a className="linkHeader" href="tel:+48793052283" 
                                        data-bs-placement="top" 
                                        title="Call me">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="18" 
                                            height="18" 
                                            fill="currentColor" 
                                            className="bi bi-telephone" 
                                            viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                    </a>
                                    <a className="linkHeader" href="mailto:v.m.hannibal@gmail.com"
                                        data-bs-placement="top" 
                                        title="Write me">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="18" 
                                            height="18" 
                                            fill="currentColor" 
                                            className="bi bi-envelope" 
                                            viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                        </svg>
                                    </a>
                                </Navbar.Text>
                                <Button variant="info" 
                                        className="buttonProjectExamples" 
                                        href="/resume">Resume
                                </Button>
                            </Navbar.Collapse>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/skills" component={Skills} />
                    </Switch>
                </Router>
            </>
        )
    }
}
