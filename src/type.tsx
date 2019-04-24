export interface Node<D = any> {
  id: string;
  name?: string;
  type?: string;
  data?: D;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}