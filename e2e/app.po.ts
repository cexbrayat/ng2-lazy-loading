import { browser, element, by } from 'protractor';

export class Ng2LazyLoadingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ns-root h1')).getText();
  }
}
