import React, { Component } from 'react';

class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-alt bg-dark">
                    <p className="copy-rights">  {new Date().getFullYear()} © Vakavia.</p>
                </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;