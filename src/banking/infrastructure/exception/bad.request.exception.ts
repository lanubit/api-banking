export class BadRequestException {
  status: number
  message: string
  data: any

  constructor(message: string, status: number = 400, data:any = {}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}


