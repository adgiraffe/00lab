import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
//import { transitions } from 'lib/styleUtils';
import { Alert } from 'reactstrap';

const AuthError = ({children}) => (
    <Alert color="danger">
        알림 : {children}
    </Alert>
);

export default AuthError;