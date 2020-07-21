function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNativeSvg = require('react-native-svg');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ColorNameToCode, _ColorAbbreviationToC, _FaceletToFace, _FaceletToColor;

var ColorCode;

(function (ColorCode) {
  ColorCode["Black"] = "#000000";
  ColorCode["DarkGray"] = "#404040";
  ColorCode["Gray"] = "#808080";
  ColorCode["Silver"] = "#BFBFBF";
  ColorCode["White"] = "#FFFFFF";
  ColorCode["Yellow"] = "#FEFE00";
  ColorCode["Red"] = "#EE0000";
  ColorCode["Orange"] = "#FFA100";
  ColorCode["Blue"] = "#0000F2";
  ColorCode["Green"] = "#00D800";
  ColorCode["Purple"] = "#A83DD9";
  ColorCode["Pink"] = "#F33D7B";
  ColorCode["Transparent"] = "transparent";
})(ColorCode || (ColorCode = {}));

var ColorName;

(function (ColorName) {
  ColorName["Black"] = "black";
  ColorName["DarkGray"] = "darkGray";
  ColorName["Gray"] = "gray";
  ColorName["Silver"] = "silver";
  ColorName["White"] = "white";
  ColorName["Yellow"] = "yellow";
  ColorName["Red"] = "red";
  ColorName["Orange"] = "orange";
  ColorName["Blue"] = "blue";
  ColorName["Green"] = "green";
  ColorName["Purple"] = "purple";
  ColorName["Pink"] = "pink";
  ColorName["Transparent"] = "transparent";
})(ColorName || (ColorName = {}));

var ColorAbbreviation;

(function (ColorAbbreviation) {
  ColorAbbreviation["Black"] = "n";
  ColorAbbreviation["DarkGray"] = "d";
  ColorAbbreviation["Gray"] = "l";
  ColorAbbreviation["Silver"] = "s";
  ColorAbbreviation["White"] = "w";
  ColorAbbreviation["Yellow"] = "y";
  ColorAbbreviation["Red"] = "r";
  ColorAbbreviation["Orange"] = "o";
  ColorAbbreviation["Blue"] = "b";
  ColorAbbreviation["Green"] = "g";
  ColorAbbreviation["Purple"] = "m";
  ColorAbbreviation["Pink"] = "p";
  ColorAbbreviation["Transparent"] = "t";
})(ColorAbbreviation || (ColorAbbreviation = {}));

var FaceletDefinition;

(function (FaceletDefinition) {
  FaceletDefinition["Up"] = "u";
  FaceletDefinition["Down"] = "d";
  FaceletDefinition["Left"] = "l";
  FaceletDefinition["Right"] = "r";
  FaceletDefinition["Back"] = "b";
  FaceletDefinition["Front"] = "f";
  FaceletDefinition["Transparent"] = "t";
  FaceletDefinition["Oriented"] = "o";
  FaceletDefinition["Blank"] = "n";
})(FaceletDefinition || (FaceletDefinition = {}));

var ColorNameToCode = (_ColorNameToCode = {}, _ColorNameToCode[ColorName.Black] = ColorCode.Black, _ColorNameToCode[ColorName.DarkGray] = ColorCode.DarkGray, _ColorNameToCode[ColorName.Gray] = ColorCode.Gray, _ColorNameToCode[ColorName.Silver] = ColorCode.Silver, _ColorNameToCode[ColorName.White] = ColorCode.White, _ColorNameToCode[ColorName.Yellow] = ColorCode.Yellow, _ColorNameToCode[ColorName.Red] = ColorCode.Red, _ColorNameToCode[ColorName.Orange] = ColorCode.Orange, _ColorNameToCode[ColorName.Blue] = ColorCode.Blue, _ColorNameToCode[ColorName.Green] = ColorCode.Green, _ColorNameToCode[ColorName.Purple] = ColorCode.Purple, _ColorNameToCode[ColorName.Pink] = ColorCode.Pink, _ColorNameToCode);
var ColorAbbreviationToCode = (_ColorAbbreviationToC = {}, _ColorAbbreviationToC[ColorAbbreviation.Black] = ColorCode.Black, _ColorAbbreviationToC[ColorAbbreviation.DarkGray] = ColorCode.DarkGray, _ColorAbbreviationToC[ColorAbbreviation.Gray] = ColorCode.Gray, _ColorAbbreviationToC[ColorAbbreviation.Silver] = ColorCode.Silver, _ColorAbbreviationToC[ColorAbbreviation.White] = ColorCode.White, _ColorAbbreviationToC[ColorAbbreviation.Yellow] = ColorCode.Yellow, _ColorAbbreviationToC[ColorAbbreviation.Red] = ColorCode.Red, _ColorAbbreviationToC[ColorAbbreviation.Orange] = ColorCode.Orange, _ColorAbbreviationToC[ColorAbbreviation.Blue] = ColorCode.Blue, _ColorAbbreviationToC[ColorAbbreviation.Green] = ColorCode.Green, _ColorAbbreviationToC[ColorAbbreviation.Purple] = ColorCode.Purple, _ColorAbbreviationToC[ColorAbbreviation.Pink] = ColorCode.Pink, _ColorAbbreviationToC[ColorAbbreviation.Transparent] = ColorCode.Transparent, _ColorAbbreviationToC);
var FaceletAbbreviateToDefinition = {
  u: FaceletDefinition.Up,
  f: FaceletDefinition.Front,
  r: FaceletDefinition.Right,
  d: FaceletDefinition.Down,
  l: FaceletDefinition.Left,
  b: FaceletDefinition.Back,
  t: FaceletDefinition.Transparent,
  o: FaceletDefinition.Oriented,
  n: FaceletDefinition.Blank
};
var FaceletToFace = (_FaceletToFace = {}, _FaceletToFace[FaceletDefinition.Up] = 0, _FaceletToFace[FaceletDefinition.Down] = 3, _FaceletToFace[FaceletDefinition.Left] = 4, _FaceletToFace[FaceletDefinition.Right] = 1, _FaceletToFace[FaceletDefinition.Front] = 2, _FaceletToFace[FaceletDefinition.Back] = 5, _FaceletToFace);
var FaceletToColor = (_FaceletToColor = {}, _FaceletToColor[FaceletDefinition.Oriented] = ColorName.Gray, _FaceletToColor[FaceletDefinition.Blank] = ColorCode.DarkGray, _FaceletToColor[FaceletDefinition.Transparent] = ColorName.Transparent, _FaceletToColor);

var _DefaultColorScheme, _JapaneseColorScheme;
var Face;

(function (Face) {
  Face[Face["U"] = 0] = "U";
  Face[Face["R"] = 1] = "R";
  Face[Face["F"] = 2] = "F";
  Face[Face["D"] = 3] = "D";
  Face[Face["L"] = 4] = "L";
  Face[Face["B"] = 5] = "B";
})(Face || (Face = {}));

var AllFaces = [Face.U, Face.R, Face.F, Face.D, Face.L, Face.B];
var DefaultColorScheme = (_DefaultColorScheme = {}, _DefaultColorScheme[Face.U] = ColorCode.Yellow, _DefaultColorScheme[Face.R] = ColorCode.Red, _DefaultColorScheme[Face.F] = ColorCode.Blue, _DefaultColorScheme[Face.D] = ColorCode.White, _DefaultColorScheme[Face.L] = ColorCode.Orange, _DefaultColorScheme[Face.B] = ColorCode.Green, _DefaultColorScheme);
var JapaneseColorScheme = (_JapaneseColorScheme = {}, _JapaneseColorScheme[Face.U] = ColorCode.Blue, _JapaneseColorScheme[Face.R] = ColorCode.Orange, _JapaneseColorScheme[Face.F] = ColorCode.Green, _JapaneseColorScheme[Face.D] = ColorCode.White, _JapaneseColorScheme[Face.L] = ColorCode.Red, _JapaneseColorScheme[Face.B] = ColorCode.Yellow, _JapaneseColorScheme);
var AlgorithmUnit;

