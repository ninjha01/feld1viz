import React, { useState } from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { ErrorBoundary } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";

import { StructureViz } from "./components/StructureViz";
import { Residue, SequenceViz } from "./components/SequenceViz";
import { Legend } from "./components/Legend";
import { chain1_sequence } from "./sequence1";
import { chain2_sequence } from "./sequence2";
import { pdb_sequence } from "./pdb_sequence";
import { AtomSel } from "./components/3DmolTypes";

const App = () => {
  const [clickedAtom, setClickedAtom] = useState<AtomSel | null>(
    null
  );

  return (
    <Container className="App">
      <Row
        style={{ width: "100vw", alignSelf: "center" }}
        className="align-items-center"
      >
        <Col sm={12} lg={6}>
          <ErrorBoundary>
            <StructureViz
              pdb={"2EJN"}
              clicked={clickedAtom}
            />
          </ErrorBoundary>
        </Col>
        <Col sm={12} lg={6}>
          <ErrorBoundary>
            <Legend />
          </ErrorBoundary>
          <ErrorBoundary>
            <SequenceViz
              title={"Chain 1"}
              sequence={chain1_sequence}
              clickCallback={setClickedAtom}
              cutsites={{ indices: [20, 21, 26, 27, 28, 45] }}
            />
          </ErrorBoundary>
          <br />
          <ErrorBoundary>
            <SequenceViz
              title={"Chain 2"}
              sequence={chain2_sequence}
              clickCallback={setClickedAtom}
              cutsites={{ indices: [0, 1, 9] }}
            />
          </ErrorBoundary>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
