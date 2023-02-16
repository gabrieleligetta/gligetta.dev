import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="display: flex;justify-content: center;align-items: center;width: 100%;height: 100%"><img src="/milord.jpg" alt="milord"></div>';
  }
}
