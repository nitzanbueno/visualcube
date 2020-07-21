export declare type Vec3 = [number, number, number];
export declare const enum Axis {
    X = 0,
    Y = 1,
    Z = 2
}
export declare const Masking: {
    FL: string;
    F2L: string;
    LL: string;
    CLL: string;
    ELL: string;
    OLL: string;
    OCLL: string;
    OELL: string;
    COLL: string;
    OCELL: string;
    WV: string;
    VH: string;
    ELS: string;
    CLS: string;
    CMLL: string;
    CROSS: string;
    F2L3: string;
    F2L2: string;
    F2LSM: string;
    F2L1: string;
    F2B: string;
    LINE: string;
};
export declare const enum Face {
    U = 0,
    R = 1,
    F = 2,
    D = 3,
    L = 4,
    B = 5
}
export interface StickerDefinition {
    face: Face;
    n: number;
}
export interface Arrow {
    s1: StickerDefinition;
    s2: StickerDefinition;
    s3?: StickerDefinition;
    scale: number;
    influence: number;
    color: string;
}
export declare class CubeOptions {
    dist?: number;
    algorithm?: string;
    backgroundColor?: string;
    cubeColor?: string;
    outlineWidth?: number;
    strokeWidth?: number;
    cubeSize?: number;
    cubeOpacity?: number;
    stickerOpacity?: number;
    colorScheme?: {
        [face: number]: string;
    };
    stickerColors?: string[];
    facelets?: string[];
    zPosition?: Vec3;
    viewportRotations?: [Axis, number][];
    view?: string;
    width?: number;
    height?: number;
    mask?: string;
    maskAlg?: string;
    arrows?: Arrow[] | string;
    viewbox?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export { CubeSvg } from "./cubeSvg";
