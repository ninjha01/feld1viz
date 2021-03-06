import pandas as pd
from io import StringIO
from dataclasses import dataclass
from typing import List, Dict, Any
import numpy as np
from collections import defaultdict

x = """
Arg5,Trp18,Thr37,Glu42,Lys51,Leu53,Glu58,Ile62,Leu82,Ser89
Ambiguity:,X:R/C,X:W/S,X:T/M,X:E/K,X:K/N,X:L/R,X:E/A,X:I/N,X:L/V,X:S/N
,,,,,,,,,,
,R/C,W/S,,,K/N,,,,L/V,
,R/C,W/S,,,N,,,,L/V,
,,,,,,,,,,
,,W/S,,,K/N,,,,,
,,,,,,,,,,
,R/C,W/S,,,K/N,,,,L/V,
,R/C,S,,,N,,,,L/V,
,,,,,,,,,,
0,R/C,W/S,,,K/N,,,,L/V,
1,,,,,,,,,,
2,,,,,,,,,,
3,,,,,,,,,,
4,,,,,,,,,,
5,,S,M,K,N,L/R,A,N,V,N
6,R/C,W/S,,,K/N,,,,L/V,
7,,,,,,,,,,
8,,,,,,,,,,
9,R/C,W/S,,,K/N,,,,L/V,
0,,,,,,,,,,
1,,,,,,,,,,
2,R/C,W/S,,,K/N,,,,L/V,
3,,,,,,,,,,
4,,,,,,,,,,
5,,,,,,,,,,
6,,,,,,,,,,
7,,,,,,,,,,
8,,,,,,,,,,
9,,,,,,,,,,
0,,,,,,,,,,
1,,,,,,,,,,
2,,,,,,,,,,
3,,,,,,,,,,
4,,,,,,,,,,
5,,,,,,,,,,
6,R/C,W/S,,,K/N,,,,L/V,
7,,,,,,,,,,
8,,,,,K/N,,,,L/V,
9,,,,,,,,,,
0,,,,,,,,,,
1,,,,,,,,,,
2,,,,,K/N,,,,L/V,
3,,,,,,,,,,
4,,,,,,,,,,
5,R/C,W/S,,,K/N,,,,L/V,
6,,,,,,,,,,
7,,,,,,,,,,
8,,,,,,,,,,
9,,,,,,,,,,
0,,,,,,,,,,
"""
df = pd.read_csv(StringIO(x))


@dataclass
class Variant:
    id: int
    indices: List[int]
    stats: List[str]
    variant_type: str


variants = []
for i, (label, vals) in enumerate(df.items()):
    vals = vals.dropna()
    res, idx = label[0:2], label[3:]
    amb, vals = vals[0][2:], vals[1:]
    variations_count = defaultdict(lambda: 0)
    for v in vals:
        variations_count[v] += 1
    total_freq = float(sum(list(variations_count.values()))) / float(50) * float(100)
    sub_count = 0
    amb_count = 0
    if len(list(variations_count.keys())) == 1:
        key1 = list(variations_count.keys())[0]
        key2 = None
    elif len(list(variations_count.keys())) == 2:
        key1 = list(variations_count.keys())[0]
        key2 = None
    else:
        __import__("pdb").set_trace()
    for k in [k for k in [key1, key2] if k is not None]:
        if "/" in k:
            amb_count = variations_count[k]
        else:
            sub_count = variations_count[k]

    variants.append(
        Variant(
            id=i,
            indices=[int(idx)],
            stats=[
                f"SNP: {amb}",
                f"{total_freq}% of cats (50 total)",
                f"{sub_count} cats with substitution",
                f"{amb_count} cats with ambiguity",
            ],
            variant_type="domestic",
        )
    )
    from pprint import pprint

pprint([v.__dict__ for v in variants])
