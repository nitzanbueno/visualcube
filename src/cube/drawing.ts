import { ColorName } from "./../constants";
import * as SVG from "svg.js";
import { CubeGeometry, FaceStickers, FaceRotations, rotateFaces } from "./geometry";
import { Vec3, transScale, scale, translate, radians2Degrees } from "../math";
import { Face, AllFaces } from "./constants";
import { ICubeOptions } from "./options";
import { StickerDefinition, Arrow } from "./arrow";

/**
 * Utility methods for rendering cube geometry using svg.js
 */

// Rotation vectors to track visibility of each face
const defaultFaceRotations: FaceRotations = {
  [Face.U]: [0, -1, 0],
  [Face.R]: [1, 0, 0],
  [Face.F]: [0, 0, -1],
  [Face.D]: [0, 1, 1],
  [Face.L]: [-1, 0, 0],
  [Face.B]: [0, 0, 1]
};

export function renderCube(containerId: string, geometry: CubeGeometry, options: ICubeOptions) {
  let faceRotations = rotateFaces(defaultFaceRotations, options.viewportRotations);
  let renderOrder = getRenderOrder(faceRotations);
  let svg = SVG(containerId).size(options.width, options.height);
  svg.viewbox(
    options.viewbox.x,
    options.viewbox.y,
    options.viewbox.width,
    options.viewbox.height
  );

  let hiddenFaces = renderOrder.filter(face => !faceVisible(face, faceRotations));
  let visibleFaces = renderOrder.filter(face => faceVisible(face, faceRotations));

  renderBackground(svg, options);
  // Render hidden faces if cube color has transparency
  if (options.cubeOpacity < 100) {
    let cubeOutlineGroup = getCubeOutlineGroup(svg, options);
    hiddenFaces.forEach(face => {
      renderFaceStickers(svg, face, geometry[face], options);
      renderCubeOutline(cubeOutlineGroup, geometry[face], options);
    })
  }

  let cubeOutlineGroup = getCubeOutlineGroup(svg, options);
  visibleFaces.forEach(face => {
    renderCubeOutline(cubeOutlineGroup, geometry[face], options);
    renderFaceStickers(svg, face, geometry[face], options);
  });

  if (options.view === 'plan') {
    let ollGroup = getOllLayerGroup(svg, options);
    [Face.R, Face.F, Face.L, Face.B].forEach(face => {
      renderOLLStickers(ollGroup,face, geometry[face], faceRotations, options);
    });
  }

  let arrowGroup = getArrowGroup(svg, geometry[0].length - 1);

  if (Array.isArray(options.arrows)) {
    options.arrows.forEach(arrow => {
      renderArrow(arrowGroup, geometry, arrow, null);
    });
  }
}

/**
 * Determines face render order based on z position. Faces further away
 * will render first so anything closer will be drawn on top.
 */
function getRenderOrder(faceRotations: FaceRotations): Face[] {
  let renderOrder = [...AllFaces].sort((a: Face, b: Face) => {
    return faceRotations[b][2] - faceRotations[a][2]
  });
  return renderOrder;
}

function renderBackground(svg: SVG.Doc, options: ICubeOptions) {
  let backgroundSvg = svg.rect(options.viewbox.width, options.viewbox.height);
  backgroundSvg.x(options.viewbox.x);
  backgroundSvg.y(options.viewbox.y);
  backgroundSvg.fill({
    color: options.backgroundColor
  });
}

function faceVisible(face: Face, rotations: FaceRotations) {
  return rotations[face][2] < -0.105;
}

function getCubeOutlineGroup(svg: SVG.Doc, options: ICubeOptions): SVG.G {
  let cubeOutlineGroup = svg.group();
  cubeOutlineGroup.opacity(options.cubeOpacity/100)
  cubeOutlineGroup.attr({
    'stroke-width': '0.1',
    'stroke-linejoin': 'round',
  })
  return cubeOutlineGroup
}

