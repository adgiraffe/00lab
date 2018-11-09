import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Home extends Component {
    state = {
        items: [
            {id: uuid(),name : 'egg'},
            {id: uuid(),name : 'egg2'},
            {id: uuid(),name : 'egg3'},
            {id: uuid(),name : 'egg4'},
        ]
    }

    render() {
        const { items } = this.state;
        return (<div >
            <Container>
                <Button 
                color="dark" 
                style={{marginBottm: '2rem'}}
                onClick={ ()=> {
                    const name = prompt('enter item');
                    if(name) {
                        this.setState( state => ({
                            items: [...state.items, {id: uuid(), name}]
                        }));
                    }}
                }
                >
                Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key= {id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button 
                                className = "remove-btn"
                                color= "danger"
                                size="sm"
                                onClick={ () => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                                >&times;
                                </Button >
                                  {name} 
                                 </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                    </ListGroup>
             </Container></div>
        );
    }
}

export default Home;