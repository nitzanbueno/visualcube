import React, { ComponentType, FC } from 'react'
import { Svg, Polygon, G, Path, Rect } from 'react-native-svg'
import { ColorName, FaceletToFace, FaceletToColor, ColorCode } from '../constants'
import { CubeGeometry, FaceStickers, FaceRotations, rotateFaces } from './geometry'
import { Vec3, transScale, scale, translate, radians2Degrees } from '../math'
import { Face, AllFaces } from './constants'
import { ICubeOptions } from './options'
import { Arrow } from './models/arrow'
import { parseArrows } from './parsing/arrow'

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
  [Face.B]: [0, 0, 1],
}

function viewBox(x: number, y: number, width: number, height: number) {
  return `${x} ${y} ${width} ${height}`
}

function polygonPoints(points: number[][]) {
  return points.map(point => point.join(',')).join(' ')
}

/**
 * Determines face render order based on z position. Faces further away
 * will render first so anything closer will be drawn on top.
 */
function getRenderOrder(faceRotations: FaceRotations): Face[] {
  let renderOrder = [...AllFaces].sort((a: Face, b: Face) => {
    return faceRotations[b][2] - faceRotations[a][2]
  })
  return renderOrder
}

const Background: FC<{ options: ICubeOptions }> = ({ options }) => {
  let fill: string
  let fillOpacity: number | undefined = undefined

  if (!options.backgroundColor) {
    fill = 'none'
    fillOpacity = 0
  } else {
    fill = options.backgroundColor
  }

  return <Rect {...options.viewbox} fill={fill} fillOpacity={fillOpacity} />
}

function faceVisible(face: Face, rotations: FaceRotations) {
  return rotations[face][2] < -0.105
}

const CubeOutlineGroup: FC<{ options: ICubeOptions }> = ({ options, children }) => {
  return <G opacity={options.cubeOpacity / 100} strokeWidth={0.1} strokeLinejoin="round" children={children} />
}

const OllLayerGroup: FC<{ options: ICubeOptions }> = ({ options, children }) => {
  return (
    <G
      opacity={options.stickerOpacity / 100}
      strokeOpacity={1}
      strokeWidth={0.02}
      strokeLinejoin="round"
      children={children}
    />
  )
}

const ArrowGroup: FC<{ cubeSize: number }> = ({ cubeSize, children }) => {
  return <G opacity={1} strokeOpacity={1} strokeWidth={0.12 / cubeSize} strokeLinecap="round" children={children} />
}

const CubeOutline: FC<{ face: FaceStickers; options: ICubeOptions }> = ({ face, options }) => {
  const cubeSize = face.length - 1
  const width = options.outlineWidth
  let outlinePoints = [
    [face[0][0][0] * width, face[0][0][1] * width],
    [face[cubeSize][0][0] * width, face[cubeSize][0][1] * width],
    [face[cubeSize][cubeSize][0] * width, face[cubeSize][cubeSize][1] * width],
    [face[0][cubeSize][0] * width, face[0][cubeSize][1] * width],
  ]

  return <Polygon fill={options.cubeColor} stroke={options.cubeColor} points={polygonPoints(outlinePoints)} />
}

export const FaceStickersSvg: FC<{ face: Face; stickers: FaceStickers; options: ICubeOptions }> = ({
  face,
  stickers,
  options,
}) => {
  const cubeSize = stickers.length - 1

  const stickerElements: JSX.Element[] = []

  for (let i = 0; i < cubeSize; i++) {
    for (let j = 0; j < cubeSize; j++) {
      let centerPoint: Vec3 = [
        (stickers[j][i][0] + stickers[j + 1][i + 1][0]) / 2,
        (stickers[j][i][1] + stickers[j + 1][i + 1][1]) / 2,
        0,
      ]

      // Scale points in towards centre
      let p1 = transScale(stickers[j][i], centerPoint, 0.85)
      let p2 = transScale(stickers[j + 1][i], centerPoint, 0.85)
      let p3 = transScale(stickers[j + 1][i + 1], centerPoint, 0.85)
      let p4 = transScale(stickers[j][i + 1], centerPoint, 0.85)

      let color = getStickerColor(face, i, j, options)
      if (color !== ColorName.Transparent) {
        stickerElements.push(
          <Sticker key={`${i},${j}`} {...{ p1, p2, p3, p4 }} stickerColor={color} cubeColor={options.cubeColor} />
        )
      }
    }
  }

  return (
    <G
      opacity={options.stickerOpacity / 100}
      strokeOpacity={0.5}
      strokeWidth={options.strokeWidth}
      strokeLinejoin="round"
      children={stickerElements}
    />
  )
}

