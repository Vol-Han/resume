import React from 'react';
import GitHubLogo from '../images/github.svg';
import LinkedInLogo from '../images/linkedin.svg';

export default class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="footer">
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
            <div className="footerPowered">
                <a href="https://github.com/Vol-Han/resume">
                    Designed & Built by Volodymyr Hannibal
                </a>
            </div>
            </>
        )
    }
}
