import { HttpService, Injectable } from '@nestjs/common';
import { HttpInterface } from '../interface/http.interface';
import { BadRequestException } from '../exception/bad.request.exception';
import {
  BAD_REQUEST_MESSAGE,
  BAD_REQUEST_STATUS,
} from '../../domain/util/constant/exception.constant';

@Injectable()
export class HttpNestAdapter implements HttpInterface {
  constructor(private readonly httpService: HttpService) {}

  async get(uri: string, params = {}): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.httpService.get(uri, { params }).subscribe(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(
            new BadRequestException(BAD_REQUEST_MESSAGE, BAD_REQUEST_STATUS, {
              response: error.response.data,
              config: error.response.config,
              stacktrace: error.stack,
            }),
          );
        },
      );
    });
  }
}
