import React from 'react';
import { Table, Card } from 'react-bootstrap';

const students = [
  { id: 1, name: 'Laura Gómez', email: 'laura@example.com', program: 'Ingeniería', dob: '2001-03-12' },
  { id: 2, name: 'Carlos Ruíz', email: 'carlos@example.com', program: 'Administración', dob: '1999-07-25' },
  { id: 3, name: 'Andrea Pérez', email: 'andrea@example.com', program: 'Derecho', dob: '2002-11-04' },
  { id: 4, name: 'David Torres', email: 'david@example.com', program: 'Ingeniería', dob: '2000-02-18' },
  { id: 5, name: 'Lucía Martínez', email: 'lucia@example.com', program: 'Contaduría', dob: '2003-05-30' },
];

const StudentTable = () => {
  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-primary text-white">
        <h5>Listado de Estudiantes</h5>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Programa</th>
              <th>Fecha de nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.program}</td>
                <td>{student.dob}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default StudentTable;