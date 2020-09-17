export interface Message {
  msg: string | 'success';
  data?: any | {};
  code: number | 200
}
