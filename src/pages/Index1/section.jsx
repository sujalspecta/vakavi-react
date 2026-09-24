import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            height: window.innerHeight
        }
        
        // 1. Create the modern ref object
        this.modalRef = React.createRef(); 

        this.setFullScreen.bind(this);
        this.callModal.bind(this);
    }

    // 2. Call the child method using the modern ref object
    callModal = () => {
        if (this.modalRef.current) {
            this.modalRef.current.openModal();
        }
    }

    setFullScreen = () => {
        var topSectionEl = document.getElementById('home-fullscreen');
        if(topSectionEl && topSectionEl.clientHeight > 0) {
            var windowHeight = window.innerHeight;
            this.setState({ 
                height: windowHeight
            });
        }
    }

    componentDidMount(){
        this.setFullScreen();
        window.addEventListener("resize", this.setFullScreen);
    }

    componentWillUnmount(){
        // FIXED: Changed from addEventListener to removeEventListener to prevent memory leaks
        window.removeEventListener("resize", this.setFullScreen);
    }
    
    render() {
        return (
            <React.Fragment>
            <section className="home bg-home" id="home">

                <Container>
                    <Row>
                        <Col md="12">
                            <div className="home-fullscreen" id="home-fullscreen" style={{height : this.state.height+"px"}}>
                                <div className="full-screen">
                                    <div className="home-wrapper home-wrapper-alt">
                                        <Row>
                                            <Col md="6">
                                                <h1><span className="font-2">Clean & Professional,</span><br/> Multipurpose Landing Page</h1>
                                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</h4>
                                                <Link to="" className="btn btn-custom">Learn more</Link>
                                                <Link onClick={this.callModal} to="#" className="video-btn btn popup-video"><i className="glyphicon glyphicon-play"></i>Watch Video</Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* 3. Render ModalSection Component using the new ref instance */}
                    <ModalSection ref={this.modalRef} channel='vimeo' videoId='99025203' />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Section;
