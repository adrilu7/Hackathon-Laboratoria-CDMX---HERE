import React from 'react';
import {Icon, Navbar, NavItem, Dropdown, Button} from 'react-materialize';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
import Chat from '../Parents/Chat';
import Map from '../Map/Map';
import Footer from 'react-materialize/lib/Footer';
import "./chat.css"

const startRoute = () => (
    <div>
    <Navbar brand='' right>
        <NavItem><Chat /></NavItem>
        <NavItem><Dropdown trigger={
    <Button><Icon large>account_circle</Icon></Button>
  }>
  <NavItem>Reporte</NavItem>
  <NavItem>Escuela</NavItem>
  <NavItem>Perfil</NavItem>
  <NavItem divider />
<NavItem onClick={() => firebase.auth().signOut()}><Link to="/" className="black-letter">Salir</Link></NavItem>
</Dropdown></NavItem>
    </Navbar>
    <div className='inputContainer'>
    <p>Ruta 002 - Colegio Amado Nervo</p>
    <p>Próximo Destino: Dresde 4-1, Juarez</p>
    <Map />
    <div className="divalert">
        <p>Luis Jorge ha llegado a su destino</p>
        <Button className="purple">Cerrar</Button>
    </div>
    </div>
    </div>
) 


export default startRoute