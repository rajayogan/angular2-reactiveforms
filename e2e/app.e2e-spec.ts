import { ReactiveformsPage } from './app.po';

describe('reactiveforms App', function() {
  let page: ReactiveformsPage;

  beforeEach(() => {
    page = new ReactiveformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