const Sticker: ComponentType<{
  p1: Vec3
  p2: Vec3
  p3: Vec3
  p4: Vec3
  stickerColor: string
  cubeColor: string
}> = props => {
  const { p1, p2, p3, p4, stickerColor, cubeColor } = props
  let stickerPoints = [[p1[0], p1[1]], [p2[0], p2[1]], [p3[0], p3[1]], [p4[0], p4[1]]]

  return <Polygon fill={stickerColor} stroke={cubeColor} points={polygonPoints(stickerPoints)} />
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
  const faceIndex = AllFaces.indexOf(face)
  const stickerNumber = row * options.cubeSize + col
  const colorIndex = faceIndex * (options.cubeSize * options.cubeSize) + stickerNumber

  if (!Array.isArray(options.facelets) && Array.isArray(options.stickerColors)) {
    if (options.stickerColors.length <= colorIndex) {
      return ColorName.Black
    }

    return options.stickerColors[colorIndex]
  } else if (Array.isArray(options.facelets)) {
    if (options.facelets.length <= colorIndex) {
      return ColorCode.DarkGray
    }

    let fd = options.facelets[colorIndex]
    if (FaceletToFace[fd] != null) {
      const face = FaceletToFace[fd]
      return options.colorScheme[face]
    }

    return FaceletToColor[fd] || ColorCode.DarkGray
  } else {
    return options.colorScheme[face] || ColorName.Black
  }
}

// Renders the top rim of the R U L and B faces out from side of cube
export const OLLStickers: FC<{
  face: Face
  stickers: FaceStickers
  rotations: FaceRotations
  options: ICubeOptions
}> = props => {
  const { face, stickers, rotations, options } = props

  const stickerElements = []

  // Translation vector, to move faces out
  let v1 = scale(rotations[face], 0)
  let v2 = scale(rotations[face], 0.2)
  for (let i = 0; i < options.cubeSize; i++) {
    // find center point of sticker
    const centerPoint: Vec3 = [
      (stickers[i][0][0] + stickers[i + 1][1][0]) / 2,
      (stickers[i][0][1] + stickers[i + 1][1][1]) / 2,
      0,
    ]
    let p1 = translate(transScale(stickers[i][0], centerPoint, 0.94), v1)
    let p2 = translate(transScale(stickers[i + 1][0], centerPoint, 0.94), v1)
    let p3 = translate(transScale(stickers[i + 1][1], centerPoint, 0.94), v2)
    let p4 = translate(transScale(stickers[i][1], centerPoint, 0.94), v2)

    let stickerColor = getStickerColor(face, 0, i, options)

    if (stickerColor !== ColorName.Transparent) {
      stickerElements.push(<Sticker key={i} {...{ p1, p2, p3, p4, stickerColor }} cubeColor={options.cubeColor} />)
    }
  }

  return <>{stickerElements}</>
}

/**
 * Generates svg for an arrow pointing from sticker s1 to s2
 */
