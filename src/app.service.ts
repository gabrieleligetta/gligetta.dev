import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div class="tenor-gif-embed" data-postid="14879937" data-share-method="host" data-aspect-ratio="1.33891" data-width="100%"><a href="https://tenor.com/view/my-job-here-is-done-bye-done-gif-14879937">My Job Here Is Done Bye GIF</a>from <a href="https://tenor.com/search/my+job+here+is+done-gifs">My Job Here Is Done GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>';
    // return '<div style="display: flex;justify-content: center;align-items: center;width: 100%;height: 100%"><img src="https://tenor.com/baA69.gif" alt="milord"></div>';
  }
}
