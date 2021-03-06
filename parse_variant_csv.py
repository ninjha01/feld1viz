import pandas as pd
from io import StringIO
from dataclasses import dataclass
from typing import List, Dict, Any
import numpy as np
from collections import defaultdict
from pprint import pprint

chain1 = """
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

chain2 = """
Ala15,Asp29,Phe32,Asn36,Asn38,Leu44,Ile72,Arg74,Val75,Gly78,Thr82,Thr83,Ile84,Ser85,Ser86,Ser87,Lys88,Asp89,Met91,Gln96,Asn105
X:A/E,X:D/E,X:F/T/S/I,X:N/S,X:N/D,X:L/F/S,X:I/L/V,X:R/K,X:V/F/A/S,X:G/A/T/R,X:T/I,,,,,,,,X:M/T,X:Q/E,X:N/K
,,,,,,,,,,,,,,,,,,,,
,,,,,,I/V,R/K,V/F,,I,A,,-,-,N,E/V,D/Y,,Q/E,N/K
,D/E,T,S,N/D,L/F/S,V,K,V/F/A/S,G/A/T/R,I,A,,-,-,N,V,,,E,K
A/E,,,,,,I/L,,,,,,,,,,,,,,
,,,,,,I/V,R/K,V/A,G/A,I,T/A,,-,-,N,E,D/Y,,,
A/E,,,,,,I/L,,,,,,,,,,,,M/T,,
,,F/T/S/I,N/S,N/D,,I/V,R/K,V/F,,,,,,,,,,,Q/E,N/K
,D/E,T,S,,L/F/S,V,K,V/F/A/S,G/A,I,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,
,D/E,F/T/S/I,N/S,,,I/V,R/K,V/F,,,,,,,,,,,,
A/E,,,,,,V/L,R/K,V/A,G/A/T/R,,,,,,,,,T,,
,,,,,,I/V,R/K,V/F,,I,A,,-,-,N,E/V,Y,,Q/E,N/K
A/E,,,,,,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
A/E,,,,,,I/L,,,,,,,,,,,,,,
A/E,,F/T/S/I,N/S,,L/F/S,V/L,R/K,V/A,G/A/T/R,I,A,,-,-,N,E,Y,,,
A/E,,,,,,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
E,,,,,,V/L,R/K,V/F,,I,T/A,,-,-,N,V,,,E,K
A/E,,,,,,I/L,,,,,,,,,,,,M/T,,
E,,,,,,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
E,,,,,,V/L,R/K,V/F,,I,A,,-,-,N,V,,,E,K
,,T,S,D,,V,K,F,,I,A,,-,-,N,V,,,E,K
A/E,,,,,,I/L,,,,,,,,,,,,M/T,,
E,,,,,,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
,,F/T/S/I,N/S,N/D,,I/V,R/K,V/F,,I,A,,-,-,N,V,,,E,K
E,,,,,,V/L,R/K,V/F,,I,A,,-,-,N,V,,,E,K
,,T,S,D,,V,K,F,,I,A,,-,-,N,V,,,E,K
E,,,,,,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
A/E,,,,,,I/L,,,,,,,,,,,,T,,
,,,,,,,,,,I,A,,-,-,N,E,Y,,,
,,F/T/S/I,N/S,,L/F/S,I/V,R/K,V/A,G/A/T/R,T/I,,,,,,,,,,
,,,,,,I/V,R/K,V/F,,I,A,,-,-,N,V,,,E,K
,,,,,,,,,,,,,,,,,,,,
A/E,,,,,,I/L,,,,T/I,T/A,,,,,,,T,,
,,T/S,N/S,,L/F/S,V/L,R/K,V/A,G/A/T/R,I,A,,-,-,N,E,Y,,,
E,,,,,,L,,,,,,,,,,,,T,,
,,F/T/S/I,N/S,,L/F/S,I/V,R/K,V/A,G/A/T/R,T/I,,,,,,,,,,
,,,,,,I/V,R/K,V/F,,I,A,,-,-,N,E/V,D/Y,,Q/E,N/K
,D/E,T,S,,L/F/S,V,K,V/F/A/S,G/A/T/R,I,A,,-,-,N,V,,,E,K
,,,,,,I/V,R/K,V/A,G/A/T/R,I,,,,,,,,,,
E,,,,,,V/L,R/K,V/F,,I,A,,-,-,N,V,,,E,K
,,F/T/S/I,N/S,,L/F/S,I/V,R/K,V/A,G/A/T/R,I,A,,-,-,N,E,Y,,,
,D/E,T,S,,L/F/S,V,K,V/F/A/S,G/A/T/R,I,A,,-,-,N,V,,,E,K
,,,,,,,,,,,,,,,,,,,,
,,T,S,D,,V,K,F,,I,A,,-,-,N,V,,,E,K
,D/E,T,S,N/D,,V,K,F,,I,A,,-,-,N,V,,,E,K
,,,,,,,,,,,,,,,,,,,,
A/E,,F/T/S/I,N/S,,L/F/S,V/L,R/K,V/A,G/A/T/R,T/I,,,,,,,,M/T,,
,,,,,,,,,,,,,,,,,,,,
A/E,,,,,,I/L,,,,,,,,,,,,T,,
E,,,,,,L,,,,,,,,,,,,T,,
"""


@dataclass
class Variant:
    id: int
    indices: List[int]
    stats: List[str]
    variant_type: str


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
                id=i,
                indices=[int(idx) - 1],
                stats=stats,
                variant_type="domestic",
            )
        )
    return variants


pprint([v.__dict__ for v in gen_variants(pd.read_csv(StringIO(chain1)))])
input()
print("-------")
pprint([v.__dict__ for v in gen_variants(pd.read_csv(StringIO(chain2)))])