function getOllLayerGroup(svg: SVG.Doc, options: ICubeOptions): SVG.G {
  let group = svg.group();
  group.opacity(options.stickerOpacity/100);
  group.attr({
    'stroke-opacity': '1',
    'stroke-width': 0.02,
    'stroke-linejoin': 'round'
  });
  return group;
}

function getArrowGroup(svg: SVG.Doc, cubeSize: number): SVG.G {
  let arrowGroup = svg.group();
  arrowGroup.attr({
    'opacity': 1,
    'stroke-opacity': 1,
    'stroke-width': (.12 / cubeSize),
    'stroke-linecap': 'round'
  });
  return arrowGroup;
}

function renderCubeOutline(svg: SVG.G, face: FaceStickers, options: ICubeOptions): SVG.Polygon {
  const cubeSize =  face.length - 1;
  const width = options.outlineWidth;
  let outlinePoints = [
    [face[0][0][0] * width, face[0][0][1] * width],
    [face[cubeSize][0][0] * width, face[cubeSize][0][1] * width],
    [face[cubeSize][cubeSize][0] * width, face[cubeSize][cubeSize][1] * width],
    [face[0][cubeSize][0] * width, face[0][cubeSize][1] * width],
  ];
  let polygon = svg.polygon(outlinePoints);
  polygon.fill(options.cubeColor);
  polygon.stroke(options.cubeColor);
  return polygon
}

function renderFaceStickers(svg: SVG.Doc, face: Face, stickers: FaceStickers, options: ICubeOptions): SVG.G {
  const cubeSize = stickers.length -1;
  let group = svg.group();
  group.opacity(options.stickerOpacity/100);
  group.attr({
    'stoke-opacity': '0.5',
    'stroke-width': options.strokeWidth,
    'stroke-linejoin': 'round'
  })

  for (let i = 0; i < cubeSize; i++) {
    for (let j = 0; j < cubeSize; j++) {
      let centerPoint: Vec3 = [
        (stickers[j][i][0] + stickers[j+1][i+1][0])/2,
        (stickers[j][i][1] + stickers[j+1][i+1][1])/2,
        0
      ];

      // Scale points in towards centre
      let p1 = transScale(stickers[j][i], centerPoint, .85);
      let p2 = transScale(stickers[j+1][i], centerPoint, .85);
      let p3 = transScale(stickers[j+1][i+1], centerPoint, .85);
      let p4 = transScale(stickers[j][i+1], centerPoint, .85);

      let color = getStickerColor(face, i, j, options);
      renderSticker(group, p1, p2, p3, p4, color, options.cubeColor);
    }
  }

  return group;
}

function renderSticker(g: SVG.G, p1: Vec3, p2: Vec3, p3: Vec3, p4: Vec3, stickerColor: string, cubeColor: string): SVG.Polygon {
  let stickerPoints = [
    [p1[0], p1[1]],
    [p2[0], p2[1]],
    [p3[0], p3[1]],
    [p4[0], p4[1]],
  ];
  let polygon = g.polygon(stickerPoints);
  polygon.fill(stickerColor);
  polygon.stroke(cubeColor);
  return polygon;
}

/**
 * Starting with U, stickers are numbered from 
 * their face starting with the top left corner
 * sticker.
 * 
 * U Face
 * 1 | 2 | 3
 * ----------
 * 4 | 5 | 6
 * ----------
 * 7 | 8 | 9
 * 
 * And so on for faces R, F, D, L, B.
 * So R's top left corner for a 3x3 cube would be # 10
 * 
 * An individual sticker's color is obtained by indexing 
 * into the array of sticker colors by the number the sticker is
 */
function getStickerColor(face: Face, row: number, col: number, options: ICubeOptions): string {
  if (!Array.isArray(options.stickerColors)) {
    return options.colorScheme[face] || ColorName.Black;
  }

  const faceIndex = AllFaces.indexOf(face);
  const stickerNumber = (row * options.cubeSize) + col;
  const colorIndex = faceIndex * (options.cubeSize * options.cubeSize) + stickerNumber;

  if (options.stickerColors.length <= colorIndex) {
    return ColorName.Black;
  }

  return options.stickerColors[colorIndex];
}

