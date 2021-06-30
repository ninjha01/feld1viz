import React, { useState } from "react";
import "./style.css";

export const AccompanyTopText = () => (
  <div style={{}}>
    <h3>Evolutionary biology and gene editing of cat allergen, Fel d 1</h3>
    <p style={{ fontSize: 16, textAlign: "center" }}>
      Nicole F. Brackett<sup>1,*</sup>, Brian W. Davis<sup>2</sup>, Mazhar Adli
      <sup>3</sup>, Anna Pomés<sup>1</sup>, Martin D. Chapman<sup>1</sup>
    </p>
    <ol style={{ listStylePosition: "inside", fontSize: 16, textAlign: "left" }}>
      <li>INDOOR Biotechnologies Inc., Charlottesville, VA</li>
      <li>
        Texas A&amp;M University College of Veterinary Medicine &amp;
        Biomedical Sciences, College Station, TX
      </li>
      <li>Northwestern University, Chicago, IL</li>
      <p>*Corresponding author: Nicole F. Brackett (nbrackett@inbio.com)</p>
    </ol>
    <h4 style={{ textAlign: "left" }}>Abstract</h4>
    <p style={{ fontSize: 18 }}>
      Cat allergy affects 15% of the population and is associated with asthma.
      Despite the pervasiveness of cat allergic disease, current treatments have
      limited impact. Here, we present a comprehensive structural bioinformatics
      analysis of the major cat allergen, Fel d 1, and demonstrate a
      proof-of-principle CRISPR gene editing approach to target the allergen.
      Sequence analyses of 50 domestic cats identified 18 novel Fel d 1 variants
      and revealed conserved coding regions appropriate for CRISPR editing.
      Comparative analyses of domestic cat Fel d 1 and orthologous sequences
      from eight exotic felid species suggest the allergen is not well conserved
      in evolution and is a suitable candidate for gene deletion.{" "}
      <em>In vitro</em> Fel d 1 knockouts using CRISPR-Cas9 yielded editing
      efficiencies of up to 55% and found no evidence of off-target effects. Our
      data indicate that Fel d 1 is a viable target for CRISPR deletion, which
      may profoundly benefit cat allergy sufferers by removing the major
      allergen at the source.
    </p>
  </div>
);

export const AccompanyBottomText = () => (
  <div style={{ fontSize: 18 }}>
    <h4 style={{ textAlign: "left" }}>
      Comprehensive sequence and structural analyses of domestic cat Fel d 1 and
      exotic cat orthologs
    </h4>
    <p>
      Domestic cats: The Fel d 1 genes, <em>CH1</em> and <em>CH2</em>, were
      sequenced from 50 domestic cats to identify protein sequence variants or
      amino acid (AA) substitutions, as well as conserved DNA target regions
      suitable for editing with CRISPR-Cas9. The Fel d 1 structure<sup>1</sup>{" "}
      (ribbon or surface) is depicted on the left. Each molecule is a
      heterodimer of chain 1 (light grey) and chain 2 (light pink), which form a
      tetramer in the natural allergen. The protein sequences of Fel d 1 chains
      1 and 2 (GenBank reference sequences AAC37318.1 and AAC41616.1,
      respectively) are shown on the right. Simultaneously present (correlated)
      Fel d 1 AA variants were identified from the 50 domestic cats and are
      highlighted in the sequences and structure (grouped by color). Conserved
      CRISPR-Cas9 target regions are <u>underlined</u> in the sequences.
    </p>
    <p>
      Exotic cats: Fel d 1 orthologs from 24 exotic cats, representing eight
      felid species, were identified by BLAST search of the NCBI SRA database.
      The Fel d 1 structure (left) and sequences (right) show the AA variants
      found in exotic cats alone (dark pink and cyan for chains 1 and 2,
      respectively) or both exotic and domestic cats (purple and green for
      chains 1 and 2, respectively).
    </p>
    <p>
      Each AA variant in the Fel d 1 sequences can be clicked to display
      relevant data including AA residue, AA variant, variant frequency,
      correlated variants (domestic cats only), or species (exotic cats only).
      The location of each variant, if present on the Fel d 1 structure, is
      highlighted by clicking that variant in the sequence.
    </p>
    <h4 style={{ textAlign: "left" }}>
      References:
    </h4>
    <ol style={{ listStylePosition: "inside", fontSize: 16, textAlign: "left" }}>
      <li>PDB 2EJN; Kaiser et al. J Mol Biol. 2007</li>
    </ol>
    <h4 style={{ textAlign: "left" }}>Acknowledgements:</h4>
    <p>
      We would like to thank <a href="https://www.nishantjha.org/">Nishant Jha</a> (Broad Institute of MIT and Harvard)
      for the design and development of this visualization.
    </p>
  </div >
);
