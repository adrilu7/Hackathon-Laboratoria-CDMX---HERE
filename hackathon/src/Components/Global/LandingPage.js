import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-materialize';
import './LandingPage.css';
import Logo from '../../assets/logo4.png';

const landingPage = () => (
    <div>
        <div className="nav-links">
            <Link to="/login-admin">Empresa</Link>
            <Link to="/login-parent">Familia </Link>
            <Link to="/login-school">Escuelas</Link>
            <Link to="/login-driver">Conductores</Link>
        </div>
        <div className="banner">
        <section className="slogan">
            <h1>Sigue Bus</h1>
            <img className="logo responsive-img" src={Logo} alt ="Logotipo"/>
            <h5>Cuidamos de tus hijos, cuidamos de todos.</h5>
        </section>
        </div>
        <section className="info">
        <Row>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text'>
                <h5>Confianza</h5>
                Lorem ipsum dolor sit amet, 
                et sed quod                
                 </Card>
            </Col>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text'>
                <h5>Seguridad</h5>
                Lorem ipsum dolor sit amet, 
                et sed quod
                 </Card>
            </Col>
            <Col m={3} s={6}>
                <Card className='black' textClassName='white-text'>
                <h5>Compromiso</h5>
                Lorem ipsum dolor sit amet, 
                et sed quod
                 </Card>
            </Col>
        </Row>
        </section>
    </div>
)

export default landingPage