import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AuthButton = ({children, onClick}) => (
    <div>
    <Button color="primary" block onClick={onClick}>
        {children}
    </Button>
     <hr />
    </div>
);

export default AuthButton;