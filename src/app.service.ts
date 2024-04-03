import { Injectable } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class AppService {
  currentLanguage = 'it';

  dynamicHTMLCompile(i18n: I18nContext): string {
    const body = this.createBody(i18n);
    const head = this.createHead();
    const scripts = this.addScripts();
    return (
      '<html id="pdf_print" lang="' +
      this.currentLanguage +
      '">' +
      head +
      body +
      scripts +
      '</html>'
    );
  }

  addScripts(): string {
    return (
      '<script src="/jQuery"></script>' +
      '<script src="/bootstrapJS"></script>' +
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.0/html2pdf.bundle.min.js" integrity="sha512-w3u9q/DeneCSwUDjhiMNibTRh/1i/gScBVp2imNVAMCt6cUHIw6xzhzcPFIaL3Q1EbI2l+nu17q2aLJJLo4ZYg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>' +
      '<script src="/customJS"></script>'
    );
  }

  createHead(): string {
    const head =
      '<head>' +
      '<meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">' +
      '<title>Gabriele Ligetta</title>' +
      '<link href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>" rel="icon">' +
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">' +
      '<link rel="stylesheet" href="/bootstrapCSS">' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&display=swap" rel="stylesheet">' +
      '<link rel="stylesheet" href="/css">' +
      '</head>';
    return head;
  }

  createBody(i18n: I18nContext): string {
    const grid = this.createGrid(i18n);
    const body =
      '<body>' +
      grid +
      '<a href="#" id="mylanguageBtn" title="Language" class="no-print"></a>' +
      '<a href="#" id="myBtn" title="Download" type="pdf" class="no-print"></a>' +
      '</body>';
    return body;
  }

  createGrid(i18n: I18nContext): string {
    const htmlContent = this.getHTMLContent(i18n);
    return (
      '          <div class="container">' +
      '            <div class="row">' +
      '              <div id="father" class="col-12 col-print-12 d-md-flex">' +
      '                ' +
      htmlContent +
      '              </div>' +
      '            </div>' +
      '          </div>'
    );
  }

  getHTMLContent(i18n: I18nContext): string {
    const leftCoumn = this.getLeftColumn(i18n);
    const rightColumn = this.getRightColumn(i18n);
    return `
    <div class="col-md-4 col-print-4 col-sm-12 bg-grayish d-flex justify-content-center">
      ${leftCoumn}
    </div>
    <div class="col-md-8 col-print-8 col-sm-12 align-items-left justify-content-left">
      ${rightColumn}
    </div>
  `;
  }

  getRightColumn(i18n: I18nContext): string {
    return `
            <div id="rightColumnRow" class="row m-5">
            <h1 id="nameTitleRight" class="fw-bolder slateg hide-sm">Gabriele Ligetta</h1>
            </div>
            <div class="row m-5 ml-4 lbb">
            <ul class="right-ul blackmarkers">
            <h5 class="fw-bolder slateg blackmarkers"><li><span>${i18n.t(this.currentLanguage + '.work_experiences')}</span></li></h5>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.notomia.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.notomia.dates')}</p></span>
            <span>
            <ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.one')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.three')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.five')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.six')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.seven')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.eight')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.notomia.skills.nine')}</p></li>
            </ul>
            </span>
            </div>
            </li>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.nextre.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.nextre.dates')}</p></span>
            <span><ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.nextre.skills.one')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.nextre.skills.three')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.nextre.skills.four')}</p></li>
            </ul></span>
            </div>
            </li>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.zeratech.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.zeratech.dates')}</p></span>
            <span><ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.zeratech.skills.one')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.zeratech.skills.three')}</p></li>
            </ul></span>
            </div>
            </li>
            <h5 class="fw-bolder slateg blackmarkers mt-5"><li><span>${i18n.t(this.currentLanguage + '.personal_experiences')}</span></li></h5>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.dates')}</p></span>
            <span>
            <ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.skills.one')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.skills.two')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.skills.three')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.oneSpellPerRound.skills.four')}</p></li>
            </ul>
            </span>
            </div>
            </li>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.gligetta.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.gligetta.dates')}</p></span>
            <span>
            <ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.gligetta.skills.one')}</p></li>
            </ul>
            </span>
            </div>
            </li>
            <li>
            <div class="col-12 col-print-12 mt-5">
            <span><p>${i18n.t(this.currentLanguage + '.tradingBot.experience')}</p></span>
            <span><p>${i18n.t(this.currentLanguage + '.tradingBot.dates')}</p></span>
            <span>
            <ul class="notomia-ul greenmarkers">
            <li><p>${i18n.t(this.currentLanguage + '.tradingBot.skills.one')}</p></li>
            <li><p>${i18n.t(this.currentLanguage + '.tradingBot.skills.two')}</p></li>
            </ul>
            </span>
            </div>
            </li>
            <h5 class="fw-bolder slateg blackmarkers mt-5"><li><span>${i18n.t(this.currentLanguage + '.school_experiences')}</span></li></h5>
             <li><span><p class="mt-5">${i18n.t(this.currentLanguage + '.school_1')}</p></span><span><p>${i18n.t(this.currentLanguage + '.school_1_dates')}</p></span></li>
             <li><span><p class="mt-5">${i18n.t(this.currentLanguage + '.school_2')}</p></span><span><p>${i18n.t(this.currentLanguage + '.school_2_dates')}</p></span></li>
            </div>
            </ul>
            <div class="row m-5 ml-4">
            <p class="mt-5 privacy">${i18n.t(this.currentLanguage + '.privacy_footer')}</p>
            </div>
            </div>`;
  }

  getLeftColumn(i18n: I18nContext): string {
    return `
     <div id="leftColumnRow" class="row">
     <div class="d-flex-center flex-column">
       <h1 id="nameTitleLeft" class="fw-bolder slateg text-center hide-md">Gabriele Ligetta</h1>
       <div class="col-12 col-print-12 image-container rainbow-border">
       <img src="/image" class="img-fluid" title="${i18n.t(this.currentLanguage + '.click_to_image')}" onclick="fadeIn()" alt="image">
       </div>
       </div>
        <div class="col-8 offset-2 pt-5 pb-5 p-0 bbb">
          <div class="row">
          <h5 class="fw-bolder mt-2">${i18n.t(this.currentLanguage + '.contacts')}</h5>
          <p class="fw-normal mt-2"><i class="bi bi-geo-alt-fill"></i><span class="m-2">${i18n.t(this.currentLanguage + '.address')}</span></p>
          <p class="fw-normal mt-2"><i class="bi bi-phone-fill"></i><span class="m-2">${i18n.t(this.currentLanguage + '.phone')}</span></p>
          <p class="fw-normal mt-2"><i class="bi bi-envelope-at-fill"></i><a class="m-2" href="mailto:gabligetta@gmail.com" target="_blank">${i18n.t(this.currentLanguage + '.mail')}</a></p>
          <p class="fw-normal mt-2"><i class="bi bi-github"></i><a class="m-2" href="https://github.com/gabrieleligetta" target="_blank">${i18n.t(this.currentLanguage + '.personal_projects')}</a></p>
          </div>
        </div>
        <div class="col-8 offset-2 pt-5 pb-5 p-0 bbb">
          <div class="row">
           <h5 class="fw-bolder">${i18n.t(this.currentLanguage + '.prof_profile')}</h5>
           <p class="fw-normal justify">${i18n.t(this.currentLanguage + '.prof_profile_content')}</p>
          </div>
        </div>
        <div class="col-8 offset-2 pt-5 pb-5 p-0">
          <div class="row">
           <h5 class="fw-bolder">${i18n.t(this.currentLanguage + '.skills_title')}</h5>
           <ul class="fw-normal bottom-ul graymarkers">
           <li>Node.JS</li>
           <li>Nest.JS</li>
           <li>TypeScript</li>
           <li>Amazon AWS</li>
           <li>PHP</li>
           <li>GraphQL</li>
           <li>SQL/noSQL</li>
           <li>Laravel</li>
           <li>Prestashop</li>
           <li>Magento 2</li>
           <li>HTML, CSS, Javascript</li>
           <li>Bootstrap</li>
          </ul>
          </div>
        </div>
      </div>`;
  }
}
