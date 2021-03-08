import React, { useState } from "react";
import "./App.css";

import { StructureViz } from "./components/StructureViz";
import { SequenceViz } from "./components/SequenceViz";
import { AtomSel } from "./components/3DmolTypes";
import { chain1_sequence, chain2_sequence } from "./sequence";
import { Container, Row, Col } from "react-bootstrap";
import { assert, ErrorBoundary } from "./utils"

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [clickedSelection1, setClickedSelection1] = useState<AtomSel | null>(
    null
  );
  const [clickedSelection2, setClickedSelection2] = useState<AtomSel | null>(
    null
  );
  const [clickedToDisplay, setClickedToDisplay] = useState<AtomSel | null>(
    null
  );
  const atomClicked = (r: AtomSel) => {
    setClickedToDisplay(r);
    assert(r != null, "Selection is null")
    if (r.chain === "A") {
      setClickedSelection1(r);
      setClickedSelection2(null);
    } else {
      setClickedSelection1(null);
      setClickedSelection2(r);
    }
  };

  return (
    <Container className="App">
      <Row style={{ padding: 16, width: "100vw", alignSelf: "center" }} className="align-items-center">
        <Col sm={12} lg={6}>
          <ErrorBoundary>
            <StructureViz
              pdb={"2EJN"}
              clickCallback={atomClicked}
              clicked={clickedToDisplay}
              chain1_sequence={chain1_sequence}
              chain2_sequence={chain2_sequence}
            />
          </ErrorBoundary>
        </Col>
        <Col sm={12} lg={6} >
          <ErrorBoundary>
            <SequenceViz
              title={"Chain 1"}
              sequence={chain1_sequence}
              clickCallback={atomClicked}
              clicked={clickedSelection1}
            />
          </ErrorBoundary>
          <br />
          <ErrorBoundary>
            <SequenceViz
              title={"Chain 2"}
              sequence={chain2_sequence}
              clickCallback={atomClicked}
              clicked={clickedSelection2}
            />
          </ErrorBoundary>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