(function (AlgorithmUnit) {
  AlgorithmUnit["F"] = "F";
  AlgorithmUnit["U"] = "U";
  AlgorithmUnit["R"] = "R";
  AlgorithmUnit["L"] = "L";
  AlgorithmUnit["D"] = "D";
  AlgorithmUnit["B"] = "B";
  AlgorithmUnit["M"] = "M";
  AlgorithmUnit["E"] = "E";
  AlgorithmUnit["S"] = "S";
  AlgorithmUnit["X"] = "x";
  AlgorithmUnit["Y"] = "y";
  AlgorithmUnit["Z"] = "z";
})(AlgorithmUnit || (AlgorithmUnit = {}));

var AxisSymbolToAxis = {
  x: 0
  /* X */
  ,
  y: 1
  /* Y */
  ,
  z: 2
  /* Z */

};
var possibleMoves = [AlgorithmUnit.F, AlgorithmUnit.U, AlgorithmUnit.R, AlgorithmUnit.L, AlgorithmUnit.D, AlgorithmUnit.B, AlgorithmUnit.M, AlgorithmUnit.E, AlgorithmUnit.S, AlgorithmUnit.X, AlgorithmUnit.Y, AlgorithmUnit.Z];
var cubeRotations = [AlgorithmUnit.X, AlgorithmUnit.Y, AlgorithmUnit.Z];
var TurnAbbreviation;

(function (TurnAbbreviation) {
  TurnAbbreviation["Clockwise"] = "";
  TurnAbbreviation["CounterClockwise"] = "'";
  TurnAbbreviation["Double"] = "2";
})(TurnAbbreviation || (TurnAbbreviation = {}));

var Masking;

(function (Masking) {
  Masking["FL"] = "fl";
  Masking["F2L"] = "f2l";
  Masking["LL"] = "ll";
  Masking["CLL"] = "cll";
  Masking["ELL"] = "ell";
  Masking["OLL"] = "oll";
  Masking["OCLL"] = "ocll";
  Masking["OELL"] = "oell";
  Masking["COLL"] = "coll";
  Masking["OCELL"] = "ocell";
  Masking["WV"] = "wv";
  Masking["VH"] = "vh";
  Masking["ELS"] = "els";
  Masking["CLS"] = "cls";
  Masking["CMLL"] = "cmll";
  Masking["CROSS"] = "cross";
  Masking["F2L3"] = "f2l_3";
  Masking["F2L2"] = "f2l_2";
  Masking["F2LSM"] = "f2l_sm";
  Masking["F2L1"] = "f2l_1";
  Masking["F2B"] = "f2b";
  Masking["LINE"] = "line";
})(Masking || (Masking = {}));

/**
 * Methods for manipulating points in 3d space (Vec3)
 */
var Axis;

(function (Axis) {
  Axis[Axis["X"] = 0] = "X";
  Axis[Axis["Y"] = 1] = "Y";
  Axis[Axis["Z"] = 2] = "Z";
})(Axis || (Axis = {}));

function makeMatrix(rows, cols) {
  var matrix = [];

  for (var r = 0; r < rows; r++) {
    matrix[r] = [];

    for (var c = 0; c < cols; c++) {
      matrix[r][c] = null;
    }
  }

  return matrix;
}
function translate(pos, v) {
  return pos.map(function (value, index) {
    return value + v[index];
  });
}
function scale(pos, scalar) {
  return pos.map(function (v) {
    return v * scalar;
  });
} // Scale a point relative to position vector

function transScale(pos, v, scalar) {
  // Translate each facelet to cf
  var iv = v.map(function (x) {
    return -x;
  });
  return translate(scale(translate(pos, iv), scalar), v);
}
function rotate(pos, axis, radians) {
  var newPosition = [].concat(pos);

  switch (axis) {
    case Axis.X:
      newPosition[2] = pos[2] * Math.cos(radians) - pos[1] * Math.sin(radians);
      newPosition[1] = pos[2] * Math.sin(radians) + pos[1] * Math.cos(radians);
      break;

    case Axis.Y:
      newPosition[0] = pos[0] * Math.cos(radians) + pos[2] * Math.sin(radians);
      newPosition[2] = -pos[0] * Math.sin(radians) + pos[2] * Math.cos(radians);
      break;

    case Axis.Z:
      newPosition[0] = pos[0] * Math.cos(radians) - pos[1] * Math.sin(radians);
      newPosition[1] = pos[0] * Math.sin(radians) + pos[1] * Math.cos(radians);
      break;
  }

  return newPosition;
}
function project(pos, d) {
  return [pos[0] * d / pos[2], pos[1] * d / pos[2], pos[2]];
}
function radians2Degrees(radians) {
  return radians * 180 / Math.PI;
}

/**
 * Utlity Methods for creating 2D coodinates for svg polygons
 */
/**
 * Applies set of rotations to all face rotation vectors.
 */

function rotateFaces(faceRotations, rotations) {
  return AllFaces.reduce(function (acc, face) {
    rotations.forEach(function (rotation) {
      if (!acc[face]) {
        acc[face] = [].concat(faceRotations[face]);
      }

      acc[face] = rotate(acc[face], rotation[0], Math.PI * rotation[1] / 180);
    });
    return acc;
  }, {});
}
function makeStickerPosition(face, cubeSize, x, y) {
  switch (face) {
    case Face.U:
      return [x, 0, cubeSize - y];

    case Face.R:
      return [cubeSize, y, x];

    case Face.F:
      return [x, y, 0];

    case Face.D:
      return [x, cubeSize, y];

    case Face.L:
      return [0, y, cubeSize - x];

    case Face.B:
      return [cubeSize - x, y, cubeSize];

    default:
      throw new Error("Unknown cube face: '" + face + "'");
  }
}
/**
 * Creates 2D coordinates for stickers of a given face of the cube.
 */

function makeFaceStickers(face, options) {
  var stickers = makeMatrix(options.cubeSize + 1, options.cubeSize + 1);

  for (var row = 0; row <= options.cubeSize; row++) {
    var _loop = function _loop(col) {
      var sticker = makeStickerPosition(face, options.cubeSize, row, col); // Now scale and tranform point to ensure size/pos independent of dim

      var centerTranslation = [-options.cubeSize / 2, -options.cubeSize / 2, -options.cubeSize / 2];
      sticker = translate(sticker, centerTranslation);
      sticker = scale(sticker, 1 / options.cubeSize); // Rotate cube as per perameter settings

      options.viewportRotations.forEach(function (rotation) {
        sticker = rotate(sticker, rotation[0], Math.PI * rotation[1] / 180);
      }); // Move cube away from viewer

      sticker = translate(sticker, [0, 0, options.dist]); // Finally project the 3D points onto 2D

      sticker = project(sticker, options.dist);
      stickers[row][col] = sticker;
    };

    for (var col = 0; col <= options.cubeSize; col++) {
      _loop(col);
    }
  }

  return stickers;
}
/**
 * Creates geometry for rubiks cube stickers. Contains 2D coordinates
 * for drawing svg polygons
 */

function makeCubeGeometry(options) {
  if (options.view === 'plan') {
    options.viewportRotations = [[Axis.X, -90]];
  }

  return AllFaces.reduce(function (acc, face) {
    acc[face] = makeFaceStickers(face, options);
    return acc;
  }, {});
}

