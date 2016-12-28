import { ControlPanelPage } from './app.po';

describe('control-panel App', function() {
  let page: ControlPanelPage;

  beforeEach(() => {
    page = new ControlPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
