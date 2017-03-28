import { Amp2Page } from './app.po';

describe('amp2 App', () => {
  let page: Amp2Page;

  beforeEach(() => {
    page = new Amp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
