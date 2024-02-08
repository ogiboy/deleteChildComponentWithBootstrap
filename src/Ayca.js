import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Button, ButtonGroup, Col, Row, Toast } from "react-bootstrap";

export default function Ayça22() {
  const [showMessage, setShowMessage] = useState(false);
  const toggleShowMessage = () => setShowMessage(!showMessage);
  const buttonText = showMessage ? "Hide Message" : "Show Message";

  return (
    <div className="ayca">
      <Row>
        <Col md={6} className="mb-2">
          <Button size="sm" className="mb-2" onClick={toggleShowMessage}>
            {buttonText}
          </Button>
          <Toast show={showMessage} onClose={toggleShowMessage}>
            <Toast.Header>
              <img
                className="rounded me-2"
                alt="ayça 22"
                width="100px"
                src="https://img-s2.onedio.com/id-6414aace6c8080301f95bb41/rev-0/w-600/h-303/f-jpg/s-2f13c75ec542c68000c71a28d3ba5ab8c65ca55d.jpg"
              />
              <strong className="me-auto">Ayça_22</strong>
              <small>11 dakika önce</small>
            </Toast.Header>
            <Toast.Body>Heyy orda mısın?? 😝😝</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
