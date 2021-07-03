import React, { useState } from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { ErrorBoundary } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";

import { StructureViz } from "./components/StructureViz";
import { Residue, SequenceViz } from "./components/SequenceViz";
import {
  AccompanyTopText,
  AccompanyBottomText,
} from "./components/AccompanyText";
import { Legend } from "./components/Legend";
import { chain1_sequence } from "./sequence1";
import { chain2_sequence } from "./sequence2";
import { pdb_sequence } from "./pdb_sequence";
import { AtomSel } from "./components/3DmolTypes";

const App = () => {
  const [clickedAtom, setClickedAtom] = useState<Residue | null>(null);
  const [seq1VarType, setSeq1VarType] = useState<"domestic" | "exotic">("domestic")
  const [seq2VarType, setSeq2VarType] = useState<"domestic" | "exotic">("domestic")

  return (
    <div className="App">
      <Container>
        <Row style={{ width: "100%" }}>
          <AccompanyTopText />
        </Row>
        <Row style={{ width: "100%" }}>
          <Col sm={12} lg={6}>
            <ErrorBoundary>
              <StructureViz
                pdb={"2EJN"}
                clicked={clickedAtom}
                pdb_sequence={pdb_sequence}
                variants={chain1_sequence.variants.concat(
                  chain2_sequence.variants
                )}
                seq1VarType={seq1VarType}
                seq2VarType={seq2VarType}
              />
            </ErrorBoundary>
          </Col>
          <Col sm={12} lg={6}>
            <ErrorBoundary>
              <SequenceViz
                title={"Chain 1"}
                sequence={chain1_sequence}
                variantType={seq1VarType}
                setVariantType={setSeq1VarType}
                clickCallback={setClickedAtom}
              />
            </ErrorBoundary>
            <br />
            <ErrorBoundary>
              <SequenceViz
                title={"Chain 2"}
                sequence={chain2_sequence}
                clickCallback={setClickedAtom}
                variantType={seq2VarType}
                setVariantType={setSeq2VarType}


              />
            </ErrorBoundary>
          </Col>
        </Row>
        <Row>
          <AccompanyBottomText />
        </Row>
      </Container>
    </div>
  );
};

export default App;
