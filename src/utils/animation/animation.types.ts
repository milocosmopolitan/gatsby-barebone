export type CssAbsoluteLengths =  'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
export type CssRelativeLengths =  'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CssUnitOfLengths = CssAbsoluteLengths | CssRelativeLengths;

export interface AnimationFnOptionBase {
  from: number;
  to: number;
}

export type ScaleFnOption = AnimationFnOptionBase;

export interface TranslateFnOption extends AnimationFnOptionBase {
  unit?: CssUnitOfLengths;
}

export interface AnimationObject {
  from: string;
  to: string;
}
