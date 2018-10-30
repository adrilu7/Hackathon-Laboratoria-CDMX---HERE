import React, {Component} from 'react';
import {Row, Input, Button, Modal, Col} from 'react-materialize';
import firebase from 'firebase';

class Form extends Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        
        this.state = {
        email: '',
        password: '',

        }
    }

    handleRegister(event) {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            if(user) {
             window.location.assign('/dashboard-admin')
            }
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
          });
    }
    
    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }
    render() {
        return(
    <div>
        <Row>
            <Col s={12} m={12} l={12}>
                <Input className='inputHover' s={10}  m={10} l={10} label="Matrícula" name="code" type="text"/>
                <Input className='inputHover' s={10}  m={10} l={10} label="Nombre" name="name" type="text"/>
                <Input className='inputHover' s={10}  m={10} l={10} label="Dirección" name="address" type="text"/>
                <Input className='inputHover' s={10}  m={10} l={10} label="Teléfono" name="telephone"type="text"/>
            </Col>
        </Row>
        <Row>
        <Modal
            header='Registra Nuevo Usuario'
            trigger={<Button className="purple">Registrar</Button>}>
                    <Col>
                        <Input type="email" label="Correo" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                        <Input type="password" label="Contraseña" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                        <Button className="purple" onClick={this.handleRegister}>Confirmar</Button>
                    </Col>
        </Modal>
        </Row>
    </div>
        )
    }
}

export default Form