export const ArrowSvg: FC<{ geometry: CubeGeometry; arrow: Arrow }> = ({ geometry, arrow }) => {
  let cubeSize = geometry[0].length - 1

  // Find center point for each facelet
  let p1y = Math.floor(arrow.s1.n / cubeSize)
  let p1x = arrow.s1.n % cubeSize
  let p1: Vec3 = [
    (geometry[arrow.s1.face][p1x][p1y][0] + geometry[arrow.s1.face][p1x + 1][p1y + 1][0]) / 2,
    (geometry[arrow.s1.face][p1x][p1y][1] + geometry[arrow.s1.face][p1x + 1][p1y + 1][1]) / 2,
    0,
  ]

  let p2y = Math.floor(arrow.s2.n / cubeSize)
  let p2x = arrow.s2.n % cubeSize
  let p2: Vec3 = [
    (geometry[arrow.s1.face][p2x][p2y][0] + geometry[arrow.s1.face][p2x + 1][p2y + 1][0]) / 2,
    (geometry[arrow.s1.face][p2x][p2y][1] + geometry[arrow.s1.face][p2x + 1][p2y + 1][1]) / 2,
    0,
  ]

  // Find midpoint between p1 and p2
  let center: Vec3 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, 0]

  // Shorten arrows towards midpoint according to config
  p1 = transScale(p1, center, arrow.scale / 10)
  p2 = transScale(p2, center, arrow.scale / 10)

  let p3: Vec3
  if (arrow.s3) {
    let p3y = Math.floor(arrow.s3.n / cubeSize)
    let p3x = arrow.s3.n % cubeSize
    p3 = [
      (geometry[arrow.s1.face][p3x][p3y][0] + geometry[arrow.s1.face][p3x + 1][p3y + 1][0]) / 2,
      (geometry[arrow.s1.face][p3x][p3y][1] + geometry[arrow.s1.face][p3x + 1][p3y + 1][1]) / 2,
      0,
    ]
    p3 = transScale(p3, center, arrow.influence / 5)
  }

  // Calculate arrow rotation
  let p_ = p3 ? p3 : p1
  let rotation = p_[1] > p2[1] ? 270 : 90
  if (p2[0] - p_[0] != 0) {
    rotation = radians2Degrees(Math.atan((p2[1] - p_[1]) / (p2[0] - p_[0])))
    rotation = p_[0] > p2[0] ? rotation + 180 : rotation
  }

  // Draw line
  let lineSvg = (
    <Path
      d={`M ${p1[0]},${p1[1]} ${p3 ? 'Q ' + p3[0] + ',' + p3[1] : 'L'} ${p2[0]},${p2[1]}`}
      fill="none"
      stroke={arrow.color}
      strokeOpacity={1}
    />
  )

  // Draw arrow head
  let headSvg = (
    <Path
      d="M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z"
      translate={[p2[0], p2[1]]}
      scale={0.033 / cubeSize}
      rotation={rotation}
      fill={arrow.color}
      strokeWidth={0}
      strokeLinejoin="round"
    />
  )

  return (
    <>
      {lineSvg}
      {headSvg}
    </>
  )
}

export const Cube: FC<{ geometry: CubeGeometry; options: ICubeOptions }> = ({ geometry, options }) => {
  let faceRotations = rotateFaces(defaultFaceRotations, options.viewportRotations)
  let renderOrder = getRenderOrder(faceRotations)

  let hiddenFaces = renderOrder.filter(face => !faceVisible(face, faceRotations))
  let visibleFaces = renderOrder.filter(face => faceVisible(face, faceRotations))

  let arrowDefinitions: Arrow[] = []

  if (Array.isArray(options.arrows)) {
    arrowDefinitions = options.arrows
  } else if (typeof options.arrows === 'string') {
    arrowDefinitions = parseArrows(options.arrows)
  }

  return (
    <Svg
      width={options.width}
      height={options.height}
      viewBox={viewBox(options.viewbox.x, options.viewbox.y, options.viewbox.width, options.viewbox.height)}
    >
      <Background options={options} />
      {options.cubeOpacity < 100 && (
        <>
          <CubeOutlineGroup options={options}>
            {hiddenFaces.map(face => (
              <CubeOutline face={geometry[face]} options={options} />
            ))}
          </CubeOutlineGroup>
          {hiddenFaces.map(face => (
            <FaceStickersSvg face={face} stickers={geometry[face]} options={options} />
          ))}
        </>
      )}

      <CubeOutlineGroup options={options}>
        {visibleFaces.map(face => (
          <CubeOutline face={geometry[face]} options={options} />
        ))}
      </CubeOutlineGroup>

      {visibleFaces.map(face => (
        <FaceStickersSvg face={face} stickers={geometry[face]} options={options} />
      ))}

      {options.view === 'plan' && (
        <OllLayerGroup options={options}>
          {[Face.R, Face.F, Face.L, Face.B].map(face => (
            <OLLStickers face={face} stickers={geometry[face]} rotations={faceRotations} options={options} />
          ))}
        </OllLayerGroup>
      )}

      <ArrowGroup cubeSize={geometry[0].length - 1}>
        {arrowDefinitions.map(arrow => (
          <ArrowSvg geometry={geometry} arrow={arrow} />
        ))}
      </ArrowGroup>
    </Svg>
  )
}
