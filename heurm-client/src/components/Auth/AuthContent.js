import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
const AuthContent = ({title, children}) => (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-5">{title}</h1>
          <p className="lead">{title}을 위한 페이지입니다.</p>
        </Container>
        <hr className="my-1" /> 
        <Col>
        {children}
        </Col>
      </Jumbotron>
    
);

export default AuthContent;