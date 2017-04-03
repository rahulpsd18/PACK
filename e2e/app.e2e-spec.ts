import { NgPackPage } from './app.po';

describe('ng-pack App', () => {
  let page: NgPackPage;

  beforeEach(() => {
    page = new NgPackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