function parseColor(raw) {
  var colorcodeRegex = /^[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/; // Append # for color codes

  if (colorcodeRegex.exec(raw)) {
    return "#" + raw;
  }

  if (ColorAbbreviationToCode[raw]) {
    return ColorAbbreviationToCode[raw];
  }

  if (ColorNameToCode[raw]) {
    return ColorNameToCode[raw];
  } // Default color


  return ColorCode.Gray;
}

var stickerPattern = '([URFDLB])([0-9]+)';
var colorPattern = '(black|dgrey|grey|silver|white|yellow|red|orange|blue|green|purple|pink|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})';
var arrowPattern = "^(" + stickerPattern + ")(" + stickerPattern + ")(" + stickerPattern + ")?(-s([0-9+]))?(-i([0-9+]))?(-" + colorPattern + ")?";
function parseArrows(raw) {
  if (typeof raw !== 'string') {
    return [];
  }

  return raw.split(',').map(function (part) {
    return parseArrow(part);
  }).filter(function (arrow) {
    return !!arrow;
  });
}
function parseArrow(raw) {
  if (typeof raw !== 'string') {
    return null;
  }

  var arrowRegex = new RegExp(arrowPattern);
  var match = arrowRegex.exec(raw);

  if (!match) {
    return null;
  }

  return {
    s1: {
      face: Face[match[2]],
      n: parseInt(match[3])
    },
    s2: {
      face: Face[match[5]],
      n: parseInt(match[6])
    },
    s3: !match[7] ? undefined : {
      face: Face[match[8]],
      n: parseInt(match[9])
    },
    color: match[15] ? parseColor(match[15]) : ColorCode.Gray,
    scale: match[11] ? parseInt(match[11]) : 10,
    influence: match[13] ? parseInt(match[13]) : 10
  };
}

var _defaultFaceRotations;
/**
 * Utility methods for rendering cube geometry using svg.js
 */
// Rotation vectors to track visibility of each face

var defaultFaceRotations = (_defaultFaceRotations = {}, _defaultFaceRotations[Face.U] = [0, -1, 0], _defaultFaceRotations[Face.R] = [1, 0, 0], _defaultFaceRotations[Face.F] = [0, 0, -1], _defaultFaceRotations[Face.D] = [0, 1, 1], _defaultFaceRotations[Face.L] = [-1, 0, 0], _defaultFaceRotations[Face.B] = [0, 0, 1], _defaultFaceRotations);

function viewBox(x, y, width, height) {
  return x + " " + y + " " + width + " " + height;
}

function polygonPoints(points) {
  return points.map(function (point) {
    return point.join(',');
  }).join(' ');
}
/**
 * Determines face render order based on z position. Faces further away
 * will render first so anything closer will be drawn on top.
 */


function getRenderOrder(faceRotations) {
  var renderOrder = [].concat(AllFaces).sort(function (a, b) {
    return faceRotations[b][2] - faceRotations[a][2];
  });
  return renderOrder;
}

var Background = function Background(_ref) {
  var options = _ref.options;
  var fill;
  var fillOpacity = undefined;

  if (!options.backgroundColor) {
    fill = 'none';
    fillOpacity = 0;
  } else {
    fill = options.backgroundColor;
  }

  return /*#__PURE__*/React.createElement(reactNativeSvg.Rect, _extends({}, options.viewbox, {
    fill: fill,
    fillOpacity: fillOpacity
  }));
};

function faceVisible(face, rotations) {
  return rotations[face][2] < -0.105;
}

var CubeOutlineGroup = function CubeOutlineGroup(_ref2) {
  var options = _ref2.options,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(reactNativeSvg.G, {
    opacity: options.cubeOpacity / 100,
    strokeWidth: 0.1,
    strokeLinejoin: "round",
    children: children
  });
};

var OllLayerGroup = function OllLayerGroup(_ref3) {
  var options = _ref3.options,
      children = _ref3.children;
  return /*#__PURE__*/React.createElement(reactNativeSvg.G, {
    opacity: options.stickerOpacity / 100,
    strokeOpacity: 1,
    strokeWidth: 0.02,
    strokeLinejoin: "round",
    children: children
  });
};

var ArrowGroup = function ArrowGroup(_ref4) {
  var cubeSize = _ref4.cubeSize,
      children = _ref4.children;
  return /*#__PURE__*/React.createElement(reactNativeSvg.G, {
    opacity: 1,
    strokeOpacity: 1,
    strokeWidth: 0.12 / cubeSize,
    strokeLinecap: "round",
    children: children
  });
};

var CubeOutline = function CubeOutline(_ref5) {
  var face = _ref5.face,
      options = _ref5.options;
  var cubeSize = face.length - 1;
  var width = options.outlineWidth;
  var outlinePoints = [[face[0][0][0] * width, face[0][0][1] * width], [face[cubeSize][0][0] * width, face[cubeSize][0][1] * width], [face[cubeSize][cubeSize][0] * width, face[cubeSize][cubeSize][1] * width], [face[0][cubeSize][0] * width, face[0][cubeSize][1] * width]];
  return /*#__PURE__*/React.createElement(reactNativeSvg.Polygon, {
    fill: options.cubeColor,
    stroke: options.cubeColor,
    points: polygonPoints(outlinePoints)
  });
};

var FaceStickersSvg = function FaceStickersSvg(_ref6) {
  var face = _ref6.face,
      stickers = _ref6.stickers,
      options = _ref6.options;
  var cubeSize = stickers.length - 1;
  var stickerElements = [];

  for (var i = 0; i < cubeSize; i++) {
    for (var j = 0; j < cubeSize; j++) {
      var centerPoint = [(stickers[j][i][0] + stickers[j + 1][i + 1][0]) / 2, (stickers[j][i][1] + stickers[j + 1][i + 1][1]) / 2, 0]; // Scale points in towards centre

      var p1 = transScale(stickers[j][i], centerPoint, 0.85);
      var p2 = transScale(stickers[j + 1][i], centerPoint, 0.85);
      var p3 = transScale(stickers[j + 1][i + 1], centerPoint, 0.85);
      var p4 = transScale(stickers[j][i + 1], centerPoint, 0.85);
      var color = getStickerColor(face, i, j, options);

      if (color !== ColorName.Transparent) {
        stickerElements.push( /*#__PURE__*/React.createElement(Sticker, _extends({
          key: i + "," + j
        }, {
          p1: p1,
          p2: p2,
          p3: p3,
          p4: p4
        }, {
          stickerColor: color,
          cubeColor: options.cubeColor
        })));
      }
    }
  }

  return /*#__PURE__*/React.createElement(reactNativeSvg.G, {
    opacity: options.stickerOpacity / 100,
    strokeOpacity: 0.5,
    strokeWidth: options.strokeWidth,
    strokeLinejoin: "round",
    children: stickerElements
  });
};

var Sticker = function Sticker(props) {
  var p1 = props.p1,
      p2 = props.p2,
      p3 = props.p3,
      p4 = props.p4,
      stickerColor = props.stickerColor,
      cubeColor = props.cubeColor;
  var stickerPoints = [[p1[0], p1[1]], [p2[0], p2[1]], [p3[0], p3[1]], [p4[0], p4[1]]];
  return /*#__PURE__*/React.createElement(reactNativeSvg.Polygon, {
    fill: stickerColor,
    stroke: cubeColor,
    points: polygonPoints(stickerPoints)
  });
};
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


function getStickerColor(face, row, col, options) {
  var faceIndex = AllFaces.indexOf(face);
  var stickerNumber = row * options.cubeSize + col;
  var colorIndex = faceIndex * (options.cubeSize * options.cubeSize) + stickerNumber;

  if (!Array.isArray(options.facelets) && Array.isArray(options.stickerColors)) {
    if (options.stickerColors.length <= colorIndex) {
      return ColorName.Black;
    }

    return options.stickerColors[colorIndex];
  } else if (Array.isArray(options.facelets)) {
    if (options.facelets.length <= colorIndex) {
      return ColorCode.DarkGray;
    }

    var fd = options.facelets[colorIndex];

    if (FaceletToFace[fd] != null) {
      var _face = FaceletToFace[fd];
      return options.colorScheme[_face];
    }

    return FaceletToColor[fd] || ColorCode.DarkGray;
  } else {
    return options.colorScheme[face] || ColorName.Black;
  }
} // Renders the top rim of the R U L and B faces out from side of cube


var OLLStickers = function OLLStickers(props) {
  var face = props.face,
      stickers = props.stickers,
      rotations = props.rotations,
      options = props.options;
  var stickerElements = []; // Translation vector, to move faces out

  var v1 = scale(rotations[face], 0);
  var v2 = scale(rotations[face], 0.2);

  for (var i = 0; i < options.cubeSize; i++) {
    // find center point of sticker
    var centerPoint = [(stickers[i][0][0] + stickers[i + 1][1][0]) / 2, (stickers[i][0][1] + stickers[i + 1][1][1]) / 2, 0];
    var p1 = translate(transScale(stickers[i][0], centerPoint, 0.94), v1);
    var p2 = translate(transScale(stickers[i + 1][0], centerPoint, 0.94), v1);
    var p3 = translate(transScale(stickers[i + 1][1], centerPoint, 0.94), v2);
    var p4 = translate(transScale(stickers[i][1], centerPoint, 0.94), v2);
    var stickerColor = getStickerColor(face, 0, i, options);

    if (stickerColor !== ColorName.Transparent) {
      stickerElements.push( /*#__PURE__*/React.createElement(Sticker, _extends({
        key: i
      }, {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        stickerColor: stickerColor
      }, {
        cubeColor: options.cubeColor
      })));
    }
  }

  return /*#__PURE__*/React.createElement(Fragment, null, stickerElements);
};
/**
 * Generates svg for an arrow pointing from sticker s1 to s2
 */

var ArrowSvg = function ArrowSvg(_ref7) {
  var geometry = _ref7.geometry,
      arrow = _ref7.arrow;
  var cubeSize = geometry[0].length - 1; // Find center point for each facelet

  var p1y = Math.floor(arrow.s1.n / cubeSize);
  var p1x = arrow.s1.n % cubeSize;
  var p1 = [(geometry[arrow.s1.face][p1x][p1y][0] + geometry[arrow.s1.face][p1x + 1][p1y + 1][0]) / 2, (geometry[arrow.s1.face][p1x][p1y][1] + geometry[arrow.s1.face][p1x + 1][p1y + 1][1]) / 2, 0];
  var p2y = Math.floor(arrow.s2.n / cubeSize);
  var p2x = arrow.s2.n % cubeSize;
  var p2 = [(geometry[arrow.s1.face][p2x][p2y][0] + geometry[arrow.s1.face][p2x + 1][p2y + 1][0]) / 2, (geometry[arrow.s1.face][p2x][p2y][1] + geometry[arrow.s1.face][p2x + 1][p2y + 1][1]) / 2, 0]; // Find midpoint between p1 and p2

  var center = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, 0]; // Shorten arrows towards midpoint according to config

  p1 = transScale(p1, center, arrow.scale / 10);
  p2 = transScale(p2, center, arrow.scale / 10);
  var p3;

  if (arrow.s3) {
    var p3y = Math.floor(arrow.s3.n / cubeSize);
    var p3x = arrow.s3.n % cubeSize;
    p3 = [(geometry[arrow.s1.face][p3x][p3y][0] + geometry[arrow.s1.face][p3x + 1][p3y + 1][0]) / 2, (geometry[arrow.s1.face][p3x][p3y][1] + geometry[arrow.s1.face][p3x + 1][p3y + 1][1]) / 2, 0];
    p3 = transScale(p3, center, arrow.influence / 5);
  } // Calculate arrow rotation


  var p_ = p3 ? p3 : p1;
  var rotation = p_[1] > p2[1] ? 270 : 90;

  if (p2[0] - p_[0] != 0) {
    rotation = radians2Degrees(Math.atan((p2[1] - p_[1]) / (p2[0] - p_[0])));
    rotation = p_[0] > p2[0] ? rotation + 180 : rotation;
  } // Draw line


  var lineSvg = /*#__PURE__*/React.createElement(reactNativeSvg.Path, {
    d: "M " + p1[0] + "," + p1[1] + " " + (p3 ? 'Q ' + p3[0] + ',' + p3[1] : 'L') + " " + p2[0] + "," + p2[1],
    fill: "none",
    stroke: arrow.color,
    strokeOpacity: 1
  }); // Draw arrow head

  var headSvg = /*#__PURE__*/React.createElement(reactNativeSvg.Path, {
    d: "M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z",
    translate: [p2[0], p2[1]],
    scale: 0.033 / cubeSize,
    rotation: rotation,
    fill: arrow.color,
    strokeWidth: 0,
    strokeLinejoin: "round"
  });
  return /*#__PURE__*/React.createElement(Fragment, null, lineSvg, headSvg);
};
var Cube = function Cube(_ref8) {
  var geometry = _ref8.geometry,
      options = _ref8.options;
  var faceRotations = rotateFaces(defaultFaceRotations, options.viewportRotations);
  var renderOrder = getRenderOrder(faceRotations);
  var hiddenFaces = renderOrder.filter(function (face) {
    return !faceVisible(face, faceRotations);
  });
  var visibleFaces = renderOrder.filter(function (face) {
    return faceVisible(face, faceRotations);
  });
  var arrowDefinitions = [];

  if (Array.isArray(options.arrows)) {
    arrowDefinitions = options.arrows;
  } else if (typeof options.arrows === 'string') {
    arrowDefinitions = parseArrows(options.arrows);
  }

  return /*#__PURE__*/React.createElement(reactNativeSvg.Svg, {
    width: options.width,
    height: options.height,
    viewBox: viewBox(options.viewbox.x, options.viewbox.y, options.viewbox.width, options.viewbox.height)
  }, /*#__PURE__*/React.createElement(Background, {
    options: options
  }), options.cubeOpacity < 100 && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(CubeOutlineGroup, {
    options: options
  }, hiddenFaces.map(function (face, index) {
    return /*#__PURE__*/React.createElement(CubeOutline, {
      key: index,
      face: geometry[face],
      options: options
    });
  })), hiddenFaces.map(function (face, index) {
    return /*#__PURE__*/React.createElement(FaceStickersSvg, {
      key: index,
      face: face,
      stickers: geometry[face],
      options: options
    });
  })), /*#__PURE__*/React.createElement(CubeOutlineGroup, {
    options: options
  }, visibleFaces.map(function (face, index) {
    return /*#__PURE__*/React.createElement(CubeOutline, {
      key: index,
      face: geometry[face],
      options: options
    });
  })), visibleFaces.map(function (face, index) {
    return /*#__PURE__*/React.createElement(FaceStickersSvg, {
      key: index,
      face: face,
      stickers: geometry[face],
      options: options
    });
  }), options.view === 'plan' && /*#__PURE__*/React.createElement(OllLayerGroup, {
    options: options
  }, [Face.R, Face.F, Face.L, Face.B].map(function (face, index) {
    return /*#__PURE__*/React.createElement(OLLStickers, {
      key: index,
      face: face,
      stickers: geometry[face],
      rotations: faceRotations,
      options: options
    });
  })), /*#__PURE__*/React.createElement(ArrowGroup, {
    cubeSize: geometry[0].length - 1
  }, arrowDefinitions.map(function (arrow, index) {
    return /*#__PURE__*/React.createElement(ArrowSvg, {
      key: index,
      geometry: geometry,
      arrow: arrow
    });
  })));
};

