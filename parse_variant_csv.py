import pandas as pd
from io import StringIO
from dataclasses import dataclass
from typing import List, Dict, Any
import numpy as np
from collections import defaultdict


from pprint import pprint

exotic_1 = """
Ala9,Gln14,Ala15,Val18,Asp29,Phe32,Ala33,Ala35,Asn36,Asn38,Leu40,Leu41,Leu44,Ser45,Thr47,Lys48,Met59,Val67,Leu71,Ile72,Ser73,Arg74,Val75,Asp77,Gly78,Leu79,Thr82,Thr83,Ile84,Ser85,Ser86,Ser87,Lys88,Asp89,Met91,Gly92,Ala94,Val95,Gln96
,,,,,,,,,,,,,,,,,,,,,,,X: D/V,,,,,,,,,,,X: S/I,,,,
,R,E,,H,T,,,S,D,,,S,,,,,,,,,K,,,A,,I,,,,,,,,I,V,,,
,R,E,,H,T,,,S,D,,,S,,,,,,,,,K,,,A,,I,,,,,,,,I,V,,,
,R,E,,H,T,,,S,D,F,,S,,,,,,,,,K,A,,A,,I,,,,,,,,I,V,,,
,,,,K,T,,,S,D,,,F,,,,,,,V,,K,A,,T,,I,A,,-,-,N,E,,,,,,E
,,,,K,T,,,S,D,,,F,,,,,,,V,,K,A,,T,,I,A,,-,-,N,E,,,,,,E
,,,,K,T,,,S,D,,,F,,,,,,,V,,K,A,,T,,I,A,,-,-,N,E,,,,,,E
T,,,,E,N,,,S,D,,,,,,,,,F,,,K,F,,,,I,,,-,-,N,V,,,V,,,
T,,,,E,N,,,S,D,,,,,,,,,F,,,K,F,,,,I,,,-,-,N,V,,,V,,,
T,,,,E,N,,,S,D,,,,,,,,,F,,,K,F,,,,I,,,-,-,N,V,,,V,,,
,,E,F,,T,,,S,S,,,S,,,,I,,,V,,T,G,,A,,I,,,,,,,,I,V,,,
,,E,F,,T,,,S,S,,,S,,,,I,,,V,,T,G,,A,,I,,,,,,,,I,V,,,
,,E,F,,T,,,S,S,,,S,,,,I,,,V,,T,G,,A,,I,,,,,,,,I,V,,,
,,E,,Q,T,V,T,T,,,,F,L,,V,,M,,M,A,K,A,V,A,I,,,,,F,,,V,,D,,A,
,,E,,Q,T,V,T,T,,,,F,L,,V,,M,,M,A,K,A,D/V,A,I,,,,,F,,,V,,D,,A,
,,E,,Q,T,V,T,T,,,,F,L,,V,,M,,M,A,K,A,V,A,I,,,,,F,,,V,,D,,A,
,,E,,H,T,,T,S,,,V,F,L,,V,,,,,,K,,,,I,A,,,,,,,,,,,A,
,,E,,H,T,,T,S,,,V,F,L,,V,,,,,,K,,,,I,A,,,,,,,,,,,A,
,,E,,H,T,,T,S,,,V,F,L,,V,,,,,,K,,,,I,A,,,,,,,,,,,A,
,,E,,,T,,,S,,,,F,,,,,,,,,K,A,,A,,I,,,,,,,,I,V,,,
,,E,,,T,,,S,,,,F,,,,,,,,,K,A,,A,,I,,,,,,,,I,V,,,
,,E,,,T,,,S,,,,F,,,,,,,,,K,A,,A,,I,,,,,,,,I,V,,,
,,E,,,T,,,S,,,,F,,I,R,,,,L,,,,,A,,A,,,-,-,,,V,I,V,T,S,
,,E,,,T,,,S,,,,F,,I,R,,,,L,,,,,A,,A,,,-,-,,,V,S/I,V,T,S,
,,E,,,T,,,S,,,,F,,I,R,,,,L,,,,,A,,A,,,-,-,,,V,I,V,T,S,
"""


@dataclass
class Variant:
    id: int
    indices: List[int]
    stats: List[str]
    variant_type: str
    correlated_ids: []


def gen_variants(df):
    variants = []
    for i, (label, vals) in enumerate(df.items()):
        vals = list(vals.dropna())
        if len(vals) < 2:
            print("Passing", label, "due to no vals")
            continue
        res, idx = label[0:3], label[3:]
        amb, vals = vals[0][2:], vals[1:]
        variations_count = defaultdict(lambda: 0)
        for v in vals:
            variations_count[v] += 1
        total_freq = (
            float(sum(list(variations_count.values()))) / float(50) * float(100)
        )
        stats = [
            f"SNP: {amb}",
            f"{round(total_freq,2)}% of cats (50 total)",
        ]
        for var, count in variations_count.items():
            if "/" in var:
                stats.append(f"{count} cats with ambiguity {var}")
            else:
                stats.append(f"{count} cats with substitution {var}")
        variants.append(
            Variant(
                id=21 + i,
                indices=[int(idx) - 1],
                stats=stats,
                variant_type="exotic",
                correlated_ids=[],
            )
        )
    return variants


pprint([v.__dict__ for v in gen_variants(pd.read_csv(StringIO(exotic_1)))])
