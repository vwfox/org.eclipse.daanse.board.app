export interface IMapSettings {
  datasourceId?: string,
  baseMapUrl: string,
  zoom: number,
  center: number[],
  attribution: string,
  layers: LayerI[],
  styles: IDSRenderer[],
  OGCSstyles: IRenderer[],
  services: Service[];
}

interface Array<T>{length:number;toString():string;toLocaleString():string;pop():T|undefined;push(...items:T[]):number;concat(...items:ConcatArray<T>[]):T[];concat(...items:(T|ConcatArray<T>)[]):T[];join(separator?:string):string;reverse():T[];shift():T|undefined;slice(start?:number,end?:number):T[];sort(compareFn?:(a:T,b:T)=>number):this;splice(start:number,deleteCount?:number):T[];splice(start:number,deleteCount:number,...items:T[]):T[];unshift(...items:T[]):number;indexOf(searchElement:T,fromIndex?:number):number;lastIndexOf(searchElement:T,fromIndex?:number):number;every<S extends T>(predicate:(value:T,index:number,array:T[])=>value is S,thisArg?:any):this is S[];every(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):boolean;some(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):boolean;forEach(callbackfn:(value:T,index:number,array:T[])=>void,thisArg?:any):void;map<U>(callbackfn:(value:T,index:number,array:T[])=>U,thisArg?:any):U[];filter<S extends T>(predicate:(value:T,index:number,array:T[])=>value is S,thisArg?:any):S[];filter(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):T[];reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T):T;reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T,initialValue:T):T;reduce<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:T[])=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T):T;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T,initialValue:T):T;reduceRight<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:T[])=>U,initialValue:U):U;[n:number]:T;}

export interface LayerI {
  service: string | any,
  type: string,
  childs: LayerI
  level: number,
  styleIds?: string[],
  name?: string,
  title?: string,
  attribution?: string,
  geoJson?: any,
  wfs_service?: any,
  opacity?: number
}

export interface Service {
  type: string,
  url: string,
  service: any
  id: string
}


export interface IIconSettings {
  currentIcon: string;
  iconColor: string;
  iconSize: number;
  isIconFilled: boolean;
  strokeWeight: number;
  opticSize: number;
  grade: number;
}

export interface IPointPin {
  color: string;
}

export interface IPointAndAreaSettings {
  show_SubElements?: boolean,
  point_render_as: string,
  point_prop?: string,
  point: IIconSettings
  pointPin: IPointPin
  area: IMapProps,
  label?: any
}

export interface IDSRenderer {
  name: string,
  datastream: ICondition[],
  observation?: ObservationI,
  renderer: IPointAndAreaSettings
  id: string;

}

export interface PlacementI {
  placement: ERefType,
}

export interface ObservationI {
  setting: any,
  component: string,
}

export interface ICondition {

  prop: string,
  comperator: Comperator
  value: string,

}


export interface IRenderer {
  name: string,
  thing: ICondition[],
  renderer: IPointAndAreaSettings,
  ds_renderer: (IDSRenderer & PlacementI)[],
  ObservationrefreshTime?: number | undefined,
  lastUpdate?: number | undefined,
  id: string;

}

interface ICompare {
  (loaction: Location): boolean;
}

export enum ERefType {
  Thing = 'Thing',
  OberservedArea = 'OberservedArea',
}

export enum Comperator {
  equals = 'eq',
  lessThen = 'lt',
  greaterThen = 'gt',
  lessThenEquals = 'lte',
  greaterThenEquals = 'gte',
  notEQuals = 'neq'
}
export interface IMapProps {
  stroke?: boolean;
  color?: string;
  weight?: number;
  opacity?: number;
  lineCap?: string,
  dashOffset?: string,
  fill?: boolean,
  fillOpacity?: number,
  fillColor?: string,
  className?: string
}
