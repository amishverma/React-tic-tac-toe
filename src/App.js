import React, { useState } from "react";

import Icon from "./components/Icon";
// *************** React-toastify***************
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// **************** Reactstrap*****************
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

const itemArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {};

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray = isCross ? "cross" : "cirlce";
      setIsCross(!isCross);
    } else {
      return toast("Aready fille", { type: "eroor" });

      checkIsWinner();
      s;
    }
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
