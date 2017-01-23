import { Ng2LazyLoadingPage } from './app.po';

describe('ng2-lazy-loading App', function() {
  let page: Ng2LazyLoadingPage;

  beforeEach(() => {
    page = new Ng2LazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ns works!');
  });
});
