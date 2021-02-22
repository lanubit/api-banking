export class CustomResponse {
  message: string;
  data: any;

  constructor(message, data) {
    this.message = message;
    this.data = data;
  }
}
