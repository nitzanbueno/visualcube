import React, { FC } from 'react'
import { makeCubeGeometry } from './cube/geometry'
import { Axis } from './math'
import { Cube } from './cube/drawing';
import { ICubeOptions } from './cube/options'
import { DefaultColorScheme } from './cube/constants'
import { makeStickerColors } from './cube/stickers'
import { ColorName } from './constants'
import { parseOptions } from './cube/parsing/options'
import { parseFaceletDefinitions } from './cube/parsing/faceletDefinitions'

const defaultOptions: ICubeOptions = {
  cubeSize: 3,
  width: 128,
  height: 128,
  viewportRotations: [[Axis.Y, 45], [Axis.X, -34]],
  colorScheme: DefaultColorScheme,
  cubeColor: ColorName.Black,
  cubeOpacity: 100,
  stickerOpacity: 100,
  dist: 5,
  outlineWidth: 0.94,
  strokeWidth: 0,
  viewbox: {
    x: -0.9,
    y: -0.9,
    width: 1.8,
    height: 1.8,
  },
}

export const CubeSvg: FC<{extraOptions?: any}> = (props) => {
  let options = getOptions(defaultOptions, props.extraOptions || {})
  let geometry = makeCubeGeometry(options)
  options.stickerColors = makeStickerColors(options)

  return <Cube geometry={geometry} options={options} />
}

function getOptions(defaultOptions: ICubeOptions, extraOptions: string | ICubeOptions): ICubeOptions {
  let parsedOptions: ICubeOptions
  if (typeof extraOptions === 'string') {
    parsedOptions = parseOptions(extraOptions)
  } else {
    parsedOptions = extraOptions
  }

  if (typeof parsedOptions.facelets === 'string') {
    parsedOptions.facelets = parseFaceletDefinitions(parsedOptions.facelets)
  }

  return { ...defaultOptions, ...parsedOptions }
}
