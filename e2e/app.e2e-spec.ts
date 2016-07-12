import { DraganddroptestPage } from './app.po';

describe('draganddroptest App', function() {
  let page: DraganddroptestPage;

  beforeEach(() => {
    page = new DraganddroptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
