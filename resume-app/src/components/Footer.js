import React from 'react';
import { 
    Container 
} from 'react-bootstrap';
import GitHubLogo from '../images/github.svg';
import LinkedInLogo from '../images/linkedin.svg';

export default class Footer extends React.Component {
    render() {
        return (
            <Container className="containerFooter">
                <a href="https://github.com/vol-han" target="_blank" rel="noreferrer" title="GitHub">
                    <img 
                        className="logoSocialFooter" 
                        src={GitHubLogo} 
                        alt="GitHub Logo"
                    />
                </a>
                <a href="https://www.linkedin.com/in/vol-han/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <img 
                        className="logoSocialFooter" 
                        src={LinkedInLogo} 
                        alt="LinkedIn Logo"
                    />
                </a>
            </Container>
        )
    }
}
