import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="display: flex;justify-content: center;align-items: center;width: 100%"><img src="/milord.jpg" alt="gatto"></div>';
    // return '<div style="display: flex;justify-content: center;align-items: center;width: 100%"><img src="/cat.webp" alt="gatto"></div>';
  }
}
