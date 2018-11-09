import React, { Component } from 'react';
import Header, { LoginButton } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown
    } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';   
import { Form, FormGroup, Label, FormText } from 'reactstrap';
import { Col, Row } from 'reactstrap';
class HeaderContainer extends Component {

    toggleDropDown = this.toggleDropDown.bind(this);
    toggleSplit = this.toggleSplit.bind(this);
    toggleModal = this.toggleModal.bind(this);
    state = {
        isOpen: false,
        dropdownOpen: false,
        splitButtonOpen: false
     }
     toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
      }
     toggle = () => {
         this.setState({
             isOpen: !this.state.isOpen
         });
     }

     toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
      toggleSplit() {
        this.setState({
          splitButtonOpen: !this.state.splitButtonOpen
        });
      }
    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }

    render() {
        const { visible, user } = this.props;
        if(!visible) return null;



        return (
            <div class="container">
        <Navbar color="dark" dark expand="sm" className="mb-2">
          <NavbarBrand href="/">NewCommunity</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem class="mw-90">
                <NavLink href="https://trello.com/c/XmacrRcx/62-bootstrap-reactfrontend-%EC%84%A4%EC%A0%95">GitHub</NavLink>
              </NavItem>
              <NavItem >
                    <InputGroup size="sm">
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <Button outline>조건</Button>
                        <DropdownToggle split outline />
                        <DropdownMenu>
                            <DropdownItem header>검색 조건</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem disabled>비활성화</DropdownItem>
                            <DropdownItem>글쓴이</DropdownItem>
                            <DropdownItem>제목</DropdownItem>
                            <DropdownItem>내용</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>제목+내용</DropdownItem>
                        </DropdownMenu>
                        </InputGroupButtonDropdown>
                            <Input type="search" placeholder="검색어를 입력하세요..." />
                        <InputGroupAddon addonType="append"><Button type="submit" color="secondary">검색</Button></InputGroupAddon>
                    </InputGroup>
              </NavItem>
              { user.get('logged') 
                    ? (<UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        {user.getIn(['loggedInfo', 'username'])} 
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            Option 1
                          </DropdownItem>
                          <DropdownItem>
                            Option 2
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem onClick={this.handleLogout}>
                            logout
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    )
                    : (<NavItem>
                        {/* <Button size="sm" href="/auth/login">Login / register</Button> */}
                        <Button size="sm" onClick={this.toggleModal}>Login / register</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggleModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} className={this.props.className}>
                            <ModalHeader toggle={this.toggleModal}>로그인</ModalHeader>
                            <ModalBody>
                            <Form>
                                <FormGroup>
                                <Label for="exampleEmail">이메일</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                <Label for="examplePassword">비밀번호</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                            </Form>
                            </ModalBody>
                            <ModalFooter>
                            <Row form>
                            <Col mr={4}>
                                <Button color="info" onClick={this.toggleModal} href="/auth/Register">회원가입</Button>
                            </Col>
                            <Col ml={2}>
                                <Button color="primary" onClick={this.toggleModal} href="/auth/Login">확인</Button>{' '}
                            </Col>
                            <Col ml={2}>
                                <Button color="secondary" onClick={this.toggleModal}>취소</Button>
                            </Col>
                            </Row>
                            </ModalFooter>
                            </Modal>
                        </NavItem>)
                }
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        user: state.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);