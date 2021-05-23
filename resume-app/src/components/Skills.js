import React from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default class Skills extends React.Component {
    render() {
        return (
            <Container id="skills">
                <section className="sectionSkills">
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Here are a few technologies</h1>
                    <div className="divTechnologies" data-aos="fade-up" data-aos-duration="1000">
                        <h3>Permanently expand my knowledge with:</h3>
                        <div className="sibling-fade">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Git</p>
                            <p>GitHub</p>
                            <p>Bootstrap</p>
                            <p>Visual Studio Code</p>
                            <p>Adobe Photoshop</p>
                            <p>GIMP</p>
                            <p>Linux</p>
                        </div>
                    </div>
                    <div className="divTechnologies" data-aos="fade-up" data-aos-duration="1100">
                        <h3>I've been experimenting with recently:</h3>
                        <div className="sibling-fade">
                            <p>HTTP</p>
                            <p>NodeJS</p>
                            <p>JSON</p>
                            <p>REST API</p>
                            <p>Redux</p>
                            <p>Firebase</p>
                            <p>Webpack</p>
                            <p>Cypress</p>
                            <p>Jest</p>
                            <p>Material-UI</p>
                            <p>jQuery</p>
                            <p>Jira</p>
                        </div>
                    </div>
                    <div className="divTechnologies" data-aos="fade-up" data-aos-duration="1200">
                        <h3>I've experimented and created projects for a long time with:</h3>
                        <div className="sibling-fade">
                            <p>PHP</p>
                            <p>MySQL</p>
                            <p>CMS WordPress</p>
                            <p>CMS OpenCart</p>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}