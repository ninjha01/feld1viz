import pandas as pd
from io import StringIO
from dataclasses import dataclass
from typing import List, Dict, Any
import numpy as np
from collections import defaultdict
import json


from pprint import pprint


@dataclass
class Variant:
    id: int
    indices: List[int]
    stats: List[str]
    variant_type: str
    correlated_ids: []
    color: str
    chain: str


def parse_df(df, variant_type, start_count):
    count = start_count
    variants = []
    for (i, row) in df.iterrows():
        row = row.dropna().to_dict()
        AA, color, frequency, variant, residue, species = (
            row.get("AA:", None),
            row.get("Variant Color:", None),
            row.get("Variant Frequency:", None),
            row.get("Variant:", None),
            row.get("Residue:", None),
            row.get("Exotic Cat Species:", None),
        )
        if variant is not None:
            assert (variant_type == "domestic" and not species) or (
                variant_type == "exotic" and species
            ), __import__("pdb").set_trace()

            stats = [variant, frequency]
            if variant_type == "exotic":
                stats.append(f"Species: {species}")

            assert color is not None, __import__("pdb").set_trace()
            v = Variant(
                id=count,
                indices=[i],
                stats=stats,
                variant_type=variant_type,
                correlated_ids=[],
                color=color,
                chain="A",
            )
            variants.append(v)
            count += 1
        else:
            continue
    color_to_correlated = defaultdict(lambda: [])
    for v in variants:
        color_to_correlated[v.color].append(v.id)
    for v in variants:
        correlated = list(color_to_correlated[v.color])
        correlated.remove(v.id)
        v.correlated_ids = correlated
    return variants


def gen_variants(domestic_df, exotic_df):
    domestic_variants = parse_df(domestic_df, "domestic", 0)
    exotic_variants = parse_df(exotic_df, "exotic", len(domestic_variants))
    return domestic_variants + exotic_variants


domestic_df = pd.read_csv("/Users/nishantjha/Desktop/feld1viz/dom_chain2.csv")
exotic_df = pd.read_csv("/Users/nishantjha/Desktop/feld1viz/exo_chain2.csv")
variants = gen_variants(domestic_df, exotic_df)
pprint([v.__dict__ for v in variants])
