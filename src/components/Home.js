import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Container>
        <Row style={{ height: "100vh", alignItems: "Center" }}>
          <Col xs="12">
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1>Aula 1</h1>
                </Card.Title>
                <Row>
                  <Col xs="4">
                    <Link
                      to="/Letreiro"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      <Card className="shadow-sm p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title>Letreiro</Card.Title>
                          <Card.Text>
                            <p>Este é o componente de Letreiro</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  <Col xs="4">
                    <Link
                      to="/Relogio"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      <Card className="shadow-sm p-3 mb-5 bg-body rounded">
                        <Card.Body>
                          <Card.Title>Relógio</Card.Title>
                          <Card.Text>
                            <p>Este é o componente Relógio</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
