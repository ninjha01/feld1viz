export interface Viewer {
  setStyle: (sel: any, style: any) => void;
  setClickable: (sel: any, clickable: boolean, callback: Function) => void;
  zoomTo: (sel: AtomSel, duration: number) => void;
  render: () => void;
  addArrow: (x: {
    start: { x: number; y: number; z: number };
    end: { x: number; y: number; z: number };
    radius: number;
    radiusRadio: number;
    mid: number;
    clickable: boolean;
    callback?: () => void;
  }) => any;
  addBox: (box: { center: any; dimensions: any }) => any;
  removeShape: (x: any) => void;
  addShape: (x: any) => any;
  addLabel: (title: string, style: any, sel?: AtomSel | AtomSel[]) => any;
  removeLabel: (x: any) => void;
  removeAllLabels: () => void;
  selectedAtoms: (sel: AtomSel) => any;
  rotate: (degrees: number, axis: string, duration?: number) => void;
}

export interface AtomSel {
  resi: number;
  resn: string;
  chain: string;
  x?: number;
  y?: number;
  z?: number;
}
