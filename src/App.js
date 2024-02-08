import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Button, ButtonGroup, Col, Row, Toast } from "react-bootstrap";
import Ayça22 from "./Ayca";
import { usePopper } from "react-popper";

function Parent() {
  const [children, setChildren] = useState([8, 9, 2]);
  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Parent </h2>

      <ButtonGroup>
        {children.map((id) => (
          <Child key={id} id={id} remove={() => removeChild(id)} />
        ))}
      </ButtonGroup>
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <Button size="lg" variant="danger" onClick={remove}>
        child {id}. Kaldırmak için tıklayın!
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Parent />
      <Ayça22 />
    </div>
  );
}
