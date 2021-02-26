export interface Viewer {
    setStyle: (sel: any, style: any) => void;
    setClickable: (sel: any, clickable: boolean, callback: Function) => void;
    zoomTo: (sel: AtomSel, duration: number) => void;
    render: () => void;
}

export interface AtomSel {
    resi: number;
    resn: string;
    chain: string;
}
