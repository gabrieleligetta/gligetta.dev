import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="display: flex;justify-content: center;align-items: center;width: 100%"><img src="https://storage.cloud.google.com/workspace-per-bots-ligetta-daisy-bkt-us/Immagini/An%20oil%20pastel%20drawing%20of%20an%20annoyed%20cat%20in%20a%20spaceship.webp" alt="gatto"></div>';
  }
}
