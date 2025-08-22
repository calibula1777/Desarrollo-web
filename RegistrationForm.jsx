import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const RegistrationForm = () => {
  return (
    <Card className="shadow-sm" style={{ maxWidth: '600px', margin: 'auto' }}>
      <Card.Header className="bg-primary text-white text-center">
        <h5>Formulario de Registro</h5>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Juan Pérez" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="juan@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Programa académico</Form.Label>
            <Form.Select>
              <option>Seleccione uno</option>
              <option>Ingeniería de Sistemas</option>
              <option>Administración de Empresas</option>
              <option>Contaduría Pública</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Registrarse
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RegistrationForm;