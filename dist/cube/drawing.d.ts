import { FC } from 'react';
import { CubeGeometry, FaceStickers, FaceRotations } from './geometry';
import { Face } from './constants';
import { ICubeOptions } from './options';
import { Arrow } from './models/arrow';
export declare const FaceStickersSvg: FC<{
    face: Face;
    stickers: FaceStickers;
    options: ICubeOptions;
}>;
export declare const OLLStickers: FC<{
    face: Face;
    stickers: FaceStickers;
    rotations: FaceRotations;
    options: ICubeOptions;
}>;
/**
 * Generates svg for an arrow pointing from sticker s1 to s2
 */
export declare const ArrowSvg: FC<{
    geometry: CubeGeometry;
    arrow: Arrow;
}>;
export declare const Cube: FC<{
    geometry: CubeGeometry;
    options: ICubeOptions;
}>;
