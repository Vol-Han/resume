import React from 'react';
import { Container } from 'react-bootstrap';


export default class Skills extends React.Component {
    render() {
        return (
            <Container id="skills">
                <section className="sectionSkills">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        Here are a few technologies
                    </h1>
                        <div className="divTechnologies" 
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-sine">
                            <h3>All time working and expand my knowledge with:</h3>
                            <div className="sibling-fade">
                                <a href="#">HTML</a>
                                <a href="#">CSS</a>
                                <a href="#">JavaScript</a>
                                <a href="#">React</a>
                                <a href="#">NodeJS</a>
                                <a href="#">Git</a>
                                <a href="#">GitHub</a>
                                <a href="#">Bootstrap</a>
                                <a href="#">Visual Studio Code</a>
                                <a href="#">Adobe Photoshop</a>
                                <a href="#">GIMP</a>
                                <a href="#">Linux</a>
                            </div>
                        </div>
                        <div className="divTechnologies" 
                                data-aos="fade-up"
                                data-aos-duration="1300"
                                data-aos-easing="ease-in-sine">
                            <h3>I've been experimenting with recently:</h3>
                                <div className="sibling-fade">
                                    <a href="#">HTTP</a>
                                    <a href="#">JSON</a>
                                    <a href="#">REST API</a>
                                    <a href="#">Redux</a>
                                    <a href="#">React Context</a>
                                    <a href="#">React Hooks</a>
                                    <a href="#">Firebase</a>
                                    <a href="#">Webpack</a>
                                    <a href="#">Cypress</a>
                                    <a href="#">Jest</a>
                                    <a href="#">Material-UI</a>
                                    <a href="#">jQuery</a>
                                    <a href="#">Jira</a>
                                </div>
                            </div>
                            <div className="divTechnologies" 
                                data-aos="fade-up"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-sine">
                            <h3>I've experimented and created projects for a long time with:</h3>
                            <div className="sibling-fade">
                                <a href="#">PHP</a>
                                <a href="#">MySQL</a>
                                <a href="#">CMS WordPress</a>
                                <a href="#">CMS OpenCart</a>
                            </div>
                        </div>
                </section>
            </Container>
        )
    }
}