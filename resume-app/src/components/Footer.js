import React from 'react';
import GitHubLogo from '../images/github.svg';
import LinkedInLogo from '../images/linkedin.svg';
import { Container } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Container className="footer">
                <div>
                    <a 
                        href="https://github.com/vol-han" 
                        target="_blank" 
                        rel="noreferrer" 
                        title="GitHub"
                    >
                        <img 
                            className="logoSocialFooter" 
                            src={GitHubLogo} 
                            alt="GitHub Logo"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/vol-han/" 
                        target="_blank" 
                        rel="noreferrer" 
                        title="LinkedIn"
                    >
                        <img 
                            className="logoSocialFooter" 
                            src={LinkedInLogo} 
                            alt="LinkedIn Logo"
                        />
                    </a>
                </div>
            </Container>
        )
    }
}