import { Face } from '.';
export declare enum ColorCode {
    Black = "#000000",
    DarkGray = "#404040",
    Gray = "#808080",
    Silver = "#BFBFBF",
    White = "#FFFFFF",
    Yellow = "#FEFE00",
    Red = "#EE0000",
    Orange = "#FFA100",
    Blue = "#0000F2",
    Green = "#00D800",
    Purple = "#A83DD9",
    Pink = "#F33D7B",
    Transparent = "transparent"
}
export declare enum ColorName {
    Black = "black",
    DarkGray = "darkGray",
    Gray = "gray",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
    Red = "red",
    Orange = "orange",
    Blue = "blue",
    Green = "green",
    Purple = "purple",
    Pink = "pink",
    Transparent = "transparent"
}
export declare enum ColorAbbreviation {
    Black = "n",
    DarkGray = "d",
    Gray = "l",
    Silver = "s",
    White = "w",
    Yellow = "y",
    Red = "r",
    Orange = "o",
    Blue = "b",
    Green = "g",
    Purple = "m",
    Pink = "p",
    Transparent = "t"
}
export declare enum FaceletDefinition {
    Up = "u",
    Down = "d",
    Left = "l",
    Right = "r",
    Back = "b",
    Front = "f",
    Transparent = "t",
    Oriented = "o",
    Blank = "n"
}
export declare const ColorNameToCode: {
    [name: string]: ColorCode;
};
export declare const ColorAbbreviationToCode: {
    [name: string]: ColorCode;
};
export declare const FaceletAbbreviateToDefinition: {
    [facelet: string]: FaceletDefinition;
};
export declare const FaceletToFace: {
    [facelet: string]: Face;
};
export declare const FaceletToColor: {
    o: ColorName;
    n: ColorCode;
    t: ColorName;
};
