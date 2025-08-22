import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = ({ handleNavigation }) => {
  return (
    <div className="sidebar-container bg-dark text-white">
      <div className="sidebar-header">
        <h5 className="text-center p-3 mb-0">Menú</h5>
      </div>
      <Nav className="flex-column" defaultActiveKey="inicio">
        <Nav.Item>
          <Nav.Link eventKey="inicio" onClick={() => handleNavigation('inicio')}>
            Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="estudiantes" onClick={() => handleNavigation('estudiantes')}>
            Estudiantes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cursos" onClick={() => handleNavigation('cursos')}>
            Cursos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="configuracion" onClick={() => handleNavigation('configuracion')}>
            Configuración
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cerrar-sesion" onClick={() => handleNavigation('cerrar-sesion')}>
            Cerrar sesión
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;