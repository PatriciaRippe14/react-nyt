import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Container from "../../components/Container";
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <CardBody>
                        <CardTitle className="footer-heading">
                            New York Times Article Scrubber
                        </CardTitle>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Footer;
