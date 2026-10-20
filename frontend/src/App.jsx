import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import './App.css';

function App() {
  const [healthMessage, setHealthMessage] = useState("");
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/health')
      .then(res => res.json())
      .then(data => setHealthMessage(data.message))
      .catch(err => console.error("Error al conectar con health:", err));

    fetch('http://localhost:4000/api/info')
      .then(res => res.json())
      .then(data => setInfoData(data))
      .catch(err => console.error("Error al conectar con info:", err));
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Taller IV</h1>

      <section className="health-section">
        <div className="health-box">
          <h4>Estado del API</h4>
          <p>
            {healthMessage ? healthMessage : "Verificando conexión con el API..."}
          </p>
        </div>
      </section>

      <h2 className="mb-4 text-center">Información de los integrantes</h2>
      {infoData && (
        <p className="text-center mb-4">
          <Badge color="success">{infoData.status}</Badge>
        </p>
      )}
      <Row>
        {infoData && infoData.integrantes.map((member) => (
          <Col sm="12" md="6" lg="4" key={member.carnet} className="mx-auto">
            <Card className="shadow-sm border-0">
              <CardBody>
                <CardTitle tag="h5" className="border-bottom pb-2">
                  Carnet: {member.carnet}
                </CardTitle>
                <CardText className="mt-3">
                  <strong>Ciudad de origen:</strong> {member.ciudadOrigen} <br />
                  <strong>Carrera:</strong> {member.carrera} <br />
                  <strong>Proyectos realizados:</strong> {member.proyectosRealizados}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
