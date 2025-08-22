
import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const ReportForm = () => {
  return (
    <Container fluid>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Generar Informe</Card.Title>
          <Card.Text>
            Completa los siguientes campos para generar un informe personalizado.
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formReportType">
              <Form.Label>Tipo de Informe</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecciona un tipo de informe</option>
                <option value="1">Estudiantes por Programa</option>
                <option value="2">Rendimiento Académico</option>
                <option value="3">Informes Financieros</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateFrom">
              <Form.Label>Fecha de Inicio</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateTo">
              <Form.Label>Fecha de Fin</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComments">
              <Form.Label>Comentarios Adicionales</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Generar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportForm;