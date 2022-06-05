import React from "react";
import "./App.css";

import Icon from "./components/Icon";
// *************** React-toastify***************
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// **************** Reactstrap*****************
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const itemArray = new Array(9).fill("empty");

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Icon />
      <Card>Hello</Card>
    </div>
  );
}

export default App;
