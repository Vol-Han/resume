import React from 'react';
import { Container } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <Container id="home">
                <div className="sectionHomeText"> 
                    <h1 className="homeText">
                        IT development for benefiting World.
                    </h1>
                </div>
            </Container>
        )
    }
}
