import { useEffect } from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const avatarHomem = {
  name: "Homem",
  imageUrl:
    "data:image/png;base64,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",
  imageSize: 90,
};

const avatarMulher = {
  name: "Mulher",
  imageUrl:
    "data:image/jpeg;base64,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",
  imageSize: 90,
};

export default function AppContador() {
  let [qtdHomem, setQtdHomem] = useState(0);
  let [qtdMulher, setQtdMulher] = useState(0);
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(qtdHomem + qtdMulher);
  }, [qtdHomem, qtdMulher]);

  function handleClickHomem() {
    setQtdHomem(qtdHomem + 1);
    setCount(count + 1);
  }

  function handleClickMulher() {
    setQtdMulher(qtdMulher + 1);
    setCount(count + 1);
  }

  function handleClickMenosHomem() {
    setQtdHomem(qtdHomem - 1);
    setCount(count - 1);
  }

  function handleClickMenosMulher() {
    setQtdMulher(qtdMulher - 1);
    setCount(count - 1);
  }

  function handleClickReset() {
    setQtdHomem(0);
    setQtdMulher(0);
    setCount(0);
  }

  return (
    <>
    <Link to="/">Retornar a página inicial</Link>
    <Container>
      <Row>
      <Col xs="12">
          <Card className="shadow-sm p-3 my-5 bg-body rounded">
            <Card.Body className="align-items-center card-body d-flex flex-column justify-center">
              <Card.Title className="text-center">Total</Card.Title>
              <h2 className="text-center">{count}</h2>
              <button
                type="button"
                onClick={handleClickReset}
                className="btn btn-primary mx-1"
              >
                Reset <RxReset />
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="2"/>
        <Col xs="4">
          <Card className="shadow-sm p-3 mb-5 bg-body rounded">
            <Card.Body className="align-items-center card-body d-flex flex-column justify-center">
              <Card.Title className="text-center">Homem</Card.Title>
              <img
                className="avatar align-self-center"
                src={avatarHomem.imageUrl}
                alt={"Photo of " + avatarHomem.name}
                style={{
                  width: avatarHomem.imageSize,
                  height: avatarHomem.imageSize,
                }}
              />

              <h2>Homens: {qtdHomem}</h2>
              <div className="d-flex flex-row justify-content-center">
              <button
                type="button"
                onClick={handleClickHomem}
                className="btn btn-success mx-1"
              >
                <FaPlus />
              </button>

              <button
                type="button"
                onClick={handleClickMenosHomem}
                disabled={qtdHomem <= 0}
                className="btn btn-danger mx-1"
              >
                <FaMinus />
              </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="4">
          <Card className="shadow-sm p-3 mb-5 bg-body rounded">
            <Card.Body className="align-items-center card-body d-flex flex-column justify-center">
              <Card.Title className="text-center">Mulher</Card.Title>

              <img
                className="avatar align-self-center"
                src={avatarMulher.imageUrl}
                alt={"Photo of " + avatarMulher.name}
                style={{
                  width: avatarMulher.imageSize,
                  height: avatarMulher.imageSize,
                }}
              />

              <h2>Mulheres: {qtdMulher}</h2>
                <div className="d-flex flex-row justify-content-center">
                <button
                    type="button"
                    onClick={handleClickMulher}
                    className="btn btn-success mx-1"
                >
                    <FaPlus />
                </button>

                <button
                    type="button"
                    className="btn btn-danger mx-1"
                    onClick={handleClickMenosMulher}
                    disabled={qtdMulher <= 0}
                >
                    <FaMinus />
                </button>
                
                </div>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
    
    </>
  );
}
