import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import StudentTable from './components/StudentTable';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('inicio');

  const renderContent = () => {
    switch (currentView) {
      case  'inicio':
        return <h2>Inicio de seccion           Asignatura Desarrolllo web......2025/2</h2>; <Home />;
      case 'estudiantes':
        return <StudentTable />;
      case 'cursos': <h2>aaaaaaaaaaaa</h2> 
        return  <RegistrationForm />;
      case 'configuracion':
        return <Calculator />;
      case 'cerrar-sesion':
        return <h2>Cerrando sesión  Asignatura Desarrolllo web......2025/2</h2>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#home">Mi Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className="d-flex align-items-center">
              <span className="me-2">DM</span>
              <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                DM
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex">
        <Sidebar handleNavigation={setCurrentView} />
        <div className="flex-grow-1 p-4 content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;