// Renders the top rim of the R U L and B faces out from side of cube
export function renderOLLStickers(group: SVG.G, face: Face, stickers: FaceStickers, rotations: FaceRotations, options: ICubeOptions) {
  // Translation vector, to move faces out
  let v1 = scale(rotations[face], 0);
  let v2 = scale(rotations[face], .2);
  for (let i = 0; i < options.cubeSize; i++) {
    // find center point of sticker
    const centerPoint: Vec3 = [
      (stickers[i][0][0] + stickers[i+1][1][0])/2,
      (stickers[i][0][1] + stickers[i+1][1][1])/2,
      0
    ];
    let p1 = translate(transScale(stickers[i][0], centerPoint, .94), v1);
    let p2 = translate(transScale(stickers[i+1][0], centerPoint, .94), v1);
    let p3 = translate(transScale(stickers[i+1][1], centerPoint, .94), v2);
    let p4 = translate(transScale(stickers[i][1], centerPoint, .94), v2);

    renderSticker(group, p1, p2, p3, p4, getStickerColor(face, 0, i, options), options.cubeColor)
  }
}

/**
 * Generates svg for an arrow pointing from sticker s1 to s2
 */
export function renderArrow(group: SVG.G, geometry: CubeGeometry, arrow: Arrow, sv: Vec3) {
  let cubeSize = geometry[0].length - 1;

  // Find center point for each facelet
  let p1y = Math.floor(arrow.s1.n / cubeSize);
  let p1x = arrow.s1.n % cubeSize;
  let p1: Vec3 = [
    (geometry[arrow.s1.face][p1x][p1y][0] + geometry[arrow.s1.face][p1x + 1][p1y + 1][0])/2,
    (geometry[arrow.s1.face][p1x][p1y][1] + geometry[arrow.s1.face][p1x + 1][p1y + 1][1])/2,
    0
  ];
  
  let p2y = Math.floor(arrow.s2.n / cubeSize);
  let p2x = arrow.s2.n % cubeSize;
  let p2: Vec3 = [
    (geometry[arrow.s1.face][p2x][p2y][0] + geometry[arrow.s1.face][p2x + 1][p2y + 1][0])/2,
    (geometry[arrow.s1.face][p2x][p2y][1] + geometry[arrow.s1.face][p2x + 1][p2y + 1][1])/2,
    0
  ];

  // Find midpoint between p1 and p2
  let center: Vec3 = [
    (p1[0] + p2[0])/2,
    (p1[1] + p2[1])/2,
    0
  ];

  // Shorten arrows towards midpoint according to config
  p1 = transScale(p1, center, arrow.scale/10);
  p2 = transScale(p2, center, arrow.scale/10);

  if (sv) {
    // TODO 
  }

  // Calculate arrow rotation
  let rotation = p1[1] > p2[1] ? 270 : 90;
  if (p2[0] - p1[0] != 0) {
    rotation = radians2Degrees(Math.atan((p2[1]-p1[1])/(p2[0]-p1[0])));
    rotation = (p1[0] > p2[0]) ? rotation + 180 : rotation;
  }

  // Draw line
  let lineSvg = group.path(`M ${p1[0]},${p1[1]} L ${p2[0]},${p2[1]}`);
  lineSvg.fill('none');
  lineSvg.stroke({
    color: arrow.color,
    opacity: 1
  });

  // Draw arrow head
  let headSvg = group.path('M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z');
  headSvg.attr({
    transform: `translate(${p2[0]},${p2[1]}) scale(${.033/cubeSize}) rotate(${rotation})`
  });

  headSvg.style({
    fill: arrow.color
  });
  headSvg.attr({
    'stroke-width': 0,
    'stroke-linejoin': 'round'
  });
}