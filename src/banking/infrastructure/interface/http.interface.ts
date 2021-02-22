export interface HttpInterface {
  get(uri: string, params?: Record<any, any>): Promise<Record<any, any>>;
}
