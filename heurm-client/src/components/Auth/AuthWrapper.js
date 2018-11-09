import React from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AuthWrapper = ({children}) => (
    <div class="container" fluid>
      <Navbar color="dark" dark expand="sm" className="mb-2">
          <NavbarBrand href="/" className="mr-auto">BrandNewSite</NavbarBrand>
    </Navbar>
    <Form>
    {children}
    </Form>
    
</div>

);

export default AuthWrapper;