var _Masking$FL, _Masking$F2L, _Masking$LL, _Masking$CLL, _Masking$ELL, _Masking$OLL, _Masking$OCLL, _Masking$OELL, _Masking$COLL, _Masking$OCELL, _Masking$WV, _Masking$VH, _Masking$ELS, _Masking$CLS, _Masking$CMLL, _Masking$CROSS, _Masking$F2L2, _Masking$F2L3, _Masking$F2LSM, _Masking$F2L4, _Masking$F2B, _Masking$LINE, _maskingFunctions;
var maskingFunctions = (_maskingFunctions = {}, _maskingFunctions[Masking.FL] = (_Masking$FL = {}, _Masking$FL[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$FL[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$FL[Face.R] = function (row, col, cubeSize) {
  return row == cubeSize - 1;
}, _Masking$FL[Face.L] = function (row, col, cubeSize) {
  return row == cubeSize - 1;
}, _Masking$FL[Face.F] = function (row, col, cubeSize) {
  return row == cubeSize - 1;
}, _Masking$FL[Face.B] = function (row, col, cubeSize) {
  return row == cubeSize - 1;
}, _Masking$FL), _maskingFunctions[Masking.F2L] = (_Masking$F2L = {}, _Masking$F2L[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2L[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$F2L[Face.R] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L[Face.F] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L), _maskingFunctions[Masking.LL] = (_Masking$LL = {}, _Masking$LL[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$LL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$LL[Face.R] = function (row, col, cubeSize) {
  return row == 0;
}, _Masking$LL[Face.L] = function (row, col, cubeSize) {
  return row == 0;
}, _Masking$LL[Face.F] = function (row, col, cubeSize) {
  return row == 0;
}, _Masking$LL[Face.B] = function (row, col, cubeSize) {
  return row == 0;
}, _Masking$LL), _maskingFunctions[Masking.CLL] = (_Masking$CLL = {}, _Masking$CLL[Face.U] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && row < cubeSize - 1 && col < cubeSize - 1 || // is center
  (row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1);
}, _Masking$CLL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$CLL[Face.R] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$CLL[Face.L] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$CLL[Face.F] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$CLL[Face.B] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$CLL), _maskingFunctions[Masking.ELL] = (_Masking$ELL = {}, _Masking$ELL[Face.U] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$ELL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$ELL[Face.R] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$ELL[Face.L] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$ELL[Face.F] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$ELL[Face.B] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$ELL), _maskingFunctions[Masking.OLL] = (_Masking$OLL = {}, _Masking$OLL[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$OLL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$OLL[Face.R] = function (row, col, cubeSize) {
  return false;
}, _Masking$OLL[Face.L] = function (row, col, cubeSize) {
  return false;
}, _Masking$OLL[Face.F] = function (row, col, cubeSize) {
  return false;
}, _Masking$OLL[Face.B] = function (row, col, cubeSize) {
  return false;
}, _Masking$OLL), _maskingFunctions[Masking.OCLL] = (_Masking$OCLL = {}, _Masking$OCLL[Face.U] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && row < cubeSize - 1 && col < cubeSize - 1 || // is center
  (row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1);
}, _Masking$OCLL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCLL[Face.R] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCLL[Face.L] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCLL[Face.F] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCLL[Face.B] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCLL), _maskingFunctions[Masking.OELL] = (_Masking$OELL = {}, _Masking$OELL[Face.U] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$OELL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$OELL[Face.R] = function (row, col, cubeSize) {
  return false;
}, _Masking$OELL[Face.L] = function (row, col, cubeSize) {
  return false;
}, _Masking$OELL[Face.F] = function (row, col, cubeSize) {
  return false;
}, _Masking$OELL[Face.B] = function (row, col, cubeSize) {
  return false;
}, _Masking$OELL), _maskingFunctions[Masking.COLL] = (_Masking$COLL = {}, _Masking$COLL[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$COLL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$COLL[Face.R] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$COLL[Face.L] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$COLL[Face.F] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$COLL[Face.B] = function (row, col, cubeSize) {
  return row == 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$COLL), _maskingFunctions[Masking.OCELL] = (_Masking$OCELL = {}, _Masking$OCELL[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$OCELL[Face.D] = function (row, col, cubeSize) {
  return false;
}, _Masking$OCELL[Face.R] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$OCELL[Face.L] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$OCELL[Face.F] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$OCELL[Face.B] = function (row, col, cubeSize) {
  return row == 0 && col > 0 && col < cubeSize - 1;
}, _Masking$OCELL), _maskingFunctions[Masking.WV] = (_Masking$WV = {}, _Masking$WV[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$WV[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$WV[Face.R] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$WV[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$WV[Face.F] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$WV[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$WV), _maskingFunctions[Masking.VH] = (_Masking$VH = {}, _Masking$VH[Face.U] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$VH[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$VH[Face.R] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$VH[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$VH[Face.F] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$VH[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$VH), _maskingFunctions[Masking.ELS] = (_Masking$ELS = {}, _Masking$ELS[Face.U] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$ELS[Face.D] = function (row, col, cubeSize) {
  return row == 0 ? col < cubeSize - 1 : true;
}, _Masking$ELS[Face.R] = function (row, col, cubeSize) {
  return row > 0 && (row == cubeSize - 1 ? col > 0 : true);
}, _Masking$ELS[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$ELS[Face.F] = function (row, col, cubeSize) {
  return row > 0 && (row == cubeSize - 1 ? col < cubeSize - 1 : true);
}, _Masking$ELS[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$ELS), _maskingFunctions[Masking.CLS] = (_Masking$CLS = {}, _Masking$CLS[Face.U] = function (row, col, cubeSize) {
  return true;
}, _Masking$CLS[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$CLS[Face.R] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$CLS[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$CLS[Face.F] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$CLS[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$CLS), _maskingFunctions[Masking.CMLL] = (_Masking$CMLL = {}, _Masking$CMLL[Face.U] = function (row, col, cubeSize) {
  return (row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1);
}, _Masking$CMLL[Face.D] = function (row, col, cubeSize) {
  return true;
}, _Masking$CMLL[Face.R] = function (row, col, cubeSize) {
  return row > 0 || col == 0 || col == cubeSize - 1;
}, _Masking$CMLL[Face.L] = function (row, col, cubeSize) {
  return row > 0 || col == 0 || col == cubeSize - 1;
}, _Masking$CMLL[Face.F] = function (row, col, cubeSize) {
  return col == 0 || col == cubeSize - 1;
}, _Masking$CMLL[Face.B] = function (row, col, cubeSize) {
  return col == 0 || col == cubeSize - 1;
}, _Masking$CMLL), _maskingFunctions[Masking.CROSS] = (_Masking$CROSS = {}, _Masking$CROSS[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$CROSS[Face.D] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$CROSS[Face.R] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$CROSS[Face.L] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$CROSS[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$CROSS[Face.B] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$CROSS), _maskingFunctions[Masking.F2L3] = (_Masking$F2L2 = {}, _Masking$F2L2[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2L2[Face.D] = function (row, col, cubeSize) {
  return row == 0 && col == cubeSize - 1 || !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
}, _Masking$F2L2[Face.R] = function (row, col, cubeSize) {
  return row > 0 && col < cubeSize - 1;
}, _Masking$F2L2[Face.L] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$F2L2[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col > 0;
}, _Masking$F2L2[Face.B] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$F2L2), _maskingFunctions[Masking.F2L2] = (_Masking$F2L3 = {}, _Masking$F2L3[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2L3[Face.D] = function (row, col, cubeSize) {
  return row > 0 || col > 0 && col < cubeSize - 1;
}, _Masking$F2L3[Face.R] = function (row, col, cubeSize) {
  return row > 0 && col > 0;
}, _Masking$F2L3[Face.L] = function (row, col, cubeSize) {
  return row > 0 && col < cubeSize - 1;
}, _Masking$F2L3[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$F2L3[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L3), _maskingFunctions[Masking.F2LSM] = (_Masking$F2LSM = {}, _Masking$F2LSM[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2LSM[Face.D] = function (row, col, cubeSize) {
  return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)) || col == 0 && row == cubeSize - 1 || row == 0 && col == cubeSize - 1;
}, _Masking$F2LSM[Face.R] = function (row, col, cubeSize) {
  return row > 0 && col < cubeSize - 1;
}, _Masking$F2LSM[Face.L] = function (row, col, cubeSize) {
  return row > 0 && col < cubeSize - 1;
}, _Masking$F2LSM[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col > 0;
}, _Masking$F2LSM[Face.B] = function (row, col, cubeSize) {
  return row > 0 && col > 0;
}, _Masking$F2LSM), _maskingFunctions[Masking.F2L1] = (_Masking$F2L4 = {}, _Masking$F2L4[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2L4[Face.D] = function (row, col, cubeSize) {
  return row !== 0 || col !== cubeSize - 1;
}, _Masking$F2L4[Face.R] = function (row, col, cubeSize) {
  return row > 0 && col > 0;
}, _Masking$F2L4[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L4[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col < cubeSize - 1;
}, _Masking$F2L4[Face.B] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2L4), _maskingFunctions[Masking.F2B] = (_Masking$F2B = {}, _Masking$F2B[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$F2B[Face.D] = function (row, col, cubeSize) {
  return col == 0 || col == cubeSize - 1;
}, _Masking$F2B[Face.R] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2B[Face.L] = function (row, col, cubeSize) {
  return row > 0;
}, _Masking$F2B[Face.F] = function (row, col, cubeSize) {
  return row > 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$F2B[Face.B] = function (row, col, cubeSize) {
  return row > 0 && (col == 0 || col == cubeSize - 1);
}, _Masking$F2B), _maskingFunctions[Masking.LINE] = (_Masking$LINE = {}, _Masking$LINE[Face.U] = function (row, col, cubeSize) {
  return false;
}, _Masking$LINE[Face.D] = function (row, col, cubeSize) {
  return col > 0 && col < cubeSize - 1;
}, _Masking$LINE[Face.R] = function (row, col, cubeSize) {
  return false;
}, _Masking$LINE[Face.L] = function (row, col, cubeSize) {
  return false;
}, _Masking$LINE[Face.F] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$LINE[Face.B] = function (row, col, cubeSize) {
  return row > 0 && col > 0 && col < cubeSize - 1;
}, _Masking$LINE), _maskingFunctions);
function makeMasking(masking, cubeSize) {
  var _faceValues;

  if (!maskingFunctions[masking]) {
    throw new Error("invalid masking " + masking);
  }

  var numStickers = cubeSize * cubeSize;
  var faceValues = (_faceValues = {}, _faceValues[Face.U] = [], _faceValues[Face.F] = [], _faceValues[Face.R] = [], _faceValues[Face.D] = [], _faceValues[Face.L] = [], _faceValues[Face.B] = [], _faceValues);

  var _loop = function _loop(i) {
    var row = Math.floor(i / cubeSize);
    var col = i % cubeSize;
    AllFaces.forEach(function (face) {
      faceValues[face].push(maskingFunctions[masking][face](row, col, cubeSize));
    });
  };

  for (var i = 0; i < numStickers; i++) {
    _loop(i);
  }

  return faceValues;
}

var _OppositeTurn, _AxisMapping, _Axis$X, _Axis$Y, _Axis$Z, _AxisOrientation;
var TurnType;

(function (TurnType) {
  TurnType[TurnType["Clockwise"] = 0] = "Clockwise";
  TurnType[TurnType["CounterClockwise"] = 1] = "CounterClockwise";
  TurnType[TurnType["Double"] = 2] = "Double";
})(TurnType || (TurnType = {}));

var faceIdentity = function faceIdentity(stickerNumber, cubeSize) {
  return stickerNumber;
};

var counterClockwiseSticker = function counterClockwiseSticker(stickerNumber, cubeSize) {
  return stickerNumber * cubeSize % (cubeSize * cubeSize + 1);
};

var clockwiseSticker = function clockwiseSticker(stickerNumber, cubeSize) {
  var numStickers = cubeSize * cubeSize;
  return numStickers + 1 - counterClockwiseSticker(stickerNumber, cubeSize);
};

var doubleTurn = function doubleTurn(stickerNumber, cubeSize) {
  return cubeSize * cubeSize - stickerNumber + 1;
};

var OppositeTurn = (_OppositeTurn = {}, _OppositeTurn[TurnType.Clockwise] = TurnType.CounterClockwise, _OppositeTurn[TurnType.CounterClockwise] = TurnType.Clockwise, _OppositeTurn[TurnType.Double] = TurnType.Double, _OppositeTurn); // Faces that wrap around a given axis

var AxisMapping = (_AxisMapping = {}, _AxisMapping[Axis.X] = [Face.U, Face.B, Face.F, Face.D], _AxisMapping[Axis.Y] = [Face.L, Face.B, Face.R, Face.F], _AxisMapping[Axis.Z] = [Face.L, Face.U, Face.R, Face.D], _AxisMapping); // Face's orientation related to other faces on a given axis

var AxisOrientation = (_AxisOrientation = {}, _AxisOrientation[Axis.X] = (_Axis$X = {}, _Axis$X[Face.U] = faceIdentity, _Axis$X[Face.B] = doubleTurn, _Axis$X[Face.F] = faceIdentity, _Axis$X[Face.D] = faceIdentity, _Axis$X[Face.L] = null, _Axis$X[Face.R] = null, _Axis$X), _AxisOrientation[Axis.Y] = (_Axis$Y = {}, _Axis$Y[Face.U] = null, _Axis$Y[Face.B] = counterClockwiseSticker, _Axis$Y[Face.F] = counterClockwiseSticker, _Axis$Y[Face.D] = null, _Axis$Y[Face.L] = counterClockwiseSticker, _Axis$Y[Face.R] = counterClockwiseSticker, _Axis$Y), _AxisOrientation[Axis.Z] = (_Axis$Z = {}, _Axis$Z[Face.U] = counterClockwiseSticker, _Axis$Z[Face.B] = null, _Axis$Z[Face.F] = null, _Axis$Z[Face.D] = clockwiseSticker, _Axis$Z[Face.L] = faceIdentity, _Axis$Z[Face.R] = doubleTurn, _Axis$Z), _AxisOrientation);
var CubeData = /*#__PURE__*/function () {
  function CubeData(cubeSize, initialValues) {
    this.cubeSize = cubeSize;
    /**
     *  Data to store face value
     *  data saved in flat array [1, 2, 3, 4, 5, 6, 7, 8, 9]
     *  maps to cube stickers like this
     *
     *  U Face
     *  1 | 2 | 3
     *  ----------
     *  4 | 5 | 6
     *  ----------
     *  7 | 8 | 9
     *
     *  Stickers are numbered in that manner starting with the U face
     *  continuing with this order U, R, F, D, L, B
     *
     *  Because each face has a differen't orientation it may not be clear
     *  how the back faces are numbered. Below is an example 3x3 mapping
     *
     *  Example numbers of 3x3 cube. nxn cubes follow the same pattern
     *
     *        B
     *      L U R
     *        F
     *        D
     *                  | 54  | 53  | 52  |
     *                   -----------------
     *                  | 51  | 50  | 49  |
     *                   -----------------
     *                  | 48  | 47  | 46  |
     * -----------------                   -----------------
     *  43  | 40  | 37     1  |  2  |  3    12  | 15  | 18
     * ----------------- ----------------- -----------------
     *  44  | 41  | 38     4  |  5  |  6    11  | 14  | 17
     * ----------------- ----------------- -----------------
     *  45  | 42  | 39     7  |  8  |  9    10  | 13  | 16
     * -----------------                   -----------------
     *                  | 19  | 20  | 21  |
     *                   -----------------
     *                  | 22  | 23  | 24  |
     *                   -----------------
     *                  | 25  | 26  | 27  |
     *
     *                  | 28  | 29  | 30  |
     *                   -----------------
     *                  | 31  | 32  | 33  |
     *                   -----------------
     *                  | 34  | 35  | 36  |
     */

    this.faces = {};
    this.numStickers = this.cubeSize * this.cubeSize;
    this.clockwiseMapping = [];
    this.counterClockwiseMapping = [];
    this.doubleMapping = [];
    this.faces = initialValues;

    if (!this.faces) {
      this.initValues();
    }

    for (var i = 1; i <= this.numStickers; i++) {
      this.clockwiseMapping.push(clockwiseSticker(i, cubeSize));
      this.counterClockwiseMapping.push(counterClockwiseSticker(i, cubeSize));
      this.doubleMapping.push(doubleTurn(i, cubeSize));
    }
  }

  var _proto = CubeData.prototype;

  _proto.initValues = function initValues() {
    var _this = this;

    var currentValue = 1;
    AllFaces.forEach(function (face) {
      _this.faces[face] = [];

      for (var i = 0; i < _this.numStickers; i++) {
        _this.faces[face].push(currentValue++);
      }
    });
  }
  /**
   * Rotates values on an outer face of the rubiks cubes
   */
  ;

  _proto.rotateFace = function rotateFace(face, turn) {
    var _this2 = this;

    // TODO more efficient rotation to not construct so many new arrays
    switch (turn) {
      case TurnType.Clockwise:
        this.faces[face] = this.clockwiseMapping.map(function (newStickerNumber) {
          return _this2.faces[face][newStickerNumber - 1];
        });
        break;

      case TurnType.CounterClockwise:
        this.faces[face] = this.counterClockwiseMapping.map(function (newStickerNumber) {
          return _this2.faces[face][newStickerNumber - 1];
        });
        break;

      case TurnType.Double:
        this.faces[face].reverse();
        break;
    }
  }
  /**
   * Rotates layer values around a given axis
   */
  ;

  _proto.axisRotation = function axisRotation(offset, range, axis, faceOrder, forward, _double) {
    var _this3 = this;

    if (forward === void 0) {
      forward = true;
    }

    if (_double === void 0) {
      _double = false;
    }

    if (!forward) {
      faceOrder.reverse();
    } // Copy original values to avoid clobbering values when modifying stickers


    var originalValues = faceOrder.map(function (face) {
      return _this3.faces[face].slice();
    }); // Copy values

    for (var i = 0; i < this.cubeSize; i++) {
      for (var r = 0; r < range; r++) {
        var stickerIndex = this.cubeSize * i + (offset + r);

        for (var j = 0; j < faceOrder.length; j++) {
          var face = faceOrder[j];
          var nextFace = _double ? faceOrder[(j + 2) % faceOrder.length] : faceOrder[(j + 1) % faceOrder.length];
          var valueIndex = AxisOrientation[axis][face](stickerIndex + 1, this.cubeSize) - 1;
          var nextFaceValueIndex = AxisOrientation[axis][nextFace](stickerIndex + 1, this.cubeSize) - 1;
          this.faces[face][valueIndex] = originalValues[(_double ? j + 2 : j + 1) % originalValues.length][nextFaceValueIndex];
        }
      }
    }
  }
  /**
   * Rotate layers around the x axis of the cube
   */
  ;

  _proto.xLayersRotation = function xLayersRotation(offset, forward, _double2, range) {
    if (forward === void 0) {
      forward = true;
    }

    if (_double2 === void 0) {
      _double2 = false;
    }

    if (range === void 0) {
      range = 1;
    }

    var faceOrder = [Face.U, Face.F, Face.D, Face.B];
    this.axisRotation(offset, range, Axis.X, faceOrder, forward, _double2);
  }
  /**
   * Rotate layers around the y axis of the cube
   */
  ;

  _proto.yLayersRotation = function yLayersRotation(offset, forward, _double3, range) {
    if (forward === void 0) {
      forward = true;
    }

    if (_double3 === void 0) {
      _double3 = false;
    }

    if (range === void 0) {
      range = 1;
    }

    var faceOrder = [Face.L, Face.F, Face.R, Face.B];
    this.axisRotation(offset, range, Axis.Y, faceOrder, forward, _double3);
  }
  /**
   * Rotate layers around the z axis of the cube
   */
  ;

  _proto.zLayersRotation = function zLayersRotation(offset, forward, _double4, range) {
    if (forward === void 0) {
      forward = true;
    }

    if (_double4 === void 0) {
      _double4 = false;
    }

    if (range === void 0) {
      range = 1;
    }

    var faceOrder = [Face.U, Face.L, Face.D, Face.R];
    this.axisRotation(offset, range, Axis.Z, faceOrder, forward, _double4);
  }
  /**
   * Restricts the number of slices used in outer block moves to the cube size
   */
  ;

  _proto.safeSlices = function safeSlices(n) {
    return n > this.cubeSize ? this.cubeSize : n;
  };

  _proto.rTurn = function rTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.R, turnType);
    var offset = this.cubeSize - slices;
    this.xLayersRotation(offset, turnType === TurnType.Clockwise, turnType === TurnType.Double, slices);
  };

  _proto.lTurn = function lTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.L, turnType);
    this.xLayersRotation(0, turnType === TurnType.CounterClockwise, turnType === TurnType.Double, slices);
  };

  _proto.uTurn = function uTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.U, turnType);
    this.yLayersRotation(0, turnType === TurnType.Clockwise, turnType === TurnType.Double, slices);
  };

  _proto.dTurn = function dTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.D, turnType);
    var offset = this.cubeSize - slices;
    this.yLayersRotation(offset, turnType === TurnType.CounterClockwise, turnType === TurnType.Double, slices);
  };

  _proto.fTurn = function fTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.F, turnType);
    var offset = this.cubeSize - slices;
    this.zLayersRotation(offset, turnType === TurnType.Clockwise, turnType === TurnType.Double, slices);
  };

  _proto.bTurn = function bTurn(turnType, slices) {
    if (slices === void 0) {
      slices = 1;
    }

    this.rotateFace(Face.B, turnType);
    this.zLayersRotation(0, turnType === TurnType.CounterClockwise, turnType === TurnType.Double, slices);
  };

  _proto.mTurn = function mTurn(turnType) {
    if (this.cubeSize < 2) return;
    this.xLayersRotation(1, turnType === TurnType.CounterClockwise, turnType === TurnType.Double, this.cubeSize - 2);
  };

  _proto.eTurn = function eTurn(turnType) {
    if (this.cubeSize < 2) return;
    this.yLayersRotation(1, turnType === TurnType.CounterClockwise, turnType === TurnType.Double, this.cubeSize - 2);
  };

  _proto.sTurn = function sTurn(turnType) {
    if (this.cubeSize < 2) return;
    this.zLayersRotation(1, turnType === TurnType.Clockwise, turnType === TurnType.Double, this.cubeSize - 2);
  };

  _proto.xTurn = function xTurn(turnType) {
    this.rotateFace(Face.R, turnType);
    this.rotateFace(Face.L, OppositeTurn[turnType]);
    this.xLayersRotation(0, turnType === TurnType.Clockwise, turnType === TurnType.Double, this.cubeSize);
  };

  _proto.yTurn = function yTurn(turnType) {
    this.rotateFace(Face.U, turnType);
    this.rotateFace(Face.D, OppositeTurn[turnType]);
    this.yLayersRotation(0, turnType === TurnType.Clockwise, turnType === TurnType.Double, this.cubeSize);
  };

  _proto.zTurn = function zTurn(turnType) {
    this.rotateFace(Face.F, turnType);
    this.rotateFace(Face.B, OppositeTurn[turnType]);
    this.zLayersRotation(0, turnType === TurnType.Clockwise, turnType === TurnType.Double, this.cubeSize);
  };

  _proto.turn = function turn(_turn) {
    var slices = this.safeSlices(_turn.slices);

    switch (_turn.move) {
      case AlgorithmUnit.F:
        this.fTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.B:
        this.bTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.U:
        this.uTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.D:
        this.dTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.R:
        this.rTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.L:
        this.lTurn(_turn.turnType, slices);
        break;

      case AlgorithmUnit.M:
        this.mTurn(_turn.turnType);
        break;

      case AlgorithmUnit.E:
        this.eTurn(_turn.turnType);
        break;

      case AlgorithmUnit.S:
        this.sTurn(_turn.turnType);
        break;

      case AlgorithmUnit.X:
        this.xTurn(_turn.turnType);
        break;

      case AlgorithmUnit.Y:
        this.yTurn(_turn.turnType);
        break;

      case AlgorithmUnit.Z:
        this.zTurn(_turn.turnType);
        break;

      default:
        throw new Error("Unrecognized move in turn " + JSON.stringify(_turn));
    }
  };

  return CubeData;
}();

var _Opposite;
var turnRegex = /([2-9]+)?([UuFfRrDdLlBbMESxyz])(w)?([2\'])?/g;
var Opposite = (_Opposite = {}, _Opposite[TurnType.Clockwise] = TurnType.CounterClockwise, _Opposite[TurnType.CounterClockwise] = TurnType.Clockwise, _Opposite[TurnType.Double] = TurnType.Double, _Opposite);
/**
 * Takes in an algorithm string and parses the turns from it
 * algorithm string format should be moves separated by a single space
 * (ex. "U R2 L' x")
 *
 * https://www.worldcubeassociation.org/regulations/#article-12-notation
 */

function parseAlgorithm(algorithm) {
  if (!algorithm) {
    return [];
  }

  var turns = [];
  var match;

  do {
    match = turnRegex.exec(algorithm);

    if (match) {
      var rawSlices = match[1];
      var rawFace = match[2];
      var outerBlockIndicator = match[3];
      var rawType = match[4] || TurnAbbreviation.Clockwise; // Default to clockwise

      var isLowerCaseMove = rawFace === rawFace.toLowerCase() && cubeRotations.indexOf(rawFace) === -1;

      if (isLowerCaseMove) {
        rawFace = rawFace.toUpperCase();
      }

      var turn = {
        move: getMove(rawFace),
        turnType: getTurnType(rawType),
        slices: isLowerCaseMove ? 2 : getSlices(rawSlices, outerBlockIndicator)
      };
      turns.push(turn);
    }
  } while (match);

  return turns;
}
function parseCase(algorithm) {
  return parseAlgorithm(algorithm).map(function (turn) {
    return {
      turnType: Opposite[turn.turnType],
      move: turn.move,
      slices: turn.slices
    };
  }).reverse();
}

function getSlices(rawSlices, outerBlockIndicator) {
  if (outerBlockIndicator && !rawSlices) {
    return 2;
  } else if (!outerBlockIndicator && rawSlices) {
    throw new Error("Invalid move: Cannot specify num slices if outer block move indicator 'w' is not present");
  } else if (!outerBlockIndicator && !rawSlices) {
    return 1;
  } else {
    return parseInt(rawSlices);
  }
}

function getMove(rawFace) {
  if (possibleMoves.indexOf(rawFace) < 0) {
    throw new Error("Invalid move (" + rawFace + "): Possible turn faces are [U R F L D B M E S x y z]");
  } else return rawFace;
}

function getTurnType(rawType) {
  switch (rawType) {
    case TurnAbbreviation.Clockwise:
      return TurnType.Clockwise;

    case TurnAbbreviation.CounterClockwise:
      return TurnType.CounterClockwise;

    case TurnAbbreviation.Double:
      return TurnType.Double;

    default:
      throw new Error("Invalid move modifier (" + rawType + ")");
  }
}

function makeStickerColors(options) {
  var stickerColors = options.stickerColors;
  var mask = options.mask ? makeMasking(options.mask, options.cubeSize) : null;

  if (mask && options.maskAlg) {
    var maskCubeData = new CubeData(options.cubeSize, mask);

    var _alg = parseAlgorithm(options.maskAlg);

    _alg.forEach(function (turn) {
      maskCubeData.turn(turn);
    });

    mask = maskCubeData.faces;
  } // Fill with color scheme if sticker colors not predefined.


  if (!stickerColors) {
    stickerColors = [].concat.apply([], AllFaces.map(function (face) {
      return Array.apply(null, Array(options.cubeSize * options.cubeSize)).map(function () {
        return options.colorScheme[face];
      });
    }));
  }

  var faceMappedStickers = AllFaces.reduce(function (acc, face) {
    if (!acc[face]) acc[face] = [];

    for (var i = 0; i < options.cubeSize; i++) {
      for (var j = 0; j < options.cubeSize; j++) {
        var faceIndex = AllFaces.indexOf(face);
        var stickerNumber = i * options.cubeSize + j;
        var colorIndex = faceIndex * (options.cubeSize * options.cubeSize) + stickerNumber;

        if (stickerColors.length <= colorIndex) {
          acc[face][options.cubeSize * i + j] = ColorName.Black;
        } else {
          acc[face][options.cubeSize * i + j] = stickerColors[colorIndex];
        }

        if (mask && !mask[face][options.cubeSize * i + j]) {
          acc[face][options.cubeSize * i + j] = ColorCode.DarkGray;
        }
      }
    }

    return acc;
  }, {}); // Apply Algorithm

  var cubeData = new CubeData(options.cubeSize, faceMappedStickers);
  var alg = [];

  if (options["case"]) {
    alg = parseCase(options["case"]);
  } else if (options.algorithm) {
    alg = parseAlgorithm(options.algorithm);
  }

  alg.forEach(function (move) {
    cubeData.turn(move);
  });
  return [].concat.apply([], AllFaces.map(function (face) {
    return cubeData.faces[face].slice();
  }));
}

function parseRotationSequence(rawSequence) {
  var rotationRegex = /([xyz]-?[0-9][0-9]?[0-9]?)/g;
  var match;
  var rotations = [];

  do {
    match = rotationRegex.exec(rawSequence);

    if (match) {
      var matchText = match[0];
      var axisSymbol = matchText.charAt(0);
      var value = matchText.substr(1);
      var axis = AxisSymbolToAxis[axisSymbol];
      rotations.push([axis, parseInt(value)]);
    }
  } while (match);

  return rotations;
}

function parseFaceletColors(rawValue) {
  var colors = [];

  if (rawValue.indexOf(',') > -1) {
    // Parse as comma separated colors
    rawValue.split(',').forEach(function (value) {
      var parsed = parseColor(value);

      if (parsed) {
        colors.push(parsed);
      }
    });
  } else {
    // parse as abbreviations (ex 'yyyyyyyyyrrrrrrrrrbbbbbbbbb....')
    for (var i = 0; i < rawValue.length; i++) {
      colors.push(ColorAbbreviationToCode[rawValue.charAt(i)]);
    }
  }

  return colors;
}

function parseColorScheme(rawValue) {
  if (rawValue.indexOf(',') > -1) {
    return parseCommaSeparatedValues(rawValue);
  } else {
    return parseAbbreviations(rawValue);
  }
}

function parseAbbreviations(rawValue) {
  var scheme = {};

  if (rawValue.length < AllFaces.length) {
    return DefaultColorScheme;
  }

  AllFaces.forEach(function (face, index) {
    if (rawValue.length > index) {
      scheme[face] = ColorAbbreviationToCode[rawValue.charAt(index)];
    }
  });
  return scheme;
}

function parseCommaSeparatedValues(rawValue) {
  var scheme = {}; // Parse as comma separated list of colors

  var rawColors = rawValue.split(',');

  if (rawColors.length < AllFaces.length) {
    return DefaultColorScheme;
  }

  AllFaces.forEach(function (face, index) {
    if (rawColors.length > index) {
      var parsedColor = parseColor(rawColors[index]);
      var colorCode = ColorNameToCode[parsedColor] || parsedColor;

      if (parsedColor) {
        scheme[face] = colorCode;
      }
    }
  });
  return scheme;
}

function parseFaceletDefinitions(rawValue) {
  var colors = [];

  for (var i = 0; i < rawValue.length; i++) {
    colors.push(FaceletAbbreviateToDefinition[rawValue.charAt(i)]);
  }

  return colors;
}

/**
 * Utility methods for parsing the old query param style options
 */

function parseOptions(rawOptions) {
  var options = {};
  var params = parseQuery(rawOptions);
  Object.keys(params).forEach(function (key) {
    var paramValue = params[key];

    switch (key) {
      case 'pzl':
        options.cubeSize = parseInt(paramValue) || 3;
        break;

      case 'size':
        var size = parseInt(paramValue) || 250;
        options.width = size;
        options.height = size;
        break;

      case 'view':
        options.view = paramValue;
        break;

      case 'stage':
        options.mask = paramValue;
        break;

      case 'r':
        options.viewportRotations = parseRotationSequence(paramValue);
        break;

      case 'alg':
        options.algorithm = paramValue;
        break;

      case 'case':
        options["case"] = paramValue;
        break;

      case 'fc':
        options.stickerColors = parseFaceletColors(paramValue);
        break;

      case 'sch':
        options.colorScheme = parseColorScheme(paramValue);
        break;

      case 'bg':
        options.backgroundColor = paramValue;
        break;

      case 'cc':
        options.cubeColor = paramValue;
        break;

      case 'co':
        options.cubeOpacity = parseInt(paramValue) || 100;
        break;

      case 'fo':
        options.stickerOpacity = parseInt(paramValue) || 100;
        break;

      case 'dist':
        options.dist = parseInt(paramValue) || 5;
        break;

      case 'arw':
        options.arrows = paramValue;
        break;

      case 'fd':
        options.facelets = parseFaceletDefinitions(paramValue);
        break;

      case 'ac':
        // TODO: Support default arrow color
        console.warn("Currently param 'ac' is unsupported");
        break;
    }
  });
  return options;
}

function parseQuery(url) {
  var queryString = url.indexOf('?') > -1 ? url.substr(url.indexOf('?') + 1) : url;
  var query = {};
  var pairs = queryString.split('&');

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
}

var defaultOptions = {
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
    height: 1.8
  }
};
var CubeSvg = function CubeSvg(props) {
  var options = getOptions(defaultOptions, props.extraOptions || {});
  var geometry = makeCubeGeometry(options);
  options.stickerColors = makeStickerColors(options);
  return /*#__PURE__*/React.createElement(Cube, {
    geometry: geometry,
    options: options
  });
};

function getOptions(defaultOptions, extraOptions) {
  var parsedOptions;

  if (typeof extraOptions === 'string') {
    parsedOptions = parseOptions(extraOptions);
  } else {
    parsedOptions = extraOptions;
  }

  if (typeof parsedOptions.facelets === 'string') {
    parsedOptions.facelets = parseFaceletDefinitions(parsedOptions.facelets);
  }

  return _extends({}, defaultOptions, parsedOptions);
}

exports.CubeSvg = CubeSvg;
//# sourceMappingURL=main.js.map
