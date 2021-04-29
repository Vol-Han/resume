import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Media,
    Button,
    Modal 
} from 'react-bootstrap';
import MyPhoto from '../Images/my-photo.png';
import GitHubLogo from '../Images/github.svg';

export default class About extends React.Component {
    state = {
        isModalOpen: false
    }
    showModalLandingPage = () => {
        this.setState({
            isModalOpenLandingPage: true
        })
    }
    closeModalLandingPage = () => {
        this.setState({
            isModalOpenLandingPage: false
        })
    }
    showModalApplication = () => {
        this.setState({
            isModalOpenApplication: true
        })
    }
    closeModalApplication = () => {
        this.setState({
            isModalOpenApplication: false
        })
    }
    showModalWordPress = () => {
        this.setState({
            isModalOpenWordPress: true
        })
    }
    closeModalWordPress = () => {
        this.setState({
            isModalOpenWordPress: false
        })
    }
    showModalOpenCart = () => {
        this.setState({
            isModalOpenOpenCart: true
        })
    }
    closeModalOpenCart = () => {
        this.setState({
            isModalOpenOpenCart: false
        })
    }
    render() {
        return (
            <Container id="about" className="sectionAbout">
                <Row>
                    <Col md="9">
                        <h3 data-aos="fade-up" data-aos-duration="1000">Hello! My name is</h3> 
                        <h2 data-aos="fade-up" data-aos-duration="1000">Volodymyr Hannibal.</h2>
                        <h3 data-aos="fade-up" data-aos-duration="1000">I'm looking for a job Junior Front-end Developer.</h3>
                        <div data-aos="fade-up" data-aos-duration="1000"> 
                            <p>I started my adventure by creating websites in 2010 a hobby.</p>
                            <p>Since then, I've been working with individual clients as a freelancer-programmer
                                    of websites and online stores on CMS WordPress and OpenCart.</p> 
                            <p>I create websites from scratch - from buying a domain and hosting to creating 
                                    individual design and SEO.</p>
                            <p>The Junior Front-end Developer course at Academy "InfoShare" has repeatedly expanded my knowledge, 
                                which I can now use in practice when creating and improving projects.</p>
                        </div>    
                    </Col>  
                    <Col md="3">
                        <Media 
                            data-aos="zoom-in"
                            data-aos-duration="1000">
                                <img  
                                    width= "100%"
                                    height="100%"
                                    className="myPhoto"
                                    src={MyPhoto}
                                    alt="it is i :)"
                                />
                        </Media>
                    </Col>
                    <Col md="12" 
                        className="colProjectExamples"
                        data-aos="fade-up"
                        data-aos-duration="1000"> 
                        <div>
                            <h4>Project Examples made on the programming course in Academy "InfoShare"</h4>
                            <p>
                                <Button 
                                    data-aos="fade-up"
                                    data-aos-duration="1200" 
                                    className="buttonProjectExamples" 
                                    variant="info" 
                                    onClick={this.showModalLandingPage} 
                                    size="lg">Landing page
                                </Button>
                                    
                                <Modal show={this.state.isModalOpenLandingPage} onHide={this.closeModalLandingPage}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Examle Landing page</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <p>HTML5</p>
                                        <p>CSS3 (Grid, Flex)</p>
                                        <p>JavaScript ES6+</p>
                                        <p>jQuery</p>
                                        <p>Language: Eng, Pl</p>
                                        <Button 
                                            variant="outline-info" 
                                            href="https://github.com/infoshareacademy/jfdz14-paula-poleca" 
                                            target="_blank">
                                                <img 
                                                    className="logoGitHub" 
                                                    src={GitHubLogo} 
                                                    alt="GitHub Logo"
                                                />Viewing code on GitHub
                                        </Button>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="primary" href="http://paulapoleca.jfdz14.is-academy.pl/" target="_blank">Show</Button>
                                        <Button variant="secondary" onClick={this.closeModalLandingPage}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                                <Button data-aos="fade-up"
                                        data-aos-duration="1200" 
                                        className="buttonProjectExamples" 
                                        variant="info" 
                                        onClick={this.showModalApplication} 
                                        size="lg">Application
                                </Button>
                                        
                                <Modal show={this.state.isModalOpenApplication} onHide={this.closeModalApplication}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Examle Application</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>JavaScript ES6+</p>
                                        <p>React</p>
                                        <p>Redux</p>
                                        <p>Bootstrap</p>
                                        <p>Firebase</p>
                                        <p>Language: Pl</p>
                                        <Button variant="outline-info" href="https://github.com/infoshareacademy/jfdz14-paula-poleca-app" target="_blank">
                                            <img 
                                                className="logoGitHub" 
                                                src={GitHubLogo} 
                                                alt="GitHub Logo"
                                            />Viewing code on GitHub
                                        </Button>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="primary" href="https://infoshareacademy.github.io/jfdz14-paula-poleca-app/" target="_blank">Show</Button>
                                        <Button variant="secondary" onClick={this.closeModalApplication}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                            <h4 data-aos="fade-up"data-aos-duration="1000">Project Examples on CMS</h4>
                            <p>
                                <Button 
                                    data-aos="fade-up"
                                    data-aos-duration="1500" 
                                    className="buttonProjectExamples" 
                                    variant="info" 
                                    onClick={this.showModalWordPress} 
                                    size="lg">WordPress
                                </Button>
                                    
                                <Modal show={this.state.isModalOpenWordPress} onHide={this.closeModalWordPress}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Examle Project on CMS WordPress</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <p>Site create in 2016.</p>
                                        <p>Added template, plugins for correct work and SEO.</p>
                                        <p>Language: Ru</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" href="https://vingroup.com.ua/" target="_blank">Show</Button>
                                        <Button variant="secondary" onClick={this.closeModalWordPress}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                                <Button 
                                    data-aos="fade-up"
                                    data-aos-duration="1500" 
                                    className="buttonProjectExamples" 
                                    variant="info" 
                                    onClick={this.showModalOpenCart} 
                                    size="lg">OpenCart
                                </Button>
                                    
                                <Modal show={this.state.isModalOpenOpenCart} onHide={this.closeModalOpenCart}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Examle Project on CMS OpenCart</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <p>Site create in 2013.</p>
                                        <p>Redesign made in 2019</p>
                                        <p>Added template, plugins for correct work and SEO.</p>
                                        <p>Language: Ru</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="primary" href="https://vduhi.ru/" target="_blank">Show</Button>
                                        <Button variant="secondary" onClick={this.closeModalOpenCart}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                        </div>
                    </Col>    
                </Row>
            </Container>
        )
    }
}