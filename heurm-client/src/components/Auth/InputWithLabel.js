import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({label, ...rest}) => (
        <FormGroup>
            <Label>{label}</Label>
            <Input {...rest}/>
        </FormGroup>
);

export default InputWithLabel;