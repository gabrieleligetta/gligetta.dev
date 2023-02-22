import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  public async getIndex(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'CV_Ligetta_2023.html'));
  }
}
