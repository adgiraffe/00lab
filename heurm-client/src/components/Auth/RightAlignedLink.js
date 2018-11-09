import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const RightAlignedLink = ({to, children}) => (
        <Button className="btn btn-info float-right" color="primary" href={to}>
            {children}하기
        </Button>
);

export default RightAlignedLink;