import { AppHuPage } from './app.po';

describe('app-hu App', () => {
  let page: AppHuPage;

  beforeEach(() => {
    page = new AppHuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
