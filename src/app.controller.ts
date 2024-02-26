import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  public async getIndex(
    @Req() req: Request,
    @Res() res: Response,
    @I18n() i18n: I18nContext,
    @Query() query: { lang: string },
  ) {
    const supportedLanguages = ['it', 'en'];
    let currentLanguage: string;
    if (!!query && !!query?.lang && supportedLanguages.includes(query.lang)) {
      currentLanguage = query.lang;
    } else {
      const acceptLanguageHeader = req.headers['accept-language'];
      const preferredLanguages = acceptLanguageHeader
        ? acceptLanguageHeader.split(',').map((lang: string) => lang.trim())
        : [];
      if (preferredLanguages.some((e) => e.includes('it'))) {
        currentLanguage = 'it';
      } else {
        currentLanguage = 'en';
      }
    }
    this.appService.currentLanguage = currentLanguage;
    // Read the contents of the index.html file
    const htmlContent = this.appService.dynamicHTMLCompile(i18n);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Language', currentLanguage);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    ); // If needed
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type',
    ); // If needed
    res.send(htmlContent);
  }

  @Get('image')
  public async image(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'me.jpeg'));
  }

  @Get('marta')
  public async marta(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'marta.jpeg'));
  }

  @Get('css')
  public async css(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'css', 'style.css'));
  }

  @Get('bootstrapCSS')
  public async bootstrapCSS(@Res() res: Response) {
    res.sendFile(
      path.join(__dirname, '..', 'public', 'css', 'bootstrap', 'bootstrap.css'),
    );
  }

  @Get('bootstrapJS')
  public async bootstrapJS(@Res() res: Response) {
    res.sendFile(
      path.join(__dirname, '..', 'public', 'js', 'bootstrap', 'bootstrap.js'),
    );
  }

  @Get('customJS')
  public async customJS(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'js', 'custom.js'));
  }

  @Get('jQuery')
  public async jQuery(@Res() res: Response) {
    res.sendFile(
      path.join(
        __dirname,
        '..',
        'public',
        'js',
        'jquery',
        'jquery-3.7.1.min.js',
      ),
    );
  }
}
