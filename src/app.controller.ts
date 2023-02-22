import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as pdf from 'html-pdf';

@Controller()
export class AppController {
  @Get()
  public async getIndex(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'CV_Ligetta_2023.html'));
  }
  @Get('download')
  public async downloadIndex(@Res() res: Response) {
    // Read the contents of the index.html file
    const html = fs.readFileSync(
      path.join(__dirname, '..', 'public', 'CV_Ligetta_2023.html'),
      'utf8',
    );

    // Set the PDF options
    const options: pdf.CreateOptions = {
      format: 'A1',
      border: {
        top: '0cm',
        right: '0cm',
        bottom: '0cm',
        left: '0cm',
      },
      renderDelay: 1000,
    };

    // Generate the PDF from the HTML
    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        console.error(`Error generating PDF: ${err}`);
        res.status(500).send(`Error generating PDF: ${err}`);
      } else {
        // Set the response headers to indicate that this is a PDF file
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
          'Content-Disposition',
          'attachment; filename=CV_Ligetta_2023.pdf',
        );

        // Send the PDF file to the client
        res.send(buffer);
      }
    });
  }
}
